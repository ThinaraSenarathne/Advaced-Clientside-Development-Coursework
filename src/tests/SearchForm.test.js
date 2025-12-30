import { render, screen, fireEvent } from "@testing-library/react"
import SearchForm from "../components/SearchForm"
import data from "../data/properties(1).json"

test("filters properties by type", () => {
  const setResults = jest.fn()

  render(
    <SearchForm
      properties={data.properties}
      setResults={setResults}
    />
  )

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "House" }
  })

  fireEvent.click(screen.getByRole("button", { name: /search/i }))

  expect(setResults).toHaveBeenCalled()
})
