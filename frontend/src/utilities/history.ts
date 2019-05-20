import { compile } from 'path-to-regexp';
import { createBrowserHistory } from 'history';
import * as routes from 'constants/routes';

type RouteProps = {
  routeName: routes.names,
  routeParams?: object,
};

const history = createBrowserHistory();

const getPath = ({ routeName, routeParams }: RouteProps) => {
  const routePath = routes.paths[routeName];
  const toPath = compile(routePath);

  return toPath(routeParams);
};

export const navigate = (routeProps: RouteProps) => {
  history.push(getPath(routeProps));
};

export default history;
