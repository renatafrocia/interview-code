import './App.css'
import { NavLink, Link } from "react-router";
import { useState, useEffect } from 'react'

function App() {

  
  const [products, setProducts] = useState([]);

  const backend_url = "http://localhost:8000"

  function get_products_api() {
    return fetch(backend_url + "/products")
      .then((response) => {
          return response.json()
      })
  }

  async function getProducts() {
    var products = await get_products_api();

    products.forEach(async (product) => {
      setProducts(prevProducts => [...prevProducts, product])
    })

    return products
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <h1>Products</h1>
      <div className="card">
        {products.map((product, index) => (
          <div key={index}>
            <h2>{product.name}</h2>
          </div>
        ))}
      </div>
      <div className="card">
        <NavLink to="/">
          Back to Home
        </NavLink>
      </div>
    </>
  )
}

export default App
