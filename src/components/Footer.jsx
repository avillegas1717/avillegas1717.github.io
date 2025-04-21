import SocialLinks from "./SocialLinks";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Designed &amp; developed by Alicia.Villegas &copy; {year}</p>
      <SocialLinks />
      
    </footer>
  )
}

export default Footer; 