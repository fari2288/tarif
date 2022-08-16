import './App.css';
import Tarif from './Components/Tarif';


const tarifs=[
  {title:'Безлимитный 300', price:'300/мес', speed: 'до 10 Мбит/сек', text:'объем включенного трафика не ограничен'},
  {title:'Безлимитный 450', price:'450/мес', speed: 'до 50 Мбит/сек', text:'объем включенного трафика не ограничен'},
  {title:'Безлимитный 550', price:'550/мес', speed: 'до 100 Мбит/сек', text:'объем включенного трафика не ограничен', isSelected: true},
  {title:'Безлимитный 1000', price:'1000/мес', speed: 'до 200 Мбит/сек', text:'объем включенного трафика не ограничен'}
]


function App() {
  return (
    <div className="App">
      {
        tarifs.map((tarif)=>
<Tarif title={tarif.title} price={tarif.price} speed={tarif.speed} text={tarif.text} isSelected={tarif.isSelected}/>
        )
      }
    </div>
  );
}

export default App;
