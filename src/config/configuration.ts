import * as development from './development';
import * as test from './test';

interface IEnvironments {
  development: IConfig,
  test: IConfig,
  production?: IConfig
}

const environments: IEnvironments = {
  development,
  test
};


export interface IConfig {
  port: number;
}

const conf: IConfig = environments[_env()];




function _env() {
  return process.env.NODE_ENV || 'development';
};
