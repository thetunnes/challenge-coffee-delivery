import { ReactNode } from "react";
import { DetailsCoffeeDelivery, HomeContainer } from "./styles";
import ImgCoffeDelivery from "../../assets/banner-coffee.png";
import { ShoppingCart, Package, Coffee, Timer } from "phosphor-react";
import { ListCoffee } from "../../components/ListCoffes";

export function formatPriceCoffee(price: number) {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

export function Home() {
  return (
    <HomeContainer>
      <section className="main-banner">
        <div className="main-banner-text">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <DetailsCoffeeDelivery>
            <div>
              <label>
                <ShoppingCart weight="fill" color={"#FAFAFA"} />
              </label>
              Compra simples e segura
            </div>
            <div>
              <label>
                <Package weight="fill" color={"#FAFAFA"} />
              </label>
              Embalagem mantém o café intacto
            </div>
            <div>
              <label>
                <Timer weight="fill" color={"#FAFAFA"} />
              </label>
              Entrega rápida e rastreada
            </div>
            <div>
              <label>
                <Coffee weight="fill" color={"#FAFAFA"} />
              </label>
              O café chega fresquinho até você
            </div>
          </DetailsCoffeeDelivery>
        </div>
          <img
            src={ImgCoffeDelivery}
            alt="Imagem arredondada com fundo amarelo, um copo de café do Coffee Delivery e café torrado, moído e em grão enfeitando a imagem"
          />
      </section>

      <ListCoffee />
    </HomeContainer>
  );
}
