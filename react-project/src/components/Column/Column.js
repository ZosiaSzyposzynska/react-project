import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Column.module.scss';
import Card from './../Card/Card';

import CardForm from '../CardForm/CardForm'

const Column = ({ id, title, icon }) => {
  
  const cards = useSelector(state => state.cards.filter(card => card.columnId === id));

  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon + ' fa fa-' + icon}></span>
        </h3>
      </div>
      <div className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} id={card.id} title={card.title} />
        ))}
      </div>
      <CardForm/>
    </div>
  );
};

export default Column;
