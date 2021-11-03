import './../../scss/App.css';
import Route from './Route';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (
      async () => {
        try {
          const response = await axios.get('user');
          const user = response.data;
          setUser(user);
        } catch (e) {
          setUser(null);
        }
      }
    )();
  }, []);

  return (
    <div className="App">
      <Route user={user} />
    </div>
  );
}

export default App;
