//Exporterar "Kommande evenemang" till index.js under \pages
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { EventCalendar } from './calendar';
import Translate from '@docusaurus/Translate';
import Link from "@docusaurus/Link";
import BcgIcon from '@site/static/img/bcg.svg';
import AvgIcon from '@site/static/img/AVG.svg';
import EmcIcon from '@site/static/img/Emc.svg';
import DeloitteIcon from '@site/static/img/Deloitte.svg';
import McKinseyIcon from '@site/static/img/mckinsey.svg';
import BainIcon from '@site/static/img/bain.svg';
import PwcIcon from '@site/static/img/pwc.svg';

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
    </Link><Translate>på sektionen.</Translate>
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
      </Link><Translate>på sektionen.</Translate>
    </>
      
      
    ),
  },
];


function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img role="img" src={img} alt={""}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}



export default function HomepageFeatures() {


  return (
    <section className={styles.features}>
      <div className="container">
        <h2>
          <Translate>
          Kommande evenemang
          </Translate>
        </h2>
        <EventCalendar />




        <div className="row">

          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}


        </div>
          <div className="text--center">
              <h2 style={{textAlign: "center"}}>
                  <Translate>
                      Huvudsamarbetspartner
                  </Translate>
              </h2>
              <a href={"https://www.bcg.com/"}><BcgIcon width={300} height={200}/></a>
          </div>
          <div className="text--center">
              <h2>
                  <Translate>
                      Våra Samarbetspartners
                  </Translate>
              </h2>
          </div>
          <div className="row" style={{ justifyContent: "center", textAlign: "center" }}>
              <div className="col col--3">
                  <a href={"https://appliedvaluegroup.com/"}><AvgIcon width={200} height={100}/></a>
              </div>

              <div className="col col--3">
                    <a href={"https://www.ericsson.com/en/careers/strategic-programs-practice"}><EmcIcon width={200} height={100}/></a>
              </div>

              <div className="col col--3">
                    <a href={"https://www2.deloitte.com/se/sv.html"}><DeloitteIcon width={200} height={100}/></a>
              </div>
          </div>
          <div className="row" style={{ justifyContent: "center", textAlign: "center" }}>
              <div className="col col--3">
                  <a href={"https://www.mckinsey.com/careers/"}><McKinseyIcon width={200} height={100}/></a>
              </div>

              <div className="col col--3">
                  <a href={"https://www.bain.com/"}><BainIcon width={200} height={100}/></a>
              </div>

              <div className="col col--3">
                  <a href={"https://www.pwc.se/karriar/"}><PwcIcon width={200} height={100}/></a>
              </div>
          </div>
      </div>

    </section>
  );
  
}

