import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={theme}>
      <h2>React Context API</h2>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
}

export default Navbar;