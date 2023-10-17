import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
      <nav className="flex justify-around pb-3 pt-3 bg-slate-300" >
        <NavLink className="text-xl p-3 hover:bg-slate-400" to="/"> 🏠 Home {/* Image */}</NavLink>
        <NavLink className="text-xl p-3 hover:bg-slate-400" to="data-structures"> 👾 Data Structures</NavLink>
        <NavLink className="text-xl p-3 hover:bg-slate-400" to="add"> 🔰 Add Structure</NavLink>
      </nav>
  );
}
