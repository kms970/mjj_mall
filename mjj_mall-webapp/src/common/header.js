import {PageHeader} from "antd";
import React from "react";
import {Outlet} from "react-router-dom";

function Header() {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Header"
        style={{display: 'inline-block'}}
      />
      <Outlet />
    </div>
  )
}
export default Header;