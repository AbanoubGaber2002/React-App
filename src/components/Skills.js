


import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skillsData = [
    { title: "BackEnd Development", percentage: 80 },
    { title: "Data Science", percentage: 60 },
    { title: "FrontEnd Development", percentage: 75 },
    { title: "Cyber Security", percentage: 90 },
  ];

  const [animated, setAnimated] = useState(false);
  const [countUpValues, setCountUpValues] = useState(skillsData.map(() => 0));
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  useEffect(() => {
    if (animated) {
      const timers = skillsData.map((skill, index) => {
        const increment = skill.percentage / 100; // التزايد بناءً على النسبة المطلوبة
        let currentValue = 0;
        const timer = setTimeout(() => {
          const interval = setInterval(() => {
            currentValue += increment;
            setCountUpValues((prevValues) => {
              const updatedValues = [...prevValues];
              updatedValues[index] = Math.min(currentValue, skill.percentage); // حدود النسبة المطلوبة
              return updatedValues;
            });
            if (currentValue >= skill.percentage) {
              clearInterval(interval);
              if (index === skillsData.length - 1) {
                setCompleted(true);
              }
            }
          }, 20);
        }, 1000); // تأخير لبدء الحركة بعد ثانية واحدة
        return timer;
      });
      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    }
  }, [animated, skillsData]);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>You Can See My Skills </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skillsData.map((skill, index) => (
                  <div className="item" key={index}>
                    <div className="circle-progress">
                      <CircularProgressbar
                        value={animated ? countUpValues[index] : 0}
                        text={completed ? `${skill.percentage}%` : ""}
                        strokeWidth={8}
                        styles={buildStyles({
                          textSize: "16px",
                          textColor: "#fff",
                          pathColor: completed ? "#fff" : "#3c4146",
                          trailColor: completed ? "#343a40" : "#3c4146",
                          backgroundColor: completed ? "#3c4146" : "#343a40"
                        })}
                      />
                    </div>
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
