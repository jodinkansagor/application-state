import React from 'react';
import styles from './Controls.css';
import { useDispatch } from 'react-redux';
import { drinkCoffee, eatSnack, takeNap, study } from '../../actions/moodAction';
import store from '../../store';



const Controls = () => {

  const state = store.getState();
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
      <button onClick={handleCoffee}>coffee - {state.coffees}</button>
      <button onClick={handleSnacks}>snacks - {state.snacks}</button>
      <button onClick={handleNaps}>naps - {state.naps}</button>
      <button onClick={handleStudies}>studies - {state.studies}</button>
      {console.log(state.coffees)}
    </section>
  );
}




export default Controls;
