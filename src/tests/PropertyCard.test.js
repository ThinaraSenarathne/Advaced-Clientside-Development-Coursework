import { render, screen, fireEvent } from "@testing-library/react"
import PropertyCard from "../components/PropertyCard"
import { BrowserRouter } from "react-router-dom"
import data from "../data/properties(1).json"

test("adds property to favourites", () => { 
  const setFavourites = jest.fn()
  const favourites = []

  render(
    <BrowserRouter>
      <PropertyCard
        property={data.properties[0]}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </BrowserRouter>
  )

  fireEvent.click(screen.getByText(/add to favourites/i))

  expect(setFavourites).toHaveBeenCalled()
  
})

test("prevents duplicate favourites", () => {
  const property = data.properties[0]
  const setFavourites = jest.fn()
  const favourites = [property]

  render(
    <BrowserRouter>
      <PropertyCard
        property={property}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </BrowserRouter>
  )

  const button = screen.getByText(/added to favourites/i)
  expect(button).toBeDisabled()
})

