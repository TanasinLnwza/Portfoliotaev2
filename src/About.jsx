import logo from "./logo.svg";
import "./App.css";
import MainNavbar from "./Component/MainNavbar";
import MainBox from "./Component/MainBox";
import HamburgerNavigation from "./Component/HamburgerNavigation";
function About() {
  return (
    <div className="App">
      <header>
        <HamburgerNavigation pagename="aboutPage" />
      </header>
      <article>
        <h1
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            paddingTop: 40,
            marginBottom: 40,
          }}
        >
          About Me
        </h1>
      </article>
      <article
        className="Atext"
        style={{
          paddingTop: 40,
          marginBottom: 20,
        }}
      >
        My name is Tanasin Yodsomboon
      </article>
      <div className="Atext">Nick name Tae</div>
      <div className="Atext">Age : 22 Y. </div>
      <div className="Atext">Date of birth : 18/05/2001 </div>
      <div className="Atext">Height : 161 cm.</div>
      <div className="Atext">Weight : 50 kg.</div>
      <div className="Atext">My favourite Game : Ragnarok, Minecraft, Stardew Valley, Rov </div>
      <div className="Atext">My favourite Color : Black, BlueOcean, Green </div>
      <h2
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          paddingTop: 80,
          paddingBottom: "100%",
        }}
      >
        <div className=""></div>
      </h2>
    </div>
  );
}

export default About;
