
import './App.css';
import Item from './components/item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';
function App() {
  const response=[
    {
      itemName:"Nirma",
      itemDate:"20",
      itemYear:"1992"
    },
    {
      itemName:"Surf Excel",
      itemDate:"22",
      itemYear:"1892"
    },
    {
      itemName:"555",
      itemDate:"19",
      itemMonth:"July",
      itemYear:"1890"
    }
  ];
 
 
 
  return (
   
  <div>
    <Card>
    
      <Item name="Nirma" ></Item>
      <ItemDate day="20" month="June" year="1998"></ItemDate>

      <Item name="SurfExcel"></Item>
      <ItemDate day="22" month="December" year="1990"></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      
      <div classname="App">Hello Jee</div>
    
    </Card>
      
      
  </div>


  );
}

export default App;
