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
    case 'INCREMENT_WIDTH' :
      console.log("incrementing width")
      const a = action.index;
      return [
        ...state.slice(0,a), // before the one we are updating
        {...state[a], w: state[a].w + 100},
        ...state.slice(a + 1), // after the one we are updating
      ]
    default:
      return state;
  }
}
