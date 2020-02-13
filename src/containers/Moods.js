import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getFace } from '../selectors/moodSelector';


const Moods = () => (

  <>
    <Controls />
    <Face />
  </>
);

Moods.propTypes = {};

export default Moods;


// export default class Moods extends Component {
//   state = {
//     coffees: 0,
//     snacks: 0,
//     naps: 0,
//     studies: 0
//   }

//   handleSelection = action => {
//     switch(action.type) {
//       case 'DRINK_COFFEE':
//         this.setState(state => ({ coffees: state.coffees + 1 }));
//         break;
//       case 'EAT_SNACK':
//         this.setState(state => ({ snacks: state.snacks + 1 }));
//         break;
//       case 'TAKE_NAP':
//         this.setState(state => ({ naps: state.naps + 1 }));
//         break;
//       case 'STUDY':
//         this.setState(state => ({ studies: state.studies + 1 }));
//         break;
//       default:
//         console.log(`unhandled type: ${action.type}`);
//     }
//   }

//   render() {
//     const { coffees, snacks, naps, studies } = this.state;
//     const face = getFace(this.state);


