import { useListCoffees } from "../../context/coffee";
import { Plus, Minus } from "phosphor-react";
import { InputNumberContainer } from "./styles";

interface Props {
  idCoffee: number;
  maxValue: string | number;
  defaultValue: string | number;
}
export function InputNumber({ idCoffee, maxValue, defaultValue }: Props) {
  const { coffeeShoppingCart } = useListCoffees();

  function addAmountCoffee() {
    let el = document.getElementById(`upNumber${idCoffee}`);
    let inputNumber = el?.previousElementSibling as HTMLInputElement;

    if (inputNumber.value === String(maxValue)) {
      return;
    }

    if (inputNumber !== undefined && inputNumber !== null) {
      let amountThisCoffee = Number(inputNumber.value);
      amountThisCoffee += 1;
      inputNumber.value = String(amountThisCoffee);
    }
  }

  function removeAmountCoffee() {
    let el = document.getElementById(`downNumber${idCoffee}`);
    let inputNumber = el?.nextElementSibling as HTMLInputElement;

    if (inputNumber.value === "0" || inputNumber.value === "") {
      return;
    }

    if (inputNumber !== undefined && inputNumber !== null) {
      let amountThisCoffee = Number(inputNumber.value);
      amountThisCoffee -= 1;
      inputNumber.value = String(amountThisCoffee);
    }
  }

  return (
    <InputNumberContainer>
      <button type="button" id={`downNumber${idCoffee}`} onClick={removeAmountCoffee}>
        <Minus weight="bold" size={14} />
      </button>
      <input
        id={`amountCoffeeSelected${idCoffee}`}
        name={`amountCoffee${idCoffee}`}
        type="number"
        className="valueNumber"
        placeholder="00"
        defaultValue={defaultValue}
      />
      <button type="button" id={`upNumber${idCoffee}`} onClick={addAmountCoffee}>
        <Plus weight="bold" size={14} />
      </button>
    </InputNumberContainer>
  );
}
