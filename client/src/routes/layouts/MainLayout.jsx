import React, { Children, Fragment } from "react";
import Navbar from "../../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
}
