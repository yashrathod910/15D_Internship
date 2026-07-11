import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>
      <h1>Welcome!</h1>

      <p>
        Current Theme: <strong>{theme}</strong>
      </p>

      <p>
        This component receives the theme without passing props.
      </p>
    </div>
  );
}

export default Home;