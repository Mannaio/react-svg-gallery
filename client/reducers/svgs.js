export default function svgs(state = [], action) {
  switch(action.type) {
      case 'INCREMENT_COORDINATES' :
        console.log("incrementing coordinaates");
        const a = action.index;
        let string = state[a].d;
        let array = string.split(" ");
        let max = array.length;
        let last = max - 2;
        let i = (state[a].index || 3) + 1;
        if ( i === last ) i = 3;
        if (array[i] !== 'M' && array[i] !== 'L') array[i] = parseInt(array[i]) + 20;
        return [
          ...state.slice(0,a), // before the one we are updating
          {...state[a], d: array.join(' '), index: i}, // updating
          ...state.slice(a + 1), // after the one we are updating
        ]
      default:
        return state;
  }
}
