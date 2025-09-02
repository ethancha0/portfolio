import styles from './Project.module.css';

function Project({vid, img1, title, description}){

    return(
        <div className='project'>

            <div className={styles['product-imgs']}>
                <video autoPlay muted loop
                ref={(el)=>{if(el) el.playbackRate = 2;}}> 
                    <source src={vid} type="video/mp4"></source>
                </video>
                
                <img src ={img1}/>
            </div>


            <h1>{title}</h1>

            <p>{description}</p>


        </div>
    );


}

export default Project