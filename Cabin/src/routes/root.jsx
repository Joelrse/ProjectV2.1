import { Outlet } from "react-router-dom";
import Nav from "../nav"


export default function Root() {
  return (
    
    <div>
      <Nav />
      
      <Outlet />
      
    </div>
  );
}
