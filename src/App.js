
import './App.css';
import RouteCompo from './HANDSON4/RouteCompo';
import LinkComp from './HANDSON4/LinkComp';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <LinkComp/>
      <RouteCompo/>
    </BrowserRouter>
    </>
    
  );
}

export default App;
