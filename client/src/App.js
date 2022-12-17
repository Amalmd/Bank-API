import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AddUserPage from "./pages/AddUser.page";
import AllUsersPage from "./pages/AllUsers.page";
/* import SearchUserPage from "./pages/SearchUser.page";
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<SearchUserPage />} /> */}
          <Route path="/transfer" />
          <Route path="/allusers" element={<AllUsersPage />} />
          {/* /allUsers */}
          <Route path="/add" element={<AddUserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
