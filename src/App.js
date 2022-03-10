import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Containers/Home';
import Login from './Containers/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;