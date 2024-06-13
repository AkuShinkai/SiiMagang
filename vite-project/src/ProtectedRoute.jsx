// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useStateContext } from './contexts/ContextProvider';

// const ProtectedRoute = ({ element, allowedRoles }) => {
//     const { token, roles } = useStateContext();

//     console.log("ProtectedRoute - token:", token);
//     console.log("ProtectedRoute - roles:", roles);
//     console.log("ProtectedRoute - allowedRoles:", allowedRoles);

//     if (!token) {
//         console.log("No token found, redirecting to /welcome");
//         return <Navigate to="/welcome" />;
//     }

//     if (allowedRoles && !allowedRoles.includes(roles)) {
//         const redirectPath = roles === 'mentor' ? '/admin' : '/';
//         console.log(`Role not allowed, redirecting to ${redirectPath}`);
//         return <Navigate to={redirectPath} />;
//     }

//     return element;
// };

// export default ProtectedRoute;
