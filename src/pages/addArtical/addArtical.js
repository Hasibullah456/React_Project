import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Mynavbar from '../../components/navbar/mynavbar'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Navigate, Router, useNavigate } from 'react-router-dom';
function AddArtical() {
   const navigate = useNavigate();
  // const [title,setTitle]=useState('');
  // const [desc,setDesc]=useState('');
  // const [writter,setWritter]=useState('');
  // const [catagory,setCatagory]=useState('');
  // const [image,setImage]=useState('');
  // const [reading_time,setReading_time]=useState('');
  
  const[formdata,setFormdata]=useState({})
  
  const setformclear=()=>{
       setFormdata({
         title:'',
         desc:'' ,
         image :'',
         writter :'',
        catagory :'',
        reading_time:'' ,
 

       })
  }
   const formhandelar=(e)=>{

     setFormdata({...formdata,[e.target.name]:e.target.value})
     
    }
const clickHandler = (e) => {
  // e.preventDefault(); // <-- Add this line to stop the form from submitting normally
  // try {
  //   axios.post('http://localhost:9091/artical', {
  //     title,
  //     desc ,
  //     image ,
  //     writter ,
  //     catagory ,
  //     reading_time ,
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //     alert('مقاله با موفقیت ساخته شد');
  //     navigate('/'); // Assuming you have a router set up
  //   })
  // } catch (error) {
  //   console.error('Error creating article:', error);
  //   alert('خطا در ساخت مقاله');
  // }
  
  axios.post('http://localhost:9091/artical',formdata) 
    .then(re =>{
      if(re.status===201){
         Swal.fire({
         title:'مقاله با موفقیت ساخته شد!',
         timer:2000,
         timerProgressBar:true,
         showConfirmButton:false
     
      
  })  
      
      }
})

    .catch(error=>{
         Swal.fire({
         title:'مقاله با موفقیت ساخته نه شد!',
         timer:2000,
         icon:error,
         timerProgressBar:true,
         showConfirmButton:false
  })  
    })

setformclear()
    
    
    
  

}
      
   
  

   
  
// const setTiltleHandler=(e)=>{
//   setTitle(e.target.value);
// }
// const setDescHandler=(e)=>{
//   setDesc(e.target.value);
// }
// const setWritterHandler=(e)=>{ 
//   setWritter(e.target.value);
// }
// const setSubject1Handler=(e)=>{
//   setCatagory(e.target.value);
// }
// const setImageHandler=(e)=>{
//   setImage(e.target.value);
  
// }
// const setReadTimeHandler=(e)=>{
//   setReading_time(e.target.value);
// }
  return (
    <>
    <Mynavbar />
    <div>addArtical</div>
    <div  className='container'>
    <Form  className='w-50 mx-auto mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>عنوان مقاله</Form.Label>
        <Form.Control name="title"
         value={formdata.title}
        type="text" onChange={formhandelar} placeholder="عنوان مقاله را وارد کنید" />

      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>توضیح کوتاه</Form.Label>
        <Form.Control name="des" value={formdata.des} type="text" onChange={formhandelar} placeholder="لطفا توضیح کوتاه وارد کنید" />

      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> نویسنده مقاله</Form.Label>
        <Form.Control name="writter" value={formdata.writter} type="text" onChange={formhandelar} placeholder="نام نویسنده را وارد کنید" />

      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>موضوع مقاله</Form.Label>
        <Form.Control type="text" value={formdata.catagory} name="catagory" onChange={formhandelar} placeholder="موضوع مقاله را وارد کنید" />

      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>عکس مقاله</Form.Label>
        <Form.Control type="text" value={formdata.image} name="image" onChange={formhandelar} placeholder="لینک عکس مقاله را وارد کنید" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>مدت زمان خواندن مقاله</Form.Label>
        <Form.Control type="text" value={formdata.reading_time} name="reading_tiem" onChange={formhandelar} placeholder="مدت زمان خواندن مقاله را وارد کنید" />

      </Form.Group>

      
      
      <Button variant="primary" onClick={clickHandler} type="submit">
        ساخت مقاله
      </Button>
    </Form>
    </div>
    </>
    
  )
}

export default AddArtical