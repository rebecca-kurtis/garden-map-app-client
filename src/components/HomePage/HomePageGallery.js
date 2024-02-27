// import react from "react";
// import { useState } from "react";
// import { Gallery } from "react-grid-gallery";
// import Lightbox from 'react-18-image-lightbox';
// import 'react-18-image-lightbox/style.css';
// import { images } from "./testImages";

// import React, { Component, useEffect } from "react";
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";
// import FancyboxExample from "./FancyBox";
// import getPhotos from "../../helpers/getPhotos"
// import getPlotProfileInfo from "../../helpers/getPlotProfileInfo";
// import styles from '../styles/HomePage/HomePageGallery.module.css';

// import 'bs5-lightbox';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

// const images = [
//   '//placekitten.com/1500/500',
//   '//placekitten.com/4000/3000',
//   '//placekitten.com/800/1200',
//   '//placekitten.com/1500/1500',
// ];

// export default function HomePageGallery(props) {


//   useEffect(() => {

  
//     getPlotProfileInfo(45).then((data) => {
//       console.log("data inside func", data);
//       // setProfileInfo(data[0].profileInfo);
//       props.setPhotos(data[1].photosInfo)
//       // setLoading(false);
//     });
//   }, [])
  
//   const mappedPhotos = [];

//   for (const keyID in props.photos) {
//     mappedPhotos.push(
//       <a
//                 data-fancybox="gallery"
//                 href={`http://localhost:8000/photos/${props.photos[keyID].image_key}`}
//               >
//                 <img
//                   src={`http://localhost:8000/photos/${props.photos[keyID].image_key}`}
//                   width="200"
//                   height="150"
//                 />
//               </a>
//     );
//   }

//   return (
//     <div>

// {props.user !== 1 && (
// <div className={styles.homePageGalleryContainer}>
//   <FancyboxExample
//   options={{
//     Carousel: {
//       infinite: false,
//     },
//   }}
// >
//   {/* <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
//     <img
//       src="https://lipsum.app/id/60/200x150"
//       width="200"
//       height="150"
//     />
//   </a>
//   <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
//     <img
//       src="https://lipsum.app/id/61/200x150"
//       width="200"
//       height="150"
//     />
//   </a>
//   <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
//     <img
//       src="https://lipsum.app/id/62/200x150"
//       width="200"
//       height="150"
//     />
//   </a>
//   <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
//     <img
//       src="https://lipsum.app/id/63/200x150"
//       width="200"
//       height="150"
//     />
//   </a>
//   <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
//     <img
//       src="https://lipsum.app/id/64/200x150"
//       width="200"
//       height="150"
//     />
//   </a> */}
//   {mappedPhotos}
// </FancyboxExample>
// </div>
// )}

// {props.user === 1 && (

//   <div className={styles.homePageGalleryContainer}>

//   <div>
//     <FileUpload 
//     plotID={45} 
//     gardenID={1}
//     setProfileInfo={props.setProfileInfo}
//     setPhotos={props.setPhotos}
//     />
//   <FancyboxExample
//   className={styles.galleryFancyBox}
//   options={{
//     Carousel: {
//       infinite: false,
//     },
//   }}
// >
  
//   {/* <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
//     <img
//       src="https://lipsum.app/id/60/200x150"
//       width="200"
//       height="150"
//     />
//   </a>
//   <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
//     <img
//       src="https://lipsum.app/id/61/200x150"
//       width="200"
//       height="150"
//     />
//   </a>
//   <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
//     <img
//       src="https://lipsum.app/id/62/200x150"
//       width="200"
//       height="150"
//     />
//   </a>
//   <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
//     <img
//       src="https://lipsum.app/id/63/200x150"
//       width="200"
//       height="150"
//     />
//   </a>
//   <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
//     <img
//       src="https://lipsum.app/id/64/200x150"
//       width="200"
//       height="150"
//     />
//   </a> */}
//   {mappedPhotos}
// </FancyboxExample>
// </div>
// </div>
// )}
      
//     </div>
//   );
// }
