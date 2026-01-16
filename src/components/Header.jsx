import "../styles/header.css";
import {handlelogin} from '../pages/Login'
import Search from "./Search";
import { useState } from "react";

export default function Header(handlelogin) {
  
      const get_username_from_url = () => {
          const url_split = window.location.pathname.split('/')
          return url_split[url_split.length - 1]
      }
  
      const [username, setUsername] = useState(get_username_from_url())
  
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">Voyage</h1>

        
    <Search />
        <div className="auth-buttons">
          {/* <button className="login">{handlelogin ? (<a href="/:u">Dashboard</a>) :'Login'}</button> */}

          <button className="login">{handlelogin ? (<a href="create/post">Create Post</a>) :'Login'}</button>
          <button className="register">{handlelogin ? (``) :'Register'}</button>
        </div>
      </div>
    </header>
  );
}
