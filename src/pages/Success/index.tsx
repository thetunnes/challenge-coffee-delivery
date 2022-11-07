import { useListCoffees } from "../../context/coffee";
import { SuccessContainer } from "./styles";
import Motoboy from "../../assets/Illustration.png";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useEffect } from "react";

export function Success() {
  const { orderFinished } = useListCoffees();

  const payment =
    orderFinished?.payment === "money"
      ? "Dinheiro"
      : orderFinished?.payment === "debitCard"
      ? "Cartão de Débito"
      : orderFinished?.payment === "creditCard"
      ? "Cartão de Crédito"
      : "";

  return (
    <SuccessContainer>
      <h1>Uhu! Seu pedido foi confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      {orderFinished ? (
        <main className="data-order-wrapper">
          <section className="data-order">
            <div className="box-address">
              <div className="icon">
                <MapPin weight="fill" color="white" />
              </div>
              <div>
                <p>
                  Entrega em{" "}
                  <b>
                    {orderFinished.street}, {orderFinished.number}
                  </b>
                </p>
                <p>{`${orderFinished.district} - ${orderFinished.city}, ${orderFinished.uf}`}</p>
              </div>
            </div>
            <div className="box-timer-delivery">
              <div className="icon">
                <Timer weight="fill" color="white" />
              </div>
              <div>
                <p>Previsão de entrega</p>
                <b>20 min - 30 min</b>
              </div>
            </div>
            <div className="box-payment">
              <div className="icon">
                <CurrencyDollar weight="fill" color="white" />
              </div>
              <div>
                <p>Pagamento na entrega</p>
                <b>{payment}</b>
              </div>
            </div>
          </section>

          <img
            src={Motoboy}
            alt="Motoboy com uma camisa amarela, moto roxa, levando um pedido na garupa."
          />
        </main>
      ) : null}
    </SuccessContainer>
  );
}
