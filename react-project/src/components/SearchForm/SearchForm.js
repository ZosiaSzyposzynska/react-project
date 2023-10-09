import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux'; 
import { useState, useEffect } from 'react'; 
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchString = useSelector(state => state.searchString); 

  const [input, setInputValue] = useState(searchString); 

  useEffect(() => {
    
    setInputValue(searchString);
  }, [searchString]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(input));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search…"
        value={input} 
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
