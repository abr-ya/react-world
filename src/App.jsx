import { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import GlobalStyle, { StyledMain } from './components/styled/Common.styled';
import { Header } from './components';
import {
  Home, About, Error404, Country,
} from './pages';

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <StyledMain>
        <Routes>
          <Route path="/" element={<Home countries={countries} setCountries={setCountries} />} />
          <Route path="/country/:name" element={<Country />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </StyledMain>
    </Router>
  );
}

export default App;
