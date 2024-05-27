import React, { useEffect, useState } from 'react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
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
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Path } from '@/utils/state/types';
import { PathSwaggerSchema } from '@/utils/form.helper';
import { useSwaggerState } from '@/utils/state/state';

const items = [
  { id: 'post', label: 'POST' },
  { id: 'get', label: 'GET' },
  { id: 'update', label: 'UPDATE' },
  { id: 'patch', label: 'PATCH' },
  { id: 'delete', label: 'DELETE' },
] as const;

interface SetValue {
  form: UseFormReturn<PathSwaggerSchema>;
  setEndpoint: React.Dispatch<React.SetStateAction<Path | undefined>>;
}

const PathPartForm: React.FC<SetValue> = ({ form, setEndpoint }) => {
  const { tags } = useSwaggerState();
  const [pathsData, setPaths] = useState<PathSwaggerSchema[]>([]);
  const {
    fields: parameters,
    append: appendParameter,
    remove: removeParameter,
  } = useFieldArray({
    name: 'parameters',
    control: form.control,
  });

  const onReset = () => {
    form.reset();
  };

  const onSubmit = (values: PathSwaggerSchema) => {
    setPaths((prevPaths) => [...prevPaths, values]);
    onReset();
  };

  useEffect(() => {
    const transformedPaths: Path = {
      paths: pathsData.map((path) => ({
        method: path.method,
        endpoint: path.endpoint,
        tags: path.tags,
        parameters: path.parameters.map((parameter) => ({
          in: parameter.in || '',
          required: parameter.required ?? true,
          type: parameter.type || '',
          description: parameter.description || '',
          name: parameter.name || '',
          example: parameter.example || '',
        })),
      })),
    };
    setEndpoint(transformedPaths);
  }, [pathsData, setEndpoint]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <Card className="flex flex-col gap-2 space-y-4 p-2">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              HTTP Method
            </h4>
            <FormField
              control={form.control}
              name="method"
              render={() => (
                <FormItem>
                  <div className="flex flex-row gap-4">
                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="method"
                        render={({ field }) => (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-1 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormDescription>
                    Choose your HTTP Method when use the endpoint
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Endpoint
            </h4>
            <FormField
              control={form.control}
              name="endpoint"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Add endpoint" {...field} />
                  </FormControl>
                  <FormDescription>Set your endpoint here</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Endpoint
            </h4>
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Tags</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a tags" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {tags.map((tag) => (
                        <SelectItem value={tag.name}>{tag.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose the tags for the endpoint.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Parameter
            </h4>
            {parameters.map((_, parameterIndex) => (
              <Card className="px-2" key={parameterIndex}>
                <div className="gap-2 grid grid-cols-2">
                  <FormField
                    control={form.control}
                    name={`parameters.${parameterIndex}.in`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Param Use In</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a parameter type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="query">Query</SelectItem>
                            <SelectItem value="path">Path</SelectItem>
                            <SelectItem value="header">Header</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Select in where the parameter will use.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`parameters.${parameterIndex}.type`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a parameter type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="string">String</SelectItem>
                            <SelectItem value="integer">Integer</SelectItem>
                            <SelectItem value="boolean">Boolean</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose the type of parameter.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`parameters.${parameterIndex}.name`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter parameter name"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Add the name of parameter
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`parameters.${parameterIndex}.description`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter parameter description"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Create simple description about parameter
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`parameters.${parameterIndex}.example`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Example</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter parameter example value"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Add some parameter example value
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name={`parameters.${parameterIndex}.required`}
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-4 pl-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Is this parameter required?</FormLabel>
                        <FormDescription>
                          Set type of requirement parameter when using this
                          endpoint
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </Card>
            ))}
            <div className="flex flex-row gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() =>
                  appendParameter({
                    name: '',
                    in: 'query',
                    type: 'string',
                    description: '',
                    required: true,
                  })
                }
              >
                Add Param
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2 ml-1 bg-red-300 hover:bg-red-500 hover:text-white"
                onClick={() => {
                  if (parameters.length >= 1) {
                    removeParameter(parameters.length - 1);
                  }
                }}
                disabled={parameters.length < 1}
              >
                Remove Param
              </Button>
            </div>
            <div className="flex flex-row mt-3">
              <h5 className="flex-1 font-medium">
                Endpoint Added: {pathsData.length}
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
                  Save Endpoint
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </form>
    </Form>
  );
};

export default PathPartForm;
