import React from 'react';
import Column from '../Column/Column';
import styles from './List.module.scss';

const List = () => {
  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span className={styles.span}>soon</span>
        </h2>
        <p className={styles.description}>Interesting things I want to check out</p>
      </header>
      <section className={styles.columns}>
        <Column title="Books" icon="book" />
        <Column title="Movies" icon="film" />
        <Column title="Games" icon="gamepad" />
      </section>
    </div>
  );
};

export default List;
