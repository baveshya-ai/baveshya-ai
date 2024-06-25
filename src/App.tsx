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
          </div>
        </div>
        <div className="form">
          <LoginPage />
        </div>
      </div>
      <span></span>
    </>
  );
};

export default App;
