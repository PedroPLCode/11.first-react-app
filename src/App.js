import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container'
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import List from './components/List/List';
import PageNotFound from './components/PageNotFound/PageNotFound';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;