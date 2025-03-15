import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
//import Counters from "./components/counters";
//import Counter from "./components/ass_q1";
//import ToggleVisibility from "./components/ass_q2";
// import Parent1 from "./components/ass_q3";
// import Parent from "./components/ass_q4";
// import Cart from "./components/ass_q5";
// import GetOutput from "./components/ass_q6";
// import G from "./components/ass_q7";
// import Parents from "./components/ass_q8";
// import UserLogin from "./components/ass_q9";
// import Grandparent from "./components/ass_q10";
// import Parent2 from "./components/moviesparent";
//import ComponentMount from "./components/use_1";
//import FetchData from "./components/use_3";
//import ChangeStateDelay from "./components/use_4";
//import ScreenSize from "./components/use_5";
//import StoringValue from "./components/use_6";
//import ParentUse from "./components/use_7";
//import PageSearching from "./components/use_12";
//import DataFetching from "./components/use_11";
//import FocusInput from "./components/use_13";
//import LocalStorageSync from "./components/use_14";
//import ScrollLogger from "./components/use_15";
//import WedBackgroundColor from "./components/use_20";
//import Timer from "./components/use_8";
import TwoEffects from "./components/use_21";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Counter />
    <Parent1 />
    <Parent />
    <Cart />
    <GetOutput />
    <G />
    <Parents />
    <UserLogin />
    <Grandparent />
    <Parent2 /> */}
    {/* <ComponentMount /> */}
    {/* <FetchData /> */}
    {/* <ChangeStateDelay /> */}
    <TwoEffects />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
