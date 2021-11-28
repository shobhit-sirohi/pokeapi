import { useEffect, useState } from "react";
import { pokemon } from "./api/Api";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Pokemon from "./pages/Pokemon";
import Particular from "./pages/Particular";

const App = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    pokemon()
      .then((res) => {
        return setApi(res.data.results);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/pokemon" />}
        />
        <Route path="/pokemon" element={<Pokemon />} />
        {api.map((p, i) => (
          <Route
            key={i}
            path={`/${p.name}`}
            element={<Particular page={i + 1} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
