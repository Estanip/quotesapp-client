import React from 'react';

import Calculator from '../../components/Calculator/Index';
import Cards from '../../components/Cards/Index';
import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';

export default function Home() {

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', width: '100%', marginTop: '80px'}}>
        <Cards />
        <Calculator />
      </div>
      <Footer />
    </div>
  );
}
