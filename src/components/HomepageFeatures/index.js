//Exporterar "Kommande evenemang" till index.js under \pages
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { EventCalendar } from './calendar';
import Stats from './stats';
import Translate from '@docusaurus/Translate';
import Link from "@docusaurus/Link";
import { useColorMode } from '@docusaurus/theme-common';
import BcgIcon from '@site/static/img/bcg.svg';
import BcgIconDark from '@site/static/img/bcgDark.svg';
import AvgIcon from '@site/static/img/AVG.svg';
import AvgIconDark from '@site/static/img/AVGDark.svg';
import DeloitteIcon from '@site/static/img/deloitte.svg';
import DeloitteIconDark from '@site/static/img/deloitteDark.svg';
import McKinseyIcon from '@site/static/img/mckinsey.svg';
import MckinseyIconDark from '@site/static/img/mckinseyDark.svg';
import BainIcon from '@site/static/img/bain.svg';
import BainIconDark from '@site/static/img/bainDark.svg';
import PwcIcon from '@site/static/img/pwc.svg';
import PwcIconDark from '@site/static/img/pwcDark.svg';
import RolandBergerIcon from '@site/static/img/Roland_Berger_logo.svg';
import RolandBergerIconDark from '@site/static/img/Roland_Berger_logo_dark.svg';
import GoogleCalIcon from '@site/static/img/googlecal.svg';
const FeatureList = [
  {
    title: <Translate>Engagera dig</Translate>,
    img: require('@site/static/img/reception.jpg').default,
    description: (
      <>
        <Translate>Vill du engagera dig i sektionen? Kolla in våra</Translate><Link
          to={process.env.DOCUSAURUS_CURRENT_LOCALE === 'sv' ? '/docs/intro' : '/en/docs/intro'}>
          <Translate>nämnder</Translate>
        </Link><Translate>och hitta en som passar dig!</Translate>
      </>
    ),
  },
  {
    title: <Translate>Välmående</Translate>,
    img: require('@site/static/img/pride.jpg').default,
    description: (


      <>
        <Translate>Vi vill att alla ska må bra. Läs mer om hur vi jobbar med</Translate><Link
          to={process.env.DOCUSAURUS_CURRENT_LOCALE === 'sv' ? '/trygghet' : '/en/trygghet'}>
          <Translate>välmående</Translate>
        </Link><Translate> på sektionen.</Translate>
      </>

    ),
  },
  {
    title: <Translate>För företag</Translate>,
    img: require('@site/static/img/dinner.jpg').default,

    description: (

      <>
        <Translate>Vill du samarbeta med oss? Läs mer om hur vi jobbar med</Translate>
        <Link
          to={process.env.DOCUSAURUS_CURRENT_LOCALE === 'sv' ? '/business' : '/en/business'}>
          <Translate>företag</Translate>
        </Link><Translate> på sektionen.</Translate>
      </>


    ),
  },
];


function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img role="img" src={img} alt={""} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}



export default function HomepageFeatures() {
  const { colorMode } = useColorMode();
  return (
    <section className={styles.features}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a
          href="https://calendar.google.com/calendar/u/0/embed?src=iare.nu_pre97odp8btuq3u2a9i6u3fnbc@group.calendar.google.com&ctz=Europe/Stockholm"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', margin: 0 }}
        >
          <GoogleCalIcon style={{ height: '3rem', alignItems: 'center', margin: 0 }} />
        </a>
        <h2 style={{ margin: 0, lineHeight: 1, alignItems: 'center'}}>
          <Translate>
            Kommande evenemang
          </Translate>
        </h2>
        </div>
        <EventCalendar />




        <div className="row">

          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}


        </div>

        {/* Stats Section */}
        <div className="text--center" style={{ marginTop: '4rem', marginBottom: '4rem', padding: '2rem 0', borderTop: '1px solid var(--ifm-color-emphasis-300)', borderBottom: '1px solid var(--ifm-color-emphasis-300)' }}>
          <h2>
            <Translate>
              Sektionen i siffror
            </Translate>
          </h2>
          <Stats />
        </div>

        {/* Sponsors Section */}
        <div style={{ marginTop: '4rem' }}>
          <div className="text--center">
            <h2>
              <Translate>
                Våra Samarbetspartners
              </Translate>
            </h2>
          </div>
          <div className="row" style={{ justifyContent: "center", textAlign: "center" }}>
            <div className="col col--3">
              <a href={"https://appliedvaluegroup.com/"}>
                {colorMode === 'dark' ? (
                  <AvgIconDark width={200} height={100} />
                ) : (
                  <AvgIcon width={200} height={100} />
                )}
              </a>
            </div>


            <div className="col col--3">
              <a href={"https://www.bain.com/"}>
                {colorMode === 'dark' ? (
                  <BainIconDark width={200} height={100} />
                ) : (
                  <BainIcon width={200} height={100} />
                )}
              </a>
            </div>

            <div className="col col--3">
              <a href={"https://www2.deloitte.com/se/sv.html"}>
                {colorMode === 'dark' ? (
                  <DeloitteIconDark width={200} height={100} />
                ) : (
                  <DeloitteIcon width={200} height={100} />
                )}
              </a>
            </div>
          </div>
          <div className="row" style={{ justifyContent: "center", textAlign: "center" }}>
            <div className="col col--3">
              <a href={"https://www.mckinsey.com/careers/"}>
                {colorMode === 'dark' ? (
                  <MckinseyIconDark width={200} height={100} />
                ) : (
                  <McKinseyIcon width={200} height={100} />
                )}
              </a>
            </div>

            <div className="col col--3">
              <a href={"https://www.rolandberger.com/en/"}>
                {colorMode === 'dark' ? (
                  <RolandBergerIconDark width={200} height={100} />
                ) : (
                  <RolandBergerIcon width={200} height={100} />
                )}
              </a>
            </div>

            <div className="col col--3">
              <a href={"https://www.pwc.se/karriar/"}>
                {colorMode === 'dark' ? (
                  <PwcIconDark width={200} height={100} />
                ) : (
                  <PwcIcon width={200} height={100} />
                )}
              </a>
            </div>

            <div className="col col--3">
              <a href={"https://www.bcg.com/"}>
                {colorMode === 'dark' ? (
                  <BcgIconDark width={150} height={100} />
                ) : (
                  <BcgIcon width={150} height={100} />
                )}
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );

}

