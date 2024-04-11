import React, { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import axios from "axios";
import ProjectsSection from "./pages/ProjectsSection";
import PreLoader from "./components/PreLoader";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";
import Demo from "./pages/Demo";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const containerRef = useRef();

  useEffect(() => {
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

    fetchData();

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#999d9e]" ref={containerRef}>
      <AnimatePresence>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <Home
              name={data.about?.name}
              address={data.about?.address}
              avatar={data.about?.avatar}
              title={data.about?.title}
              email={data.about?.contactEmail}
              desc={data.about?.description}
              subTitle={data.about?.subTitle}
            />
            <ProjectsSection projects={data?.projects} />
            <Demo projects={data?.projects}/>
            <Skills skillsList={data?.skills}/>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
