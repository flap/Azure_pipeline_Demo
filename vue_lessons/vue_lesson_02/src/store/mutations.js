export const increment = (state, playload) => {
  if (playload) {
    state.count += playload.amount
  } else {
    state.count++
  }
  state.history.push('increment')
}

export const decrement = state => {
  state.count--
  state.history.push('decrement')
}
