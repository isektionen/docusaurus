import React from 'react';
import Layout from '@theme/Layout';

export default function ITidning() {
  return (
    <Layout title="I-tidning" description="I-sektionens tidning">
      <div style={{
        backgroundColor: '#fff3cd',
        border: '1px solid #ffc107',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px',
        textAlign: 'center',
        marginTop: '40px',
        marginLeft: '20px',
        marginRight: '20px',
      }}>
        <h2 style={{ color: '#856404', margin: '0 0 10px 0' }}> Coming Soon ! </h2>
        <p style={{ color: '#856404', margin: 0 }}>Vi arbetar på något spännande! I-tidningen lanseras snart.</p>
      </div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>I-tidningen</h1>
    </Layout>
  );
}