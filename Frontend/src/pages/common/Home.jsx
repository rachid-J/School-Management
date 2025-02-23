import { Link, Outlet } from "react-router-dom"



export const Home = () => {
  return (
    <div>
        <header>
            lOGO 
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main className="container p-4">
            <Outlet/>
        </main>
    </div>
  )
}
