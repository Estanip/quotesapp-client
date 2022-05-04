import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cards from '../../components/Cards/Index';
import Header from '../../components/Header/Index';

export default function Home() {

  return (
    <div>
      <Header />
      <Cards />
    </div>
  );
}
