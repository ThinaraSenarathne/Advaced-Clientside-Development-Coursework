import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import SearchPage from './pages/SearchPage'
import PropertyPage from './pages/PropertyPage'
import './styles/app.css'

function App() {
  const [favourites, setFavourites] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SearchPage
              favourites={favourites}
              setFavourites={setFavourites}
            />
          }
        />
        <Route
          path="/property/:id"
          element={
            <PropertyPage
              favourites={favourites}
              setFavourites={setFavourites}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App


