"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  let transParentPurple:string = 'rgba( 177, 16, 227, 0.5 )';
  let darkYellow:string = 'rgba( 242, 240, 81, 1 )';

  let [topBarBackgroundColor, setTopBarBackgroundColor] = useState<string>(transParentPurple);
  let [topBarFontColor, setTopBarFontColor] = useState<string>('white');

  useEffect(() => {
    window.addEventListener('scroll', function() {
        //Get the number of pixels the document is currently scrolled vertically
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
        // Get the total scrollable height of the document
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const totalScrollableHeight = documentHeight - windowHeight;
    
        // Calculate the scroll percentage
        const scrollPercentage = (scrollPosition / totalScrollableHeight) * 100;
    
        // Check if scrolled all the way to the top
        if (scrollPosition === 0) {
          setTopBarBackgroundColor(transParentPurple);
          setTopBarFontColor('white');

        }else{
          setTopBarBackgroundColor(darkYellow);
          setTopBarFontColor('black');
        }
    
        // Check if scrolled down by 10% or more
        if (scrollPercentage >= 10) {
        }
    })
  }, []);
  



  return (
    <div style={{backgroundColor:'green', height:'100vh'}}>
      <div style={{
        backgroundColor: topBarBackgroundColor, 
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        textAlign:'center', 
        height:'70px', 
        flexDirection:'column', 
        position:'fixed',
        width:'100%',
        transition: 'background-color 0.1s',
        }}>

        <div style={{
          display:"flex", 
          flexDirection:"row", 
          //backgroundColor:'green', 
          maxWidth:'1200px',
          width:'80%'}}>
          <div style={{flex:'1', color: topBarFontColor, fontSize:'20px', transition: 'color 0.2s',}}>로고</div>
          <div style={{flex:'1', color: topBarFontColor, fontSize:'20px', transition: 'color 0.2s'}}>가위바위보</div>
          <div style={{flex:'1', color: topBarFontColor, fontSize:'20px', transition: 'color 0.2s'}}>다빈치게임</div>
          <div style={{flex:'1', color: topBarFontColor, fontSize:'20px',transition: 'color 0.2s'}}>미개발</div>
          <div style={{flex:'1', color: topBarFontColor, fontSize:'20px',transition: 'color 0.2s'}}>미개발</div>
        </div>
        
      </div>


      <div style={{height:'auto', color:'black'}}>
        <img src="/one_cyberpunk.gif" style={{width:'100%'}}/>
      </div>
      <div style={{backgroundColor:'blue', height:'500px', color:'black'}}>
        asdfasdf
      </div>
      <div style={{backgroundColor:'purple', height:'500px', color:'black'}}>
        asdfasdf
      </div>
      <div style={{backgroundColor:'orange', height:'500px', color:'black'}}>
        asdfasdf
      </div>
    </div>
  );
}
