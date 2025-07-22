import React, { useEffect, useState } from 'react'
import Mynavbar from '../../components/navbar/mynavbar'
import ArticalItem from '../../components/artical/ArticalItem'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'


function Home() {
  
  const[articals, setArticals]=useState([])
  useEffect(()=>{
   axios.get('http://localhost:9091/artical')
   .then((response)=>setArticals(response.data))
  },[])
  return (
    <>
    <Container className='mt-2'>

      <Mynavbar />
      
       <h2>لیست مقالات</h2>
       <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4'>
        
        {articals.map((artical)=>(
           <Col><ArticalItem{...artical} /></Col>
        ))}
       </Row>
    
    </Container>
   
    </>
    
  )
}

export default Home