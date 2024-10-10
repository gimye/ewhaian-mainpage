import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [keepLogin, setKeepLogin] = useState(true);
    const [capsLockId, setCapsLockId] = useState(false);
    const [capsLockPw, setCapsLockPw] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const checkCapsLockId = (event) => {
        setCapsLockId(event.getModifierState("CapsLock"));
    };

    const checkCapsLockPw = (event) => {
        setCapsLockPw(event.getModifierState("CapsLock"));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 로그인 로직
    };

    return (
        <div className={styles.loginbox}>
            <form onSubmit={handleSubmit} className={styles.loginform}>
                <div className={styles.inputcontainer}>
                    <div className={styles.inputform}>
                        <input
                            type="text"
                            name="username"
                            className={styles.input}
                            placeholder="아이디"
                            autoFocus
                            autoComplete="off"
                            value={username}
                            onChange={handleUsernameChange}
                            onKeyUp={checkCapsLockId}
                        />
                        {capsLockId && (
                            <span className="capslock">캡스락이 켜져 있습니다.</span>
                        )}
                    </div>
                    <div className={styles.inputform}>
                        <input
                            type="password"
                            name="password"
                            className={styles.input}
                            placeholder="비밀번호"
                            value={password}
                            onChange={handlePasswordChange}
                            onKeyUp={checkCapsLockPw}
                        />
                        {capsLockPw && (
                            <span className="capslock">캡스락이 켜져 있습니다.</span>
                        )}
                    </div>
                    <div className={styles.checkbox_container}>
                        <div className={styles.checkbox}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="remember"
                                name="remember"
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                            />
                            <label className={styles.checkbox_label} htmlFor="remember">
                                <span>아이디 기억</span>
                            </label>
                        </div>
                        <div className={styles.checkbox}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="keep-login"
                                name="keepLogin"
                                checked={keepLogin}
                                onChange={() => setKeepLogin(!keepLogin)}
                            />
                            <label className={styles.checkbox_label} htmlFor="keep-login">
                                <span>로그인 유지</span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className={styles.login_button}>로그인</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
