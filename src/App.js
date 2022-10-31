import { useEffect, Fragment, memo } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { ControllerConfig } from './config/router';

import { routers } from './router';

const Element = memo(({ page, layout }) => {
  const Layout = layout === null ? Fragment : layout ?? Fragment;
  const Page = page ?? Fragment;
  return (
    <Layout>
      <Page />
    </Layout>
  );
});
const bodyRoot = document.getElementById('root');
function App() {
  const location = useLocation();
  useEffect(() => {
    bodyRoot.scrollTop = 0;
  }, [location]);
  useEffect(() => {
    console.log([routers, process.env]);
  }, []);
  return (
    <>
      <Routes>
        {routers.map((route, key) => {
          if (route instanceof ControllerConfig) {
            const Page = route.page ?? Outlet;
            return (
              <Route key={key} path={`${route.path}`} element={<Page />}>
                {route.map((action, keyaction) => {
                  return (
                    <Route
                      key={keyaction}
                      path={`${action}`}
                      element={
                        <Element layout={action.layout} page={action.page} />
                      }
                    />
                  );
                })}
              </Route>
            );
          } else {
            return (
              <Route
                key={key}
                path={`/${route}`}
                element={<Element layout={route.layout} page={route.page} />}
              />
            );
          }
        })}
      </Routes>
    </>
  );
}

export default App;
