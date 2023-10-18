import { Outlet } from "react-router-dom";
import Nav from "../nav";

export default function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      {/*
            Nav component 
            Outlet - main content
            Footer
            */}
      <Nav />
      <div className="w-fit mt-10">
        <Outlet />
      </div>
      <footer className="mt-auto ml-5 mr-5 mb-3">
        <p>
          © 2023 Structify. All Rights Reserved.
          <br />
          Developed By Sean O'Grady, Dennis Shin, and Tymur Bondar
        </p>
      </footer>
    </div>
  );
}
