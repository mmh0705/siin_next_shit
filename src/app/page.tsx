"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';

export default function Home() {
  let transParentPurple:string = 'rgba( 177, 16, 227, 0.5 )';
  let lightPurple:string = 'rgba( 188, 52, 255, 1 )';
  let darkPurple:string = 'rgba( 131, 38, 207, 1 )';

  let [topBarBackgroundColor, setTopBarBackgroundColor] = useState<string>(transParentPurple);
  let [topBarFontColor, setTopBarFontColor] = useState<string>('white');
  let [isHovered, setIsHovered] = useState<boolean>(false);
 
  useEffect(() => {
    if(window.scrollY === 0){
      setTopBarBackgroundColor(transParentPurple);
      setTopBarFontColor('white');
    }else{
      setTopBarBackgroundColor(lightPurple);
      setTopBarFontColor('black');
    }
    window.addEventListener('scroll', function() {
      //Get the number of pixels the document is currently scrolled vertically
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Check if scrolled all the way to the top
      if (scrollPosition === 0) {
        setTopBarBackgroundColor(transParentPurple);
        setTopBarFontColor('white');
        console.log('wow1');

      }else{
        setTopBarBackgroundColor(lightPurple);
        setTopBarFontColor('black');
        console.log('wow2');
      }
    })
    
  }, []);
  

  return (
    <div style={{backgroundColor:'green', height:'100vh'}}>
      <div 
        style={{
          backgroundColor: topBarBackgroundColor, 
          
          display:'flex', 
          justifyContent:'center', 
          alignItems:'center', 
          flexDirection:'row', 
          
          textAlign:'center', 
          
          height:'70px', 
          width:'100%',
          
          position:'fixed',
          transition: 'background-color 0.1s',
        }}
      >

       
        
        <div style={{
          display:"flex", 
          justifyContent:'center',
          alignItems:'center',

          height:'100%',

          flexDirection:"row", 
          //maxWidth:'1200px',
          marginLeft:'auto', marginRight:'auto'}}
        >

          <div 
            style={{
              //backgroundColor:'yellow', 
              paddingRight:'150px', height:'100%', display:'flex', alignItems:'center'
            }}
          >
            <img src="/caresensair_logo2_white.png" style={{height:'30px'}}/>
            {/* <img src="/lambo.svg" style={{height:'50px'}}/>
            <img src="/Ferrari.svg" style={{height:'50px'}}/> */}
          </div>
          <div style={{ color: topBarFontColor, fontSize:'20px', transition: 'color 0.2s', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' ,
            //backgroundColor:'green',
            paddingLeft:'25px', paddingRight:'25px'}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            메뉴
          </div>
          <div style={{ color: topBarFontColor, fontSize:'20px', transition: 'color 0.2s', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', 
            paddingLeft:'25px', paddingRight:'25px'}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            가위바위보
          </div>
          <div style={{ color: topBarFontColor, fontSize:'20px', transition: 'color 0.2s', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', 
            paddingLeft:'25px', paddingRight:'25px'}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            다빈치게임
          </div>
          <div style={{ color: topBarFontColor, fontSize:'20px',transition: 'color 0.2s', height:'100%', display:'flex', alignItems:'center', 
            paddingLeft:'25px', paddingRight:'25px'}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            미개발
          </div>

          <div style={{ color: topBarFontColor, fontSize:'20px',transition: 'color 0.2s', height:'100%', display:'flex', alignItems:'center', 
            paddingLeft:'25px', paddingRight:'25px'}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            미개발
          </div>

          <div 
            style={{
              //backgroundColor:'yellow', 
              color: topBarFontColor,
              transition: 'color 0.2s', 
              paddingLeft:'150px', height:'100%', display:'flex', alignItems:'center'
            }}
          >
            <PersonIcon style={{fontSize:'18px'}}/>
            로그인
          </div>
        </div>

      </div>
      
      <div 
        style={{
          backgroundColor:'white', 
          position:'fixed', 
          top:'70px', 

          height: isHovered? '100px': '0px',
          
          width:'100%',
          transitionDuration: '0.15s',
          transitionTimingFunction: 'ease-in-out',

          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          //transition-timing-function: ease-in-out;
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{
          display:"flex", 
          justifyContent:'center',
          alignItems:'center',
          
          //backgroundColor:'green',

          height:'100%',

          flexDirection:"row"}}
        >
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', 
          fontSize:'20px', height:'100%', opacity:isHovered ? '1' : '0', transitionDuration: '0.3s',
          paddingLeft:'25px', paddingRight:'25px'}}>
            메뉴
          </div>
          <div style={{display:'flex', alignItems:'center', opacity:isHovered ? '1' : '0', transitionDuration: '0.3s',
          fontSize:'20px',height:'100%', 
          paddingLeft:'25px', paddingRight:'25px' }}>
            가위바위보
          </div>
          
          <div style={{display:'flex', alignItems:'center', opacity:isHovered ? '1' : '0', transitionDuration: '0.3s', 
          fontSize:'20px' ,height:'100%' , 
          paddingLeft:'25px', paddingRight:'25px'}}>
            다빈치게임
          </div>
          
          <div style={{display:'flex', alignItems:'center', opacity:isHovered ? '1' : '0', transitionDuration: '0.3s', 
          fontSize:'20px' ,height:'100%', 
          paddingLeft:'25px', paddingRight:'25px'}}>
            미개발
          </div>
          
          <div style={{display:'flex', alignItems:'center', opacity:isHovered ? '1' : '0', transitionDuration: '0.3s', 
          fontSize:'20px' ,height:'100%', 
          paddingLeft:'25px', paddingRight:'25px'}}>
            미개발
          </div>
        </div>
      </div>

      <div style={{height:'auto', color:'black'}}>
        <img src="/one_cyberpunk.gif" style={{width:'100%'}}/>
      </div>
      
      <div style={{backgroundColor: darkPurple, height:'500px', color:'white', }}>
        <div>
         
        </div>
      </div>
    </div>
  );
}
