import styles from "./Banner.module.css"

const Banner = () => {

    return (
        <div className={styles.banner}>
            <img src="logo/banner.png" className={styles.image}></img>
        </div>
    )
}

export default Banner;