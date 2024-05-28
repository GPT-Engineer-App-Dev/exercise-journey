import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import WorkoutLog from "./pages/WorkoutLog.jsx"; // Import the new WorkoutLog component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/workout-log" element={<WorkoutLog />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
