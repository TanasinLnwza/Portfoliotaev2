import logo from "./logo.svg";
import "./App.css";
import MainNavbar from "./Component/MainNavbar";
import MainBox from "./Component/MainBox";
import HamburgerNavigation from "./Component/HamburgerNavigation";
function Home() {
  return (
    <div className="App">
      <header>
        <HamburgerNavigation />
      </header>
      <article>
        <img></img>
      </article>
      <article>Hi Tae</article>
      
    </div>
  );
}

export default Home;
