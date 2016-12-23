'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '',
      database: 'billyn',
      user: 'billyn',
      password: 'billyn',
      prefix: '',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};