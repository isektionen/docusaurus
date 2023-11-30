import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

const MyPage = () => {
  // Define your data with button information
  const buttonData = [
    { id: 1, label: 'Ledamöter till Kårfullmäktige', href: 'docs/central/karfullmaktige', position: { top: '4%', left: '64%' } },
    { id: 2, label: 'Clubmästeriet', href: 'docs/event/cmi', position: { top: '72%', left: '12%' } },
    { id: 3, label: 'GenI', href: 'docs/social/geni', position: { top: '62%', left: '69%' } },
    { id: 4, label: 'Näringslivsnämnden', href: 'docs/business/businesscom', position: { top: '57%', left: '41%' } },
    { id: 5, label: 'iSkillnad', href: 'docs/projects/iskillnad', position: { top: '41%', left: '85%' } },
    { id: 6, label: 'Skyddsombud', href: 'docs/central/skyddsombud', position: { top: '16%', left: '64%' } },
    { id: 7, label: 'I-Alumni', href: 'docs/social/ialumni', position: { top: '73%', left: '69%' } },
    { id: 8, label: 'Dagen-I', href: 'docs/business/dageni', position: { top: '62%', left: '41%' } },
    { id: 9, label: 'Kravallen', href: 'docs/projects/kravallen', position: { top: '50%', left: '85%' } },
    { id: 10, label: 'Valberedningen', href: 'docs/central/valberedningen', position: { top: '4%', left: '82%' } },
    { id: 11, label: 'ESTIEM', href: 'docs/event/estiem', position: { top: '77%', left: '12%' } },
    { id: 12, label: 'Idrottsnämnden', href: 'docs/social/idrottsnamnden', position: { top: '57%', left: '69%' } },
    { id: 13, label: 'I-Case', href: 'docs/business/icase', position: { top: '67%', left: '41%' } },
    { id: 14, label: 'Seniorkollegiet', href: 'docs/projects/seniorkollegiet', position: { top: '22%', left: '64%' } },
    { id: 15, label: 'iSpexet', href: 'docs/event/ispexet', position: { top: '57%', left: '12%' } },
    { id: 16, label: 'Internationella Gruppen', href: 'docs/social/internationalgroup', position: { top: '67%', left: '69%' } },
    { id: 17, label: 'I-Start', href: 'docs/business/istart', position: { top: '72%', left: '41%' } },
    { id: 18, label: 'Mottagningen', href: 'docs/event/reception', position: { top: '62%', left: '12%' } },
    { id: 19, label: 'Portergeneral', href: 'docs/social/portergeneral', position: { top: '78%', left: '69%' } },
    { id: 20, label: 'SOFt', href: 'docs/social/soft', position: { top: '83%', left: '69%' } },
    { id: 21, label: 'Kulturnämnden', href: 'docs/event/culture', position: { top: '67%', left: '12%' } },
    { id: 22, label: 'Studienämnden', href: 'docs/education', position: { top: '57%', left: '27%' } },
    { id: 23, label: 'Ingenjörskapital', href: 'docs/ekonomi', position: { top: '34%', left: '68%' } },
    { id: 24, label: 'Kommunikationsnämnden', href: 'docs/media', position: { top: '57%', left: '55%' } },
    { id: 25, label: 'Revisorer', href: 'docs/central/revisor', position: { top: '22%', left: '83%' } },
    { id: 26, label: 'Styrelsen', href: 'docs/board', position: { top: '43%', left: '40%' } },
    // Add more buttons as needed
  ];

  // URL of your image
const imageUrl = require("/static/img/karta2.png").default;

return (
    <Layout title="Hello" description="Hello React Page">
    <div style={{ position: 'relative' }}>
      <img src={imageUrl} alt="Your Image" style={{ maxWidth: '100%' }} />

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {buttonData.map((button) => (
          <a
            key={button.id}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              ...button.position,
              background: 'rgba(1, 1, 1, 0)', // Adjust the alpha (last) value for transparency
              padding: '15px', // Optional: Add padding for better visibility
            }}
          >
            <button style={{ background: 'transparent', border: 'none', color: 'rgba(1, 1, 1, 0)' }}>{button.label}</button>
          </a>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default MyPage;