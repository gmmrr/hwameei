* {
  margin: 0;
  padding: 0;
}

html {
  width: 100vw;
  overflow-x: hidden;
}

body {
  position: relative;
  background-color: #faf8f8;
}

#navbar {
  position: relative;
}
#navbar #hamburger_icon {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 15px;
  left: 25px;
  z-index: 3;
  background-image: url("../src/hamburger_icon.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
#navbar #hamburger_icon:hover {
  cursor: pointer;
}
#navbar #hamburger_content_shadow {
  display: none;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
}
#navbar #hamburger_content {
  position: fixed;
  display: none;
  left: 0;
  height: 100vh;
  width: 65vw;
  z-index: 10;
  background-color: white;
  user-select: none;
}
#navbar #hamburger_content #hamburger_close {
  position: absolute;
  top: 12px;
  left: 19.5px;
  width: 70px;
  height: 70px;
  background-image: url("../src/hamburger_close.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
#navbar #hamburger_content #hamburger_close:hover {
  cursor: pointer;
}
#navbar #hamburger_content .hamburger_element {
  margin-left: 10vw;
  display: flex;
  align-items: center;
  margin-top: 10vh;
}
#navbar #hamburger_content .hamburger_element .hamburger_element_zsh {
  font-size: 2rem;
  color: #62b6b7;
  letter-spacing: 1.5rem;
}
#navbar #hamburger_content .hamburger_element .hamburger_element_eng {
  margin-left: 3vw;
  font-family: "Inter";
  font-size: 1rem;
  font-weight: 400;
  color: #62b6b7;
}
#navbar #hamburger_content .hamburger_element:hover {
  cursor: pointer;
}
#navbar #hamburger_content #hamburger_element_homepage {
  margin-top: 15vh;
}
#navbar #hamburger_content #hamburger_element_login {
  display: flex;
}
#navbar #hamburger_content #hamburger_element_logout {
  display: none;
}
#navbar #you_are_in_element {
  position: absolute;
  height: 60px;
  top: 20px;
  right: 25px;
  font-size: 1.5rem;
  color: #62b6b7;
  letter-spacing: 3px;
}

#functionbar {
  position: fixed;
  top: 65vh;
  margin-left: 1vw;
  z-index: 3;
}
#functionbar #cart_func {
  width: 4vw;
  height: 4vw;
  background-image: url("../src/funcbar_cart.png");
  background-position: center;
  background-size: cover;
}
#functionbar #cart_func:hover {
  cursor: pointer;
}
#functionbar #line_func {
  width: 4vw;
  height: 4vw;
  margin-top: 1vh;
  background-image: url("../src/funcbar_line.png");
  background-position: center;
  background-size: cover;
}
#functionbar #line_func:hover {
  cursor: pointer;
}
#functionbar #info_func {
  width: 4vw;
  height: 4vw;
  margin-top: 1vh;
  background-image: url("../src/funcbar_info.png");
  background-position: center;
  background-size: cover;
}
#functionbar #info_func:hover {
  cursor: pointer;
}

#face_api {
  position: relative;
  padding-top: 20vh;
  width: 100vw;
  height: 60vh;
  transform: scaleX(-1);
  overflow: hidden;
}
#face_api #face_api_video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#face_api #face_api_canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/*# sourceMappingURL=style_test.cs.map */
