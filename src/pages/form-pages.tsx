import BasicPartForm from '@/components/basic-part';
import PathPartForm from '@/components/endpoints-part';
import { Button } from '@/components/ui/button';
import useSwaggerState from '@/utils/state/state';
import { Basic, Path } from '@/utils/state/types';
import { useState } from 'react';

const SwaggerForm: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [endpoint, setEndpoint] = useState<Path>();
  const [info, setInfo] = useState<Basic>();

  const { setBasic, setPath } = useSwaggerState();

  const partInfo = (values: Basic) => {
    console.log(values);
    setInfo(values as Basic);
  };

  const steps = [
    {
      title: 'OpenAPI Version Specs',
      content: <BasicPartForm setInfo={partInfo} />,
    },
    {
      title: 'Path & Endpoint Specs',
      content: <PathPartForm setEndpoint={setEndpoint} />,
    },
  ];

  const handleEndpoint = (values: Path) => {
    setPath(values);
  };

  //console.log(info);

  const next = () => {
    switch (true) {
      case current === 1:
        console.log('Path and Endpoint', endpoint);
        handleEndpoint(endpoint as Path);
        break;
      default:
        console.log('Basic');
        setBasic(info as Basic);
        break;
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
        {current < steps.length - 1 && (
          <Button onClick={() => next()}>Next</Button>
        )}
        {current > 0 && (
          <Button className="mr-2" onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button onClick={() => console.log('Testing')}>Done</Button>
        )}
      </div>
    </div>
  );
};

export default SwaggerForm;
