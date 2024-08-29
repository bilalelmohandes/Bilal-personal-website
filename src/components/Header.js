import React, { useState, useEffect, useCallback } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Header = ({ sharedData }) => {
  const [checked, setChecked] = useState(false);
  const [titles, setTitles] = useState([]);
  const [name, setName] = useState("");

  const onThemeSwitchChange = (checked) => {
    setChecked(checked);
    setTheme(checked);
  };

  const setTheme = (isDark) => {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme = isDark ? "dark" : "light";
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    if (sharedData) {
      setName(sharedData.name || "");
      setTitles(sharedData.titles.map((x) => [x.toUpperCase(), 1500]).flat());
    }
  }, [sharedData]);

  const HeaderTitleTypeAnimation = React.memo(
    () => {
      return <Typical className="title-styles" steps={titles} loop={50} />;
    },
    () => true
  );

  return (
    <header
      id="home"
      style={{
        height: window.innerHeight,
        display: "block",
        position: "relative",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: checked ? "#000000" : "#567698", // Change background color based on the theme
            },
            image: checked
              ? "" // No gradient in dark mode
              : "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
          },
          detectRetina: true,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.4,
                speed: 1,
              },
              bubble: {
                distance: 250,
                duration: 2,
                opacity: 0,
                size: 0,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
                speed: 1,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: {
                value: "#ffffff",
              },
              distance: 150,
              enable: false,
              opacity: 0.4,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 160,
            },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                minimumValue: 0,
                speed: 1,
                sync: false,
              },
            },
            size: {
              value: 3,
            },
          },
          pauseOnBlur: true,
          fullScreen: {
            enable: false,
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div>
            <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            ></span>
            <br />
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            <div style={{ marginTop: "50px" }}>
              <Switch
                checked={checked}
                onChange={onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
