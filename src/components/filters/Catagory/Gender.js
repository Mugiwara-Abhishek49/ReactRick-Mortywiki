import React from "react";
import FilterBtn from "../FilterBtn";

const Gender = ({ updateGender, setPageNumber }) => {
  let genders = ["male", "female", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {genders.map((item, index) => (
            <FilterBtn
              setPageNumber={setPageNumber}
              task={updateGender}
              key={index}
              name="gender"
              index={index}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
