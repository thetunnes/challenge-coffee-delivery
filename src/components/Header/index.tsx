import { HeaderContainer } from "./styles";
import Logo from "../../../public/Logo.svg"
import LogoCoffeeDelivery from "../../Logo";
import { NavLink } from "react-router-dom"
import { MapPin, ShoppingCart } from "phosphor-react"
import { useListCoffees } from "../../context/coffee";
import { useEffect, useState } from "react";

interface CoordsType {
  latitude: number
  longitude: number
}

interface callBack {
  coords: CoordsType
}

export function Header() {

  const { coffeeShoppingCart } = useListCoffees()

  const [currentLocation, setCurrentLocation] = useState("")
  const [amountCoffeesInShoppingCart, setAmountCoffeesInShoppingCart] = useState<string[]>([])
  const successCallback = async ({ coords }: callBack) => {
    const [, second, thrid, forth] = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&sensor=true&key=AIzaSyDE89t3udhJUDov9Idss56Fe27Rahdbp-A`)
      .then(async (resp) => await resp.json())
      .then(data => (data.plus_code.compound_code.replaceAll(',', '').split(' ')))

    const city = `${second} ${thrid} - ${forth}`
    setCurrentLocation(city)
  };

  navigator.geolocation.getCurrentPosition(successCallback);

  useEffect(() => {
    setAmountCoffeesInShoppingCart(Object.keys(coffeeShoppingCart))
  }, [coffeeShoppingCart])

  return (
    <HeaderContainer>
      <NavLink to="/"><LogoCoffeeDelivery /></NavLink>
      <nav>
        <NavLink to="#">
          <MapPin size={20} weight="fill" color="#8047F8" /> {currentLocation}
        </NavLink>
        <NavLink to="checkout">
          {amountCoffeesInShoppingCart.length ?
            <span className="amount-coffees">{amountCoffeesInShoppingCart.length}</span>
            : null}
          <ShoppingCart size={20} weight="fill" color="#C47F17" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}