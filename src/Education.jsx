import logo from "./logo.svg";
import "./App.css";
import MainNavbar from "./Component/MainNavbar";
import MainBox from "./Component/MainBox";
import HamburgerNavigation from "./Component/HamburgerNavigation";
import "./Sty.css";
function Education() {
  return (
    <div className="App">
      <header>
        <HamburgerNavigation pagename="educationPage" />
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
          Education
        </h1>
      </article>
      <article className="img">
        <img
          src="https://upload.wikimedia.org/wikipedia/th/a/af/RMUTTLOGO.png"
          alt="รูปภาพ"
          style={{ height: 210, width: 120}}
        />
      </article>
      <h2
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          paddingTop: 80,
          paddingBottom: "0%",
        }}
      >
        <div className="">Bachelor Degrees</div>
      </h2>
      <h3>Rajamangala University of Technology Thanyaburi</h3>
      <h3> Avionics Engineering ,Faculty of Engineering </h3>
      <h3 style={{paddingBottom:"100%"}}> GPA: 3.01  (2019-2023)</h3>
    </div>
  );
}

export default Education;
