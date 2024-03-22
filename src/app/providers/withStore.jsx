import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { sharedModelsReducer } from '/src/shared/models';
import { sharedModelMiddlewares } from '/src/shared/models';

const reducer = combineReducers({
  ...sharedModelsReducer,
});

const store = configureStore({
  devTools: true,
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sharedModelMiddlewares),
});

const withStore = (WrappedComponent) => {
  const ComponentWithStore = (props) => (
    <StoreProvider store={store}>
      <WrappedComponent {...props} />
    </StoreProvider>
  );

  return ComponentWithStore;
};

export default withStore;
