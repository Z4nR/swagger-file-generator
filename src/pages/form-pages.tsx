import BasicPartForm from '@/pages/form-part/basic-part';
import PathPartForm from '@/pages/form-part/endpoints-part';
import SchemaPartForm from '@/pages/form-part/schemas-part';
import RequestPartForm from './form-part/request-response-part';
import { Button } from '@/components/ui/button';
import {
  BasicSwaggerSchema,
  PathSwaggerSchema,
  ReqSwaggerSchema,
  ResSwaggerSchema,
  SchemaSwaggerSchema,
  defaultValueReq,
  defaultValueRes,
  defaultValueSchema,
  defaultValuesBasic,
  defaultValuesPath,
} from '@/utils/form/form.helper';
import {
  basicFormSchema,
  pathFormSchema,
  reqBodySchema,
  responseSchema,
  schemaFormSchema,
} from '@/utils/form/schema';
import { useSwaggerState } from '@/utils/state/state';
import { Basic, Path, Req, Res, Schema } from '@/utils/state/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SwaggerForm: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [endpoint, setEndpoint] = useState<Path>();
  const [schema, setSchemas] = useState<Schema>();
  const [req, setReqBody] = useState<Req>();
  const [res, setResponse] = useState<Res>();

  const formBasic = useForm<BasicSwaggerSchema>({
    resolver: zodResolver(basicFormSchema),
    defaultValues: defaultValuesBasic,
    mode: 'onChange',
  });

  const formSchema = useForm<SchemaSwaggerSchema>({
    resolver: zodResolver(schemaFormSchema),
    defaultValues: defaultValueSchema,
    mode: 'onChange',
  });

  const formPath = useForm<PathSwaggerSchema>({
    resolver: zodResolver(pathFormSchema),
    defaultValues: defaultValuesPath,
    mode: 'onChange',
  });

  const formReq = useForm<ReqSwaggerSchema>({
    resolver: zodResolver(reqBodySchema),
    defaultValues: defaultValueReq,
    mode: 'onChange',
  });

  const formRes = useForm<ResSwaggerSchema>({
    resolver: zodResolver(responseSchema),
    defaultValues: defaultValueRes,
    mode: 'onChange',
  });

  const { setBasic, setSchema, setPath, setReq, setRes } = useSwaggerState();

  const steps = [
    {
      title: 'OpenAPI Version Specs',
      content: <BasicPartForm form={formBasic} />,
    },
    {
      title: 'Schema Data Specs',
      content: <SchemaPartForm form={formSchema} setSchema={setSchemas} />,
    },
    {
      title: 'Path & Endpoint Specs',
      content: <PathPartForm form={formPath} setEndpoint={setEndpoint} />,
    },
    {
      title: 'Request Specs',
      content: (
        <RequestPartForm
          formReq={formReq}
          setReq={setReqBody}
          formRes={formRes}
          setRes={setResponse}
        />
      ),
    },
  ];

  const done = () => {
    console.log('Request', req);
    setReq(req as Req);
    console.log('Response', res);
    setRes(res as Res);
  };

  const next = () => {
    switch (current) {
      case 1: {
        console.log('Schema', schema);
        setSchema(schema as Schema);
        break;
      }
      case 2: {
        console.log('Path and Endpoint', endpoint);
        setPath(endpoint as Path);
        break;
      }
      default: {
        const info = formBasic.getValues();
        console.log('Basic', info);
        setBasic(info as Basic);
        break;
      }
    }

    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="space-y-4">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
        {steps[current].title}
      </h4>
      <div>{steps[current].content}</div>
      <div>
        {current > 0 && (
          <Button className="mr-2" onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button
            onClick={() => next()}
            disabled={
              (current === 0 && !formBasic.formState.isValid) ||
              (current === 1 && (!schema || schema.schema.length === 0)) ||
              (current === 2 && (!endpoint || endpoint.paths.length === 0))
            }
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            onClick={() => done()}
            disabled={
              (!formRes.formState.isValid || !res || res.res.length === 0) &&
              (!formReq.formState.isValid || !req || req.body.length === 0)
            }
          >
            Done
          </Button>
        )}
      </div>
    </div>
  );
};

export default SwaggerForm;
