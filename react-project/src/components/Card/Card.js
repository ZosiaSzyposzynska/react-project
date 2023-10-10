import React from 'react';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import styles from './Card.module.scss'

const Card = ({ title, description, isFavorite, cardId }) => {
  const dispatch = useDispatch();

 const toggleFavorite = () => {
  console.log('card id: ', cardId);
  dispatch(toggleCardFavorite(cardId));
};


  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        className={clsx('favorite-button', { 'is-favorite': isFavorite })}
        onClick={toggleFavorite}
      >
        <FontAwesomeIcon icon={faStar} onClick={toggleFavorite} />
      </button>
    </div>
  );
};


export default Card;
