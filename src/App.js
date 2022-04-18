import './App.css';
import Form from './components/Form';
import ItemList from './components/ItemList';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <header>Redux Practice</header>
      <h1>Todo Lists</h1>
      <div className='card'>
        <div className='card-body'>
          <Form/>
          <ItemList/>
          <Details/>
        </div>
      </div>
    </div>
  );
}

export default App;
