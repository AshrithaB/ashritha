import React, { useContext } from "react";
// import '../css/style.css';
import { ThemeContext } from "../themeProvider";

const Education = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return  (
      <div id="education" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
        <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
          <header
            className="section-header text-center animate__animated animate__zoomIn"
            style={{ animationDelay: '0.1s' }}
          >
            <h2 className={darkMode ? "text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-black" : "text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-white"}>Education</h2>
          </header>
          <div className="timeline mt-8">
            <div className="timeline-item left animate__animated animate__slideInLeft" style={{ animationDelay: '0.1s' ,left: '0', paddingRight: '30px' , borderColor: 'transparent transparent transparent #dddddd' }}>
              <div className="timeline-text">
                <div className="timeline-date text-lg font-semibold text-red-600">2020 - 2021</div>
                <h2 className={darkMode ? "text-xl font-semibold mt-2 text-black" :"text-xl font-semibold mt-2 text-white"}>CDAC-Centre for Development of Advanced Computing</h2>
                <h4 className={darkMode ? "text-lg font-italic mt-2 text-black" :"text-lg font-italic mt-2 text-white"}>PG-Diploma in Advance Computing</h4>
                <p className={darkMode ? "mt-2 text-black" :"mt-2 text-white"}>
                  I have completed my PG-DAC course from ACTS-Pune with Grade-A |
                  Skills: Software Development · Front-End Development · Back-End
                  Web Development · Full-Stack Development ·
                </p>
              </div>
            </div>
            </div>
            <div
              className="timeline-item right animate__animated animate__slideInRight" style={{ animationDelay: '0.1s' }}
            >
              <div class="timeline-text">
                <div class="timeline-date text-lg font-semibold text-red-600">2016 - 2020</div>
                <h2 className={darkMode ? "text-xl font-semibold mt-2 text-black" :"text-xl font-semibold mt-2 text-white"}>Mahakal Institute Of Technology,RGPV</h2>
                <h4 className={darkMode ? "text-lg font-italic mt-2 text-black" :"text-lg font-italic mt-2 text-white"}>Bachelor Of Engineering(Hons.)-Computer Science</h4>
                <p className={darkMode ? "mt-2 text-black" :"mt-2 text-white"}>Skills: Software Development</p>
              </div>
            </div>
          </div>
          </div>
  );
}

export default Education;
