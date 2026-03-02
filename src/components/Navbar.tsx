import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar =() => {
const {isAuthenticated, logout} = useAuth();


    return (
        <nav style={{ marginBottom: "20px" }}>
            <Link to="./blog"> Blog </Link> |{" "}

            {!isAuthenticated ? (
        <Link to="/login">Log In</Link>
      ) : (
        <>
          <Link to="/admin">Admin</Link> |{" "}
          <button onClick={logout}>Log Out</button>
        </>
      )}
        </nav>
    )
}
export default Navbar;