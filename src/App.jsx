import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import { useState } from "react";
import Connect from "./components/Connect.jsx";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <main>
      <BrowserRouter>
        <NavBar onOpenModal={handleOpenModal} />
        <Routes>
          <Route path="/" />
          <Route path="/pool" element={<h1>Pool</h1>} />
          <Route path="/staking" element={<h1>Staking</h1>} />
          <Route path="/phishkite" element={<h1>Blog</h1>} />
          <Route path="/blog" element={<h1>blog</h1>} />
        </Routes>
      </BrowserRouter>
      {isModalOpen && <Connect onOpenModal={handleOpenModal} />}
    </main>
  );
}

export default App;
