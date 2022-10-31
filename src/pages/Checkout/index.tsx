import { useListCoffees } from "../../context/coffee";
import { CheckoutContainer } from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useEffect } from "react";
import { ShoppingCart } from "../../components/ShoppingCart";

export function Checkout() {
  return (
    <CheckoutContainer>
      <section className="checkout-address">
        <h3>Complete seu pedido</h3>
        <div className="box-container">
          <div className="title-box-checkout">
            <MapPinLine size={22} />
            <div className="insert-address">
              <h4> Endereço de entrega</h4>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <form id="dataClient">
            <input type="text" name="cep" id="" placeholder="CEP" />
            <input type="text" name="street" id="" placeholder="Rua" />
            <div>
              <input type="text" name="number" id="" placeholder="Número" />
              <input
                type="text"
                name="adjunct"
                id="adjunct"
                placeholder="Complemento"
              />
            </div>
            <div>
              <input type="text" name="district" id="" placeholder="Bairro" />
              <input type="text" name="city" id="city" placeholder="Cidade" />
              <input type="text" name="uf" id="uf" placeholder="UF" />
            </div>
          </form>
        </div>
        <div className="box-container">
          <div className="title-box-checkout">
            <CurrencyDollar size={22} color="#8047F8" />
            <div className="insert-address">
              <h4>Pagamento</h4>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>
          <div className="group-payment">
            <input
              id="creditCard"
              name="payment"
              type="radio"
              form="dataClient"
            />
            <label htmlFor="creditCard">
              <CreditCard weight="regular" color="#8047F8" size={16} />
              Cartão de crédito
            </label>
            <input
              id="debitCard"
              name="payment"
              type="radio"
              form="dataClient"
            />
            <label htmlFor="debitCard">
              <Bank weight="regular" color="#8047F8" size={16} />
              Cartão de débito
            </label>
            <input id="money" name="payment" type="radio" form="dataClient" />
            <label htmlFor="money">
              <Money weight="regular" color="#8047F8" size={16} />
              Dinheiro
            </label>
          </div>
        </div>
      </section>

      <ShoppingCart />
    </CheckoutContainer>
  );
}
