import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PagesByID from "./pages/PagesByID";
import { routeList } from "./routes";

function App() {
  return (
    <div className="px-10">
      <Navbar />
      <Routes>
        {routeList.map((route, idx) => (
          <Route
            path={route.path}
            element={route.element}
            key={idx.toString()}
          />
        ))}

        <Route path="/id" element={<PagesByID />} />
      </Routes>
    </div>
  );
}

export default App;
