import React from 'react';
import styles from './StandardCard.module.scss';
import classNames from 'classnames'; // Import classNames library for merging multiple class names

const StandardCard = ({ children, style }) => {
  // Combine default card class and custom styles if provided
  const cardClasses = classNames(styles.card);

  return (
    <div className={cardClasses} style={style}>
      {children}
    </div>
  );
};

export default StandardCard;
