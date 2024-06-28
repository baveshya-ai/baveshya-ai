import "./App.css";
import { LoginPage } from "./LoginPage";
import { Summary } from "./Summary";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RmReview } from "./RmReview";

export const App = () => {
  return (
    <>
      <div className="app">
        <div className="masthead">
          <div className="header-container">
            {" "}
            <span role="img" tabIndex={-1} className="nwb-logo" />
            <span className="title">Security Release</span>
          </div>
        </div>
        <div className="form">
          <BrowserRouter>
            <Routes>
              <Route path="/review/:id" element={<RmReview />}></Route>
              <Route path="/" element={<LoginPage />}></Route>
              <Route path="/summary" element={<Summary />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default App;
