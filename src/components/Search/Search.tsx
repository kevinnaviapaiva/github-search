import React, { useEffect } from 'react';
import { useUser } from "../../hooks/user";

export const Search = () => {
  const { userList, loadUserList } = useUser();

  useEffect(() => {
    loadUserList();
  }, [loadUserList])

  return (
    <div className="container">
      <div className="field">
        <div className="control has-icons-left">
          <input 
            className="input is-info is-normal is-focused is-rounded" 
            type="text" 
            placeholder="Search user..."
            onKeyDown={(e) => {
              if(e.code === 'Enter') {
                loadUserList();
              }
            }}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div>
        {userList.map(user => (
          <div>
            <img alt="" src={user.avatar_url}></img>
            <div>{user.login}</div>
          </div>
        ))}
      </div>
    </div>
  )
}