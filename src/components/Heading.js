import React from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";

const Heading = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Student Details</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/add" className="btn btn-primary col-xs-2 ">
              Add Student
            </Link>
            <Button className="btn btn-primary col-xs-2">Search</Button>
            {/* <Link to="/add" className="btn btn-primary">
              Search Student
            </Link> */}
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Heading;
