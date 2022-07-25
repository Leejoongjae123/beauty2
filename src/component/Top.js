import React from 'react';
import {useEffect, useState} from 'react'
import style from './Top.module.css'
import Link from 'next/link'
import { Search } from 'semantic-ui-react'

export default function Top () {

  return (
    <div>
      <nav className={style.nav}>
        <ul className={style.list__wrapper}>
          <Link href="/"><li><a>Home</a></li></Link>
          <Link href="/search"><li><a>Search</a></li></Link>
        </ul>
      </nav>
    </div>
  );
}
