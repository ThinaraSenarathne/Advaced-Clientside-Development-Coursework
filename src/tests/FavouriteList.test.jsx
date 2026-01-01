import { render, screen } from "@testing-library/react"
import FavouriteList from "../components/FavouriteList"

test("renders favourites heading", () => {
  render(<FavouriteList favourites={[]} setFavourites={jest.fn()} />)
  expect(screen.getByText(/Favourites/i)).toBeInTheDocument()
})
