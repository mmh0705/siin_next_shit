"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
//import { keyframes } from "@emotion/react";
import styled, { keyframes } from 'styled-components';

export default function Home() {
  let transParentPurple:string = 'rgba( 177, 16, 227, 0.5 )';
  let lightPurple:string = 'rgba( 188, 52, 255, 1 )';
  let darkPurple:string = 'rgba( 131, 38, 207, 1 )';

  let [topBarBackgroundColor, setTopBarBackgroundColor] = useState<string>(transParentPurple);
  let [topBarFontColor, setTopBarFontColor] = useState<string>('white');
  let [isHovered, setIsHovered] = useState<boolean>(false);
 
  let [visible, setVisible] = useState<boolean>(false);


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
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
  }, 1000);
  }, [isHovered]);
  
  const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;
  const fadeIn = keyframes`
    0% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
  `;
  const fillText  = keyframes`
  0% {
    background-size: 0% 100%;
  }
  100% {
    background-size: 100% 100%;
  }
`;
  const slideDown = keyframes`
  0% { 
    width: 0px; 
    height: 0px; 
  } 

  30% { 
      width: 50px; 
      height: 0px; 
  } 

  60% { 
      width: 50px; 
      height: 80px; 
  } 
  `;

  const fillClip = keyframes`
    from {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); /* 애니메이션 시작 시 클립 경로를 사각형으로 설정합니다. */
    }
    to {
      clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%); /* 애니메이션 종료 시 클립 경로를 직사각형으로 설정합니다. */
    }
  `;
  
  const fill = keyframes`
    from {
      background-position: 0%; /* 애니메이션 시작 시 배경 위치를 0%로 설정합니다. */
    }
    to {
      background-position: 100%; /* 애니메이션 종료 시 배경 위치를 100%로 설정합니다. */
    }
  `;

  const hoverEnter = keyframes`
    0% { clip-path: inset(0 0 100% 0); }
    100% { clip-path: inset(0); }
  `;

  const hoverLeave = keyframes`
    0% { clip-path: inset(0); }
    100% { clip-path: inset(100% 0 0 0); }
  `;

  const RotatingDiv = styled.div`
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: red;
    animation: ${slideDown} 2s linear infinite;
  `;

  const AppearTextDiv = styled.div`
    color: transparent;
    background-clip: text;
    background-image: linear-gradient(to bottom, transparent 0%, #000 100%); 
    animation: ${fill} 2s ease-in-out infinite; 
  `;

  const FillTextDiv = styled.div`
  color: transparent;
  clip-path: url(#clip-path); /* 글자 모양의 클립 경로를 설정합니다. */
  animation: ${fillClip} 2s ease-in-out infinite;
  `;

  const HappyDiv = styled.div`
    display: flex;
    align-items: center; 
    font-size: 20px;
    height: 100%; 
    padding-left: 25px; 
    padding-right: 25px;
    animation: 2s ${isHovered ? hoverEnter : hoverLeave};
  `;
  return (
    <div style={{height:'100vh'}}>
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
        
        <div 
          style={{
            display:"flex", 
            justifyContent:'center',
            alignItems:'center',

            height:'100%',

            flexDirection:"row", 
            width:'90%',
            maxWidth:'1200px',
            marginLeft:'auto', marginRight:'auto'
          }}
        >

          <div 
            style={{
              //backgroundColor:'white', 
              //paddingRight:'140px', 
              height:'100%', display:'flex', alignItems:'center'
            }}
          >
            <img src="/caresensair_logo2_white.png" style={{height:'30px'}}/>
          </div>

          <div 
            style={{
              color: topBarFontColor, 
              fontSize:'20px', 
              transition: 'color 0.2s', 
              height:'100%', 
              display:'flex', 
              alignItems:'center', 
              justifyContent:'center' ,
              paddingLeft:'65px', 
              paddingRight:'25px',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            메뉴
          </div>

          <div 
            style={{
              color: topBarFontColor, 
              fontSize:'20px', 
              transition: 'color 0.2s', 
              height:'100%', 
              display:'flex', 
              alignItems:'center', 
              justifyContent:'center', 
              paddingLeft:'25px', 
              paddingRight:'25px'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            가위바위보
          </div>

          <div 
            style={{
              color: topBarFontColor, 
              fontSize:'20px', 
              transition: 'color 0.2s', 
              height:'100%', 
              display:'flex', 
              alignItems:'center', 
              justifyContent:'center', 
              paddingLeft:'25px', 
              paddingRight:'25px'       
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            다빈치게임
          </div>
            
          <div style={{
            //backgroundColor:'purple',
            color: topBarFontColor, fontSize:'20px',transition: 'color 0.2s', height:'100%', display:'flex', alignItems:'center', 
            paddingLeft:'25px', paddingRight:'25px'}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            미개발
          </div>

          <div style={{
            //backgroundColor:'red',
            color: topBarFontColor, fontSize:'20px',transition: 'color 0.2s', height:'100%', display:'flex', alignItems:'center', 
            paddingLeft:'25px', paddingRight:'25px'}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            미개발
          </div>

          <div style={{flexGrow:'1'}}></div>

          <div 
            style={{
              color: topBarFontColor,
              transition: 'color 0.2s', 
              height:'100%', display:'flex', alignItems:'center',
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
          
          overflow: 'hidden',

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
          <style>
              {`
              @keyframes fillText {
                0% {
                  background-size: 0% 100%;
                }
                100% {
                  background-size: 100% 100%;
                }
              }
            `}
            </style>
          <div 
            style={{
              display:'flex', 
              alignItems:'center', 
              fontSize:'20px',
              height:'100%', 
              paddingLeft:'25px', 
              paddingRight:'25px',
              // WebkitTextFillColor: isHovered? 'white': 'black',
              // WebkitTextStroke: '1px black',
              // // -webkit-text-fill-color: white;
              // // -webkit-text-stroke: 1px black;
              // animation: '2s linear infinite',
              // position: 'relative',

              backgroundColor:'blue',
              //color: 'transparent',
              //backgroundClip: 'text',
              //backgroundImage: 'linear-gradient(to bottom, transparent 0%, #000 100%)',
              clipPath: 'circle(25% at 50% 50%)',
              //animation: 'fillText 2s ease-in-out infinite',
            }}
          >
            메뉴
          </div>
          <HappyDiv>
            글자 내용
          </HappyDiv>
          {/* <div 
            style={{
              //height:'100%', 
              backgroundColor: 'red',
              position:'absolute',
              paddingLeft:'25px', 
              paddingRight:'25px',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',

              height: isHovered? '100px': '0px',
              transitionDuration: '1s',
              transitionTimingFunction: 'ease-in-out',
              fontSize:'30px'
            }}
          >
            asdf
          </div> */}
          {/* <RotatingDiv>
            <h1>adsf</h1>
            
          </RotatingDiv> */}

          <div 
            style={{
              display:'flex', 
              alignItems:'center', 
              fontSize:'20px',height:'100%', 
              paddingLeft:'25px', 
              paddingRight:'25px' 
            }}
          > 
            가위바위보
          </div>
          
          <div
           style={{display:'flex', alignItems:'center', 
            fontSize:'20px' ,height:'100%' , 
          paddingLeft:'25px', paddingRight:'25px'}}>
            {/* 다빈치게임 */}
          </div>
          
          <div 
            style={{
              display:'flex', 
              alignItems:'center',
              fontSize:'20px',
              height:'100%', 
              paddingLeft:'25px', 
              paddingRight:'25px',
              //backgroundColor:'red'
            }}
          >
            미개발
          </div>
          
          <div style={{display:'flex', alignItems:'center',
          fontSize:'20px' ,height:'100%', 
          paddingLeft:'25px', paddingRight:'25px'}}>
            미개발
          </div>
        </div>
      </div>

      <div style={{height:'auto', color:'black'}}>
        <img src="/one_cyberpunk.gif" style={{width:'100%'}}/>
      </div>
      
      <div style={{backgroundColor: darkPurple, height:'500px', color:'white', display:'flex', flexDirection:'column'}}>
        
        <div style={{height:'200px', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div style={{width:'90%', maxWidth:'1200px', borderBottom:'1px solid #fff', height:'100%'}}>
          </div>
        </div>

        <div style={{height:'150px',display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div style={{width:'90%', maxWidth:'1200px', borderBottom:'0.5px solid #fff', height:'100%', display:'flex', alignItems:'center'}}>
            <div style={{fontSize:'13px'}}>
              © Copyright i-SENS, Inc. All Rights Reserved.
              This website is intended for the worldwide audience and may contain products or information not accessible or valid in your country.
              Please be aware that we are not responsible for any such information that may not comply with your country’s regulations or usage.
            </div>
          </div>
        </div>
        
        <div style={{height:'150px',display:'flex', justifyContent:'center', alignItems:'center'}} >
          <div style={{width:'90%', maxWidth:'1200px', height:'100%'}}>
            <div style={{paddingTop:'20px'}}>
              대한민국 (한국어)
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
