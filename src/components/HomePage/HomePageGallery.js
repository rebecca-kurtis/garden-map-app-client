// import react from "react";
// import { useState } from "react";
// import { Gallery } from "react-grid-gallery";
// import Lightbox from 'react-18-image-lightbox';
// import 'react-18-image-lightbox/style.css';
// import { images } from "./testImages";

import React, { Component } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import FancyboxExample from "./FancyBox";

// import 'bs5-lightbox';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

// const images = [
//   '//placekitten.com/1500/500',
//   '//placekitten.com/4000/3000',
//   '//placekitten.com/800/1200',
//   '//placekitten.com/1500/1500',
// ];

export default function HomePageGallery() {
  // const [index, setIndex] = useState(-1);

  // const currentImage = images[index];
  // const nextIndex = (index + 1) % images.length;
  // const nextImage = images[nextIndex] || currentImage;
  // const prevIndex = (index + images.length - 1) % images.length;
  // const prevImage = images[prevIndex] || currentImage;

  // const handleClick = (index, item) => setIndex(index);
  // const handleClose = () => setIndex(-1);
  // const handleMovePrev = () => setIndex(prevIndex);
  // const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div >
      
      {/* <div class="row">
        <a
          href="https://unsplash.it/1200/768.jpg?image=251"
          data-toggle="lightbox"
          data-gallery="example-gallery"
          class="col-sm-4"
        >
          <img src="https://unsplash.it/600.jpg?image=251" class="img-fluid" />
        </a>
        <a
          href="https://unsplash.it/1200/768.jpg?image=252"
          data-toggle="lightbox"
          data-gallery="example-gallery"
          class="col-sm-4"
        >
          <img src="https://unsplash.it/600.jpg?image=252" class="img-fluid" />
        </a>
        <a
          href="https://unsplash.it/1200/768.jpg?image=253"
          data-toggle="lightbox"
          data-gallery="example-gallery"
          class="col-sm-4"
        >
          <img src="https://unsplash.it/600.jpg?image=253" class="img-fluid" />
        </a>
      </div>
      <div class="row">
        <a
          href="https://unsplash.it/1200/768.jpg?image=254"
          data-toggle="lightbox"
          data-gallery="example-gallery"
          class="col-sm-4"
        >
          <img src="https://unsplash.it/600.jpg?image=254" class="img-fluid" />
        </a>
        <a
          href="https://unsplash.it/1200/768.jpg?image=255"
          data-toggle="lightbox"
          data-gallery="example-gallery"
          class="col-sm-4"
        >
          <img src="https://unsplash.it/600.jpg?image=255" class="img-fluid" />
        </a>
        <a
          href="https://unsplash.it/1200/768.jpg?image=256"
          data-toggle="lightbox"
          data-gallery="example-gallery"
          class="col-sm-4"
        >
          <img src="https://unsplash.it/600.jpg?image=256" class="img-fluid" />
        </a>
      </div> */}
{/* 
<a
  data-fancybox="gallery"
  data-src="https://lipsum.app/id/2/1600x1200"
  data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
>
  <img src="https://lipsum.app/id/2/200x150" width="200" height="150" alt="" />
</a>

<a data-fancybox="gallery" data-src="https://lipsum.app/id/3/1600x1200">
  <img src="https://lipsum.app/id/3/200x150" width="200" height="150" alt="" />
</a>

<a data-fancybox="gallery" data-src="https://lipsum.app/id/4/1600x1200">
  <img src="https://lipsum.app/id/4/200x150" width="200" height="150" alt="" />
</a> */}

<FancyboxExample
  options={{
    Carousel: {
      infinite: false,
    },
  }}
>
  <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
    <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
  </a>
  <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
    <img src="https://lipsum.app/id/61/200x150" width="200" height="150" />
  </a>
  <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
    <img src="https://lipsum.app/id/62/200x150" width="200" height="150" />
  </a>
  <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
    <img src="https://lipsum.app/id/63/200x150" width="200" height="150" />
  </a>
  <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
    <img src="https://lipsum.app/id/64/200x150" width="200" height="150" />
  </a>
</FancyboxExample>


    </div>
  );
}
