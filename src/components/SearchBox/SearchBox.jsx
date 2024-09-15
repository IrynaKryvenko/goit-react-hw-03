import css from './SearchBox.module.css';
import { useDispatch, useSelector } from "react-redux";
import { onFilterChange, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = (evt) => {
    const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    dispatch(onFilterChange(evt.target.value));
  };
  return (
    <div className={css.searchBox}>
      <p className={css.searchLabel}>Find contact by name</p>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={css.searchInput}
      />
    </div>
  );
};

export default SearchBox;
