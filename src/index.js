import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MoralisProvider serverUrl="https://afijh5cjipft.usemoralis.com:2053/server" appId="RRwmAS2YoX9dJOqaUjaSnh34ncw1E0nhEn4KSyh4">
      <Router>
          <div>
              <Routes>
                  <Route exact path="/" element={<App page={"HOME"} />} />
                  <Route path="/userDetail" element={<App page={"USER_DETAIL"}  />} />
              </Routes>
          </div>
      </Router>
      </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
