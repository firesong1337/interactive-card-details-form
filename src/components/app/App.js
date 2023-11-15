import { useState } from 'react';
import './App.css'
import CardForm from '../card-form/CardForm';
import Card from '../card/Card';
function App() {

  const [info, setInfo] = useState({
    owner: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: ''
  })
  
  console.log(info)
  
  return (
    <div className="app">
      <Card info={info}/>
      <CardForm info={info} setInfo={setInfo}/>
    </div>
  );
}

export default App;
