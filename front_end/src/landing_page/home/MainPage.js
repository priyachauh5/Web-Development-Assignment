import React from "react";
import Slider from "react-slick";

// Sample image URLs
const images = [
  "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/vbs_bulidingpic.jpg/:/cr=t:5.79%25,l:0%25,w:100%25,h:88.41%25/rs=w:1240,h:620,cg:true",
  "SchoolImage/schoolImg1.JPG",
  "SchoolImage/schoolImg2.JPG",
  "SchoolImage/SchoolImg3.JPG",
  "SchoolImage/SchoolImg4.JPG",
  "SchoolImage/SchoolImg5.JPG",
  "SchoolImage/SchoolImg6.JPG",
  "SchoolImage/SchoolImg7.JPG",
  "SchoolImage/SchoolImg8.JPG",
  "SchoolImage/SchoolImg9.JPG",
  "SchoolImage/SchoolImg10.JPG",
];

const App = () => {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Automatically transition slides
    autoplaySpeed: 3000, // Time between auto transitions
    pauseOnHover: true, // Pause autoplay on hover
  };

  return (
    <div style={{ backgroundColor: "#FFF4EA" }}>
      <div
        style={{
          width: "100%",
          height: "20%",
          margin: "0 auto",
          padding: "20px",
          marginTop: "2%",
        }}
      >
        <h1 style={{ textAlign: "center" }}></h1>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "50px%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default App;

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true, // Enables fade transition
//   };
