import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ItemList from '../src/component/ItemList'
import axios from 'axios'
import { useEffect,useState } from 'react'

import { useRouter } from 'next/router'


export default function Home() {
  const [list,setList]=useState([]);

  const router=useRouter()
  const API_URL =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  useEffect(() => {
    fetchData()
  }, []);
  const fetchData= async ()=>{
    const result=await axios.get(API_URL)     
      setList(result.data)
      console.log(result.data)
  }
  

  return (
    <div>
      <Head>
        <title>GOLDENGATES</title>
      </Head>
      <ItemList list={list}></ItemList>
    </div>
  )
}
