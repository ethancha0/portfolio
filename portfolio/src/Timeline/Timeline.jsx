import styles from './Timeline.module.css'
function Timeline (){

    return(

        <div>
            <h2 className = {styles.timeline}>Timeline</h2>

            <div className={styles.entry}>
                <h3>July 2025</h3>
                <p>Started learning back end fundamentals in Node.js and Express.js</p>
            </div>
            <div className={styles.entry}>
                <h3>May 2025</h3>
                <p>Began creating projects in React.js, HTML, CSS, JS</p>
            </div>
            <div className={styles.entry}>
                <h3>Fall 2024 - Spring 2025</h3>
                <p>Strengthened fundamentals in low-level programming in C and Assembly</p>
            </div>
            <div className={styles.entry}>
                <h3>Fall 2023 - Spring 2024</h3>
                <p>Learned Data Structures and Algorithms in C++ and Python, and basic Java </p>
            </div>
            

        </div>

    );


}


export default Timeline