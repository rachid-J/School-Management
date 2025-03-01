
import { Outlet } from "react-router-dom";

export const TeacherComponent = () => {
    return (
        <div>
            <header>
                <h1>Teacher Dashboard</h1>
                {/* You can add a Navbar or header elements here */}
            </header>
            <nav>
                <ul>
                    <li><a href="/teacher/dashboard">Dashboard</a></li>
                    <li><a href="/teacher/users">Manage Users</a></li>
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


