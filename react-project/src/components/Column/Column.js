import React from 'react';
import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = (props) => {
  return (
    <div className={styles.column}>
      
      <h2 className={styles.columnTitle}>{props.title} <span className={styles.icon + ' fa fa-' + props.icon} /></h2>
      
      <ul className={styles.cards}>
        {props.cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={props.id} action={(newCard, columnId) => props.addCard(newCard, columnId)} />
    </div>
  );
};

export default Column;
