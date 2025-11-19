import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Demo />
      <Footer />
    </Layout>
  );
}

export default App;
