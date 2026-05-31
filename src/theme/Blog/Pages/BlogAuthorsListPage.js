import React from 'react';
import Layout from '@theme/Layout';

export default function BlogAuthorsListPage({authors = [], sidebar}) {
  return (
    <Layout>
      <main className="container padding-vert--lg">
        <h1>Authors</h1>
        <ul>
          {authors.map((author) => (
            <li key={author.key || author.name || author.title}>
              {author.title || author.name || author.key}
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
