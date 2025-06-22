import { Link } from 'react-router-dom'
import './Layout.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <h1>FreeHouses</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
