import Head from '../components/Head/Head'
import Circle from '../components/Circle/Circle'
import Social from '../components/Social/Social'
import Rose from '../components/Rose/Rose'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.grid}>
      
      <Head
        title="Johanna Parjanen valtuustoon"
        description="Johanna Parjanen on 36-vuotias luottamusmies ja myyjä. Hän asuu miehen ja 4 lapsen kanssa Kortekummussa Kangasalla. Johanna on ollut kangasalalainen jo kymmenen vuoden ajan." />

      <header className={styles.header}>
        <img src="/logo.svg" alt="SDP Logo" className={styles.logo} />
        <Circle number={185}></Circle>
      </header>

      <main className={styles.main}>
        
        <Social fb={"http://facebook.com"} ig={"http://instagram.com/johannaparjanenvaltuustoon"}></Social>

        <h1 className={styles.title}>
          <span className={styles.eyebrown}>Luottamusmies/myyjä</span>
          Johanna Parjanen
        </h1>

        <p>
          Olen 36-vuotias luottamusmies ja myyjä. Asumme mieheni ja 4 lapsemme kanssa Kortekummussa Kangasalla. Meistä tuli kangasalalaisia vuonna 2011 kun muutimme Tampereelta Vatialaan.
        </p>

        <p>
          Koulutukseltani olen YO-Merkonomi Ikaalisten Kauppaoppilaitoksesta. Ylioppilaaksi kirjoitin Messukylän lukiosta vuonna 2004.
        </p>

        <h2>Tasa-arvo</h2>
        <p>Työn ja perheen yhteensovittamisessa kaupungin päätöksillä on iso merkitys.</p>

        <h2>Yhdenvertaisuus</h2>
        <p>Kaikilla tulee olla mahdollisuus vaikuttaa kotikaupunkinsa päätöksentekoon.</p>

        <h2>Luovuus</h2>
        <p>Tarvitsemme ratkaisukeskeistä lähestymistä epäkohtien korjaamiseksi.</p>

        <Rose />
        
        <p>Olen motivoitunut kehittämään palveluitamme Kangasalla.
        Haluan kuulla kaupunkilaisten toiveita ja ajatuksia ajankohtaisten muutosten toteuttamiseksi.</p>

        <p><em>Meidän Kangasala rakennetaan yhdessä!</em></p>

        <p className={styles.copyright}>&copy; Johanna Parjanen 2021</p>

      </main>
    </div>
  )
}
