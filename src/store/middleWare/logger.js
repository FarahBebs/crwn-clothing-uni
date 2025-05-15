const loggerMiddleWare = (state) => (next) => (action) => {
  // if (!action.type) {
  //   return next(action);
  // }
  // console.log("type", action.type);
  // console.log("payload", action.payload);
  // console.log("currentState", state.getState());
  // next(action);
  // console.log("nextState", state.getState());
};

export default loggerMiddleWare;
