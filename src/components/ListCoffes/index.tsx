import { useListCoffees } from "../../context/coffee"
import { ListCoffeeContainer } from "./styles"
import { ShoppingCart, SmileySad } from 'phosphor-react';
import { InputNumber } from './../InputNumber/index';
import { formatPriceCoffee } from "../../pages/Home";

export function ListCoffee() {

  const { allCoffees, addNewCoffeeInShoppingCart, coffeeShoppingCart } = useListCoffees()

  function handleSubmit(e: any, idCoffee: number) {
    e.preventDefault()

    const amountCoffees = e.target[`amountCoffee${idCoffee}`].value
    const newCoffee = {
      [idCoffee]: amountCoffees
    }
    if (amountCoffees > 0) {
      addNewCoffeeInShoppingCart(newCoffee)
    }
  }

  return (
    <ListCoffeeContainer>
      <h2>Nossos cafés</h2>

      <main>
      {allCoffees && allCoffees.length ? allCoffees.map(coffee => (
          <div className="single-box-coffee" key={coffee.id}>
            <img src={coffee.img} />
            <div className="list-tags-coffee">
              {coffee.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <h3>{coffee.name}</h3>
            <p>{coffee.description}</p>
            <div className="box-amount-coffee">
              <h5>{formatPriceCoffee(coffee.price)}</h5>
              <form onSubmit={(e) => handleSubmit(e, coffee.id)}>
                <InputNumber defaultValue={coffeeShoppingCart[coffee.id]} idCoffee={coffee.id} maxValue={coffee.amount} />
                <button type="submit"><ShoppingCart size={20} weight="fill" color="#F3F2F2" /></button>
              </form>
            </div>

          </div>
      )) : <p className="not-found-coffees">Não encontramos cafés em nosso estoque <SmileySad weight="fill" /></p>}
      </main>
    </ListCoffeeContainer>
  )
}