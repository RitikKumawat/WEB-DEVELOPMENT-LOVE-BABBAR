
import './App.css';
import NewProduct from './components/NewProduct';
import Products from './components/Products';
function App() {
  const products=[
    {
      id:"p1",
      title:"Nirma",
      amount:20,
      date:new Date(2021,12,28),
    },
    {
      id:"p2",
      title:"Surf Excel",
      amount:45,
      date:new Date(1980,4,12),
    },
    {
      id:"p3",
      title:"Tide",
      amount:80,
      date:new Date(1970,8,15),
    },
    {
      id:"p4",
      title:"Maggi",
      amount:50,
      date:new Date(1921,10,11),
    }
  ];
 
  function printProductData(data){
    console.log("i Am inside App.js")
    console.log(data);
  }
 
 
  return (
   
  <div>
      <NewProduct ritik = {printProductData}/>
      <Products items={products} />

      
  </div>


  );
}

export default App;
