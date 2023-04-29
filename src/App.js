import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  let data=[{item:"Fancy Product",
        rating:"",
        price:"",
        price1:"$40.00-$80.00",
        sale:""},
        {item:"Special Item",
        rating:"⭐⭐⭐⭐⭐",
        price:"$20.00 ",
        price1:"$18.00",
        sale:"sale"},
        {item:"Sale Item",
        rating:"",
        price:"$50.00 ",
        price1:"$25.00",
        sale:"sale"},
        {item:"Popular Item",
        rating:"⭐⭐⭐⭐⭐",
        price:"",
        price1:"$40.00",
        sale:""},
        {item:"Sale Item",
        rating:"",
        price:"$50.00 ",
        price1:"$25.00",
        sale:"sale"},
        {item:"Fancy Product",
        rating:"",
        price:"",
        price1:"$120.00-$280.00",
        sale:""},
        {item:"Special Item",
        rating:"⭐⭐⭐⭐⭐",
        price:"$20.00 ",
        price1:"$18.00",
        sale:"sale"},
        {item:"Popular Item",
        rating:"⭐⭐⭐⭐⭐",
        price:"",
        price1:"$40.00",
        sale:""}
      ]
      let [count,setcount]=useState(0)
      let [option,setoption]=useState(false)
  return (
    <div className="App">
      <div className="head">
        <button className="head_option_title">Start Bootstrap</button>
        <button className="head_option">Home</button>
        <button className="head_option">About</button>
        <span className="option">
          <button className="head_option_shop" onClick={()=>{setoption(!option)}}>Shop ▼
          </button>
          {option ?
          <div className='list'>
          <p className='list_option_head'>All Products</p>
          <p className='list_option'>Popular Items</p>
          <p className='list_option'>New Arrivals</p>
          </div> : ""}
          </span>
        <span className='cart'>🛒Cart {count}</span>
      </div>
      <div className='title'>
        <h1 className='title_head'>Shop in style</h1>
        <p className='title_content'>With this shop homepage template</p>
      </div>

      <div className="card-container">
        {data.map((product,index)=>(
          <Product
          key={index}
          prod={product}
          count={count}
          setcount={setcount}
          />
        ))}
      </div>
    </div>
  );
}

function Product({prod,count,setcount}){
  let [cart,setcart]=useState(true);

  function addtocart(){
    setcount(count+1);
    setcart(!cart);
  }
  function removefromcart(){
    setcount(count-1);
    setcart(!cart);
  }

  return(
    <div>
      <Card style={{ width: '18rem' }} className='Card'>
      <div className='img'>
        <div className='sale'>
        {prod.sale!=="" ?
        <p id="sale">{prod.sale}</p>:""
        }
        </div><div className='img_content'>450X300</div></div>
      <Card.Body>
        <Card.Title className='item_name'>{prod.item}</Card.Title>
        <Card.Title className='rating'>{prod.rating}</Card.Title>
        <Card.Title><span id="old_price">{prod.price}</span>{prod.price1}</Card.Title>
        {cart ? <Button id="primary" variant="primary"
        onClick={addtocart}
        >Add to Cart</Button>
        :
        <Button id="danger" variant="danger"
        onClick={removefromcart}
        >Remove from Cart</Button>
        }
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
