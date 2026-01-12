import './App.css'
import { NavLink, Link } from "react-router";

function App() {

  return (
    <>
      <h1>Welcome</h1>
      <div className="card">
        <NavLink to="/products">
          Products
        </NavLink>
      </div>
    </>
  )
}

export default App
