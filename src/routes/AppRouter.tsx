import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../App";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
};

export default AppRouter;