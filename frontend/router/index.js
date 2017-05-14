import createHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history);

export {
  middleware,
  history,
};
