import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return( <><h2>🏠 Home Page</h2>
        
        </>
  );

}

function About() {
  return <h2>ℹ️ About Page</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Vinoth</h1>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
