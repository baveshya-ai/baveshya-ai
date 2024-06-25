import "./App.css";
import { LoginPage } from "./LoginPage";

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
          <LoginPage />
        </div>
      </div>
    </>
  );
};

export default App;
