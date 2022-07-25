import { Grid } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link";
import { Loader } from 'semantic-ui-react';
import { useState,useEffect } from 'react';
import {Button, Image,Modal,Search} from 'semantic-ui-react'

export default function ItemList({ list }) {
  
  const [open, setOpen] = useState(false)
  const [detail,setDetail]=useState({})
  const handleClick=(id)=>{
    console.log(id);
    let result=list.filter(x=>x.id===id)[0]
    setOpen(true)
    setDetail(result)
    console.log(result)
  }


  
  return (
    <div>
      {(list.length!==0)
      ?
      (
      <div className={styles.total}>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              {/* <Link href={`/view/${item.id}`}>
                <a> */}
                  <div className={styles.wrap} onClick={()=>{handleClick(item.id)}}>
                    <img
                      src={item.image_link}
                      alt={item.name}
                      className={styles.img_item}
                    />
                    <strong className={styles.tit_item}>{item.name}</strong>
                    <span className={styles.txt_info}>
                      {item.category} {item.product_type}
                    </span>
                    <strong className={styles.num_price}>${item.price}</strong>
                  </div>
                {/* </a>
              </Link> */}
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
      </div>
      )
      : (<div className={styles.loader}>
          <Loader active inline='centered' />
        </div>
      )
      }
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Modal</Button>}
        style={{width:"70%",height:"60%",position:"fixed",top:"10%"}}
      >
        <Modal.Header>{detail.name}</Modal.Header>
        <Modal.Content style={{width:"100%",display:"flex",margin:"auto"}} image>
          <Image style={{flex:"4",margin:"0 0 0 15%"}}size='medium' src={detail.image_link} wrapped />          
          <Modal.Description style={{flex:"6"}}>
            <h4>Price: {detail.price}</h4>
            <p>{detail.description}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>Go to Cart</Button>
          <Button onClick={() => setOpen(false)} positive>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>      

    </div>
  );
}