import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Connect from "./components/Connect.jsx";

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/pool" element={<h1>Pool</h1>} />
          <Route path="/staking" element={<h1>Staking</h1>} />
          <Route path="/phishkite" element={<h1>Blog</h1>} />
          <Route path="/blog" element={<h1>blog</h1>} />
        </Routes>
      </BrowserRouter>
      <Connect />
    </main>
  );
}

export default App;
