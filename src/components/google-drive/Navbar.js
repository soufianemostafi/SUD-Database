import React from "react"
import { Navbar, Nav, Button } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export default function NavbarComponent() {
  const history = useHistory()
  async function handleLogout() {
    await logout()
    history.push("/")
  }
  const { currentUser, logout } = useAuth()
  return (
    <Navbar bg="dark" expand="sm">
      <Navbar.Brand as={Link} style={{color: "red"}} to="/Dashboard">
        SUD-Database
      </Navbar.Brand>
      <Nav>
        {currentUser ? (<Nav><Nav.Link style={{color: "red"}} as={Link} to="/user">
          Profile
        </Nav.Link>
          <Button style={{ color: "red" }} variant="link" onClick={handleLogout}>
            Log Out
          </Button> </Nav>) : (<Nav><Nav.Link style={{color: "red"}} as={Link} to="/login">
            Login
          </Nav.Link>
            <Nav.Link as={Link} style={{color: "red"}} to="/signup">
              Sign up
            </Nav.Link></Nav>
        )}
      </Nav>
    </Navbar>
  )
}
