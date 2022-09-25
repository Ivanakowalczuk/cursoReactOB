import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetinF from './components/pure/greetinF';
import TaskListComponent from './components/container/task-list';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/* <Greeting name="Ivana"></Greeting> */}
       {/* <GreetinF name="Ivana"></GreetinF> */}
       {/* <TaskListComponent></TaskListComponent> */}
       {/* hooks */}
       {/* <Ejemplo1></Ejemplo1> */}
       {/* <Ejemplo2></Ejemplo2> */}
       {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* Todo loq ue hay aquí, es tratado como props.children */}
      <Ejemplo4 nombre="Martín">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>

       
      </header>
    </div>
  );
}

export default App;
