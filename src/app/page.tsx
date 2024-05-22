"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  let [topBarOpacity, setTopBarOpacity] = useState<number>(0.5);
  let [topBarFontColor, setTopBarFontColor] = useState<string>('black');

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
          setTopBarOpacity(0.5);
        }else{
          setTopBarOpacity(1);
        }
    
        // Check if scrolled down by 10% or more
        if (scrollPercentage >= 10) {
        }
    })
  }, []);
  



  return (
    <div style={{backgroundColor:'green', height:'100vh'}}>
      <div style={{
        backgroundColor:'yellow', 
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        textAlign:'center', 
        height:'80px', 
        flexDirection:'row', 
        position:'fixed',
        width:'100%',
        opacity: topBarOpacity,
        }}>
        <div style={{flex:'1', color: topBarFontColor}}>로고</div>
        <div style={{flex:'1', color: topBarFontColor}}>가위바위보</div>
        <div style={{flex:'1', color: topBarFontColor}}>다빈치게임</div>
        <div style={{flex:'1', color: topBarFontColor}}>미개발</div>
        <div style={{flex:'1', color: topBarFontColor}}>미개발</div>
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
