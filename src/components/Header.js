import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ titulo, prop2, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Title from App.js {titulo}</h1>
      <h1>Prop2 from App.js {prop2}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
      <Button color="red" text="Button2" />
      <Button color="blue" text="Button3" />
      <Button text="Button4" />
    </header>
  );
};

// A default value for a property types
Header.defaultProps = {
  titulo: "Default Titulod",
};

// A declaration of property types
Header.propTypes = {
  titulo: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

export default Header;
