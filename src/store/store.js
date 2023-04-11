function createStore(initialState) {
  let currentState = initialState;

  return {
    getState: () => currentState,
    setState: (newState) => (currentState = newState),
  };
}
