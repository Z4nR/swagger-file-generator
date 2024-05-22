import { CombinedState } from './state/types';

const openAPI = (value: CombinedState) => {
  return {
    openapi: value.swagger,
    info: {
      title: value.title,
      description: value.description,
      license: value.license,
      version: value.version,
    },
    tags: value.tags,
  };
};

const swaggerAPI = (value: CombinedState) => {
  return {
    swagger: value.swagger,
    info: {
      title: value.title,
      description: value.description,
      license: value.license,
      version: value.version,
    },
    tags: value.tags,
  };
};

export { openAPI, swaggerAPI };
