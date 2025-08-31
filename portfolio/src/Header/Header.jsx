import styles from './Header.module.css'

function Header(){

    return(
        <div className={styles.header}> 
            <h1>Ethan Chao</h1>
            <nav className ={styles.navbar}>
                <ul>
                    <li><a href = '#'>Work</a></li>
                    <li><a href = '#'>About Me</a></li>
                    <li><a href = '#'>Contact</a></li>
                    
                </ul>
            </nav>
            <hl></hl>
        </div>
        
    );


}

export default Header