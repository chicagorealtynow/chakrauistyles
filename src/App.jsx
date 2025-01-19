import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import HomePage from './pages/HomePage';
    import PaddingMargin from './pages/PaddingMargin';
    import Color from './pages/Color';
    import Gradients from './pages/Gradients';
    import Typography from './pages/Typography';
    import Layout from './pages/Layout';
    import Display from './pages/Display';
    import Flexbox from './pages/Flexbox';
    import Grid from './pages/Grid';
    import Background from './pages/Background';
    import Borders from './pages/Borders';
    import BorderRadius from './pages/BorderRadius';
    import Position from './pages/Position';
    import Shadow from './pages/Shadow';
    import Filter from './pages/Filter';
    import PseudoProps from './pages/PseudoProps';

    function App() {
      return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/padding-margin" element={<PaddingMargin />} />
          <Route path="/color" element={<Color />} />
          <Route path="/gradients" element={<Gradients />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/display" element={<Display />} />
          <Route path="/flexbox" element={<Flexbox />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/background" element={<Background />} />
          <Route path="/borders" element={<Borders />} />
          <Route path="/border-radius" element={<BorderRadius />} />
          <Route path="/position" element={<Position />} />
          <Route path="/shadow" element={<Shadow />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/pseudo-props" element={<PseudoProps />} />
        </Routes>
      );
    }

    export default App;
