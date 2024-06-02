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
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ReqSwaggerSchema,
  ResSwaggerSchema,
  status,
} from '@/utils/form/form.helper';
import { ItemStatus, ReqData, ResData } from '@/utils/form/form.types';
import { useSwaggerState } from '@/utils/state/state';
import { Req, Res } from '@/utils/state/types';
import { useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface SetValue {
  formReq: UseFormReturn<ReqSwaggerSchema>;
  setReq: React.Dispatch<React.SetStateAction<Req | undefined>>;
  formRes: UseFormReturn<ResSwaggerSchema>;
  setRes: React.Dispatch<React.SetStateAction<Res | undefined>>;
}

const RequestResponsePartForm: React.FC<SetValue> = ({
  formReq,
  setReq,
  formRes,
  setRes,
}) => {
  const { paths, schema } = useSwaggerState();
  const [body, setBody] = useState<ReqSwaggerSchema[]>([]);

  const onResetReq = () => {
    formReq.reset();
  };

  const onSubmitReq = (values: ReqSwaggerSchema) => {
    setBody((prevReqs: ReqSwaggerSchema[]) => [...prevReqs, values]);
    onResetReq();
  };

  useEffect(() => {
    const transformedReqBody: Req = {
      body: body.map((req: ReqData) => ({
        endpoint: req.endpoint || '',
        ref: req.ref || '',
      })),
    };
    setReq(transformedReqBody);
  }, [body, setReq]);

  const [res, setResponse] = useState<ResSwaggerSchema[]>([]);

  const onResetRes = () => {
    formRes.reset();
  };

  const onSubmitRes = (values: ResSwaggerSchema) => {
    setResponse((prevResponses: ResSwaggerSchema[]) => [
      ...prevResponses,
      values,
    ]);
    onResetRes();
  };

  useEffect(() => {
    const transformedResponse: Res = {
      res: res.map((response: ResData) => ({
        endpoint: response.endpoint || '',
        status: response.status || '',
        description: response.description || '',
        ref: response.ref || '',
      })),
    };
    setRes(transformedResponse);
  }, [res, setRes]);

  return (
    <div className="space-y-4">
      <Card className="flex flex-col gap-2 space-y-4 p-2">
        <div className="space-y-4">
          <div className="flex flex-col gap-2 space-y-4 p-2">
            <Form {...formReq}>
              <form onSubmit={formReq.handleSubmit(onSubmitReq)}>
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                  Request
                </h4>
                <FormField
                  control={formReq.control}
                  name="endpoint"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Endpoint</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
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
                  control={formReq.control}
                  name="ref"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Ref</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
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
                      onClick={() => onResetReq()}
                    >
                      Reset Data
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      type="submit"
                      disabled={!formReq.formState.isValid}
                    >
                      Save Body
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col gap-2 space-y-4 p-2">
            <Form {...formRes}>
              <form onSubmit={formRes.handleSubmit(onSubmitRes)}>
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                  Response
                </h4>
                <Card className="px-2 pb-2">
                  <div className="gap-2 grid grid-cols-2">
                    <FormField
                      control={formRes.control}
                      name="endpoint"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Endpoint</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
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
                          <FormDescription>
                            Choose the endpoint.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formRes.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status Code</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a status code" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {status.map((item: ItemStatus, index) => (
                                <SelectItem key={index} value={item.status}>
                                  {item.status} {item.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Select the status code for the response.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formRes.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter response description value"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Add some response description value
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formRes.control}
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
                            Choose the schema for response ref.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </Card>

                <div className="flex flex-row mt-3">
                  <h5 className="flex-1 font-medium">
                    Response Added: {res.length}
                  </h5>
                  <div className="flex justify-end gap-2">
                    <Button
                      type="reset"
                      size="sm"
                      className="bg-red-500 hover:bg-red-600 text-white"
                      onClick={() => onResetRes()}
                    >
                      Reset Data
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      type="submit"
                      disabled={!formRes.formState.isValid}
                    >
                      Save Response
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RequestResponsePartForm;
