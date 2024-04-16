import { memo } from "react";
import { Header } from "../organism/layout/Header";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line
export const HeaderLayout = memo(() => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
});
