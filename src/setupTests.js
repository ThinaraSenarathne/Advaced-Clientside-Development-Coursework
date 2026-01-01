import "@testing-library/jest-dom"

// 🔴 IMPORTANT: virtual: true
jest.mock(
  "react-router-dom",
  () => ({
    Link: ({ children }) => children,
    useParams: () => ({}),
  }),
  { virtual: true }
)


