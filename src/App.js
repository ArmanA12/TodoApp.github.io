import './App.css';
import Navbar from './Component/Navbar';
import Users from './Component/Uses';
import Todo from './Component/Todo';

function App() {
  return (
    <div className="container-fluid  vh-100 vw-100" >
      <div className='d-flex justify-content-center align-item-center'>
        <Todo/>
      </div>
    </div>
  );
}

export default App;
