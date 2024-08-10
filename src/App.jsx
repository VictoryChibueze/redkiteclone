import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import { useState } from "react";
import Connect from "./components/Connect.jsx";
import NotFound from "./components/NotFound.jsx";
import Home from "./components/Home.jsx";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <body>
      <BrowserRouter>
        <NavBar onOpenModal={handleOpenModal} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pool" element={<h1>Pool</h1>} />
          <Route path="/staking" element={<h1>Staking</h1>} />
          <Route path="/phishkite" element={<h1>Blog</h1>} />
          <Route path="/blog" element={<h1>blog</h1>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {isModalOpen && <Connect onOpenModal={handleOpenModal} />}
    </body>
  );
}

export default App;
