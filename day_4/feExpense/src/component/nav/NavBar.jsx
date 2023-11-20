import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    const mainLinks = [
        {
            href: "#comingsoon", 
            text: "Coming soon",
        },{
            href: "#pricing", 
            text: "Pricing",
        }
    ]
    const authLinks = [{
        href: "/", 
        name: "Sign In"
    }, 
{
    href: "/register",
    name: "Register Now"
}]
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">exTracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">coming soon</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {
             mainLinks.map(item=><Nav.Link href={item.href} key={item.text}>{item.text}</Nav.Link>
             )
            }
          </Nav>
          <Nav>
             {
                 authLinks.map(link=><Nav.Link href={link.href} key={link.name}> {link.name}  </Nav.Link>)
            }
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;