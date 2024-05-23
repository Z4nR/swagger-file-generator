import { Card } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { UseFormReturn } from 'react-hook-form';

interface SetValue {
  form: UseFormReturn;
}

const SchemaPartForm: React.FC = () => {
  return (
    <Form>
      <form>
        <div className="space-y-4">
          <Card className="space-y-4 p-2">
            <p>Coming Soon</p>
          </Card>
        </div>
      </form>
    </Form>
  );
};

export default SchemaPartForm;
