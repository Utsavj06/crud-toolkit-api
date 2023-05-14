import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import UserPost from "./UserPost";
import CreatePost from "./UserPost/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserPost />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
