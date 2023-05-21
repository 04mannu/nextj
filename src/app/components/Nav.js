import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <nav style={{marginTop:"0"}}>
        <ul style={{display: 'flex', textAlign:"left", justifyContent:"end",alignItems:"center", gap: "15px",height:"vh"}}>
            <li>
                <Link href="/">
                     Home
                </Link>
            </li>
            <li>
                <Link href="/about">
                     about
                </Link>
            </li>
            <li>
                <Link href="/movie">
                     movie
                </Link>
            </li>
            <li>
                <Link href="/contact">
                     contact
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav