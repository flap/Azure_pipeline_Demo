export const count = state => state.count

export const evenOrOdd = state => {
  return state.count % 2 === 0 ? 'even' : 'odd'
}

export const doneTodos = state => {
  let todos = state.todos.filter(todo => todo.done)
  let retTodos = []
  for (let todo of todos) {
    retTodos.push(todo.text)
  }
  return retTodos
}

export const doneTodosCount = (state, getters) => {
  return getters.doneTodos.length
}

export const getTodoById = state => id => {
  return state.todos.find(todo => id === todo.id)
}

const limit = 5

export const recentHistory = state => {
  const end = state.history.length
  const begin = end - limit < 0 ? 0 : (end - limit)
  return state.history.slice(begin, end).toString().replace(/,/g, ', ')
}
