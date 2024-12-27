import React from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={styles.searchBar}>
      <FaSearch className={styles.searchIcon} />
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search patients by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
