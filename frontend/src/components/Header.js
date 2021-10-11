import "./Header.css";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <div className="Header">
      <MenuIcon />
      <h1>Gaia</h1>
      <AddIcon />
    </div>
  );
}

export default Header;
