import BasicPartForm from '@/pages/form-part/basic-part';
import PathPartForm from '@/pages/form-part/endpoints-part';
import SchemaPartForm from '@/pages/form-part/schemas-part';
import { Button } from '@/components/ui/button';
import {
  BasicSwaggerSchema,
  PathSwaggerSchema,
  defaultValuesBasic,
  defaultValuesPath,
} from '@/utils/form.helper';
import { basicFormSchema, pathFormSchema } from '@/utils/schema';
import useSwaggerState from '@/utils/state/state';
import { Basic, Path } from '@/utils/state/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SwaggerForm: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [endpoint, setEndpoint] = useState<Path>();

  const formBasic = useForm<BasicSwaggerSchema>({
    resolver: zodResolver(basicFormSchema),
    defaultValues: defaultValuesBasic,
    mode: 'onChange',
  });

  const formPath = useForm<PathSwaggerSchema>({
    resolver: zodResolver(pathFormSchema),
    defaultValues: defaultValuesPath,
    mode: 'onSubmit',
  });

  const { setBasic, setPath } = useSwaggerState();

  const steps = [
    {
      title: 'OpenAPI Version Specs',
      content: <BasicPartForm form={formBasic} />,
    },
    {
      title: 'Schema Specs',
      content: <SchemaPartForm />,
    },
    {
      title: 'Path & Endpoint Specs',
      content: <PathPartForm form={formPath} setEndpoint={setEndpoint} />,
    },
  ];

  const next = () => {
    if (current === 1) {
      console.log('Schema');
    } else {
      const info = formBasic.getValues();
      console.log('Basic', info);
      setBasic(info as Basic);
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
          <Button onClick={() => next()}>Next</Button>
        )}
        {current === steps.length - 1 && (
          <Button
            onClick={() => {
              console.log('Path and Endpoint', endpoint);
              setPath(endpoint as Path);
            }}
          >
            Done
          </Button>
        )}
      </div>
    </div>
  );
};

export default SwaggerForm;
