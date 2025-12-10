import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react'; // Pour la mise en page
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      {/* Flex direction column et minHeight 100vh permettent de coller le footer en bas */}
      <Flex direction="column" minHeight="100vh">
        <Navbar />
        
        {/* Box flex="1" permet au contenu de prendre toute la place disponible */}
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/jet/:id" element={<Details />} />
          </Routes>
        </Box>

        <Footer />
      </Flex>
    </BrowserRouter>
  );
}

export default App;