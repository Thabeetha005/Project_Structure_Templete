import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/customer/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import AdminLoginPage from "../pages/auth/AdminLoginPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import { ProtectedRoute } from "../routes/ProtectedRoute";

/**
 * Central route table. Keep pages thin (composition only) and push
 * real logic down into features/<domain>.
 */
export function AppRouter() {
  return (
    <Routes>
      {/* Public / customer-facing */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Admin */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute requiredRole="ADMIN">
            <AdminDashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
