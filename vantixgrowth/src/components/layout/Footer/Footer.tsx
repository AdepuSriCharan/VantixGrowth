import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, CONTACT_EMAIL } from '@/constants/navigation';
import styles from './Footer.module.css';

export function Footer() {
  const { pathname } = useLocation();
  const isContact = pathname === '/contact';
  const isHome = pathname === '/';

  if (isContact) {
    return (
      <footer data-theme="indigo" className={styles.footerSimple}>
        <div className={styles.container}>
          <div className={styles.simpleTop}>
            <div className={styles.linksRow}>
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} to={item.href} className={styles.link} data-cursor="">
                  {item.label}
                </Link>
              ))}
              <Link to="/" className={styles.link} data-cursor="">Home</Link>
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.emailLink} data-cursor="">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className={styles.simpleBottom}>
            <span>© 2026 VantixGrowth Media</span>
            <span>Made deliberately.</span>
          </div>
        </div>

        <div aria-hidden="true" className={styles.ghostText}>
          VantixGrowth
        </div>
      </footer>
    );
  }

  return (
    <footer data-theme="indigo" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div>
            <Link to="/contact" data-cursor="" className={styles.headline}>
              Let's build something<br />worth <span className={styles.accent}>watching</span> →
            </Link>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <span className={styles.columnLabel}>Pages</span>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={styles.link}
                  data-cursor=""
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className={styles.link} data-cursor="">Contact</Link>
            </div>

            <div className={styles.column}>
              <span className={styles.columnLabel}>Contact</span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={styles.emailLink}
                data-cursor=""
              >
                {CONTACT_EMAIL}
              </a>
              <a href="#" className={styles.link} data-cursor="">Instagram</a>
              <a href="#" className={styles.link} data-cursor="">LinkedIn</a>
              {isHome && <a href="#" className={styles.link} data-cursor="">X / Twitter</a>}
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <span>© 2026 VantixGrowth Media</span>
          <span>Boutique content growth studio for tech</span>
          <span>Made deliberately.</span>
        </div>
      </div>

      <div aria-hidden="true" className={styles.ghostText}>
        VantixGrowth
      </div>
    </footer>
  );
}
