import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ReqSwaggerSchema } from '@/utils/form.helper';
import { useSwaggerState } from '@/utils/state/state';
import { Req } from '@/utils/state/types';
import { useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface SetValue {
  form: UseFormReturn<ReqSwaggerSchema>;
  setReq: React.Dispatch<React.SetStateAction<Req | undefined>>;
}

const RequestPartForm: React.FC<SetValue> = ({ form, setReq }) => {
  const { paths, schema } = useSwaggerState();
  const [body, setBody] = useState<ReqSwaggerSchema[]>([]);

  const onReset = () => {
    form.reset();
  };

  const onSubmit = (values: ReqSwaggerSchema) => {
    setBody((prevReqs) => [...prevReqs, values]);
    onReset();
  };

  useEffect(() => {
    const transformedReqBody: Req = {
      body: body.map((req) => ({
        endpoint: req.endpoint || '',
        ref: req.ref || '',
      })),
    };
    setReq(transformedReqBody);
  }, [body, setReq]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <Card className="flex flex-col gap-2 space-y-4 p-2">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Request
            </h4>
            <FormField
              control={form.control}
              name="endpoint"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Endpoint</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a endpoint" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {paths.map((path, index) => (
                        <SelectItem key={index} value={path.endpoint}>
                          {path.endpoint}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Choose the endpoint.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ref"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Ref</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a schema" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {schema.map((scheme, index) => (
                        <SelectItem key={index} value={scheme.name}>
                          {scheme.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose the schema for request body.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row mt-3">
              <h5 className="flex-1 font-medium">
                Body Request Added: {body.length}
              </h5>
              <div className="flex justify-end gap-2">
                <Button
                  type="reset"
                  size="sm"
                  className="bg-red-500 hover:bg-red-600 text-white"
                  onClick={() => onReset()}
                >
                  Reset Data
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  type="submit"
                  disabled={!form.formState.isValid}
                >
                  Save Body
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </form>
    </Form>
  );
};

export default RequestPartForm;
