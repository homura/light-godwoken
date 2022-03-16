import "antd/dist/antd.css";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Provider as LightGodwokenProvider } from "./contexts/LightGodwokenContext";
import Deposit from "./views/Deposit";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <LightGodwokenProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Deposit />}></Route>
            <Route path="/deposit" element={<Deposit />}></Route>
          </Routes>
        </Router>
      </LightGodwokenProvider>
    </QueryClientProvider>
  );
}

export default App;
