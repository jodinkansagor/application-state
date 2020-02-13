import React from 'react';
import styles from './Controls.css';
import { useDispatch, useSelector } from 'react-redux';
import { drinkCoffee, eatSnack, takeNap, study } from '../../actions/moodAction';


const Controls = () => {

  const { coffees, snacks, naps, studies } = useSelector(state => state);
  const dispatch = useDispatch();

  
  const handleCoffee = event => {
    event.preventDefault;
    dispatch(drinkCoffee());
  };
  
  const handleSnacks = event => {
    event.preventDefault;
    dispatch(eatSnack());
  };

  const handleNaps = event => {
    event.preventDefault;
    dispatch(takeNap());
  };

  const handleStudies = event => {
    event.preventDefault;
    dispatch(study());
  };

  
  return (
    <section className={styles.Controls}>
      <button onClick={handleCoffee}>coffee - {coffees}</button>
      <button onClick={handleSnacks}>snacks - {snacks}</button>
      <button onClick={handleNaps}>naps - {naps}</button>
      <button onClick={handleStudies}>studies - {studies}</button>
    </section>
  );
};

export default Controls;
