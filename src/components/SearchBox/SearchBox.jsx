import css from './SearchBox.module.css';

const SearchBox = ({ filter, onContactSearch }) => {
  return (
    <div className={css.searchBox}>
      <p className={css.searchLabel}>Find contact by name</p>
      <input
        type="text"
        value={filter}
        onChange={(e) => onContactSearch(e.target.value)}
        className={css.searchInput}
      />
    </div>
  );
};

export default SearchBox;
