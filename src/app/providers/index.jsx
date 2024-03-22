import * as React from 'react';

import withStore from './withStore';
import withTheme from './withTheme';

const compose =
  (...fns) =>
  (initial) =>
    fns.reduceRight((acc, item) => item(acc), initial);

export default compose(withStore, withTheme);
