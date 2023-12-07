// imported product object to be able to access product image url
import product from '../Products/Product';
// imported card from bootstrap to be able to use card.img
import { Card } from 'react-bootstrap';

function Image() {
  return (
    <Card.Img variant="top" style={{height:'18rem'}} src={product.image} alt="Hublot Watch" />
  )
}
// exported Image component to be used in the root js file
export default Image