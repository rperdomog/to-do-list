import './styles/App.css';
import todologo from './images/to-do-list.png';
import { Tarea } from './components/Tarea';
import { TareaFormulario } from './components/TareaFormulario';

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
        <TareaFormulario />
        <Tarea texto='Aprendiendo React' />

      </div>
      
    </div>
  );
}

export default App;
