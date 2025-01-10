import { Container } from '@/components/Container'

export default function DataPrivacy() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Website</h2>
        <p>
          Dieses Impressum gilt für alle Angebote unter der Domain OtherSite GmbH inklusive aller
          Subdomains (Unterseiten).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Angaben gemäß § 5 DDG</h2>
        <p>
          Name: OtherSite GmbH
          <br />
          Straße, Hausnummer: Hans-Löscher-Straße 21
          <br />
          Postleitzahl, Ort: 39108 Magdeburg
          <br />
          Land: Deutschland
          <br />
          E-Mail:{' '}
          <a href="mailto:pm@othersite.io" className="text-blue-500">
            hello@othersite.io
          </a>
          <br />
          Tel.: ____________________________
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Eintragung</h2>
        <p>
          Register: Amtsgericht Stendal
          <br />
          Registernummer: HRB 35216
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Vertretungsberechtigte Personen</h2>
        <p>
          Isabel-Sophie Bales, Geschäftsführerin
          <br />
          René Mäkeler, Geschäftsführer
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Gültigkeit</h2>
        <p>Dieses Impressum gilt ab dem 10. Januar 2025.</p>
      </section>
    </Container>
  )
}
