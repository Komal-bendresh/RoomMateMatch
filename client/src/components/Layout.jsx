import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";


const Layout = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div >
      <div>
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        
      </div>
    </div>
  );
};

export default Layout;
