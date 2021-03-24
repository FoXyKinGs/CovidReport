import { BrowserRouter } from 'react-router-dom'
import Router from './router/index'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
 