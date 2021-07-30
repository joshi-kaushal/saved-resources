// ! Category            - Prototyping Designing Development Hosting Practice Learn
// ! CategorySubType     - FullStack HTML CSS JS React Node MongoDB Python Fonts Colors Icons Wireframe Hosting Python Django
// ! ResourceType        - Website Forum Book Course Tutorial YouTube

import { useState } from "react";
import { Resources } from "../Resources/Resources";

export const Category = (props) => {
  let [selectedCategory, setSelectedCategory] = useState([]);
  let [selectedSubCategory, setSelectedSubCategory] = useState([]);
  let [selectedResourceType, setSelectedResourceType] = useState([]);

  let [showSubCategories, setShowSubCategories] = useState(false);
  let [showResourcesTypes, setShowResourcesTypes] = useState(false);

  let [renderResourcesComponent, setRenderResourcesComponent] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevSelCat) => [...prevSelCat, category]);
    setShowSubCategories(true);
  };

  const handleSubCategoryClick = (subCategories) => {
    setSelectedSubCategory((prevSelSubCat) => [
      ...prevSelSubCat,
      subCategories,
    ]);
    setShowResourcesTypes(true);
  };

  const handleResourceTypeClick = (resourceType) => {
    setSelectedResourceType((prevSelResTypes) => [
      ...prevSelResTypes,
      resourceType,
    ]);
    setRenderResourcesComponent(true);
  };

  const RenderCategories = ({ categories }) => {
    let RenderedCategories;

    if (categories) {
      RenderedCategories = categories.map((category) => {
        return (
          <button
            className="button is-warning m-2"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        );
      });
    } else {
      RenderedCategories = <div></div>;
    }

    return RenderedCategories;
  };

  const RenderSubCategories = ({ subCategories }) => {
    let RenderedSubCategories;

    if (subCategories) {
      RenderedSubCategories = subCategories.map((subCategory) => {
        return (
          <button
            className="button is-danger m-2"
            onClick={() => handleSubCategoryClick(subCategory)}
          >
            {subCategory}
          </button>
        );
      });
    } else {
      RenderedSubCategories = <div></div>;
    }

    return RenderedSubCategories;
  };

  const RenderResourceTypes = ({ resourceTypes }) => {
    let renderedResourceType;

    if (resourceTypes) {
      renderedResourceType = resourceTypes.map((resourceType) => {
        return (
          <button
            className="button is-link m-2"
            onClick={() => handleResourceTypeClick(resourceType)}
          >
            {resourceType}
          </button>
        );
      });
    } else {
      renderedResourceType = <div></div>;
    }

    return renderedResourceType;
  };

  if (props.categories !== null) {
    return (
      <div className="cate m-5">
        <div className="categories">
          <RenderCategories categories={props.categories} />
        </div>

        <div className="subCategories">
          {showSubCategories && (
            <RenderSubCategories subCategories={props.subCategories} />
          )}
        </div>

        <div className="resourceType">
          {showResourcesTypes && (
            <RenderResourceTypes resourceTypes={props.resourceType} />
          )}
        </div>
        <br />

        {renderResourcesComponent && (
          <Resources
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            selectedResourceType={selectedResourceType}
          />
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
};
