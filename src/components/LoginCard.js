import styles from '../styles/login.module.css';
import { useRouter } from 'next/router';

export default function LoginCard({ onGithubLogin }) {
  const { basePath } = useRouter();

  return (
    <div className={styles.loginPage}>
      {/* 左侧插画区 */}
      <div className={styles.leftPanel}>
        <img
          src={`${basePath}/welcome-illustration.png`}
          alt="Bytebase Welcome"
          className={styles.fullBgImg}
        />
      </div>
      {/* 右侧登录卡片 */}
      <div className={styles.rightPanel}>
        <div className={styles.loginCard}>
          <div className={styles.brand}>
            <img src={`${basePath}/logo.png`} alt="Bytebase" className={styles.logo} />
            <span className={styles.brandText}>Bytebase</span>
          </div>
          <h5 className={styles.welcome}>欢迎</h5>
          <p className={styles.desc}>登录 Bytebase 以继续使用 Bytebase Hub。</p>
          <div className={styles.socialButtons}>
            <button className={styles.socialBtn} onClick={() => {/* 你可以后续实现 Google 登录 */}}>
              <span className={styles.icon}><img src={`${basePath}/google.svg`} alt="Google" /></span>
              继续使用 Google
            </button>
            <button className={styles.socialBtn} onClick={onGithubLogin}>
              <span className={styles.icon}><img src={`${basePath}/github.png`} alt="GitHub" /></span>
              继续使用 GitHub
            </button>
            <button className={styles.socialBtn} onClick={() => {/* 你可以后续实现 Microsoft 登录 */}}>
              <span className={styles.icon}><img src={`${basePath}/microsoft.png`} alt="Microsoft" /></span>
              继续使用 Microsoft Account
            </button>
          </div>
          <div className={styles.or}>或</div>
          <input type="email" placeholder="电子邮件地址*" className={styles.input} />
          <button className={styles.continueBtn}>继续</button>
          <div className={styles.footer}>
            没有账户？<a href="#" className={styles.register}>注册</a>
          </div>
        </div>
      </div>
    </div>
  );
}