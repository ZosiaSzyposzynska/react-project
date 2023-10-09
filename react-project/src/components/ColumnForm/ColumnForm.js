import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';


const ColumnForm = ({listId, columnId}) => {


    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId, columnId }));
    setTitle('');
    setIcon('');
    };

	return (
    <div className={styles.columnForm}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="icon">Icon:</label>
        <input type="text" id="icon" value={icon} onChange={(e) => setIcon(e.target.value)} />
        <Button>Add column</Button>
      </form>
    </div>
    );
};

export default ColumnForm;