import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  const [name, setName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = ["ZAKARYAE ROUANE", "Zakroun"];

  useEffect(() => {
    let timeout;
    const currentText = texts[currentTextIndex];

    if (!isDeleting && name.length < currentText.length) {
      timeout = setTimeout(() => {
        setName(currentText.substring(0, name.length + 1));
      }, 200);
    } else if (!isDeleting && name.length === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && name.length > 0) {
      timeout = setTimeout(() => {
        setName(name.substring(0, name.length - 1));
      }, 100);
    } else if (isDeleting && name.length === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [name, isDeleting, currentTextIndex]);

  return (
    <section id="home" className="home-section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="username"
      >
        <h2 id="hello">Hello I'm</h2>
        <span id="username">{name}</span>
        <span id="iconafter">|</span>
        <br />
        <h3>web developer</h3>
        <br />
        <Link to="contact" smooth={true} duration={500}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="btncontact"
          >
            Contact Me
          </motion.button>
        </Link>
      </motion.div>
      <div className="part2_home">
        <div className="part1_2home">
          <div className="circles">
            <span className="circle circle1"></span>
            <span className="circle circle2"></span>
            <span className="circle circle3"></span>
          </div>
        </div>
        <div className="part2_2home">
          <div className="code-block custom-code">
            <pre>
              <code>
                <span className="keyword">const</span>{" "}
                <span className="variable">coder</span> = {"{"}
                <br />
                &nbsp;&nbsp;<span className="property">name</span>:{" "}
                <span className="string">'ZAKARYAE ROUANE'</span>,<br />
                &nbsp;&nbsp;<span className="property">skills</span>: [
                <span className="string">'Laravel'</span>,{" "}
                <span className="string">'ReactJS'</span>,{" "}
                <span className="string">'JavaScript'</span>,{" "}
                <span className="string">'CSS'</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="string">'PHP'</span>,{" "}
                <span className="string">'HTML'</span>,{" "}
                <span className="string">'MongoDB'</span>,{" "}
                <span className="string">'Docker'</span>,{" "}
                <span className="string">'GitHub'</span>,{" "}],
                <br />
                &nbsp;&nbsp;<span className="property">hardWorker</span>:{" "}
                <span className="boolean">true</span>,<br />
                &nbsp;&nbsp;<span className="property">quickLearner</span>:{" "}
                <span className="boolean">true</span>,<br />
                &nbsp;&nbsp;<span className="property">
                  problemSolver
                </span>: <span className="boolean">true</span>,<br />
                &nbsp;&nbsp;<span className="function-name">
                  hireable
                </span>: <span className="keyword">function</span>() {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">
                  return
                </span>{" "}
                (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="keyword">this</span>.
                <span className="property">hardWorker</span>{" "}
                <span className="operator">&amp;&amp;</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="keyword">this</span>.
                <span className="property">problemSolver</span>{" "}
                <span className="operator">&amp;&amp;</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="keyword">this</span>.
                <span className="property">skills</span>.length{" "}
                <span className="operator">&gt;=</span>{" "}
                <span className="number">5</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;);
                <br />
                &nbsp;&nbsp;{"}"},<br />
                {"};"}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
