import logo from "./logo.svg";
import "./App.css";
import MainNavbar from "./Component/MainNavbar";
import MainBox from "./Component/MainBox";
import HamburgerNavigation from "./Component/HamburgerNavigation";
import MyProjectCard from "./MyProjectCard";
import "./Sty.css";
function MyProject() {
  return (
    <div className="App">
      <header>
        <HamburgerNavigation pagename="myprojectPage" />
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
          MyProject
        </h1>
      </article>
      <div className="Myprocon">
        {" "}
        <MyProjectCard
          name="Mood Brian"
          img="\Project1.png"
          link="https://mood-tone.vercel.app/"
        />{" "}
        <MyProjectCard
          name="Todo list"
          img="\Project2.png"
          link="https://todolisttest-tau.vercel.app/"
        />{" "}
      </div>
      <h3 style={{ paddingBottom: "100%" }}> </h3>
    </div>
  );
}

export default MyProject;
