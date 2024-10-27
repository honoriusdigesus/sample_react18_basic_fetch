import {
    Link,
    Outlet,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import "./App.scss";
import Characters from "./pages/Characters.tsx";
import Home from "./pages/Home.tsx";

function App() {
  return (
    <>
      <h1>Routers</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default App;
