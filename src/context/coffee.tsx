import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";
import { notifyError } from './../components/ShoppingCart/index';

interface TypeOrderFinished {
  street: string;
  number: string;
  cep: string;
  city: string;
  district: string;
  adjunct?: string;
  uf: string;
  payment: string;
}

interface ContextType {
  allCoffees: CoffeeType[];
  coffeeShoppingCart: cartCoffeeType;
  orderFinished: TypeOrderFinished | undefined;
  addNewCoffeeInShoppingCart: (coffee: cartCoffeeType) => void;
  removeCoffeeInShoppingCart: (idCoffee: number, amountCoffees: string) => void;
  newOrderFinished: () => void;
}

const ListCoffee = createContext({} as ContextType);

export interface CoffeeType {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  amount: number;
  tags: string[];
}

export interface cartCoffeeType {
  [x: number]: string;
}

interface PropsProvider {
  children: ReactNode;
}

export function ListCoffeeProvider({ children }: PropsProvider) {
  const [allCoffees, setAllCoffees] = useState<CoffeeType[]>([]);
  const [coffeeShoppingCart, setCoffeeShoppingCart] = useState<cartCoffeeType>(
    {}
  );
  const [orderFinished, setOrderFinished] = useState<TypeOrderFinished>()

  async function fetchListCoffee() {
    const allCoffees = await fetch("http://localhost:4001/coffees")
      .then(async (resp) => await resp.json())
      .then((data) => data)
      .catch(err => { return console.log(err) });

    if (allCoffees) {
      setAllCoffees(allCoffees);
    }
  }

  function addNewCoffeeInShoppingCart(newCoffee: cartCoffeeType) {
    setCoffeeShoppingCart((prevState) => ({ ...prevState, ...newCoffee }));
  }

  function removeCoffeeInShoppingCart(idCoffee: number, amountCoffees: string) {
    setCoffeeShoppingCart((prevCoffees) => {
      if (amountCoffees === prevCoffees[idCoffee]) {
        delete prevCoffees[idCoffee]
      }
      if (Number(amountCoffees) > 0 && Number(amountCoffees) < Number(prevCoffees[idCoffee])) {
        const subtraction = Number(prevCoffees[idCoffee]) - Number(amountCoffees)
        return {
          ...prevCoffees,
          [idCoffee]: String(subtraction),
        };
      }

      if (Number(amountCoffees) > Number(prevCoffees[idCoffee])) {
        notifyError("Não foi possível remover os cafés. A quantidade no carrinho, é menor do que a escolhida.")
      }
      return { ...prevCoffees };
    });
  }

  function newOrderFinished() {
    const orderInStorage = localStorage.getItem('@coffee-delivery-1.0.0') ?? ""
    if (orderInStorage) {
      setOrderFinished(JSON.parse(orderInStorage))
    }
  }

  useEffect(() => {
    fetchListCoffee();
    newOrderFinished();
  }, []);

  return (
    <ListCoffee.Provider
      value={{ allCoffees, coffeeShoppingCart, addNewCoffeeInShoppingCart, removeCoffeeInShoppingCart, orderFinished, newOrderFinished }}
    >
      {children}
    </ListCoffee.Provider>
  );
}

export const useListCoffees = () => useContext(ListCoffee);
