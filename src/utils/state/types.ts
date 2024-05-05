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
}

export interface BasicState {
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
  setBasic: (state: Basic) => void;
}

export interface ClearState {
  clearState: () => void;
}
