import { useContext } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link as LinkScroll } from "react-scroll";
import * as Scroll from "react-scroll";
import HomeTitle from "./hometitle";
import Link from "../Link";
import { context } from "../container";

export default function Home() {
  // const container = useContext(context);
  return (
    <section id="home">
      <Box id="app" className="w-full">
        <Box className="wrapper">
          <Box className="main">
            <Box className="home-slide relative h-screen">
              <Box className="container-fluid block">
                <Box className="row h-[95vh] justify-center items-center text-center flex flex-wrap">
                  <Box className="sm: col-10 text-left z-10">
                    <Typography
                      variant="h2"
                      className="text-right font-G-light text-lg text-light mb-5 fadein"
                    >
                      Development for your experience
                    </Typography>
                    <HomeTitle />
                    <LinkScroll
                      containerId="container"
                      smooth="linear"
                      spy
                      duration={800}
                      delay={200}
                      onClick={() => {
                        if (process.browser) {
                          const container =
                            document.getElementById("container");
                          container.style.scrollSnapType = "none";
                        }
                        setTimeout(() => {
                          container.style.scrollSnapType = "y mandatory";
                        }, 950);
                      }}
                      to="whatido"
                      className="text-white"
                    >
                      <Button className="bg-black text-white rounded-full px-20 normal-case hover:bg-black hover:opacity-50 float-right text-sm fadein">
                        My History
                      </Button>
                    </LinkScroll>
                  </Box>
                </Box>
              </Box>
              <Box className="scroll absolute bottom-h-w  left-h-logo fadein">
                <Link href="#whatido" className="p-8 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.451"
                    height="77.847"
                    viewBox="0 0 20.451 77.847"
                  >
                    <g
                      id="????????????_20"
                      data-name="???????????? 20"
                      transform="translate(-74.284 -618.93)"
                    >
                      <g
                        id="?????????????????????_23_1"
                        data-name="????????????????????? 23 ??? 1"
                        transform="translate(74.284 618.93)"
                      >
                        <text
                          id="??????"
                          style={{
                            transform:
                              "matrix(-0.017, -1, 1, -0.017, 15.998, 0.07)",
                            fontSize: "15",
                            fontFamily: "YuGothicUI-Light, Yu Gothic UI",
                            fontWeight: "300",
                            letterSpacing: "0.089em",
                            textDecoration: "line-through",
                          }}
                          // transform="matrix(-0.017, -1, 1, -0.017, 15.998, 0.07)"
                          // font-size="15"
                          // font-family="YuGothicUI-Light, Yu Gothic UI"
                          // font-weight="300"
                          // letter-spacing="0.089em"
                          // text-decoration="line-through"
                        >
                          <tspan x="-25.336" y="0">
                            ??????
                          </tspan>
                        </text>
                        <line
                          id="???_1"
                          data-name="??? 1"
                          y2="41"
                          transform="translate(10.216 36.57)"
                          style={{
                            strokeWidth: "1",
                          }}
                          fill="none"
                          stroke="#000"
                        />
                        <line
                          id="???_2"
                          data-name="??? 2"
                          x2="4"
                          y2="6"
                          fill="none"
                          stroke="#000"
                          transform="translate(6.216 71.57)"
                          style={{
                            strokeWidth: "1",
                          }}
                        />
                        <line
                          id="???_3"
                          data-name="??? 3"
                          x1="4"
                          y2="6"
                          transform="translate(10.216 71.57)"
                          style={{
                            strokeWidth: "1",
                          }}
                          fill="none"
                          stroke="#000"
                        />
                      </g>
                    </g>
                  </svg>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
