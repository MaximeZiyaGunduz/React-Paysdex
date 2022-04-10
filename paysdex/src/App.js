import React from 'react';
/* Pour crée une navigation */
import {BrowserRouter, Route, Routes} from 'react-router-dom';

/*Faut importer chaque composent qu'on utilise pour la navigation */
import Home from './rubriques/Home';
import About from './rubriques/About';
import Erreur from './rubriques/Erreur';

const App = () => {
  return (
    /*Declarer les routes pour naviguer*/
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;