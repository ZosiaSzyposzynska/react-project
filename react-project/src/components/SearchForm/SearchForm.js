import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    
    const dispatch = useDispatch();

    const [input, setInputValue] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        dispatch(updateSearchString(input));
        setInputValue('');


    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search…" onChange={(e) => setInputValue(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;