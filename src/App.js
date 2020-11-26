import logo from './logo.svg';
import './App.css';
import Forecast from "./Forecast";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Forecast/>
    </div>
  );
}

export default App;
