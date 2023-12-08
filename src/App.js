// imported the components we created
import Name from "./Components/Name";
import Price from "./Components/Price";
import Image from "./Components/Image";
import Description from "./Components/Description";
// imported card and button for the product card and imported bootstrap css for the styling
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// declared firstName and likn for sleekImg, forgive how long the link is 
import Sleek from "./Products/Sleek";
function App() {
  return (
    <div>
      {/* created the card element and inserted all 4 components */}
    <Card style={{ width: '18rem', margin: 'auto', marginTop: '20px', backgroundColor:'#ABBCC3' }}>
      <Image/>
      <Card.Body style={{paddingTop: '0', textAlign: 'center'}}>
        <Card.Title><Name/></Card.Title>
        <Card.Subtitle ><Price/></Card.Subtitle>
        <Card.Text><Description/></Card.Text>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>
    {/* displayed the message that greeted firstName and brought Img if provited */}
    <h2 style={{textAlign:'center', marginTop:'1rem'}}> Hi {Sleek.firstName?<span><span>{Sleek.firstName}, I'm Sleek</span><img style={{display:'block',  margin:'auto', marginTop:'0.7rem'}} src={Sleek.image} alt="Sleek"/></span>: "there!! I'm Sleek"}</h2>

    </div>
  );
}
// exported app for the index.js
export default App;
