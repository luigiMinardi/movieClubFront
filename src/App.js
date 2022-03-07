import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
