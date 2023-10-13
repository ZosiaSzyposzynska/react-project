import React from 'react';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import styles from './Card.module.scss';
import { removeCard } from '../../redux/cardsRedux';

const Card = ({ title, description, isFavorite, cardId }) => {
  const dispatch = useDispatch();

 const toggleFavorite = () => {
  console.log('card id: ', cardId);
  dispatch(toggleCardFavorite(cardId));
};


const handleRemove = () => {


  dispatch(removeCard(cardId));


}


  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        className={clsx('favorite-button', isFavorite && styles.isFavorite )}
        onClick={toggleFavorite}
      >
        <FontAwesomeIcon icon={faStar}  />
      </button>

      <button
        
        onClick={handleRemove} 
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>

    </div>
  );
};


export default Card;
