const detault = {
  mockApi: 'http://127.0.0.1:3000',
  currentModule: 'Guide',
  currentSubModule: 'Guide_Principle',
  navigatorList: [],
  appPrefix: '',
  count: 0,
  todos: [
    { id: 1, text: 'hello', done: true },
    { id: 2, text: 'world', done: false }
  ]
}
export const setInitialStates = (initialStates) => Object.assign(detault, initialStates)
