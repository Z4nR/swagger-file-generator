export interface PathParam {
  type?: string | undefined;
  name?: string | undefined;
  in?: string | undefined;
  description?: string | undefined;
  required?: boolean | undefined;
  example?: string | undefined;
}

export interface PathData {
  method: string[];
  endpoint: string;
  tags: string;
  parameters: {
    type?: string | undefined;
    name?: string | undefined;
    in?: string | undefined;
    description?: string | undefined;
    required?: boolean | undefined;
    example?: string | undefined;
  }[];
}

export interface SchemaParam {
  name: string;
  type: string;
  example?: string | undefined;
}

export interface SchemaData {
  name: string;
  properties: {
    name: string;
    type: string;
    example?: string | undefined;
  }[];
}

export interface ReqData {
  endpoint: string;
  ref: string;
}

export interface ResData {
  endpoint: string;
  res_param: {
    status: string;
    description: string;
    ref?: string | undefined;
  }[];
}

export interface ResParam {
  status: string;
  description: string;
  ref?: string | undefined;
}

export interface ItemMethod {
  id: string;
  label: string;
}

export interface ItemStatus {
  status: string;
  label: string;
}
