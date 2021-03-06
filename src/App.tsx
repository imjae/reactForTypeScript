import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";
import Counter2 from "./Counter2";
import ReducerSample from "./ReducerSample";

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <ReducerSample />;
};

export default App;
