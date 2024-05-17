import { useState } from "react";
import useSound from "use-sound";
import data from "../data";
import "./SoloPage.css";
import { FaCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function SoloPage() {
  const [changeButton, setChangeButton] = useState(false);
  const [soundIndex, setSoundIndex] = useState(0);
  const [menuOpen, setMenuOpen]=useState(false)
  const [playSound] = useSound(data[soundIndex].sound);

  const navigate = useNavigate();

  const handleChange = () => {
    setChangeButton(true);
    setSoundIndex(soundIndex + 1);
    playSound();
  };
  if (soundIndex >= data.length - 1) {
    navigate("/finish");
  }
  const handleClick =()=>{
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <button onClick={handleClick} className="menu-instruction">Instructions</button>
      <div className="text-instruction"> 
      {menuOpen && (
        <p className="paragraph-instructions">
        Trouvez un espace calme où vous pouvez vous détendre sans être dérangé.
        <br></br>
        <br></br>
        Asseyez-vous ou tenez-vous debout dans une posture confortable, le dos
        droit et les épaules détendues.
        <br></br>
        <br></br><b style={{fontSize:'1.1rem'}}>Appuyez sur le bouton de lecture pour démarrer l'audio du rire. </b> 
        Laissez-vous aller et écoutez le son du rire avec attention.
        <br></br>
        <br></br>Une fois l'audio du rire terminé, <b style={{fontSize:'1.1rem'}}>imitez-le du
        mieux que vous le pouvez.</b> Laissez votre rire être authentique et
        spontané, sans vous inquiéter de son apparence ou de sa sonorité.
        <br></br>
        <br></br>
        <b style={{fontSize:'1.1rem'}}>Laissez-vous emporter par le rire contagieux.</b> Sentez la joie et la
        légèreté envahir votre être. N'hésitez pas à rire de vous-même et à vous
        laisser aller à l'amusement.
        <br></br>
        <br></br>
        Après avoir ri pendant quelques instants, prenez une courte pause pour respirer, puis préparez-vous à répéter le
        processus. <b style={{fontSize:'1.1rem'}}>Continuez à suivre les instructions et à rire avec abandon.</b>
      </p>
      )}
      </div>
    <div>
      <section className="display-solo-page">
        <div className="play-solo">
          {changeButton === false ? (
            <FaCirclePlay onClick={handleChange} className="btn-solo-sound" />
          ) : (
            <h2 className="btn-change-solo">A toi de rire !</h2>
          )}
        </div>
        {changeButton === true && (
          <button onClick={handleChange} className="btn-laught">
            Ris encore
          </button>
        )}
      </section>
    </div>
    </>
  );
}

export default SoloPage;
