export interface Path {
  paths: {
    method: string[];
    endpoint: string;
    parameters: {
      name: string;
      in: string;
      required: boolean;
      description: string;
      type: string;
      example: string;
    }[];
  }[];
}

export interface Schema {
  schema: {
    name: string;
    properties: {
      name: string;
      type: string;
      example: string;
    }[];
  }[];
}
export interface Basic {
  swagger: string;
  title: string;
  description: string;
  version: string;
  license: {
    name: string;
    url: string;
  };
  tags: {
    name: string;
    desc: string;
  }[];
  api: string;
}

export interface CombinedState extends Basic, Schema, Path {}

export interface SchemaState {
  setBasic: (state: Basic) => void;
  setSchema: (state: Schema) => void;
  setPath: (state: Path) => void;
}

export interface ClearState {
  clearState: () => void;
}
