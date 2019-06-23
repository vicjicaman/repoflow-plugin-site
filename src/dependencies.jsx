import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import YAML from 'yamljs'

export const list = async ({
  module: {
    code: {
      paths: {
        absolute: {
          folder
        }
      }
    }
  }
}, cxt) => {
  return [];
}


export const sync = async ({
  module: {
    code: {
      paths: {
        absolute: {
          folder
        }
      }
    }
  },
  dependency: {
    filename,
    path,
    version
  }
}, cxt) => {
  return {};
}
