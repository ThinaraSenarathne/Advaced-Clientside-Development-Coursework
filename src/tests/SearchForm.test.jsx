import { render, screen } from "@testing-library/react"
import SearchForm from "../components/SearchForm"

test("postcode filter input renders", () => {
  render(<SearchForm properties={[]} setResults={jest.fn()} />)
  expect(screen.getByPlaceholderText(/BR1/i)).toBeInTheDocument()
})
