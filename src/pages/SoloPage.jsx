import Header from "../components/Header";
import "./SoloPage.css"
import { FaCirclePlay } from "react-icons/fa6";


function SoloPage() {
  return (
    <>
      <Header />
      <section className="display-solo-page">
      <div className="play-solo">
       <FaCirclePlay className="btn-solo-sound" />
      </div>
      </section>
    </>
  );
}

export default SoloPage;
