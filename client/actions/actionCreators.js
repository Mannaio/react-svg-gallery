// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(svgId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    svgId,
    author,
    comment
  }
}

// remove comment

export function removeComment(svgId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    svgId
  }
}
