import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/homepage";
import Navigation from "./routes/navigation";
import Authentication from "./routes/authentication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/auth" element={<Authentication />} />
    </Routes>
  );
}

export default App;
