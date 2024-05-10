import './article.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function AppArticle(){
    return(
        <CardGroup className='fivecards'>
      <Card className='oneoffivecards'>
        <Card.Body>
          <Card.Text className='cardsvg'>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#58b0e3"/>
                <stop offset="1" stop-color="#005287"/>
                </linearGradient>
            </defs>
            <g id="Group_33" data-name="Group 33" transform="translate(-246 -868)">
                <path id="Path_25" data-name="Path 25" d="M0,0H48V48H0Z" transform="translate(246 868)" fill="none"/>
                <g id="Group_14" data-name="Group 14">
                <path id="Union_3" data-name="Union 3" d="M2.5,226v-3.5H6V206H0l22-16,10,7.273V192h5v8.909L44,206H38v16.5h3.5V226Zm15.944-3.5h6.223v-7.643H18.445ZM10,203.674V222h4.445V210.857H28.667V222H34V203.674l-12-8.727ZM25.971,206H17.028a4.5,4.5,0,0,1,8.944,0h0Z" transform="translate(248 684)" fill="url(#linear-gradient)"/>
                </g>
            </g>
            </svg>

          </Card.Text>
          <Card.Title className='cardtitle'>ქონების<br/>დაზღვევა</Card.Title>
        </Card.Body>
      </Card>
      <Card className='oneoffivecards'>
        <Card.Body>        
          <Card.Text className='cardsvg'>
          <svg id="health_and_safety_black_48dp" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#58b0e3"/>
                <stop offset="1" stop-color="#005287"/>
                </linearGradient>
            </defs>
            <rect id="Rectangle_5" data-name="Rectangle 5" width="48" height="48" fill="none"/>
            <path id="Path_30" data-name="Path 30" d="M17,24H12V18h5V13h6v5h5v6H23v5H17ZM20,2,4,8V20.18C4,30.28,10.82,39.7,20,42c9.18-2.3,16-11.72,16-21.82V8ZM32,20.18c0,8-5.1,15.4-12,17.66C13.1,35.58,8,28.2,8,20.18v-9.4l12-4.5,12,4.5Z" transform="translate(4 2)" fill="url(#linear-gradient)"/>
            </svg>

          </Card.Text>
          <Card.Title className='cardtitle'>ჯანმრთელობის<br/>დაზღვევა</Card.Title>
        </Card.Body>
      </Card>
      <Card className='oneoffivecards'>
        <Card.Body>
          <Card.Text className='cardsvg'>
          <svg id="directions_car_filled_black_48dp" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <defs>
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
            </svg>

          </Card.Text>
          <Card.Title className='cardtitle'>ავტომობილის<br/>დაზღვევა</Card.Title>
        </Card.Body>
      </Card>
      <Card className='oneoffivecards'>
        <Card.Body>
          <Card.Text className='cardsvg'>
          <svg id="how_to_reg_black_24dp" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#58b0e3"/>
                <stop offset="1" stop-color="#005287"/>
                </linearGradient>
            </defs>
            <path id="Path_219" data-name="Path 219" d="M0,0H48V48H0Z" fill="none"/>
            <path id="Path_220" data-name="Path 220" d="M19,20a8,8,0,1,0-8-8A8,8,0,0,0,19,20ZM19,8a4,4,0,1,1-4,4A4.012,4.012,0,0,1,19,8ZM7,32c.4-1.26,5.14-3.36,9.92-3.88l4.08-4A18.681,18.681,0,0,0,19,24c-5.34,0-16,2.68-16,8v4H21l-4-4ZM38.2,21,27.94,31.34,23.8,27.18,21,30l6.94,7L41,23.82Z" transform="translate(3 4)" fill="url(#linear-gradient)"/>
            </svg>

          </Card.Text>
          <Card.Title className='cardtitle'>პასუხისმგებლობის<br/>დაზღვევა</Card.Title>
        </Card.Body>
      </Card>
      <Card className='oneoffivecards'>
        <Card.Body>
          <Card.Text className='cardsvg'>
          <svg id="flight_takeoff_black_48dp" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#58b0e3"/>
                <stop offset="1" stop-color="#005287"/>
                </linearGradient>
            </defs>
            <path id="Path_28" data-name="Path 28" d="M0,0H48V48H0Z" fill="none"/>
            <path id="Path_29" data-name="Path 29" d="M3.16,34.43h38v4h-38ZM42.3,15.71a2.993,2.993,0,0,0-3.68-2.12L28,16.43,14.2,3.57,10.34,4.59l8.28,14.34L8.68,21.59,4.74,18.51l-2.9.78,5.18,8.98,33.14-8.86a3.044,3.044,0,0,0,2.14-3.7Z" transform="translate(1.84 3.57)" fill="url(#linear-gradient)"/>
            </svg>

          </Card.Text>
          <Card.Title className='cardtitle'>სამოგზაურო<br/>დაზღვევა</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
    );
}