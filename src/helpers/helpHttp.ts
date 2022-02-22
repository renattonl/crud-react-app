export const helpHttp = () => {
  type OptionsType = {
    [key: string]: any;
  };

  const _fetch = (url: string, options: OptionsType) => {
    const defaultHeader = {
      accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || 'GET';
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;
    options.body = JSON.stringify(options.body) ?? false;

    if (!options.body) {
      delete options.body;
    }

    setTimeout(() => controller.abort(), 1000 * 10);

    return fetch(url, options)
      .then(res =>
        res.ok
          ? res.json()
          : {
              error: true,
              status: res.status || 500,
              message: res.statusText || 'Hubo un problema',
            }
      )
      .catch(error => {
        return {
          error: true,
          status: 500,
          message: error.message,
        };
      });
  };

  const get = (url: string, options = {}) => _fetch(url, options);
  const post = (url: string, options: OptionsType = {}) => {
    options.method = 'POST';
    return _fetch(url, options);
  };
  const put = (url: string, options: OptionsType = {}) => {
    options.method = 'PUT';
    return _fetch(url, options);
  };
  const destroy = (url: string, options: OptionsType = {}) => {
    options.method = 'DELETE';
    return _fetch(url, options);
  };

  return {
    get,
    post,
    put,
    delete: destroy,
  };
};
