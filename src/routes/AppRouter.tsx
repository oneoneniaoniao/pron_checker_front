import { Routes, Route } from 'react-router-dom';

import Index from '../pages/Index';
import Game from '../pages/Game';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default AppRouter;
