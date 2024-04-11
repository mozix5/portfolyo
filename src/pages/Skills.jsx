import React from "react";
import { motion } from "framer-motion";
const Skills = ({ skillsList }) => {
  const Skill = ({ name, image, x, y }) => {
    return (
      <motion.div
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y, transition: { duration: 1.6 } }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="py-3 px-6 font-semibold bg-white rounded-full absolute flex justify-center items-center"
      >
        {name}
        <div className="h-10 w-10">
          <img src={image} className=" object-cover h-10 w-10"></img>
        </div>
      </motion.div>
    );
  };
  console.log(skillsList);
  return (
    <div className="h-screen relative w-screen flex items-center justify-center py-32">
      {/* {skillsList.map((item) => {
        return (
          <Skill name={item?.name} image={item?.image.url} key={item._id} />
        );
      })} */}
      <Skill
        name={skillsList[0]?.name}
        image={skillsList[0]?.image.url}
        x="-25vw"
        y="2vw"
      />
      <Skill
        name={skillsList[1]?.name}
        image={skillsList[1]?.image.url}
        x="-5vw"
        y="-10vw"
      />
      <Skill
        name={skillsList[2]?.name}
        image={skillsList[2]?.image.url}
        x="20vw"
        y="6vw"
      />
      <Skill
        name={skillsList[3]?.name}
        image={skillsList[3]?.image.url}
        x="0vw"
        y="12vw"
      />
      <Skill
        name={skillsList[4]?.name}
        image={skillsList[4]?.image.url}
        x="-20vw"
        y="15vw"
      />
      <Skill
        name={skillsList[5]?.name}
        image={skillsList[5]?.image.url}
        x="15vw"
        y="-12vw"
      />
      <Skill
        name={skillsList[6]?.name}
        image={skillsList[6]?.image.url}
        x="32vw"
        y="-5vw"
      />
      <Skill
        name={skillsList[7]?.name}
        image={skillsList[7]?.image.url}
        x="0vw"
        y="-20vw"
      />
      <Skill
        name={skillsList[8]?.name}
        image={skillsList[8]?.image.url}
        x="-25vw"
        y="-18vw"
      />
      <Skill
        name={skillsList[9]?.name}
        image={skillsList[9]?.image.url}
        x="25vw"
        y="18vw"
      />
      {/* <Skill name={skillsList[10]?.name} image={skillsList[10]?.image.url} /> */}
    </div>
  );
};

export default Skills;
