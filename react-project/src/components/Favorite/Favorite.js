// Favorite.js

import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { getFavoriteCards } from '../../redux/cardsRedux';
import styles from './Favorite.module.scss';

const Favorite = () => {
  const favoriteCards = useSelector((state) => getFavoriteCards(state));

  return (
    <div className={styles.favoriteColumn}>
      <h2>FAVORITE</h2>
      <div>
        {favoriteCards.length === 0 ? (
          <p>No favorite cards...</p>
        ) : (
          favoriteCards.map((card) => (
            <div key={card.id} className={styles.favoriteCard} >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <FontAwesomeIcon
                icon={faStar}
                className={card.isFavorite ? styles['is-favorite'] : ''}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorite;
