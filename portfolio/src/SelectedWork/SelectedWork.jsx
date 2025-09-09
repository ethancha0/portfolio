import { useState } from "react";
import styles from './SelectedWork.module.css'
import Project from "../Project/Project"; 

import PocketPlayerVid from '../assets/PocketPlayer/demo-vid.mp4'
import PocketPlayerImg from '../assets/PocketPlayer/popup.png'
import PixelMonVid from '../assets/PixelMon/demo-vid.mp4'
import PixelMonImg from '../assets/PixelMon/pokemon.png'

function SelectedWork() {
  // Step 1: state inside component
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <h1>Selected Work</h1>
    <ul className={styles['nav-bar']}>
      <li 
        
        onClick={() => setSelectedProject("pocket")}
        className={selectedProject === "pocket" ? styles.active : ""}
      >
        Pocket Player
      </li>
      <li 
        onClick={() => setSelectedProject("pokemon")}
        className={selectedProject === "pokemon" ? styles.active : ""}
      >
        Pixelmon
      </li>
    </ul>

      <div className="project-display">
        {selectedProject === "pocket" && (
          <Project 
          vid={PocketPlayerVid} 
          img1={PocketPlayerImg} 
          title="Pocket Player" 
          tech="Technologies used: HTML, CSS, React.js, WebAPI, ChromeAPI"
          description="A V3 Chrome extension that adds
          global shortcuts and pop-up UI to control Picture-in-Picture
           mode and 10-second seek on any site" />

        )}

        {selectedProject === "pokemon" && (
          <Project
            vid = {PixelMonVid}
            img1={PixelMonImg}
            tech = "Technologies used: HTML, CSS, React.js, PokeAPI"
            description="
            Game based on the Pokemon Anime to guess the pokemon based on its shadow. 
            Server based leaderboard coming soon! "
            title="Pixelmon"
          />
        )}
      </div>
    </div>
  );
}

export default SelectedWork;
