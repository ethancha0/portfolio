import Header from './Header/Header'
import Description from './Description/Description'
import Project from './Project/Project'
import SelectedWork from './SelectedWork/SelectedWork'
import Timeline from './Timeline/Timeline'



function App() {
  

  return (
    <>
    <Header/>
    <div className="portfolio">
      <div className="left-column">
        <Description/>
        <Timeline/>
      </div>  

      <div className="right-column">
        <SelectedWork/>

         

      </div>


      
      </div>
    </>
  )
}

export default App
