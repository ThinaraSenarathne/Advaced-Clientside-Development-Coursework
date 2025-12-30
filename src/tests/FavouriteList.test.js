import { render, screen, fireEvent } from "@testing-library/react"
import FavouriteList from "../components/FavouriteList"
import data from "../data/properties(1).json"

test("removes a property from favourites", () => {
  const property = data.properties[0]
  const setFavourites = jest.fn()

  render(
    <FavouriteList
      favourites={[property]}
      setFavourites={setFavourites}
    />
  )

  fireEvent.click(screen.getByText("❌"))

  expect(setFavourites).toHaveBeenCalled()
})

test("clears all favourites", () => {
  const setFavourites = jest.fn()

  render(
    <FavouriteList
      favourites={[{}, {}]}
      setFavourites={setFavourites}
    />
  )

  fireEvent.click(screen.getByText(/clear all/i))

  expect(setFavourites).toHaveBeenCalledWith([])
})
