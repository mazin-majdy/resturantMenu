import React, { useState } from 'react'
import { Container, Form, Nav, Navbar, Row } from 'react-bootstrap'

const NavBar = ({ filterbySearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const onSearch = (e) => {
    e.preventDefault();
    filterbySearch(searchValue);

    setSearchValue('')
  }
  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant='dark'>
        <Container>
          <Navbar.Brand href="#">
            <div className='brand-color'>مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="ابحث..."
                className="mx-2"
                onChange={(e)=> setSearchValue(e.target.value)}
                value={searchValue}
              />
              <button
                className='btn-search'
                onClick={onSearch}
              >بحث</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  )
}

export default NavBar;