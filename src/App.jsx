import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UserList from './assets/UserList';
import UserDetail from './assets/UserDetail';

function App() {
  const [user, setUser] = useState([]);

  function fetchUserData() {
    fetch('https://randomuser.me/api?results=5')
      .then((data) => data.json())
      .then((data) => {
        setUser(data.results);
        console.log(data.results);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList userData={user} />} />
        <Route path="/user/:username" element={<UserDetail userData={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
