import styles from "./Navtype.module.css";

const Navtype = ({type}) => {
    
    return (
        <div className={styles.navtype}>
            {type}
        </div>
    )
}

export default Navtype;