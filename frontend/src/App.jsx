import { VStack } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import BookDetails from "./pages/BooksDetail";  
import EditBookPage from "./pages/Editbook";  
import Homepage from "./pages/Homepage";
import NewBookPage from "./pages/NewBooks"; 
import Register from "./pages/Register";
import LoginPage from "./pages/Login";

function App() {
  return (
    <VStack minH="100vh" minW="100vw">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage />
                <Navbar />
              </> }/>
          <Route
            path="/newbook"
            element={
              <>
                <NewBookPage />
                <Navbar />
              </>}/>
          <Route
            path="/books/:id"
            element={
              <>
                <BookDetails />
                <Navbar />
              </>}/>
          <Route
            path="/editbook/:id"
            element={
              <>
                <EditBookPage />
                <Navbar />
              </>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </VStack>
  );
}

export default App;
