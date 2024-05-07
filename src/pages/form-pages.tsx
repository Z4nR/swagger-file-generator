import BasicPartForm from '@/components/basic-part';
import PathPartForm from '@/components/endpoints-part';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const steps = [
  {
    title: 'Basic',
    content: <BasicPartForm />,
  },
  {
    title: 'Path',
    content: <PathPartForm />,
  },
];

const SwaggerForm: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div>{steps[current].content}</div>
      <div className="mt-6">
        {current < steps.length - 1 && (
          <Button onClick={() => next()}>Next</Button>
        )}
        {current > 0 && (
          <Button className="mr-2" onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button onClick={() => console.log('Processing complete!')}>
            Done
          </Button>
        )}
      </div>
    </>
  );
};

export default SwaggerForm;
