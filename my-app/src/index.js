import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

//--------------------new styled footer-------------------

import styled from 'styled-components';
import ImageHeader from './assets/images/image-hero.jpg';

//--------------------const footer-------------------

const images = require.context('./assets/images/desktop/footer', true);
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


//--------------------styled components header------------------
// const BannerHeader = styled.header`
// background-image: url("./assets/images/image-hero.jpg");
// height: 50vh;
// background-size: cover;
// `;



//--------------------const footer-------------------

function Header() {
  return (
    <header>
      <nav>
        <h2>Loopstudios</h2>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </nav>
      <div> 
        <img src={ImageHeader} alt="imagen hero"></img>
        <div>
        <h1>IMMERSIRVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </div>
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
    <Header/>
    <Main/>
    <Footer/>
    {/* <App />  */}
    {/* QUITAR APP AL FINALIZAR  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();







