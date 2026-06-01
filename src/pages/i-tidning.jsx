import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function ITidning() {
  const [selectedPDF, setSelectedPDF] = useState(null);

  const previousIssues = [
    { title: 'I-tidningen 26', date: '2026', file: 'INDEX4.pdf' },
    { title: 'I-tidningen 25', date: '2025', file: 'INDEX3.pdf' },
    { title: 'I-tidningen 24', date: '2024', file: 'INDEX2.pdf' },
    { title: 'I-tidningen 23', date: '2023', file: 'INDEX1.pdf' },
  ];

  return (
    <Layout title="I-tidningen" description="I-sektionens tidning">
      <div style={{ padding: '40px 20px' }}>
        <h1 style={{ textAlign: 'center' }}>I-tidningen</h1>

        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {!selectedPDF ? (
            <div>
              <h2>Tidigare utgåvor</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
                {previousIssues.map((issue, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPDF(issue.file)}
                    style={{
                      padding: '20px',
                      border: '2px solid #7d5a3e',
                      borderRadius: '8px',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      textAlign: 'center',
                      fontSize: '16px',
                      fontWeight: 'bold',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#7d5a3e';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'inherit';
                    }}
                  >
                    <h3 style={{ margin: '0 0 5px 0' }}>{issue.title}</h3>
                    <p style={{ margin: 0, fontSize: '14px' }}>{issue.date}</p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <button
                onClick={() => setSelectedPDF(null)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#7d5a3e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginBottom: '20px',
                  fontSize: '16px',
                }}
              >
                ← Tillbaka till utgåvor
              </button>

              <embed
                src={`/pdfs/${selectedPDF}#toolbar=1&navpanes=0&scrollbar=1`}
                type="application/pdf"
                style={{
                  width: '100%',
                  height: '800px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  marginBottom: '20px',
                }}
                title="PDF Viewer"
              />
              
              <p style={{ marginTop: '10px', textAlign: 'center' }}>
                <a 
                  href={`/pdfs/${selectedPDF}`} 
                  download
                  style={{ 
                    color: '#7d5a3e', 
                    textDecoration: 'underline',
                    marginRight: '20px'
                  }}
                >
                  ⬇️ Ladda ner PDF
                </a>
                <a 
                  href={`/pdfs/${selectedPDF}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#7d5a3e', textDecoration: 'underline' }}
                >
                  🔗 Öppna i nytt fönster
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}