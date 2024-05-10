import './footer.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import logo from '../assets/images/croppedlogo.png';
import downloadOptions from '../assets/images/downloadoptions.png';

export default function AppFooter(){
    return(
        <CardGroup className='footercards'>
      <Card className='oneoffootercards'>
        <Card.Body>
        <img className='logoinfooter' src={logo} alt="Logo" />
        <a href='#about'><p className='footerlink'>ჩვენს შესახებ</p></a>
        <br/>
        <a href='#career'><p className='footerlink'>კარიერა</p></a>
        <br/>
        <a href='#partners'><p className='footerlink'>პარტნიორები</p></a>
        <br/>
        <img className='doinfooter' src={downloadOptions} alt="Download Options" />
        <br/>
        <br/>
        </Card.Body>
      </Card>
      <Card className='oneoffootercards'>
        <Card.Body>
        <a href='#info'><p className='footerlink boldlink'>ინფორმაცია</p></a>
        <br/>
        <a href='#news'><p className='footerlink'>სიახლეები</p></a>
        <br/>
        <a href='#infop'><p className='footerlink'>საინფორმაციო ფურცელი</p></a>
        <br/>
        <a href='#medicalproviders'><p className='footerlink'>სამედიცინო პროვაიდერები</p></a>
        <br/>
        <a href='#contracts'><p className='footerlink'>ხელშეკრულებები</p></a>
        <br/>
        <p className='initials'>MrCold3R</p>
        </Card.Body>
      </Card>
      <Card className='oneoffootercards'>
        <Card.Body>
        <a href='#help'><p className='footerlink boldlink'>დახმარება</p></a>
        <br/>
        <a href='#contact'><p className='footerlink'>კონტაქტი</p></a>
        <br/>
        <a href='#clients'><p className='footerlink'>მომხმარებლის ხმა</p></a>
        <br/>
        <a href='#questions'><p className='footerlink'>ხშირად დასმული კითხვები</p></a>
        <br/>
        <a href='#datasave'><p className='footerlink'>მონაცემთა დაცვა</p></a>
        <br/>
        </Card.Body>
      </Card>
      <Card className='oneoffootercards'>
        <Card.Body>
        <p className='footerlink boldlink'>სოციალური ქსელები</p>
        <br/>
        <a href='https://www.facebook.com/gaiparashviligiorgi/'><p className='footerlink sociallinks'><svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="-204.79995 -341.33325 1774.9329 2047.9995"><path d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373" fill="#1877f2"/><path d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4" fill="#fff"/></svg> Facebook</p></a>
        <br/>
        <a href='https://www.instagram.com/mr.cold3r/'><p className='footerlink sociallinks'><svg className='dzlivsvipoveinstagramissvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z"/><path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"/></svg> Instagram</p></a>
        <br/>
        <a href='#linkedin'><p className='footerlink sociallinks'><svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="-11.493675 -16.3118 99.61185 97.8708"><path fill="#0a66c2" d="M72.865 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836m-16.873-5.433h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2H4.781A4.728 4.728 0 000 4.6744v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67"/><path fill="#0a66c2" d="M72.164 56.4114a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"/></svg> Linkedin</p></a>
        <br/>
        <a href='#youtube'><p className='footerlink sociallinks'><svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="-35.20005 -41.33325 305.0671 247.9995"><path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85" fill="red"/><path d="M93.333 117.559l61.333-34.89-61.333-34.894z" fill="#fff"/></svg> Youtube</p></a>
        <br/>
        </Card.Body>
      </Card>
    </CardGroup>
    );
}