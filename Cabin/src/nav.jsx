import { Link } from "react-router-dom";

const Root = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/photos">Photos</Link></li>
        <li><Link to="/signup">Signup</Link></li> 
      </ul>
    </nav>
  );
};

export default Root;
