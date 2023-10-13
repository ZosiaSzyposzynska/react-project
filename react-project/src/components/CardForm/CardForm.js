import React, { useState } from 'react';
import styles from './CardForm.module.scss';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux';

const CardForm = ({columnId}) => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    
    
   e.preventDefault();
   dispatch(addCard({ title, columnId }));
   setTitle('');
  };

  return (
    <form className={styles.CardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button>Add column</Button>
    </form>
  );
};

export default CardForm;
