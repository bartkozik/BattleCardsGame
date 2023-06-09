import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableStart from "components/TableStart";
import PlayTable from "components/PlayTable";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableStart />} />
        <Route path="/table" element={<PlayTable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
