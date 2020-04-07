import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/all-bonuses">
      <a style={linkStyle}>All bonuses</a>
    </Link>
    <Link href="/add-bonus">
      <a style={linkStyle}>Add bonus</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
