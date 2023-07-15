import React from 'react'
import { Link } from 'react-router-dom'
import {SearchIcon } from '../icons'

function Navbar() {
  return (
    <div>
        <Link >logo</Link>
        <div>
            <input placeholder='Search product...'/>
            <SearchIcon />
        </div>
        <nav>
            <Link></Link>
        </nav>
    </div>
  )
}

export default Navbar