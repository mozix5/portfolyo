import React, { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import axios from "axios";

const App = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      console.log(response.data.user);
      setData(response?.data.user);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const scrollRef = useRef();

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });
  // });
  return (
    <div className=" overflow-x-hidden  ">
      <Home aboutData={data?.about}/>
      {/* <div className="scroll" ref={scrollRef}>
        <h1 data-scroll data-scroll-speed="3" data-scroll-position="top">
          Locomotive Scroll in React
        </h1>
        <h2
          data-scroll
          data-scroll-speed="2"
          data-scroll-position="top"
          data-scroll-direction="horizontal"
        >
          Ima go sideways
        </h2>
      </div> */}
    </div>
  );
};

export default App;
