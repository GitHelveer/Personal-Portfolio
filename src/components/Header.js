import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-scroll";

const socials = [
  {
    icon: faEnvelope,
    url: "https://sophonias11@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/GitHelveer",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sophonias-woldu-swt",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/24684499/zephaniah",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        // Scrolling down
        headerRef.current.style.transform = "translateY(-200px)";
      } else {
        // Scrolling up
        headerRef.current.style.transform = "translateY(0)";
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack justifyContent="space-between">
              {socials.map((social, index) => (
                <a key={index} href={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link
                to="projects-section"
                smooth={true}
                duration={500}
                offset={-50} // Adjust the offset as per your needs
                spy={true}
                exact="true"
                activeClass="active"
                style={{ cursor: "pointer" }} // Add cursor style
              >
                Projects
              </Link>
              <Link
                to="contactme-section"
                smooth={true}
                duration={500}
                offset={-50} // Adjust the offset as per your needs
                spy={true}
                exact="true"
                activeClass="active"
                style={{ cursor: "pointer" }} // Add cursor style
              >
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;