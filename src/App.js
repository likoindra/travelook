import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/homepage";
import Authentication from "./routes/authentication";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigation />}>
      </Route> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Authentication />} />
    </Routes>
  );
}

export default App;
