
import { Outlet } from "react-router-dom";

export const StudentComponent = () => {
    return (
        <div>
            <header>
                <h1>Student Dashboard</h1>
                {/* You can add a Navbar or header elements here */}
            </header>
            <nav>
                <ul>
                    <li><a href="/student/dashboard">Dashboard</a></li>
                    <li><a href="/student/users">Manage Users</a></li>
                    {/* Add more navigation links here */}
                </ul>
            </nav>
            <main>
                {/* The Outlet will render the appropriate child route component */}
                <Outlet />
            </main>
        </div>
    );
};


