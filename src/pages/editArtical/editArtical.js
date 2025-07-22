
import axios from 'axios';
import Mynavbar from '../../components/navbar/mynavbar';
import { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom'
import { Button,Form } from 'react-bootstrap';
import Swal from 'sweetalert2';



function EditArtical() {

   const articalId=useParams().articalId;
   const[articalData,setArticalData]=useState({})   
   useEffect(()=>{
    axios.get(`http://localhost:9091/artical/${articalId}`)
    .then(res=>setArticalData(res.data)
    )
   }
   ,[])
   
   
   const formhandelar=(e)=>{
    setArticalData({...articalData,[e.target.name]:e.target.value})
   }
   
   const edithandaler=()=>{
     axios.put(`http://localhost:9091/artical/${articalId}`,articalData)
       Swal.fire({
              title:'مقاله با موفقیت اصلاح شد!',
              timer:2000,
              timerProgressBar:true,
              showConfirmButton:false
          
           
       })  
   }
  return (
    <>
    
    <Mynavbar />
    <div>addArtical</div>
    <div  className='container'>.
    <Form  className='w-50 mx-auto mt-5' onSubmit={formhandelar}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>عنوان مقاله</Form.Label>
        <Form.Control name="title"
         value={articalData.title}
        type="text" onChange={formhandelar} placeholder="عنوان مقاله را وارد کنید" />

      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>توضیح کوتاه</Form.Label>
        <Form.Control name="des" value={articalData.des} type="text" onChange={formhandelar} placeholder="لطفا توضیح کوتاه وارد کنید" />

      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> نویسنده مقاله</Form.Label>
        <Form.Control name="writter" value={articalData.writter} type="text" onChange={formhandelar} placeholder="نام نویسنده را وارد کنید" />

      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>موضوع مقاله</Form.Label>
        <Form.Control type="text" value={articalData.catagory} name="catagory" onChange={formhandelar} placeholder="موضوع مقاله را وارد کنید" />

      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>عکس مقاله</Form.Label>
        <Form.Control type="text" value={articalData.image} name="image" onChange={formhandelar} placeholder="لینک عکس مقاله را وارد کنید" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>مدت زمان خواندن مقاله</Form.Label>
        <Form.Control type="text" value={articalData.reading_time} name="reading_time" onChange={formhandelar} placeholder="مدت زمان خواندن مقاله را وارد کنید" />

      </Form.Group>

      
      
      <Button variant="primary" onClick={edithandaler} typ="submit">
        اصلاح مقاله
      </Button>
    </Form>
    </div>
    </>
  )
}

export default EditArtical