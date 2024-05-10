import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import firstSlide from '../assets/images/carousel.png';
export default function AppCarousel(){
    return (
      
    <Carousel className='unisoncarousel'>
    <Carousel.Item className='carouselitem'>
    <div className='imagecover' />
      <img
        className="carouselimage"
        src={firstSlide}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1 className='carouseltitle'>ქონების დაზღვევა</h1>
        <p className='carouselcaption'>ყველაზე ხელსაყრელი პირობებით</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carouselitem'>
    <div className='imagecover' />
      <img
        className="carouselimage"
        src={firstSlide}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1 className='carouseltitle'>ქონების დაზღვევა</h1>
        <p className='carouselcaption'>ყველაზე ხელსაყრელი პირობებით</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carouselitem'>
    <div className='imagecover' />
      <img
        className="carouselimage"
        src={firstSlide}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1 className='carouseltitle'>ქონების დაზღვევა</h1>
        <p className='carouselcaption'>ყველაზე ხელსაყრელი პირობებით</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carouselitem'>
    <div className='imagecover' />
      <img
        className="carouselimage"
        src={firstSlide}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1 className='carouseltitle'>ქონების დაზღვევა</h1>
        <p className='carouselcaption'>ყველაზე ხელსაყრელი პირობებით</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carouselitem'>
    <div className='imagecover' />
      <img
        className="carouselimage"
        src={firstSlide}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1 className='carouseltitle'>ქონების დაზღვევა</h1>
        <p className='carouselcaption'>ყველაზე ხელსაყრელი პირობებით</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}