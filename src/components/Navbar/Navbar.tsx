import React, { useState } from 'react';

export const Navbar = () => {

  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img alt="GitHub Icon" src="/images/github-icon.svg" />
        GitHub Search
        <a href="#" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={() => setIsMenuActive(prevState => !prevState)}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className={`navbar-menu ${isMenuActive ? 'is-active': ''}`}>
        <div className="navbar-start">
          <a className="navbar-item" href="/search/users">
            Users
          </a>
          <a className="navbar-item" href="/search/repositories">
            Repositories
          </a>
        </div>
      </div>
    </nav>
  )
}