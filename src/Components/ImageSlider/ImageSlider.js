import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiFillPlayCircle } from "react-icons/ai"
import './ImageSlider.css';
function ImageSlider() {
  
  const imgs=[
    {id:0,value:"https://i.dummyjson.com/data/products/11/1.jpg", disc:"Image First Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum veniam harum quod adipisci illo quaerat consequuntur sequi maxime consectetur corrupti"},
    {id:1,value:"https://i.dummyjson.com/data/products/11/2.jpg", disc:"Image Second Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ea mollitia at esse nihil! Iste quisquam iusto deleniti expedita vitae"},
    {id:2,value:"https://i.dummyjson.com/data/products/11/3.jpg", disc:"Image Third Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic reiciendis sint et praesentium maiores quia aliquam nulla inventore omnis beatae"},
    {id:3,value:"https://i.dummyjson.com/data/products/10/1.jpg",disc:"Image Forth Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic reiciendis sint et praesentium maiores quia aliquam nulla inventore omnis beatae"},
  ]
  const [wordData,setWordData]=useState(imgs[0]);

  const handleClick=(index)=>{
    let wordSlider=imgs[index];
    setWordData(wordSlider)
  }
function handlePlay()
{
  setInterval(()=>{
    let i = wordData.id;
      i = i + 1;
      if(i === imgs.length) {
        setWordData(imgs[0]);
        
      }
      else {
        let wordSlider=imgs[i];
        setWordData(wordSlider);
      }
  }, 3000)
  
}
  
   const handleBackward= () => 
   {
      let i = wordData.id;
      i = i - 1;
      if(i === -1) {
        setWordData(imgs[imgs.length - 1]);
      }
      else {
        let wordSlider=imgs[i];
        setWordData(wordSlider);
      }
   }

  

   const handleForward = () => {
      let i = wordData.id;
      i = i + 1;
      if(i === imgs.length) {
        setWordData(imgs[0]);
      }
      else {
        let wordSlider=imgs[i];
        setWordData(wordSlider);
      }
   }

  return (
    <div className="main">
      <div className='DisplayData'>
      <div className="play" onClick={() => handlePlay()} > <AiFillPlayCircle size={40}/> </div> 
      <div className='DisplayImg'>
          <img className='dispimg' src={wordData.value} height="300" width="500" alt="img" /> 
      </div>
      <div className='DisplayDisc'>  {wordData.disc} </div>
      </div>
      <div className='flex_row'>
      <div className="arrow" onClick={() => handleBackward()} ><BsFillArrowLeftCircleFill size={40}/></div>
        {imgs.map((data,i)=>
          <div className="thumbnail" key={i} >
            <img className={wordData.id===i?"clicked":""}  src={data.value} onClick={()=>handleClick(i)}  height="70" width="100" alt="img" />
          </div>
        )}
      <div className="arrow" onClick={() => handleForward()} ><BsFillArrowRightCircleFill size={40}/></div> 
      </div>
    </div>
    
  );
  
}



export default ImageSlider;