import { Outlet } from "react-router-dom";
import Nav from "../nav";
import { useState } from "react";

export default function Root() {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="flex flex-col min-h-screen  dark:bg-gray-950 dark:text-white">
      {/*
            Nav component 
            Outlet - main content
            Footer
            */}
      <Nav />
      <div className="flex-grow">
        <Outlet />
      </div>
      <footer className="w-full bg-slate-300 dark:bg-black">
        <p className="mt-7 ml-5 mr-5 mb-3">
          © 2023 Structify. All Rights Reserved.
          <br />
          Developed By Sean O'Grady, Dennis Shin, and Tymur Bondar
        </p>
      </footer>
    </div>
  );
}
