import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import './header.css';

export default function AppHeader(){
    return (
        <Navbar expand="lg" className="mainnavbar">
        <Container className='navbarcontainer'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navlink home" href="#home">მთავარი</Nav.Link>
              <Nav.Link className="navlink" href="#about">ჩვენს შესახებ</Nav.Link>
              <Nav.Link className="navlink" href="#news">სიახლეები</Nav.Link>
              <Nav.Link className="navlink" href="#partners">პარტნიორები</Nav.Link>
              <Nav.Link className="navlink" href="#contact">კონტაქტი</Nav.Link>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">SOS</Dropdown.Toggle>
                <Dropdown.Menu className="sosdropdown">
                    <Dropdown.Item className="navlinksos" href="#/action-1">მოხდა ავტოსაგზაო შემთხვევა</Dropdown.Item>
                    <Dropdown.Item className="navlinksos" href="#/action-2">შემთხვევის სტატუსის შემოწმება</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className="rightcorner">              
              <Dropdown className="navdropdownen">
                <Dropdown.Toggle  id="dropdown-basic-language">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path fill="#ea3323" d="M31 14L18 14 18 4 14 4 14 14 1 14 1 18 14 18 14 28 18 28 18 18 31 18 31 14z"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M10,8.141c-.619,.124-1.246,.202-1.874,.233,.031-.628,.109-1.254,.233-1.874-.57,.075-1.148,.075-1.718,0,.124,.619,.202,1.246,.233,1.874-.628-.031-1.254-.109-1.874-.233,.075,.57,.075,1.148,0,1.718,.619-.124,1.246-.202,1.874-.233-.031,.628-.109,1.254-.233,1.874,.57-.075,1.148-.075,1.718,0-.124-.619-.202-1.246-.233-1.874,.628,.031,1.254,.109,1.874,.233-.075-.57-.075-1.148,0-1.718Z" fill="#ea3323"></path><path d="M22,8.141c.619,.124,1.246,.202,1.874,.233-.031-.628-.109-1.254-.233-1.874,.57,.075,1.148,.075,1.718,0-.124,.619-.202,1.246-.233,1.874,.628-.031,1.254-.109,1.874-.233-.075,.57-.075,1.148,0,1.718-.619-.124-1.246-.202-1.874-.233,.031,.628,.109,1.254,.233,1.874-.57-.075-1.148-.075-1.718,0,.124-.619,.202-1.246,.233-1.874-.628,.031-1.254,.109-1.874,.233,.075-.57,.075-1.148,0-1.718Z" fill="#ea3323"></path><path d="M10,23.859c-.619-.124-1.246-.202-1.874-.233,.031,.628,.109,1.254,.233,1.874-.57-.075-1.148-.075-1.718,0,.124-.619,.202-1.246,.233-1.874-.628,.031-1.254,.109-1.874,.233,.075-.57,.075-1.148,0-1.718,.619,.124,1.246,.202,1.874,.233-.031-.628-.109-1.254-.233-1.874,.57,.075,1.148,.075,1.718,0-.124,.619-.202,1.246-.233,1.874,.628-.031,1.254-.109,1.874-.233-.075,.57-.075,1.148,0,1.718Z" fill="#ea3323"></path><path d="M22,23.859c.619-.124,1.246-.202,1.874-.233-.031,.628-.109,1.254-.233,1.874,.57-.075,1.148-.075,1.718,0-.124-.619-.202-1.246-.233-1.874,.628,.031,1.254,.109,1.874,.233-.075-.57-.075-1.148,0-1.718-.619,.124-1.246,.202-1.874,.233,.031-.628,.109-1.254,.233-1.874-.57,.075-1.148,.075-1.718,0,.124,.619,.202,1.246,.233,1.874-.628-.031-1.254-.109-1.874-.233,.075,.57,.075,1.148,0,1.718Z" fill="#ea3323"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg> ქართული
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="languagedropdown">
                    <Dropdown.Item className="englishui" href="#/action-1"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect><path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg> English</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
              <Nav.Link className="phonenumber" href="#phonenumber">ცხელი ხაზი <svg xmlns="http://www.w3.org/2000/svg" width="16.004" height="16" viewBox="0 0 16.004 16">
                <path id="phone" d="M12.432,12.432c-1.584,1.582-3.418,3.1-4.143,2.372-1.037-1.037-1.677-1.942-3.966-.1s-.53,3.065.475,4.069c1.16,1.16,5.486.062,9.761-4.213s5.37-8.6,4.208-9.761c-1.005-1.007-2.226-2.763-4.064-.475s-.937,2.928.1,3.966C15.528,9.014,14.014,10.848,12.432,12.432Z" transform="translate(19.204 -3.201) rotate(90)" fill="#d0d0d0"/>
                </svg> 2 991 991
              </Nav.Link>
            </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
      );
}

