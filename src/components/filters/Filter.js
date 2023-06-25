import React from "react";
import Gender from "./Catagory/Gender";
import Species from "./Catagory/Species";
import Catagory from "./Catagory/Catagory";

const Filter = ({
  updateStatus,
  setPageNumber,
  updateGender,
  updateSpecies,
}) => {
  let clear = () => {
    updateStatus("");
    setPageNumber("");
    updateGender("");
    updateSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className=" mb-4 text-center text-primary text-decoration-underline"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Gender updateGender={updateGender} setPageNumber={setPageNumber} />
        <Catagory setPageNumber={setPageNumber} updateStatus={updateStatus} />
        <Species updateSpecies={updateSpecies} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filter;
