import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'

export function ServicesSection() {
  return (
    <>
      <SectionIntro
        eyebrow="Unsere Leistungen"
        title="Wir verbinden Technologie mit Vision, um Ihre Ziele zu erreichen."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Maßgeschneiderte Lösungen für Online-Shops, Integration und Optimierung – alles aus einer
          Hand.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Shop-Entwicklung">
              Aufbau und Optimierung von Online-Shops mit Shopify, OXID oder Shopware.
            </ListItem>
            <ListItem title="System-Integration">
              Nahtlose Verknüpfung Ihrer IT-Systeme wie ERP, PIM und CRM für reibungslose Prozesse
              und optimale Performance.
            </ListItem>
            <ListItem title="Frontend-Entwicklung">
              Gestaltung moderner, benutzerfreundlicher Oberflächen, von klassischen Templates bis
              zu Single-Page-Applications.
            </ListItem>
            <ListItem title="Backend-Entwicklung">
              Integration von Schnittstellen und Prozessautomatisierung, die Ihr Business effizient
              voranbringen.
            </ListItem>
            <ListItem title="Rundum-Support">
              Wir kümmern uns um technische Details, damit Sie sich auf Ihr Business konzentrieren
              können.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}
