import Head from '../components/Head/Head'
import Circle from '../components/Circle/Circle'
import Social from '../components/Social/Social'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.grid}>
      
      <Head title="Johanna Parjanen" description="Olen 36-vuotias luottamusmies ja myyjä. Asumme mieheni ja 4 lapsemme kanssa Kortekummussa Kangasalla. Meistä tuli Kangasalalaisia vuonna 2011 kun muutimme Tampereelta Vatialaan." />

      <header className={styles.header}>
        <img src="/logo.svg" alt="SDP Logo" className={styles.logo} />
        <Circle number={185}></Circle>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.eyebrown}>Luottamusmies/myyjä</span>
          Johanna Parjanen
        </h1>

        <Social fb={"http://facebook.com"} ig={"http://instagram.com"}></Social>

        <p>
          Olen 36-vuotias luottamusmies ja myyjä. Asumme mieheni ja 4 lapsemme kanssa Kortekummussa Kangasalla. Meistä tuli Kangasalalaisia vuonna 2011 kun muutimme Tampereelta Vatialaan.
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
        
        <p>Olen motivoitunut kehittämään palveluitamme Kangasalla.
        Haluan kuulla kaupunkilaisten toiveita ja ajatuksia ajankohtaisten muutosten toteuttamiseksi.</p>

        <p>Meidän Kangasala rakennetaan yhdessä!</p>

        <p className={styles.copyright}>&copy; Johanna Parjanen 2021</p>

      </main>
    </div>
  )
}
