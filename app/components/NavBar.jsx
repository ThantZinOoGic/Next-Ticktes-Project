import Link from 'next/link'
import React from 'react';
import logo from './dojo-logo.png';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav>
      <Image
        src={logo}
        alt="Dojo logo Image"
        width={70}
        quality={100}
        placeholder='blur'/>
        <h6>Dojo</h6>
        <Link href={'/'}>Dashboard</Link>
        <Link href={'/tickets'}>Ticktes</Link>
    </nav>
  )
}
