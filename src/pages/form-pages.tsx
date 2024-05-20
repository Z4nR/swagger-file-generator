import BasicPartForm from '@/components/basic-part';
import PathPartForm from '@/components/endpoints-part';
import { Button } from '@/components/ui/button';
import useSwaggerState from '@/utils/state/state';
import { Basic, Path } from '@/utils/state/types';
import { useState } from 'react';

const SwaggerForm: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [info, setInfo] = useState<Basic | undefined>();
  const [endpoint, setEndpoint] = useState<Path | undefined>();

  const steps = [
    {
      title: 'OpenAPI Version Specs',
      content: <BasicPartForm setInfo={setInfo} />,
    },
    {
      title: 'Path & Endpoint Specs',
      content: <PathPartForm setEndpoint={setEndpoint} />,
    },
  ];

  const { setBasic, setPath } = useSwaggerState();

  const handleSubmit = () => {
    switch (true) {
      case current === 1:
        console.log('Path and Endpoint', endpoint);
        setPath(endpoint as Path);
        break;
      case current === steps.length - 1:
        break;
      default:
        console.log('Basic');
        setBasic(info as Basic);
        break;
    }
  };

  const next = () => {
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
      <div className="mt-6">
        {current < steps.length - 1 && (
          <Button
            onClick={() => {
              next();
              handleSubmit();
            }}
          >
            Next
          </Button>
        )}
        {current > 0 && (
          <Button className="mr-2" onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button onClick={() => handleSubmit()}>Done</Button>
        )}
      </div>
    </div>
  );
};

export default SwaggerForm;
