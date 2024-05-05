import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { pathFormSchema } from '@/utils/schema';
import { Checkbox } from '@/components/ui/checkbox';

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
        { name: '', in: '', required: false, description: '', type: '' },
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

  const onSubmit = (values: SwaggerSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
            Endpoint
          </h4>
          <div className="space-y-6">
            {paths.map((field, pathIndex) => (
              <div className="flex flex-col gap-2" key={pathIndex}>
                <FormField
                  control={form.control}
                  name={`paths.${pathIndex}.method`}
                  render={() => (
                    <FormItem>
                      <FormLabel>HTTP Method</FormLabel>
                      <div className="flex flex-row gap-4">
                        {items.map((item) => (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-1 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={paths[pathIndex].method.includes(
                                  item.id
                                )}
                                onCheckedChange={(checked: boolean) =>
                                  checked
                                    ? form.setValue(
                                        `paths.${pathIndex}.method`,
                                        [...paths[pathIndex].method, item.id]
                                      )
                                    : form.setValue(
                                        `paths.${pathIndex}.method`,
                                        paths[pathIndex].method.filter(
                                          (value) => value !== item.id
                                        )
                                      )
                                }
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
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
                {field.parameters.map((_, parameterIndex) => (
                  <div key={parameterIndex}>
                    <FormField
                      control={form.control}
                      name={`paths.${pathIndex}.parameters.${parameterIndex}.name`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Parameter Name</FormLabel>
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
                ))}
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() =>
                appendPath({
                  endpoint: '',
                  method: [],
                  parameters: [{ name: '' }],
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
