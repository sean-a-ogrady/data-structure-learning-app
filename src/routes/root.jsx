import { Outlet } from "react-router-dom";
import Nav from "../nav";

export default function Root() {
  return (
    <div>
      {/*
            Nav component 
            Outlet - main content
            Footer
            */}
      <Nav />
      <div className="mx-auto w-fit mt-10">
        <Outlet />
      </div>
      <footer className="absolute left-5 bottom-5 w-full">
        <p>
          © 2023 Structify. All Rights Reserved.
          <br />
          Developed By Sean O'Grady, Dennis Shin, and Tymur Bondar
        </p>
      </footer>
    </div>
  );
}
