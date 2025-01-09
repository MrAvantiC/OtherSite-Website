import { ServicesSection } from '@/components/ServicesSection'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { TypingEffect } from '@/components/TypingEffect'

export default function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn>
          <TypingEffect />

          <p className="mt-6 text-xl text-neutral-600 max-w-3xl">
            Ihre Partner für moderne E-Commerce-Lösungen. Von der Entwicklung leistungsstarker
            Online-Shops bis zur Integration komplexer IT-Systeme:{' '}
            <span className="md:block">Wir bringen Ihre Vision ins Web.</span>
          </p>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="max-w-xxl">
              <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                Was macht OtherSite besonders?
              </h2>

              <p className="mt-6 text-base text-white [text-wrap:balance]">
                Wir sind die andere Seite des E-Commerce: technisch stark, lösungsorientiert und
                immer an Ihrer Seite. Egal, ob Sie einen neuen Online-Shop starten oder bestehende
                Systeme optimieren möchten – unser Team aus Backend- und Frontend-Experten liefert
                genau das, was Sie brauchen.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>

      <ServicesSection />

      <ContactSection />
    </>
  )
}
