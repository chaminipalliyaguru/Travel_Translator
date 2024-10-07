import logo from '../assets/Logo1.png'; // Make sure the path is correct for your logo

const Header = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 20px',
    backgroundColor: '#aee6fc',
    color: '#fff',
  };

  const logoStyle = {
    width: '200px',
    
    height: 'auto',
  };

  const navLinksStyle = {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: '#20888d',
    textDecoration: 'none',
    padding: '0 15px',
    fontSize: '18px',
    fontFamily: 'Verdana', // Corrected to camelCase
};

const linkHoverStyle = {
    color: '#ddd',
};


  return (
    <nav style={navStyle}>
      <div className="logo">
        <img src={logo} alt="Logo" style={logoStyle} />
      </div>
      <ul style={navLinksStyle}>
        <li>
          <a href="#home" style={linkStyle}>
            Home
          </a>
        </li>
        <li>
          <a href="#services" style={linkStyle}>
            Services
          </a>
        </li>
        <li>
          <a href="#about" style={linkStyle}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;



