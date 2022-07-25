import React from 'react';
import {useEffect, useState} from 'react'
import style from './Footer.module.css'
export default function Footer () {
  return (
    <div className={style.container}>
      <div className={style.footer_wrapper}>
        <h4>Copyright. All rights reversed.</h4>
      </div>
    </div>
  );
}
