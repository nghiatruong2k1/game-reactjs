export class ActionConfig extends String {
  /**title:String, path: string,page:Component,options:{ params, layout }*/
  constructor(title, path, page, options = {}) {
    super(path ?? '/404');
    const regex = /\:[a-zA-Z]{1,}/g;
    const { params, layout } = options;
    Object.defineProperty(this, 'title', {
      enumerable: false,
      writable: true,
      value: title,
    });
    Object.defineProperty(this, 'params', {
      enumerable: false,
      value: params,
    });
    Object.defineProperty(this, 'layout', {
      enumerable: false,
      writable: true,
      value: layout,
    });
    Object.defineProperty(this, 'page', {
      enumerable: false,
      value: page,
    });
    Object.defineProperty(this, 'parent', {
      enumerable: false,
      writable: true,
    });
    Object.defineProperty(this, 'getAction', {
      enumerable: false,
      value: function (values) {
        let str = `${path}`;
        let parent = this.parent;
        do {
          const parentPath = parent?.path;
          str = (parentPath ? parentPath + '/' : '') + str;
          parent = parent?.parent;
        } while (parent);
        if (typeof str === 'string') {
          const args = str.match(regex);
          if (args && Array.isArray(args)) {
            args.forEach((arg) => {
              const key = arg.replace(':', '');
              str = str.replaceAll(
                arg,
                (values && values[key]) || params?.[key] || '',
              );
            });
          }
          return str;
        }
        return '/404';
      },
    });
  }
}
export class ControllerConfig {
  /** path: string,actions:{action:ActionConfig},options:{ page, layout }*/
  constructor(path, actions, { page, layout, title }) {
    Object.keys(actions).forEach((key) => {
      if (actions[key] instanceof ActionConfig) {
        this[key] = actions[key];
        this[key].parent = this;
        if (this[key].layout === undefined) {
          this[key].layout = layout;
        }
      }
    });
    Object.defineProperty(this, 'title', { enumerable: false, value: title });
    Object.defineProperty(this, 'page', { enumerable: false, value: page });
    Object.defineProperty(this, 'layout', { enumerable: false, value: layout });
    Object.defineProperty(this, 'path', { enumerable: false, value: path });
    Object.defineProperty(this, 'parent', {
      enumerable: false,
      writable: true,
    });
    Object.defineProperty(this, 'map', {
      enumerable: false,
      value: function (callback) {
        return Object.keys(this).map((key) => {
          /** value:any,key:string,this:object */
          return callback(this[key], key, this);
        });
      },
    });
  }
}

export class RouterConfig {
  /** routers: {router:ControllerConfig || ActionConfig}*/
  constructor(routers) {
    Object.keys(routers).forEach((key) => {
      if (
        routers[key] instanceof ControllerConfig ||
        routers[key] instanceof ActionConfig
      ) {
        this[key] = routers[key];
        this[key].parent = this;
      }
    });
    Object.defineProperty(this, 'map', {
      enumerable: false,
      value: function (callback) {
        return Object.keys(this).map((key) => {
          /** value:any,key:string,this:object */
          return callback(this[key], key, this);
        });
      },
    });
  }
}
