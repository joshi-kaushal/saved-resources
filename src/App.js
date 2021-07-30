import { useState, useEffect } from "react";
import "./App.css";

import { Header } from "./Components/Header/Header";
import { Search } from "./Components/Search/Search";
import { Category } from "./Components/Categories/Categories";

function App() {
  let [categories, setCategories] = useState([]);
  let [subCategories, setSubCategories] = useState([]);
  let [resourceType, setResourceType] = useState([]);

  const URL = "http://localhost:3001/";

  useEffect(() => {
    fetch(`${URL}categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data[0].category));

    fetch(`${URL}categories`)
      .then((response) => response.json())
      .then((data) => setSubCategories(data[1].subCat));

    fetch(`${URL}categories`)
      .then((response) => response.json())
      .then((data) => setResourceType(data[2].resourceType));
  }, []);

  return (
    <div className="App is-dark">
      <Header />
      <Search />
      <Category
        categories={categories}
        subCategories={subCategories}
        resourceType={resourceType}
      />
    </div>
  );
}

export default App;

/* You'll need JSON Server to run this project without any issues
   JSON file is available in src/Shared/Resources.json
 * TODO:
 *  JSON Dataset
 *  Search Functionality
 *  Add Loading Component
 *  Improve Styling
 *  Add Dark Mode
 *  Add info in header
 */
