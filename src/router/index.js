import { ActionConfig, ControllerConfig, RouterConfig } from '~/config/router';
import { DefaultLayout } from '~/screens/layouts';
import { HomePage, AboutPage, NotFoundPage } from '~/screens/pages';
import { SokubanGamePage } from '~/screens/pages/games';
export const routers = new RouterConfig({
  default: new ControllerConfig(
    '/',
    {
      home: new ActionConfig('Trang chủ', '', HomePage),
      about: new ActionConfig('Giới thiệu', 'gioi-thieu', AboutPage),
      notfound: new ActionConfig('Not Found', '*', NotFoundPage),
    },
    { layout: DefaultLayout },
  ),
  games: new ControllerConfig('/tro-choi', {
    sokuban:new ActionConfig('Sokuban','sokuban',SokubanGamePage)
  }, { layout: DefaultLayout,title:"Danh sách trò chơi" }),
});
