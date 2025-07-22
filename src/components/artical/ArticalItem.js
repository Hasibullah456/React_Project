import React from 'react'
import Card from 'react-bootstrap/Card';
import { LuClock } from "react-icons/lu";
import { TiArrowLeftThick } from "react-icons/ti";
import './ArticalItem.css'
import { Link } from 'react-router-dom';
function ArticalItem(props) {
  return (
    <Card >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className='py-2'>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Link to={`/artical/${props.id}`}>
        <span className='read-more'>
            <span> ادامه مقاله</span>
             <span><TiArrowLeftThick /></span>
        </span><br />
        </Link>
        
        
        <span>کتگوری : {props.catagory}</span>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between align-items-center py-3'>
        
        <span>نوسینده : {props.writter}</span>
        <span> <LuClock />:  {props.reading_time}دقیقه</span>
      </Card.Footer>
    </Card>
  )
}

export default ArticalItem