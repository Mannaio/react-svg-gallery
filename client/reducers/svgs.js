export default function svgs(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!!");
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
    case 'INCREMENT_COORDINATES' :
      console.log("incrementing coornidates")
      const a = action.index;
      let string = state[a].d
      let array = string.split(' ')
      let num = 5
      // let neWd = array.map(x => { return x * 2; }).reverse().join(' ')
      let neWd = array.map(x => {
      	if (x === 'M' || x === 'L'){
      		return x;
      	}else{
      		return x * 1.2;
      	}
      }).join(' ')
      return [
        ...state.slice(0,a), // before the one we are updating
        {...state[a], d: neWd},
        ...state.slice(a + 1), // after the one we are updating
      ]
    default:
      return state;
  }
}

// let neWd = array.map(x => { if x ? 'M' : 'L' return } else { return x * 2; }).reverse().join(' ')
