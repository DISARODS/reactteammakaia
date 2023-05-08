import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';

// -------------import images header------------------

// -------------import images main------------------

// -------------import images footer------------------

import facebookIcon from './assets/images/icon-facebook.svg';
import twitterIcon from './assets/images/icon-twitter.svg';
import pinterestIcon from './assets/images/icon-pinterest.svg';
import instagramIcon from './assets/images/icon-instagram.svg';
import logoicon from './assets/images/logo.svg';


//--------------------const footer-------------------

const images = require.context('./assets/images/desktop/footer', true);
const imagesmob = require.context('./assets/images/mobile/footer', true);


//--------------------const footer-------------------

function Header() {
  return (
    <header>
      <h1>IMMERSIRVE EXPERIENCES THAT DELIVER</h1>
    </header>
  );
}

function Main (){
  return (
    <main>
      <h1>THE LEADER IN INTERACTIVE VR</h1>
      <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations hace transformed bussiness though digital experiences that bind to their brand</p>
    </main>
  );
}

//--------------------styled components for new footer------------------
const FooterContainer = styled.footer`
`;


const HeadContainerF = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  padding:4%;

  .headerf {
    display: flex;
    align-items: center;
    width: 100%;
  }

  h4 {
    font-size: 1.5rem;
    color: #000;
    margin: 0;
    flex-grow: 1;
  }

  button {
    background-color: #000;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: auto;
  }

  button:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid black;

  }
`;


const CreationsContainer = styled.div`
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

  @media (max-width: 375px) {
    .hide-on-mobile {
      display: none;
    }
    
    .hide-on-desktop {
      display: block;
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

const EnderContainer = styled.section`

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
`;

//-------------------- new footer-------------------
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
        <button>SEE ALL</button>
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
                    <p>All rights reserved &copy; 2023 TuEmpresa.</p>
              </div>
            </div>
            
        </section>
      </EnderContainer>

      
    </FooterContainer> );}
    

//--------------------CONSTANTE DE FUENTES -------------------
const StyledStrictMode = styled.div`
  transform: scale(1.0);
  body {
    margin: 0;
    font-size: 15px;
    font-family: 'Alata', sans-serif;
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
    {/* <App />  */}
    {/* QUITAR APP AL FINALIZAR  */}
  </StyledStrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();







