import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import './ImageSlider.css';
function ImageSlider() {
  
  const imgs=[
    {id:0,value:"https://source.unsplash.com/user/c_v_r/1900x800", disc:" Image First Lorem ipsum dolor sit amet consectetur adipisicing elit. Non asperiores in debitis eum possimus tempore atque corporis aspernatur porro alias"},
    {id:1,value:"https://wallpaperaccess.com/full/2637581.jpg", disc:"Image second Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni explicabo ratione sed quasi inventore quaerat autem voluptatibus provident, beatae dolorum"},
    {id:2,value:"https://source.unsplash.com/user/c_v_r/100x100", disc:"Image Third Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim corrupti ex blanditiis aspernatur tempore culpa facilis eos doloribus minima"},
    {id:3,value:"https://i.dummyjson.com/data/products/11/1.jpg", disc:"Image Forth Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum veniam harum quod adipisci illo quaerat consequuntur sequi maxime consectetur corrupti"},
    {id:4,value:"https://i.dummyjson.com/data/products/11/2.jpg", disc:"Image Fifth Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ea mollitia at esse nihil! Iste quisquam iusto deleniti expedita vitae"},
    {id:5,value:"https://i.dummyjson.com/data/products/11/3.jpg", disc:"Image Sixth Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic reiciendis sint et praesentium maiores quia aliquam nulla inventore omnis beatae"},
    {id:6,value:"https://i.dummyjson.com/data/products/10/1.jpg",disc:"Image Seventh Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic reiciendis sint et praesentium maiores quia aliquam nulla inventore omnis beatae"},
  ]
  const [wordData,setWordData]=useState(imgs[0])
  const [showData,setShowData]=useState("");

  const handleClick=(index)=>{
    console.log(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
   
   function HandleArrw(index)
   {
     
   }

  return (
    <div className="main">
      <div className='DisplayData'>
      <div className='DisplayImg'>
      <img src={wordData.value} height="300" width="500" alt="img" /> 
      </div>

      <div className='DisplayDisc'>  {wordData.disc} </div>
      </div>
      <div className='flex_row'>
      <div className="arrow" onClick={HandleArrw} ><BsFillArrowLeftCircleFill size={40}/></div>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
        </div>
        )}
         <div className="arrow"><BsFillArrowRightCircleFill size={40}/></div> 
      </div>
    </div>
  );
  
}

export default ImageSlider;






