import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <hr />
      <Shop></Shop>
      <ToastContainer/>
    </div>
  );
}

export default App;
