import React from "react";
import styles from "./Search.module.scss";
const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form
      className="d-flex flex-sm-row flex-column align-item-centerjustify-content-center gap-4 mb-5"
      action=""
    >
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholer="search for the characters"
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => e.preventDefault()}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
