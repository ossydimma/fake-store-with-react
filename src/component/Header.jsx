import React from 'react'

function Header() {
  return (
    <header >
      <div className='header'>
        <div className=''>
            <img src="https://fakestoreapi.com/icons/logo.png" alt="logo" className='logo' style={{width: "50px"}} />
            <h2 style={{color: "red"}}>Fake store</h2>
        </div>
        <div className='searchBar'>
            <input type="text" placeholder='Search...' />
            <p className='searchIcon'>O</p>
        </div>
        <div>
          <div className='user'>
            <p >0</p>
            <p className='cart'>0</p>
          </div>
          <div className='logs'>
            <p>Welcome</p>
            <div className='sign'>
              <p className='signIn'>Sign in</p>
              <p>Sign up</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header