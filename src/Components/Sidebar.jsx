import React from 'react'


export default function Sidebar({selectedTab , setSelectedTab}) {
  return (
    <>
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{"width": 280}}>
    <p href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi me-2" width="40" height="32"></svg>
      <span className="fs-4">Sidebar</span>
    </p>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={()=>setSelectedTab("Home")}>
        <p  className={`nav-link ${selectedTab === 'Home' ? 'active' : 'text-white'}`} aria-current="page" >
          <svg className="bi me-2 " width="16" height="16"></svg>
          Home
        </p>
      </li>
      <li onClick={()=>setSelectedTab("Create")}>
        <p  className={`nav-link ${selectedTab === 'Create' ? 'active' : 'text-white'}`} >
          <svg className="bi me-2" width="16" height="16"></svg>
          Create Post
        </p>
      </li>
      
    </ul>
    <hr/>
    <div className="dropdown">
      <p  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </p>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><p className="dropdown-item" >New project...</p></li>
        <li><p className="dropdown-item" >Settings</p></li>
        <li><p className="dropdown-item" >Profile</p></li>
        <li><hr className="dropdown-divider"/></li>
        <li><p className="dropdown-item" >Sign out</p></li>
      </ul>
    </div>
  </div></>
  )
}
