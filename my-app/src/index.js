import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import styled, { css } from 'styled-components';
import styled, { css } from "styled-components";

//--------------------new styled footer-------------------

// import styled from 'styled-components';
import ImageMain from "./assets/images/desktop/main/image-interactive.jpg";

//--------------------const footer-------------------

const images = require.context('./assets/images/desktop/footer', true);
const imageText = {
  // asignar el texto a cada imagen por nombre 
  'image-deep-earth.jpg': 'DEEP EARTH',
  'image-night-arcade.jpg': 'NIGHT ARCADE',
  'image-soccer-team.jpg': 'SOCCER TEAM VR',
  'image-grid.jpg': 'THE GRID',
  'image-from-above.jpg': 'FROM UP ABOVE VR',
  'image-pocket-borealis.jpg': 'POCKET BOREALIS',
  'image-curiosity.jpg': 'THE CURIOSITY',
  'image-fisheye.jpg': 'MAKE IT FISHEYE',
};

//--------------------const main-------------------

function Header() {
  return (
    <header>
      <h1>IMMERSIRVE EXPERIENCES THAT DELIVER</h1>
    </header>
  );
}

// function mainContainer() {
//   return (
//     <main>
//       <img src=""> </img>
//       <div>
//       <h1>THE LEADER IN INTERACTIVE VR</h1>
//       <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations hace transformed bussiness though digital experiences that bind to their brand</p>
//       </div>
//     </main>
//   );
// }

//--------------------styled components for new footer------------------
const FooterContainer = styled.footer`
  background-color: #fff;
  color:  #1f1f1f;
  padding: 30px 20px;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const CreationsContainer = styled.div`
  position: relative;

  & > div {
    position: relative;
    display: inline-block;
    margin-right: 20px;

    img {
      width: 100%;
      height: auto;
    }

    p {
      position: absolute;
      top: 80%;
      color: #fff;
      padding: 5px;
      font-size: 2rem;
    }
  }
`;

const MainContainer = styled.main`
background-color: #fff;
padding:4%;
justify-content: center;
align-items: center;
  img{
    height: 30%;
    width: 30%;
    position: relative;
  }
  div{
    padding: 2.5% 2% 1.5% 4%;
    width: 22%;
    height: 17%;
    position: absolute;
    top: 300px;
    left: 470px;
    background-color: #fff;
    display:flex;
    flex-direction: column;
    font-weight: lighter;
   
  
    h1 {
      font-size: 800;
      margin-bottom: 20px;
      height: 400px;
      width:60%;
      font-weight: lighter;
      line-height: 29px;
      color:black;
    }
    p{
      height: 800px;
      width:65%;
      color: grey;
      font-size: x-small;
    }
  }
${({ theme }) => css`
    @media (max-width: 375px) {
      // main {  
      //   background-color: aquamarine;
      //   display: flex;
      //   flex-direction: column;
      //   justify-content: center;
      //   justify-content: center;
        img{
          height: 60%;
          width: 99%;
          position: relative;
        }
        div{
          position: relative;
          top: 40px;
          left: 12px;
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
          }
          p{
            font-size: 11.4px;
            position: relative;
            top: 40px;
            text-align: center;
            width:220px;
            left: 7px;
            line-height: 22px;
            letter-spacing: .05em;
          }  
        }  

      // }
    
    }
  `}
`;



      
//-------------------- new footer-------------------
function Footer() {
  return (
    <FooterContainer>
      <h4>OUR CREATIONS</h4>
      <CreationsContainer>
        {images.keys().map((imagesPath, index) => {
          const imageName = imagesPath.split('/').pop().split('.')[0]; // obtener el nombre de la imagen sin la extensión
          const text = imageText[`${imageName}.jpg`]; // buscar el texto correspondiente en imageText

          return (
            <div key={imagesPath}>
              <img src={images(imagesPath)} alt={`Creation ${index + 1}`} />
              <p>{text}</p>
            </div>
          );
        })}
      </CreationsContainer>
    </FooterContainer>
  );
}
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
//-------------------- new footer-------------------
//--------------------footer old-------------------

// function Footer() {
//   return (
//     <footer>
//       <h4>OUR CREATIONS</h4>
//       <div style={{ position: 'relative' }}>
//         {images.keys().map((imagesPath, index) => {
//           const imageName = imagesPath.split('/').pop().split('.')[0]; // obtener el nombre de la imagen sin la extensión
//           const text = imageText[`${imageName}.jpg`]; // buscar el texto correspondiente en imageText

//           return (
//             <div key={imagesPath} style={{ position: 'relative', display: 'inline-block', marginRight: '20px' }}>
//               <img src={images(imagesPath)} alt={`Creation ${index + 1}`} />
//               <p style={{ position: 'absolute', top: '80%', color: '#fff', backgroundColor: 'none', padding: '5px', fontSize: '2rem'}}>
//                 {text} {/* mostrar el texto correspondiente */}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </footer>
//   );
// }

//--------------------footer old-------------------

//--------------------final part-------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
    {/* <App />  */}
    {/* QUITAR APP AL FINALIZAR  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





