import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Column.module.scss';
import Card from './../Card/Card';
import { getFilteredCards } from '../../redux/cardsRedux';


import CardForm from '../CardForm/CardForm'

const Column = ({ id, title, icon, }) => {
  
 

  const cards = useSelector(state => getFilteredCards(state, id));
  console.log('Column render');
    

  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon + ' fa fa-' + icon}></span>
        </h3>
      </div>
      <div className={styles.card}>
        {cards.map(card => (
          <Card key={card.id} id={card.id} title={card.title} 
          description={card.description}
            isFavorite={card.isFavorite}
            cardId={card.id} 
          
          />
        ))}
      </div>
      <CardForm columnId={id} />
    </div>
  );
};

export default Column;
