export default function svgs(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' : {
      console.log("Incrementing Likes!!");
      const index = action.index;
      return [
        ...state.slice(0,index), // before the one we are updating
        {...state[index], likes: state[index].likes + 1},
        ...state.slice(index + 1), // after the one we are updating
      ]
    }
    case 'INCREMENT_COORDINATES' : {
      console.log("incrementing coordinaates");
      const index = action.index;
      let string = state[index].d || state[index].d2;
      let array = string.split(" ");
      let max = array.length;
      let last = max - 2;
      let i = (state[index].index || 3) + 1;
      if ( i === last ) i = 3;
      if (array[i] !== 'M' && array[i] !== 'L') array[i] = parseInt(array[i]) + 20;
      return [
        ...state.slice(0,index), // before the one we are updating
        {...state[index], d: array.join(' '), index: i, d2: array.join(' '), index: i }, // updating
        ...state.slice(index + 1), // after the one we are updating
      ]
    }
    case 'INCREMENT_VIEWBOX' : {
      console.log("incrementing viewbox");
      const index = action.index;
      let string = state[index].viewBox;
      let array = string.split(" ");
      let max = array.length;
      let i = (state[index].index || 2) + 1;
      if ( i >=  max ) i = 2;
      array[i] = parseInt(array[i]) - 20;
      return [
        ...state.slice(0,index), // before the one we are updating
        {...state[index], viewBox: array.join(' '), index: i},
        ...state.slice(index + 1), // after the one we are updating
      ]
    }
    case 'DECREASE_VIEWBOX' : {
      console.log("decrease viewbox");
      const index = action.index;
      let string = state[index].viewBox;
      let array = string.split(" ");
      let max = array.length;
      let i = (state[index].index || 2) + 1;
      if ( i >=  max ) i = 2;
      array[i] = parseInt(array[i]) + 20;
      return [
        ...state.slice(0,index), // before the one we are updating
        {...state[index], viewBox: array.join(' '), index: i},
        ...state.slice(index + 1), // after the one we are updating
      ]
    }
    default:
      return state;
  }
}



// export default function svgs(state = [], action) {
//   switch(action.type) {
//       case 'INCREMENT_COORDINATES' :
//         console.log("incrementing coordinaates");
//         const a = action.index;
//         let string = state[a].d || state[a].d2;
//         let array = string.split(" ");
//         let max = array.length;
//         let last = max - 2;
//         let i = (state[a].index || 3) + 1;
//         if ( i === last ) i = 3;
//         if (array[i] !== 'M' && array[i] !== 'L') array[i] = parseInt(array[i]) + 20;
//         return [
//           ...state.slice(0,a), // before the one we are updating
//           {...state[a], d: array.join(' '), index: i, d2: array.join(' '), index: i }, // updating
//           ...state.slice(a + 1), // after the one we are updating
//         ]
//       default:
//         return state;
//   }
// }

//
// const aObj = state[a];
// const [d, d2, d3] = [aObj.d, aObj.d2, aObj.d3].map((string) => {
//     if(!string) return null;
//     let array = string.split(" ");
//     let max = array.length;
//     let last = max - 2;
//     let i = (state[a].index || 3) + 1;
//     if ( i === last ) i = 3;
//     if (array[i] !== 'M' && array[i] !== 'L') array[i] = parseInt(array[i]) + 20;
//     return array.join(" ");
//   });
//
//
// return [
//   ...state.slice(0,a), // before the one we are updating
//   {...aObj, d, d2, d3}, // updating
//   ...state.slice(a + 1), // after the one we are updating
// ]
