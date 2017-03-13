// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export function increase(index) {
  return {
    type: 'INCREMENT_COORDINATES',
    index
  }
}

export function morewidth(index) {
  return {
    type: 'INCREMENT_VIEWBOX',
    index
  }
}

export function lesswidth(index) {
  return {
    type: 'DECREASE_VIEWBOX',
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
