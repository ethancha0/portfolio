import Header from './Header/Header'
import Description from './Description/Description'
import Project from './Project/Project'
import SelectedWork from './SelectedWork/SelectedWork'

import PocketPlayerVid from './assets/PocketPlayer/demo-vid.mp4'
import PocketPlayerImg from './assets/PocketPlayer/popup.png'

function App() {
  

  return (
    <>
    <Header/>
    <div className="portfolio">
      <div className="left-column">
        <Description/>
      </div>  

      <div className="right-column">

        <Project vid={PocketPlayerVid} img1={PocketPlayerImg} title="Pocket Player" description="Sample Description"/>

      </div>


      
      </div>
    </>
  )
}

export default App
