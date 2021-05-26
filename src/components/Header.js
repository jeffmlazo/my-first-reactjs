const Header = ({ titulo }) => {
  return (
    <header>
      <h1>Title from App.js {titulo}</h1>
    </header>
  );
};

Header.defaultProps = {
  titulo: "Default Titulod",
};

export default Header;
