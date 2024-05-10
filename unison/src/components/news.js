import './news.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import firstCard from '../assets/images/firstcard.png';
import secondCard from '../assets/images/secondcard.png';
import thirdCard from '../assets/images/thirdcard.png';

export default function AppNews(){
    return (
        <CardGroup className='threecards'>
      <Card className='oneofthreecards'>
        <Card.Img variant="top" src={firstCard} />
        <Card.Body>
          <Card.Title className='threecardtitle'>ქალაქგარეთ ცხოვრების 10<br/>გავრცელებული მითი</Card.Title>
          <Card.Text className='newsdate'>6 ნოემბერი</Card.Text>
        </Card.Body>
      </Card>
      <Card className='oneofthreecards'>
        <Card.Img variant="top" src={secondCard} />
        <Card.Body>
          <Card.Title className='threecardtitle'>ჯანსაღი კვების საიდუმლო სამხრეთ<br/>აზიიდან</Card.Title>
          <Card.Text className='newsdate'>28 ოქტომბერი</Card.Text>
        </Card.Body>
      </Card>
      <Card className='oneofthreecards'>
        <Card.Img variant="top" src={thirdCard} />
        <Card.Body>
          <Card.Title className='threecardtitle'>ავტომობილის სალონის მოვლის<br/>თანამედროვე ხერხები</Card.Title>
          <Card.Text className='newsdate'>14 ოქტომბერი</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    )
}