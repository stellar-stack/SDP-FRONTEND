// import React from 'react'
// import "../styles/header.css";
// import { search_users } from '../endpoints/api';
// import { useState } from 'react';

// const Search = () => {
//     const [search, setSearch] = useState('')
//     const [users, setUsers] = useState([])

//     const handleSearch = async () => {
//         const users = await search_users(search)
//         setUsers(users)
//     }
//   return (
//     <>
    
//     <input
//           className="search"
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search communities or topics"
//           />
//           <div>

//         <button onClick={handleSearch} >search</button>
//           </div>

//          {
//             users.map((user) => {
//                 return <h1>{user.username}</h1>
//             } )
//          }
            
//           </>
//   )
// }

// export default Search


// const UserProfile = () => {
//     return(

//     )
// }

import React, { useState } from 'react';
import "../styles/search.css";
import { search_users } from '../endpoints/api';

const Search = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = async () => {
    if (query.trim() === '') {
      setUsers([]);
      setShowDropdown(false);
      return;
    }

    const results = await search_users(query);
    setUsers(results);
    setShowDropdown(true);
  };

  const handleSelectUser = (username) => {
    // redirect or open user profile
    window.location.href = `/${username}`;
    setShowDropdown(false);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query && setShowDropdown(true)}
        placeholder="Search users"
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>

      {showDropdown && users.length > 0 && (
        <ul className="search-dropdown">
          {users.map((user) => (
            <li
              key={user.id}
              className="search-item"
              onClick={() => handleSelectUser(user.username)}
            >
              <img
                src={`http://127.0.0.1:8000/api/${user.profile_picture}`}
                alt={user.username}
                className="search-avatar"
              />
              <span>{user.username}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
