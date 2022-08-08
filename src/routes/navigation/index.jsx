import React, { Fragment } from "react";
import { Outlet } from "react-router";

export default function Navigation() {
  return (
    <Fragment>
      <h1>Navigator</h1>
      <Outlet />
    </Fragment>
  );
}