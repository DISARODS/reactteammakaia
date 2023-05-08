import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import styledF from 'styled-components';
import styled, { css } from 'styled-components';


// -------------import header------------------
import React, { useState } from 'react';

// -------------import images header------------------
import ImageHeader from "./assets/images/desktop/header/image-hero.jpg";
import ImageHeaderomobil from './assets/images/mobile/header/image-hero.jpg';
import LogoHeader from './assets/images/logo.svg';
import MenuHamburguesa from './assets/images/mobile/header/icon-hamburger.svg';
import LogoMobile from './assets/images/mobile/header/logomobile.svg';
import CloseMenu from "./assets/images/mobile/header/icon-close.svg";

// -------------import images main------------------

import ImageMain from "./assets/images/desktop/main/image-interactive.jpg";

// -------------import images footer------------------

import facebookIcon from './assets/images/icon-facebook.svg';
import twitterIcon from './assets/images/icon-twitter.svg';
import pinterestIcon from './assets/images/icon-pinterest.svg';
import instagramIcon from './assets/images/icon-instagram.svg';
import logoicon from './assets/images/logo.svg';


//--------------------const header-------------------
const list = [
  {
    texto: "About",
    link: "#About"
  },
  {
    texto: "Careers",
    link: "#Careers"
  },
  {
    texto: "Events",
    link: "#Events"
  },
  {
    texto: "Products",
    link: "#Products"
  },
]

//--------------------styled components header------------------

const BannerHeader = styled.header`

 h1 {
  position: absolute;
  font-size: 80px;
  font-style: normal;
  font-weight: lighter;
  top: 30%;
  padding: 3% 5%;
  border: 3px solid white;
  margin-left: 8%;
  color: white;
  width: 600px;
  line-height: 1.0;
}

img {
  width: 100%;
  height: 30%;
}

nav {
  width: 130%;
  position: absolute;
  top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 18px 18px 18px 65px;
  gap: 60px;
  
}

ul{
  color: white;
  list-style: none;
  display: flex;
  gap: 40px;
}

li a{
  text-decoration: none;
  color: white;
}

ul li:hover{
  border-bottom: 3px solid white;
  cursor: pointer;
}

.imagen-mobile{
  display: none;
}

.logo{
  width: 10%;
  position: relative;
  left: 40px;
}

.logomobile{
  display: none;
}

.fondohamburguesa{
  display: none;
  opacity:0;
  .botonHamburguesa{
    display: none;
  }
}
${({ theme }) => css`
    @media (max-width: 375px) {
      header {
        nav {
          width: 70%;
        }
    
        img {
          display: none;
        }
        
        .imagen-mobile{
          display: flex;
          width: 100%;
          object-fit: cover;
          position: relative;
          z-index: -1000;
        }          
          
        }
        .logo{
          width: 15%;
          position: relative;
          left: 40px;  
          z-index: 1000;
          display:none;
        }
        .logomobile{
          display: block;
          width: 40%;
          margin-left: -30px;
          z-index: 1000;
        }
        h1 {
          position: absolute;
          font-size: 2rem;
          font-style: normal;
          font-weight: lighter;
          top: 25%;
          padding: 35px 50px;
          border: 3px solid white;
          margin-left: 7%;
          color: white;
          width: 200px;
          line-height: 1.0;
          z-index: -1;
          
          
        }
        ul {
          display: none;
        }
      
      }
    
    }
  `}
`;
const HamburguesaHeader = styled.div`
${({ theme }) => css`
    @media (max-width: 375px) {
       {
        ul {
          width: 90%;
          margin-left: -297px;
          height: 500%;
          display: none;
          top: -22px;
          font-size: 20px;
          text-transform: uppercase;
          line-height: 2.5;
          position: absolute;
          background-color: black;
          padding-top: 40%;
          display: none;
          z-index: 0;
        }
        .botonCerrar.visible {
          display: block;
        }
        .fondohamburguesa{
          display: block;
          opacity:1;
          background-color: transparent;
          width: 40px;
          position: relative;
          top: -4px;
          margin-right: -18px;
          border: none;  
          .botonHamburguesa{
          width: 100%;
          height: 20px;
          display: block;
        }
      }
    }
   
  `}
`;

//-------------------- function header-------------------

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  function toggleMenu() {
    console.log('Se hizo clic en el botón');
    setMenuAbierto(!menuAbierto);
  }

  return (
    <BannerHeader>
      <header>
        <nav>
          <img src={LogoMobile} alt='logomobile' className='logomobile'></img>
          <img src={LogoHeader} alt='logo' className='logo'></img>
          <ul>
            {list.map(item => <li><a href={item.link}>{item.texto}</a></li>)}
          </ul>

          <HamburguesaHeader>
            <div>
              <ul style={{ display: menuAbierto ? 'block' : 'none' }}>
                {list.map(item => <li><a href={item.link}>{item.texto}</a></li>)}
              </ul>
              <button className='fondohamburguesa' onClick={toggleMenu}>
                {!menuAbierto &&
                  <img src={MenuHamburguesa} alt='hamburguesa' className='botonHamburguesa'></img>
                }
                <img src={CloseMenu} alt='close' className={`botonCerrar ${menuAbierto ? 'visible' : ''}`} onClick={toggleMenu}></img>
              </button>
            </div>
          </HamburguesaHeader>
        </nav>
        <div>
          <img src={ImageHeaderomobil} className='imagen-mobile' alt="imagen hero mobil"></img>
          <img src={ImageHeader} alt="imagen hero"></img>
          <div>
            <h1>IMMERSIRVE EXPERIENCES THAT DELIVER</h1>
          </div>
        </div>
      </header>
    </BannerHeader>

  );
}

//--------------------styled components main------------------

const MainContainer = styled.main`
background-color: hsl(0, 0%, 100%);
justify-content: center;
align-items: center;
  img{
    height: 20%;
    width: 55%;
    padding: 8%;
  }

  div{
    padding: 6%;
    width: 45%;
    height: 26%;
    position: absolute;
    top: 133%;
    left: 52%;
    background-color: hsl(0, 0%, 100%);
    display:flex;
    flex-direction: column;
    font-weight: lighter;
  
    h1 {
      font-size: 55px;
      position: absolute;
      top: 18%;
      // left: 15%;
      height: 20%;
      width:50%;
      font-weight: 400;
      line-height: 60px;
      color:hsl(0, 0%, 0%);
      letter-spacing: .05em;
    }
    p{
      position: absolute;
      top: 60%;
      height: 45%;
      width:42%;
      color: hsl(0, 0%, 55%);
      font-size: 15px;
      font-weight: 300;
      line-height: 28px;
      letter-spacing: .04em;
    }
  }
${({ theme }) => css`
    @media (max-width: 375px) {

        img{
          height: 60%;
          width: 85%;
          position: relative;
          padding: 8%;
        }
        div{
          position: relative;
          top: 40px;
          left: 5px;
          width: 72%;
          h1 {
            font-size: 28px;
            height: 400px;
            width:110%;
            font-weight: lighter;
            line-height: 29px;
            color:black;
            position: absolute;
            top: -32px;
            font-weight:350;
            text-align: center;
            letter-spacing: 1px;
            left: -6px;
          }
          p{
            font-size: 11.4px;
            position: relative;
            top: 40px;
            text-align: center;
            width:220px;
            left: 37px;
            line-height: 22px;
            letter-spacing: .05em;
          }  
        }  
      // }
    
    }
  `}
`;
//-------------------- function main-------------------
function Main() {
  return (
    <MainContainer>
      <img src={ImageMain} alt="interactuve play"></img>
      <div>
        <h1>THE LEADER IN INTERACTIVE VR</h1>
        <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations hace transformed bussiness though digital experiences that bind to their brand.</p>
      </div>
    </MainContainer>
  )
}
//--------------------const footer-------------------

const images = require.context('./assets/images/desktop/footer', true);
const imagesmob = require.context('./assets/images/mobile/footer', true);

//--------------------styled components for new footer------------------
const FooterContainer = styledF.footer`
`;

const HeadContainerF = styledF.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  padding:4%;

  .headerf {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 4%;
    font-size: 2rem;
    margin-right: 4%;

  }

  h4 {
    font-size: 1.5rem;
    color: #000;
    margin: 0;
    flex-grow: 1;
  }

  button {
    
    background-color: #fff;
    color: #000;
    font-size: 1.2rem;
    font-weight: 500;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: auto;
    border: 1px solid black;
  }

  button:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 375px) {
    .headerf {
      justify-content: center;
    }

    .hide-on-mobile {
      display: none;
    }

`;

const CreationsContainer = styledF.div`
  text-align: center;
  padding-left: 3.5%;
  padding-right: 3.5%;

  .CreationsContainer p {
    text-align: left;
  }

  .creations-desktop,
  .creations-mobile {
    position: relative;
    
  }

  .creations-desktop::before,
  .creations-mobile::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 30%, rgba(51,51,51,0.8) 100%);
    z-index: 0;
  }

  .creations-desktop:hover::before,
  .creations-mobile:hover::before {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 30%, rgba(200,200,200,0.8) 100%);
    cursor: pointer;
  }

  .creations-desktop img,
  .creations-mobile img {
    display: block;
    width: 100%;
    height: auto;
  }

  .creations-mobile {
    display: inline-block;
  }

  .creations-mobile img {
    width: 100%;
    height: auto;
  }

  .creations-mobile p {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5px;
    padding-left: 5%;
    color: #fff;
    font-size: 1.2rem;
    margin-top: 20px;
    font-weight: normal;
    font-weight: 100;
  }

  .creations-mobile p:hover {
    color: black;
    cursor: pointer;
  }

  .creations-desktop {
    position: relative;
    display: inline-block;
    margin-right: 5px;
    margin-left: 5px;
  }

  .creations-desktop p {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5px;
    color: #fff;
    font-size: 1.8rem;
    margin-top: 20px;
  }

  .creations-desktop p:hover {
    color: black;
    cursor: pointer;

  }
  
  button {
    background-color: #fff;
    color: #000;
    font-size: 1.2rem;
    font-weight: 500;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
    justify-content: center;
    border: 1px solid black;
  }

  button:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 375px) {
    .hide-on-mobile {
      display: none;
    }
    
    .botonsito{
      padding-top: 10%;
      padding-bottom: 30%;
    }
    
  }

  @media (min-width: 376px) {
    .hide-on-mobile {
      display: block;
    }

    .hide-on-desktop {
      display: none;
    }
  }
`;

const EnderContainer = styledF.section`
section {
  background-color: black;
  color: #ccc;
  font-size: 0.8rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  width: 100%; /* Ancho al 100% para ocupar todo el espacio disponible */
  margin-top: 2%;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
}

.left img {
  margin-bottom: 10px;
  max-width: 100%;
  align-self: flex-start;
  margin-left: 10px;
}

.menu {
  background-color: #1f1f1f;
  max-width: 400px;
  padding: 20px;
  border-radius: 5px;
}

.menu-links {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.menu-links a {
  display: inline-block;
  margin: 0 10px;
  font-weight: bold;
  color: #ccc;
  text-decoration: none;
}

.menu-links a:hover {
  color: white;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  margin-right: 5%
}

.social-icons {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.social-icons a:not(:last-child) {
  margin-right: 20px;
}

.social-icons img {
  height: 20px;
}

.footer-end {

  align-self: flex-end;
}

@media (max-width: 375px) {
  section{
    flex-direction: column;
    align-items: center;
  }


  .left img{
    margin-left: 20%;
    margin-right: 8%;
    width: 60%;
    padding-top: 30%;
  }

  .menu-links{
    flex-direction: column;
    padding-top: 12%;
    padding-bottom: 17%;
  }

  .menu-links a{
    padding-top: 12%;
    padding-bottom: 17%;
  }

  .right{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 10%;
    padding-bottom: 15%;
  }

  .footer-end p{
    align-items: center;
justify-content: center;
  }
}

@media (min-width: 376px) {
  
}
`;

//-------------------- function footer-------------------
function Footer() {

  const imageText = {
    // asignar el texto a cada imagen por nombre 
    'image-deep-earth.jpg':'DEEP EARTH',
    'image-night-arcade.jpg':'NIGHT ARCADE',
    'image-soccer-team.jpg':'SOCCER TEAM VR',
    'image-grid.jpg':'THE GRID',
    'image-from-above.jpg':'FROM UP ABOVE VR',
    'image-pocket-borealis.jpg':'POCKET BOREALIS',
    'image-curiosity.jpg':'THE CURIOSITY',
    'image-fisheye.jpg':'MAKE IT FISHEYE',
  };
  
  return (
    <FooterContainer>

      <HeadContainerF>
      <div className='headerf'>
        <h2>OUR CREATIONS</h2>
        <button className='hide-on-mobile'>SEE ALL</button>
      </div>
      </HeadContainerF>

      <CreationsContainer>
      <div className='CreationsContainer'>
        <div className='hide-on-mobile'>
          {images.keys().map((imagePath, index) => {
            const imageName = imagePath.split('/').pop();
            const text = imageText[imageName];

            return (
              <div key={imagePath} className='creations-desktop'>
                <img src={images(imagePath)} alt={`Creation ${index + 1}`} />
                <p>{text}</p>
              </div>
            );
          })}
        </div>

        <div className='hide-on-desktop'>
          {imagesmob.keys().map((imagePath, index) => {
            const imageName = imagePath.split('/').pop();
            const text = imageText[imageName];

            return (
              <div key={imagePath} className='creations-mobile'>
                <img src={imagesmob(imagePath)} alt={`Creation ${index+ 1}`} />
                <p>{text}</p>
              </div>
            );
          })}
        </div>

        <div className='botonsito'>
          <button className='hide-on-desktop'>SEE ALL</button>
        </div>
      </div>
      </CreationsContainer>

      <EnderContainer>
      <section className="black-section">

            <div className="left">
              <img src={logoicon} alt="Logo de la página" className="logo"></img>
              <div className="menu-links">
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Events</a>
                <a href="#">Products</a>
                <a href="#">Support</a>
              </div>
            </div>

            <div className='right'>
              <div className="social-icons">
                  <a href="#"><img src={facebookIcon} alt="Facebook"></img></a>
                  <a href="#"><img src={twitterIcon} alt="Twitter"></img></a>
                  <a href="#"><img src={pinterestIcon} alt="Pinterest"></img></a>
                  <a href="#"><img src={instagramIcon} alt="Instagram"></img></a>
              </div>
              <div className="footer-end">
                    <p>All rights reserved &copy; 2023</p>
              </div>
            </div>
            
        </section>
      </EnderContainer>

      
    </FooterContainer> );}
    

//--------------------CONSTANTE DE FUENTES -------------------
const StyledStrictMode = styled.div`
  
  body {
    margin: 0;
    font-size: 15px;
    font-family: 'Alata', sans-serif;
    display: flex;
 
  }
  
  h1, h2, h3, h4, h5, h6, p, a{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
  }
`;

// ---------------- end----------//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledStrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </StyledStrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





