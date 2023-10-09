
import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';



const ListForm = () => {


    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
    };

	return (
    <div className={styles.ListForm}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="description">Description:</label>
        <input type="text"  value={description} onChange={(e) => setDescription(e.target.value)} />
        <Button>Add list</Button>
      </form>
    </div>
    );
};

export default ListForm;