import Link from 'next/link'
import React from 'react';
import logo from './dojo-logo.png';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav>
        <Link href={'/'}>
          <Image
          src={logo}
          alt="Dojo logo Image"
          width={70}
          quality={100}
          placeholder='blur'/>
        </Link>
        <Link href={'/'}><h6>Dojo</h6></Link>
        <Link href={'/'}>Dashboard</Link>
        <Link href={'/tickets'}>Ticktes</Link>
    </nav>
  )
}
