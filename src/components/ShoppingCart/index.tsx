import { Trash } from "phosphor-react";
import { FormEvent, SyntheticEvent, useCallback, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { CoffeeType, useListCoffees } from "../../context/coffee";
import { formatPriceCoffee } from "../../pages/Home";
import { InputNumber } from "../InputNumber";
import { CartContainer } from "./styles";
import toast, { Toaster } from "react-hot-toast"

interface CoffeeCart {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  amount: number;
  tags: string[];
}
export const notifyError = (string: string) => toast.error(string);

export function ShoppingCart() {
  const { allCoffees, coffeeShoppingCart, removeCoffeeInShoppingCart } =
    useListCoffees();

  const [coffeesInCart, setCoffeesInCart] = useState<CoffeeCart[]>([]);
  const [valueProducts, setValueProducts] = useState(0);
  let idCoffees: string[] | [] = [];


  async function renderCoffeesInShoppingCar() {
    let allCoffeesInCart: CoffeeCart[] = [];
    idCoffees.forEach((idCof) => {
      let coffeesCart = allCoffees.filter(
        (coffee) => coffee.id === Number(idCof)
      );
      allCoffeesInCart.push(...coffeesCart);
    });
    // console.log("Vou renderizar essa lista", allCoffeesInCart)

    setCoffeesInCart(allCoffeesInCart);
  }

  function sumAndFormatPriceCoffee(priceCoffee: number, amountCoffee: number) {
    const sum = priceCoffee * amountCoffee; // Preço do café, multiplicado pela quantidade de cafés

    return formatPriceCoffee(sum);
  }

  function totalValueToPay() {
    const totalPrice = coffeesInCart.reduce((acc, coffee) => {
      const eachValueCoffee = Number(coffeeShoppingCart[coffee.id]) * coffee.price;
      return acc + eachValueCoffee;
    }, 0);

    setValueProducts(totalPrice);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>, idCoffee: number) {
    e.preventDefault();
    const inputNumber = e.target[`amountCoffee${idCoffee}`] as HTMLInputElement;
    removeCoffeeInShoppingCart(idCoffee, inputNumber.value);
  }

  useEffect(() => {
    idCoffees = Object?.keys(coffeeShoppingCart);
  }, [coffeeShoppingCart]);

  useEffect(() => {
    renderCoffeesInShoppingCar();
  }, [coffeeShoppingCart]);

  useEffect(() => {
    totalValueToPay();
  }, [coffeesInCart]);

  return (
    <CartContainer>
      <h3>Cafés selecionados</h3>

      <div className="box-checkout-coffees box-container">
        {coffeesInCart.length ? (
          <>
            <ul>
              {coffeesInCart.map((coffee) => (
                <li key={coffee.id}>
                  <div className="info-coffee-cart">
                    <img src={coffee.img} />
                    <div className="selected-coffee">
                      <p>{coffee.name}</p>
                      <form onSubmit={(e) => handleSubmit(e, coffee.id)}>
                        <InputNumber
                          idCoffee={coffee.id}
                          maxValue={coffeeShoppingCart[coffee.id]}
                          defaultValue={coffeeShoppingCart[coffee.id]}
                        />
                        <button type="submit">
                          <Trash size={16} color="#8047F8" /> Remover
                        </button>
                      </form>
                    </div>
                  </div>
                  <time>
                    {sumAndFormatPriceCoffee(
                      coffee.price,
                      Number(coffeeShoppingCart[coffee.id])
                    )}
                  </time>
                </li>
              ))}
            </ul>

            <div className="box-price-coffee">
              <p>
                Total de itens <span>{formatPriceCoffee(valueProducts)}</span>
              </p>
              <p>
                Entrega <span>{formatPriceCoffee(3.5)}</span>
              </p>
              <b>
                Total <span>{formatPriceCoffee(valueProducts + 3.5)}</span>
              </b>
            </div>

            <button type="submit" form="dataClient">
              Confirmar pedido
            </button>
          </>
        ) : (
          <p className="notHaveCoffeesInCart">
            Não há produtos em seu carrinho,{" "}
            <NavLink to="/">adicione aqui</NavLink>
          </p>
        )}
      </div>
      <Toaster
        position="top-right"
      />
    </CartContainer>
  );
}
