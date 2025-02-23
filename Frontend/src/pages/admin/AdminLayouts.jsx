import { Outlet } from "react-router-dom"


export const AdminLayouts = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role")
        // Redirect to login page
        window.location.href = "/login"; // Or use React Router's useNavigate
    };

    return (
        <>
            <header className="header p-3 bg-amber-300">
                <h1>Logo</h1>
                <nav>
                    <ul>
                        <li onClick={handleLogout}>Logout</li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
