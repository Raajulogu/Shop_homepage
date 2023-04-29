import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useState} from 'react';

function App() {
  let data=[{item:"Fancy Product",
        rating:"0",
        price:"",
        price1:"$40.00-$80.00",
        sale:""},
        {item:"Special Item",
        rating:"5",
        price:"$20.00 ",
        price1:"$18.00",
        sale:"sale"},
        {item:"Sale Item",
        rating:"0",
        price:"$50.00 ",
        price1:"$25.00",
        sale:"sale"},
        {item:"Popular Item",
        rating:"5",
        price:"",
        price1:"$40.00",
        sale:""},
        {item:"Sale Item",
        rating:"0",
        price:"$50.00 ",
        price1:"$25.00",
        sale:"sale"},
        {item:"Fancy Product",
        rating:"0",
        price:"",
        price1:"$120.00-$280.00",
        sale:""},
        {item:"Special Item",
        rating:"5",
        price:"$20.00 ",
        price1:"$18.00",
        sale:"sale"},
        {item:"Popular Item",
        rating:"5",
        price:"",
        price1:"$40.00"}
      ]
      let [count,setcount]=useState(0)
      let [option,setoption]=useState(false)
  return (
    <div className="App">
      <div className="head">
        <button>Start Bootstrap</button>
        <button>Home</button>
        <button>About</button>
        <span className="option"><button onClick={()=>{
          setoption(!option)
        }}>Shop
        <p>All Products</p>
        <p>Popular Items</p>
        <p>New Arrivals</p></button>
        {option ?
        <div className='list'>
        <p>All Products</p>
        <p>Popular Items</p>
        <p>New Arrivals</p>
        </div> : ""}</span>
        
        <span className='cart'>Cart {count}</span>
      </div>
      <div className='title'>
        <h1>Shop in style</h1>
        <p>With this shop homepage template</p>
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
      <div className='img'><div className='sale'>
        <p id="sale">{prod.sale}</p>
        </div>450X300</div>
      <Card.Body>
        <Card.Title>{prod.item}</Card.Title>
        <Card.Title>{prod.rating}</Card.Title>
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
