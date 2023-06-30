import React from 'react'
import styles from "./Footer.css"
import "./Footer.css"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <footer>
        <div className={styles.footerWrapper}>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a class navbar-dark bg-dark ou navbar-light bg-light  */}
        <div className={`navbar-light bg-light footer`}>
          <div className="container">
            <div className={`row`}>
              <div className="col-sm-12 col-lg-6">
                {/* //Na linha seguinte deverá ser feito um teste se a aplicação
                // está em dark mode e deverá utilizar o css correto */}
                <img className={"dhLogo"} src="/images/DH.png" alt='DH-logo' />
              </div>
              <div className={`col-sm-12 col-lg-6 icons`}>
                <img src="/images/ico-facebook.png" alt="ícone do facebook" className={"icon"} />
                <img src="/images/ico-instagram.png" alt="ícone do instagram" className={"icon"} />
                <img src="/images/ico-whatsapp.png" alt="ícone do whatsapp" className={"icon"} />
                <img src="/images/ico-tiktok.png" alt="ícone do tiktok" className={"icon"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={`btn btn-danger top`} onClick={scrollToTop}>Volver para arriba</button>
    </footer>
  )
}

export default Footer
