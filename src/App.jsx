import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SearchPage from './pages/SearchPage'
import PropertyPage from './pages/PropertyPage'
import './styles/app.css'

function App() {
  const [favourites, setFavourites] = useState(() =>{
    const saved = localStorage.getItem('favourites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])
  
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


