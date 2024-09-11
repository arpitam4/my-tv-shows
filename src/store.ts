// store.ts
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import rootReducer from './reducers'; // Assuming you have a combined root reducer
// import rootSaga from './sagas'; // Assuming you have sagas

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// // Configure store
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// });

// // Run the root saga
// sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;
