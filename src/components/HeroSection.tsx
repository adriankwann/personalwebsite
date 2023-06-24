import { useState, useEffect } from "react";
import { HStack, Image, Heading } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const bulletPoints = [
    "Computer Science Major @ UC Berkeley",
    "Full Stack SWE Intern @ FlowGPT",
    "SWE Intern @ Zettablock",
    "Developer, Governance @ Blockchain at Berkeley",
    "Previous: DS Intern @ Circle",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const scrollLinkStyles = {
    cursor: "pointer",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade-out animation

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bulletPoints.length);
        setFade(false); // Start fade-in animation
      }, 500); // Delay before switching text and starting fade-in
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="relative h-[83vh] bg-white">
      <div className="relative isolate flex items-center px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-16rem)] aspect-[1155/678] w-[48.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1dd3bd] to-[#3e64ff] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[96.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl py-16 sm:py-32 lg:py-40">
          <HStack spacing={20} align="start" data-aos="fade-up">
            {/* Text content on the left */}
            <div className="w-auto pr-8 text-left">
              <Heading fontWeight="700" fontSize="6xl">
                Welcome to my website!
              </Heading>
              <p
                className={`mt-6 text-lg leading-8 text-black ${
                  fade ? "fade-out" : "fade-in"
                }`}
              >
                {bulletPoints[currentIndex]}
              </p>
              <div className="mt-10" data-aos="fade-up">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ScrollLink
                    to="about-section"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-50} // Adjust this value to fine-tune the scroll position
                    style={scrollLinkStyles}
                    className="rounded-md border border-indigo-600 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    About
                  </ScrollLink>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ScrollLink
                    to="projects-section" // Adjust the target section ID accordingly
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-50}
                    style={scrollLinkStyles}
                    className="border: none ml-3 rounded-md border border-indigo-600 bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Projects
                  </ScrollLink>
                </motion.button>
              </div>
            </div>

            {/* Image on the right */}
            <div className="w-1/3" data-aos="fade-up">
              <Image
                src="https://photos.app.goo.gl/Wsif9g5Qwk5pKguV6"
                alt="Headshot"
                maxWidth="300px"
                maxHeight="500px"
                className="rounded-md"
              />
            </div>
          </HStack>
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 1;
          transition: opacity 0.5s ease-in-out;
        }

        .fade-out {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
