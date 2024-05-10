import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import './menu.css';

export default function AppMenu(){
    return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-secondnav">
      {/* <MyComponent/> */}
    <Container className='menucontainer'>
      <Navbar.Brand href="#home" className='logo'></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Dropdown className='dropdownborder'>
            <Dropdown.Toggle  className='fizikuridropdown' href='#fizikuri-pirebi'>
              ფიზიკური<br/>პირებისთვის
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropdownmenuedit'>
              <Dropdown.Item href="#individualuri" className='dropdownitemedit'>
              <svg id="health_and_safety_black_48dp" xmlns="http://www.w3.org/2000/svg"  width="22" height="22" viewBox="0 0 48 48"><defs>
                  <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#58b0e3"/>
                    <stop offset="1" stop-color="#005287"/>
                  </linearGradient>
                </defs>
                <rect id="Rectangle_5" data-name="Rectangle 5" width="48" height="48" fill="none"/>
                <path id="Path_30" data-name="Path 30" d="M17,24H12V18h5V13h6v5h5v6H23v5H17ZM20,2,4,8V20.18C4,30.28,10.82,39.7,20,42c9.18-2.3,16-11.72,16-21.82V8ZM32,20.18c0,8-5.1,15.4-12,17.66C13.1,35.58,8,28.2,8,20.18v-9.4l12-4.5,12,4.5Z" transform="translate(4 2)" fill="url(#linear-gradient)"/>
              </svg>   ინდივიდუალური ჯანმრთელობის დაზღვევა
              </Dropdown.Item>
              <Dropdown.Item href="#avtodazgveva" className='dropdownitemedit'>
                 <svg id="directions_car_filled_black_48dp" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48"> <defs>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#58b0e3"/>
                      <stop offset="1" stop-color="#005287"/>
                    </linearGradient>
                  </defs>
                  <g id="Group_11" data-name="Group 11">
                    <rect id="Rectangle_4" data-name="Rectangle 4" width="48" height="48" fill="none"/>
                  </g>
                  <g id="Group_13" data-name="Group 13" transform="translate(6 10)">
                    <g id="Group_12" data-name="Group 12">
                      <path id="Union_4" data-name="Union 4" d="M-772-656a2.006,2.006,0,0,1-2-2v-2h-24v2a2.006,2.006,0,0,1-2,2h-2a2.006,2.006,0,0,1-2-2v-16l4.16-11.98A3.007,3.007,0,0,1-797-688h22a2.987,2.987,0,0,1,2.84,2.02L-768-674v16a2.006,2.006,0,0,1-2,2Zm-28-8h28v-10h-28Zm1.62-14h24.74l-2.08-6H-796.3Zm18.38,9a3,3,0,0,1,3-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3A3,3,0,0,1-780-669Zm-18,0a3,3,0,0,1,3-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3A3,3,0,0,1-798-669Z" transform="translate(804 688)" fill="url(#linear-gradient)"/>
                    </g>
                  </g>
                </svg>   ავტოდაზღვევა - პაკეტები
              </Dropdown.Item>
              <Dropdown.Item href="#pasuxismgebloba" className='dropdownitemedit'>
              <svg id="_24px" data-name="24px" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
                <path id="Path_41" data-name="Path 41" d="M0,0H48V48H0Z" fill="none"/>
                <path id="Path_42" data-name="Path 42" d="M22,2A20,20,0,1,0,42,22,20.007,20.007,0,0,0,22,2ZM12.14,34.56C13,32.76,18.24,31,22,31s9.02,1.76,9.86,3.56a15.851,15.851,0,0,1-19.72,0Zm22.58-2.9C31.86,28.18,24.92,27,22,27s-9.86,1.18-12.72,4.66a16,16,0,1,1,25.44,0ZM22,10a7,7,0,1,0,7,7A6.982,6.982,0,0,0,22,10Zm0,10a3,3,0,1,1,3-3A3,3,0,0,1,22,20Z" transform="translate(2 2)" fill="#006a9f"/>
              </svg>   მძღოლის პასუხისმგებლობის დაზღვევა
              </Dropdown.Item>
              <Dropdown.Item href="#samogzauro" className='dropdownitemedit'>
              <svg id="flight_takeoff_black_48dp" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48"><defs>
                  <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#58b0e3"/>
                    <stop offset="1" stop-color="#005287"/>
                  </linearGradient>
                </defs>
                <path id="Path_28" data-name="Path 28" d="M0,0H48V48H0Z" fill="none"/>
                <path id="Path_29" data-name="Path 29" d="M3.16,34.43h38v4h-38ZM42.3,15.71a2.993,2.993,0,0,0-3.68-2.12L28,16.43,14.2,3.57,10.34,4.59l8.28,14.34L8.68,21.59,4.74,18.51l-2.9.78,5.18,8.98,33.14-8.86a3.044,3.044,0,0,0,2.14-3.7Z" transform="translate(1.84 3.57)" fill="url(#linear-gradient)"/>
              </svg>   სამოგზაურო დაზღვევა
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
          <div className='menubuttonhover'>
          <Nav.Link className="menubuttons" href="#iuridiuli-pirebi">იურიდიული<br/>პირებისთვის</Nav.Link>
          </div>
          <div className='menubuttonhover'>
          <Nav.Link className="menubuttons" href="#savaldebulo-dazgveva">სავალდებულო<br/>დაზღვევა</Nav.Link>
          </div>
        </Nav>
        <Nav className='loginwithsvg'>
          <p className='loginsvg'><svg id="Component_8_11" data-name="Component 8 – 11" xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62">
            <circle id="Ellipse_1" data-name="Ellipse 1" cx="31" cy="31" r="31" fill="#f2f2f2"/>
            <g id="_24px-2" data-name="24px-2" transform="translate(13 13)">
              <path id="Path_35" data-name="Path 35" d="M0,0H36V36H0Z" fill="none"/>
              <path id="Path_36" data-name="Path 36" d="M18,7.325A3.675,3.675,0,1,1,14.325,11,3.675,3.675,0,0,1,18,7.325m0,15.75c5.2,0,10.675,2.555,10.675,3.675v1.925H7.325V26.75c0-1.12,5.478-3.675,10.675-3.675M18,4a7,7,0,1,0,7,7A7,7,0,0,0,18,4Zm0,15.75c-4.673,0-14,2.345-14,7V32H32V26.75C32,22.1,22.673,19.75,18,19.75Z" fill="#707070"/>
            </g>
          </svg>
          </p>
          <p className='login'>ჩემი<br/>კაბინეტი</p>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}