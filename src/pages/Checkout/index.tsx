import { useListCoffees } from "../../context/coffee";
import { z } from "zod"
import InputMask from "react-input-mask"
import { useNavigate } from "react-router-dom";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { ShoppingCart } from "../../components/ShoppingCart";
import { CheckoutContainer } from "./styles";

const validateCheckout = z.object({
  cep: z.object({
    value: z.string().regex(/^[0-9]{5}-[0-9]{3}$/)
  }),
  street: z.object({
    value: z.string()
  }),
  number: z.object({
    value: z.string().min(2).max(5)
  }),
  adjunct: z.object({
    value: z.string().optional()
  }),
  district: z.object({
    value: z.string()
  }),
  city: z.object({
    value: z.string()
  }),
  uf: z.object({
    value: z.string().length(2)
  }),
  payment: z.object({
    value: z.string()
  })
})


export function Checkout() {

  const { newOrderFinished } = useListCoffees()
  const navigate = useNavigate()

  function handleSubmit(e: any) {
    e.preventDefault()

    const infosFieldForm = validateCheckout.parse(e.target)
    type typeName = keyof typeof infosFieldForm
    const arrayInfosForm = Object.keys(infosFieldForm) as Array<keyof typeof infosFieldForm>


    const formattedDataForm = arrayInfosForm.reduce((acc, nameField) => {
      return {
        ...acc,
        [nameField]: infosFieldForm[nameField].value
      }
    }, {})

    const jsonForm = JSON.stringify(formattedDataForm)
    localStorage.setItem('@coffee-delivery-1.0.0', jsonForm)
    newOrderFinished()
    navigate("/success")

  }
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

          <form id="dataClient" onSubmit={handleSubmit}>
            <InputMask type="text" name="cep" id="" placeholder="CEP" required mask="99999-999" />
            <input type="text" name="street" id="" placeholder="Rua" required />
            <div>
              <InputMask type="text" name="number" id="" placeholder="Número" required mask="9999" maskPlaceholder={null} alwaysShowMask={false} />
              <input
                type="text"
                name="adjunct"
                id="adjunct"
                placeholder="Complemento"
                
              />
            </div>
            <div>
              <input type="text" name="district" id="" placeholder="Bairro" required />
              <input type="text" name="city" id="city" placeholder="Cidade" required />
              <InputMask type="text" name="uf" id="uf" placeholder="UF" mask="aa" required />
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
              value="creditCard"
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
              value="debitCard"
            />
            <label htmlFor="debitCard">
              <Bank weight="regular" color="#8047F8" size={16} />
              Cartão de débito
            </label>
            <input id="money" name="payment" type="radio" form="dataClient" value="money" />
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
