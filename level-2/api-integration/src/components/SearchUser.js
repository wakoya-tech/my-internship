import { useState } from 'react';
import axios from 'axios';

function SearchUser() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (err) {
      setError('User not found');
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={fetchUser} disabled={loading || !username}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      
      {error && <p className="error">{error}</p>}
      
      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio}</p>
          <p>Followers: {userData.followers}</p>
        </div>
      )}
    </div>
  );
}

export default SearchUser;
