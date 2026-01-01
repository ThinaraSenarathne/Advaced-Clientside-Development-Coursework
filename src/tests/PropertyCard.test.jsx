import { render, screen } from "@testing-library/react"
import PropertyCard from "../components/PropertyCard"

test("renders property price and description", () => {
  const mockProperty = {
    id: "p1",
    price: 500000,
    shortDescription: "Test property",
    picture: ["img.jpg"]
  }

  render(
    <PropertyCard
      property={mockProperty}
      favourites={[]}
      setFavourites={jest.fn()}
    />
  )

  expect(screen.getByText(/£500,000/)).toBeInTheDocument()
  expect(screen.getByText(/Test property/)).toBeInTheDocument()
})

test("adds property to favourites when button clicked", () => {
  const setFavourites = jest.fn()

  render(
    <PropertyCard
      property={{ id: "p1", price: 100, shortDescription: "Test", picture: ["a"] }}
      favourites={[]}
      setFavourites={setFavourites}
    />
  )

  screen.getByText(/Add to favourites/i).click()
  expect(setFavourites).toHaveBeenCalled()
})

test("disables add button if already favourite", () => {
  const property = { id: "p1", price: 100, shortDescription: "Test", picture: ["a"] }

  render(
    <PropertyCard
      property={property}
      favourites={[property]}
      setFavourites={jest.fn()}
    />
  )

  expect(screen.getByText(/Added to favourites/i)).toBeDisabled()
})
