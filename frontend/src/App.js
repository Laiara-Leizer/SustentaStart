import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './menu'
import Escolha from './escolha'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/escolha" element={<Escolha/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
