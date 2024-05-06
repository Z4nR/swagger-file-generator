import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
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
import { pathFormSchema } from '@/utils/schema';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const items = [
  {
    id: 'post',
    label: 'POST',
  },
  {
    id: 'get',
    label: 'GET',
  },
  {
    id: 'update',
    label: 'UPDATE',
  },
  {
    id: 'patch',
    label: 'PATCH',
  },
  {
    id: 'delete',
    label: 'DELETE',
  },
] as const;

type SwaggerSchema = z.infer<typeof pathFormSchema>;

const defaultValues: Partial<SwaggerSchema> = {
  paths: [
    {
      method: ['post', 'get'],
      endpoint: '',
      parameters: [
        { name: '', in: '', required: true, description: '', type: '' },
      ],
    },
  ],
};

const PathPartForm: React.FC = () => {
  const form = useForm<SwaggerSchema>({
    resolver: zodResolver(pathFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const {
    fields: paths,
    append: appendPath,
    remove: removePath,
  } = useFieldArray({
    name: 'paths',
    control: form.control,
  });

  const {
    fields: parameters,
    append: appendParameter,
    remove: removeParameter,
  } = useFieldArray({
    name: `paths.${0}.parameters`,
    control: form.control,
  });

  const onSubmit = (values: SwaggerSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
            Path & Endpoint Specs
          </h4>
          <div className="space-y-6">
            {paths.map((_, pathIndex) => (
              <Card className="flex flex-col gap-2 p-2" key={pathIndex}>
                <FormField
                  control={form.control}
                  name={`paths.${pathIndex}.method`}
                  render={() => (
                    <FormItem>
                      <FormLabel>HTTP Method</FormLabel>
                      <div className="flex flex-row gap-4">
                        {items.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name={`paths.${pathIndex}.method`}
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-1 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              item.id,
                                            ])
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
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`paths.${pathIndex}.endpoint`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Endpoint</FormLabel>
                      <FormControl>
                        <Input placeholder="Add tag description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormLabel>Parameter</FormLabel>
                {parameters.map((_, parameterIndex) => (
                  <Card className="p-2" key={parameterIndex}>
                    <div className="gap-2 grid grid-cols-2">
                      <FormField
                        control={form.control}
                        name={`paths.${pathIndex}.parameters.${parameterIndex}.in`}
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
                              This is your swagger license.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`paths.${pathIndex}.parameters.${parameterIndex}.type`}
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
                                <SelectItem value="array">Array</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              This is your swagger license.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`paths.${pathIndex}.parameters.${parameterIndex}.name`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter parameter name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`paths.${pathIndex}.parameters.${parameterIndex}.description`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>Desc</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter parameter name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name={`paths.${pathIndex}.parameters.${parameterIndex}.required`}
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
                              This parameter is required when using this
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
                        in: '',
                        type: '',
                        description: '',
                        required: false,
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
                      if (parameters.length > 1) {
                        removeParameter(parameters.length - 1);
                      }
                    }}
                    disabled={parameters.length <= 1}
                  >
                    Remove Param
                  </Button>
                </div>
              </Card>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() =>
                appendPath({
                  endpoint: '',
                  method: ['post', 'get'],
                  parameters: [
                    {
                      name: '',
                      in: '',
                      type: '',
                      description: '',
                      required: true,
                    },
                  ],
                })
              }
            >
              Add Endpoint
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2 ml-1 bg-red-300 hover:bg-red-500 hover:text-white"
              onClick={() => {
                if (paths.length > 1) {
                  removePath(paths.length - 1);
                }
              }}
              disabled={paths.length === 1}
            >
              Remove Endpoint
            </Button>
          </div>
        </div>
        <div className="flex justify-between">
          <Button className="mt-6">Previous</Button>
          <Button className="mt-6" type="submit">
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PathPartForm;
