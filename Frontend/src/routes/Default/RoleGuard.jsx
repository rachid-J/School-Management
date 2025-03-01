import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { AdminDash } from '../../pages/admin/AdminDash';
import { StudentDash } from '../../pages/student/StudentDash';
import { TeacherDash } from '../../pages/teacher/TeacherDash';
import NotFound from '../../pages/common/NotFound';
import { AdminComponent } from '../../Layouts/AdminComponent';
import { StudentComponent } from '../../Layouts/StudentComponent';
import { TeacherComponent } from '../../Layouts/TeacherComponent';

import { axiosClient } from '../../services/axiosClient';
import { logout, setRole } from '../../store/authSlice';
import { LoadingSkeleton } from '../../pages/common/LoadingSkeleton';

export const RoleGuard = () => {
    const { token, role } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRole = async () => {
            if (token && !role) {
                try {
                    const response = await axiosClient.get('/user/me');
                    const userData = await response.data.role;
                    dispatch(setRole(userData));
                } catch (error) {
                    console.error('Role fetch error:', error);
                    dispatch(logout());
                } finally {
                    setIsLoading(false);
                }
            } else {
                setIsLoading(false);
            }
        };

        fetchRole();
    }, [token, role, dispatch]);
    if (isLoading) {
        return <LoadingSkeleton />;
      }

    if (!token) {
        return <Navigate to="/login" />;
    }

    const routes = createBrowserRouter([
        {
            path: "/",
            element: getRoleRedirectElement(role),
        },
        ...(role?.toLowerCase() === "admin" ? adminRoutes : []),
        ...(role?.toLowerCase() === "student" ? studentRoutes : []),
        ...(role?.toLowerCase() === "teacher" ? teacherRoutes : []),
        {
            path: "*",
            element: <NotFound />,
        }
    ]);

    return <RouterProvider router={routes} />;
};

// Helper functions for cleaner code
const getRoleRedirectElement = (role) => {
    const rolePath = {
        admin: "/admin/dashboard",
        student: "/student/dashboard",
        teacher: "/teacher/dashboard"
    };
    return <Navigate to={rolePath[role?.toLowerCase()] || "/login"} />;
};

const adminRoutes = [{
    path: "/admin",
    element: <AdminComponent />,
    children: [{ path: "dashboard", element: <AdminDash /> }]
}];

const studentRoutes = [{
    path: "/student",
    element: <StudentComponent />,
    children: [{ path: "dashboard", element: <StudentDash /> }]
}];

const teacherRoutes = [{
    path: "/teacher",
    element: <TeacherComponent />,
    children: [{ path: "dashboard", element: <TeacherDash /> }]
}];