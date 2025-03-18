import "./Portfolio.css";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Form Validation App",
    img: "form.png",
    githubLink:
      "https://github.com/ArhamWasif/Form-Validation-using-Formik-and-Yup-in-tailwind-css-in-React-Js.git",
    demoLink: "https://serene-gnome-15e653.netlify.app",
    desc: "Ensured seamless navigation without page reloads using React Router in a Single Page Application (SPA).Used CSS Flexbox and Grid along with media queries to ensure compatibility across various devices for a responsive design.Fetched and displayed content dynamically state management with React hooks. ",
  },
  {
    id: 2,
    title: "Doors to Life React App",
    img: "pic.png",
    githubLink: "https://github.com/ArhamWasif/DoorstoLife-Clone.git",
    demoLink: "https://stupendous-fudge-d13850.netlify.app/",
    desc: "Made navigation without page reloads using React Router in a Single Page Application (SPA).Used CSS Flexbox and Grid along with media queries to ensure compatibility across various devices for a responsive design. Fully responsive design in both screens and used the tailwind css and Shadcn. ",
  },
  {
    id: 5,
    title: "Social Media App",
    img: "/pic3.png",
    githubLink: "https://github.com/Moon4797/Social-Media-app-in-React-Js.git",
    demoLink: "https://funny-marigold-a1767d.netlify.app/",
    desc: "Discover a vibrant community and stay connected like never before with CawSocial, the ultimate social media platform designed to bring people closer.Whether you’re sharing your latest adventure, catching up with friends, or discovering new interests.",
  },
  {
    id: 4,
    title: "Food Ordering System",
    githubLink:
      "https://github.com/Moon4797/Food-Ordering-System-in-Mern-Stack.git",
    img: "pic1.png",
    desc: "Implemented responsive design for optimal user experience.Led the development of a comprehensive Food Ordering System,handling user authentication,menu management,and order processing.Millions of customers can register the account and want to order the order on a website with their convenience.",
  },
  {
    id: 3,
    title: "Portfolio App",
    demoLink: "https://arhamwasif.netlify.app/",
    img: "sc.png",
    githubLink: "https://github.com/ArhamWasif/Arham-Wasif-Portfolio.git",
    desc: "Ensured seamless navigation without page reloads using React Router in a Single Page Application (SPA).Used CSS Flexbox and Grid along with media queries to ensure compatibility across various devices for a responsive design.Fetched and displayed content dynamically state management with React hooks. ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section ref={ref} className="single-item mb-2 flex  ">
      <motion.div className="container">
        <div
          className="wrapper gap-4  bg-black
          rounded-sm lg:w-[21rem]  lg:ml-4
        "
        >
          <div className="imgcont">
            <img src={item.img} className=" h-40 w-full" alt={item.title} />
          </div>
          <div className="py-8 px-4">
            <div className="textcontainer" style={{ y }}>
              <h1 className="text-white text-center text-2xl font-semibold">
                {item.title}
              </h1>
              <p className=" text-yellow-50 text-sm leading-relaxed line-clamp-3">
                {item.desc}
              </p>
              <div className="justify-center gap-2 flex mt-2">
                <a
                  href={item.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn11 bg-black p-2 rounded-md cursor-pointer border text-white hover:bg-slate-800 "
                >
                  See Demo
                </a>
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn11 bg-black p-2 rounded-md cursor-pointer border text-white hover:bg-slate-800 "
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio container mx-auto p-4  " ref={ref} id="Projects">
      <div className="text-6xl text-white text-center py-4 font-semibold">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
