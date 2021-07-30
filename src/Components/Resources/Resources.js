import { useState, useEffect } from "react";

export const Resources = (props) => {
  // let [prototyping, setPrototyping] = useState([]);
  // let [design, setDesign] = useState([]);
  // let [development, setDevelopment] = useState([]);
  // let [hosting, setHosting] = useState([]);
  // let [practice, setPractice] = useState([]);
  // let [learn, setLearn] = useState([]);
  // let [misc, setMisc] = useState([]);
  let [resources, setResources] = useState([]);

  const URL = "http://localhost:3001/";

  useEffect(() => {
    fetch(`${URL}prototyping`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((resource) => {
          setResources((prevState) => [...prevState, resource]);
        });
      });

    fetch(`${URL}design`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((resource) => {
          setResources((prevState) => [...prevState, resource]);
        });
      });

    fetch(`${URL}development`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((resource) => {
          setResources((prevState) => [...prevState, resource]);
        });
      });

    fetch(`${URL}hosting`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((resource) => {
          setResources((prevState) => [...prevState, resource]);
        });
      });

    fetch(`${URL}practice`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((resource) => {
          setResources((prevState) => [...prevState, resource]);
        });
      });

    fetch(`${URL}learn`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((resource) => {
          setResources((prevState) => [...prevState, resource]);
        });
      });

    fetch(`${URL}misc`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((resource) => {
          setResources((prevState) => [...prevState, resource]);
        });
      });
  }, []);

  const RenderResources = ({
    renderingResources,
    selectedCategory,
    selectedResourceType,
    selectedSubCategory,
  }) => {
    let renderedResources, filtered;

    if (renderingResources) {
      filtered = renderingResources.filter((resource) => {
        return (
          selectedCategory.includes(resource.Category) &&
          selectedResourceType.includes(resource.ResourceType) &&
          selectedSubCategory.includes(resource.SubCat)
        );
      });
    }

    if (filtered) {
      renderedResources = filtered.map((resource) => {
        return (
          <div>
            <div className="resources card">
              <header className="card-header">
                <p className="card-header-title">{resource.Name}</p>
              </header>
              <div className="card-content">
                <div className="content">
                  <a href={resource.Link} target="_blank" rel="noreferrer">
                    {resource.Name}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      renderedResources = <div></div>;
    }

    return renderedResources;
  };

  return (
    <div>
      <h1 className="title">Resources</h1>
      {resources && (
        <RenderResources
          renderingResources={resources}
          selectedCategory={props.selectedCategory}
          selectedResourceType={props.selectedResourceType}
          selectedSubCategory={props.selectedSubCategory}
        />
      )}
    </div>
  );
};
