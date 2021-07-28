import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Design from "./Shared/fetch";

function App() {
  let [categories, setCategories] = useState([]);
  let [prototyping, setPrototyping] = useState([]);
  let [design, setDesign] = useState([]);
  let [development, setDevelopment] = useState([]);
  let [hosting, setHosting] = useState([]);
  let [practice, setPractice] = useState([]);
  let [learn, setLearn] = useState([]);
  let [misc, setMisc] = useState([]);

  const URL = "http://localhost:3001/";

  useEffect(() => {
    fetch(`${URL}categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data[0].category));

    fetch(`${URL}prototyping`)
      .then((response) => response.json())
      .then((data) => setPrototyping(data));

    fetch(`${URL}design`)
      .then((response) => response.json())
      .then((data) => setDesign(data));

    fetch(`${URL}development`)
      .then((response) => response.json())
      .then((data) => setDevelopment(data));

    fetch(`${URL}hosting`)
      .then((response) => response.json())
      .then((data) => setHosting(data));

    fetch(`${URL}practice`)
      .then((response) => response.json())
      .then((data) => setPractice(data));

    fetch(`${URL}learn`)
      .then((response) => response.json())
      .then((data) => setLearn(data));

    fetch(`${URL}misc`)
      .then((response) => response.json())
      .then((data) => setMisc(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Design />

      <div className="control">
        <input
          className="input is-focused is-large"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default App;
//      json-server --watch Resources.json -p 3001 -d 2000
