import React  from 'react';
import './styles/App.css';
import todologo from './images/to-do-list.png';
import { ListaDeTareas } from './components/ListaDeTareas';

function App() {
  return (
    <div className='to-do-list-container'>
      <div className='logo-container'>
        <img 
        src={todologo}
        className='to-do-list-logo' />
      </div>
      <div className='main-list'>
        <h1>My homework</h1>
        <ListaDeTareas />

      </div>
      
    </div>
  );
}

export default App;
