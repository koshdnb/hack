import * as React from 'react';

import providers from './providers';


const App = ({ children }) => {
  return <>{children}</>;
};

export default providers(App);
