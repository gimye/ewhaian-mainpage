import styles from "./Header.module.css";
import Navtype from "./Navtype";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerwrapper}>
          <div className={styles.logo}>
            <img src="logo/favicon.png" alt="" className={styles.logoimage} />
            <div className={styles.ewhaianname}>이화이언</div>
          </div>

          <div className={styles.nav}>
            <Navtype type="이화이언"></Navtype>
            <Navtype type="라이프"></Navtype>
            <Navtype type="캠퍼스"></Navtype>
            <Navtype type="이벤트"></Navtype>
            <Navtype type="콘텐츠"></Navtype>
          </div>

          <div className={styles.secretlogo}>
            <img src="logo/hidekey.png" alt="" className={styles.hidekey}></img>
            <img src="logo/hamburger.png" alt="" className={styles.hamkey}></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
