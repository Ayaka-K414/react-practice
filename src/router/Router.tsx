import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router = memo(() => {
  return (
    <Routes>
      {/* ログインページ */}
      <Route path="/" element={<Login />} />

      {/* ログイン後のページ */}
      <Route path="home" element={<HeaderLayout />}>
        <Route index element={<Home />} />
        <Route path="user_management" element={<UserManagement />} />
        <Route path="setting" element={<Setting />} />
      </Route>

      {/* 404ページ */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
