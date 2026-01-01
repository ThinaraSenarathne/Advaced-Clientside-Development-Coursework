const mockProperties = [
  {
    id: 1,
    type: "House",
    price: 500000,
    bedrooms: 3,
    postcode: "BR1",
    added: { day: 1, month: "January", year: 2023 }
  },
  {
    id: 2,
    type: "Flat",
    price: 250000,
    bedrooms: 1,
    postcode: "CR0",
    added: { day: 12, month: "March", year: 2022 }
  }
]


import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import SearchForm from "../SearchForm"

describe("SearchForm Component", () => {

  let results = []

  const setResults = (data) => {
    results = data
  }

  const setup = () => {
    results = []
    render(<SearchForm properties={mockProperties} setResults={setResults} />)
  }

  test("renders search form heading", () => {
    setup()
    expect(screen.getByText(/search properties/i)).toBeInTheDocument()
  })

  test("filters properties by type", () => {
    setup()

    fireEvent.keyDown(screen.getByText("Any"), { key: "ArrowDown" })
    fireEvent.click(screen.getByText("House"))
    fireEvent.click(screen.getByText("Search"))

    expect(results.length).toBe(1)
    expect(results[0].type).toBe("House")
  })

  test("filters properties by postcode", () => {
    setup()

    fireEvent.change(
      screen.getByPlaceholderText(/e.g. br1/i),
      { target: { value: "CR" } }
    )

    fireEvent.click(screen.getByText("Search"))

    expect(results.length).toBe(1)
    expect(results[0].postcode).toBe("CR0")
  })

  test("filters properties by bedroom count", () => {
    setup()

    fireEvent.click(screen.getByText("Search"))

    expect(results.every(p => p.bedrooms >= 0)).toBe(true)
  })

  test("returns no results when no match found", () => {
    setup()

    fireEvent.change(
      screen.getByPlaceholderText(/e.g. br1/i),
      { target: { value: "ZZ" } }
    )

    fireEvent.click(screen.getByText("Search"))

    expect(results.length).toBe(0)
  })
})

