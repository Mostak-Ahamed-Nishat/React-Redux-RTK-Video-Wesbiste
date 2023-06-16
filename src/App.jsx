import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:videoId" element={<Video />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
