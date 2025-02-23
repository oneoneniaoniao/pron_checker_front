import { Routes, Route } from 'react-router-dom';

// import Index from '../pages/Index';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
