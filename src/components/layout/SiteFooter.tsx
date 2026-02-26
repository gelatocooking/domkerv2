import Link from "next/link";
import buttonStyles from "@/styles/Button.module.css";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
        

      <section className={styles["site-footer"]}>
        <div className={`${styles["footer-wrap"]} ${styles.cols}`}>
          <div className={styles.col}>
            <h4>Domker</h4>
            <p>
              Domker to poukladane procesy sprzatania — dzialamy na standardach kompetencji i
              raportujemy postepy prac, zeby chronic interes klienta.
            </p>
            <ul className={styles.links}>
              <li>
                <Link href="/kontakt">Zapytaj o wycene</Link>
              </li>
              <li>
                <Link href="/realizacje">Zobacz realizacje</Link>
              </li>
              <li>
                <Link href="/referencje">Opinie klientow</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Uslugi dla firm</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/uslugi-dla-firm">Uslugi dla firm</Link>
              </li>
              <li>
                <Link href="/sprzatanie-po-budowie">Sprzatanie po budowie</Link>
              </li>
              <li>
                <Link href="/maszynowe-czyszczenie-posadzek">Maszynowe czyszczenie posadzek</Link>
              </li>
              <li>
                <Link href="/mycie-okien-i-witryn">Mycie okien i witryn</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Na skroty</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/">Strona glowna</Link>
              </li>
              <li>
                <Link href="/realizacje">Realizacje</Link>
              </li>
              <li>
                <Link href="/referencje">Referencje / opinie</Link>
              </li>
              <li>
                <Link href="/cennik">Cennik / widelki</Link>
              </li>
              <li>
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Bezposredni kontakt</h4>
            <p>
              <a className={styles["contact-link"]} href="tel:+48502992002">
                +48 502 992 002
              </a>
              <br />
              <a className={styles["contact-link"]} href="mailto:uslugi@domker.pl">
                uslugi@domker.pl
              </a>
            </p>
            <p className={styles.company}>
              <strong>Fryderyk Ossolinski „Domker”</strong>
              <br />
              Akacjowa 7/2, 59-100 Polkowice
              <br />
              NIP: 5020127255, REGON: 528019172
            </p>
            <ul className={styles.social}>
              <li>
                <a href="#" rel="nofollow">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles["footer-wrap"]} ${styles.bottom}`}>
          <p>© {year} Domker. Wszelkie prawa zastrzezone.</p>
          <ul className={styles.legal}>
            <li>
              <Link href="/polityka-prywatnosci">Polityka prywatnosci</Link>
            </li>
            <li>
              <Link href="/warunki-uzytkowania">Warunki uzytkowania</Link>
            </li>
            <li>
              <Link href="/rodo">RODO</Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
