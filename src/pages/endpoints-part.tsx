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
import { basicFormSchema, pathFormSchema } from '@/utils/schema';
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
    },
  ],
};

const PathPartForm: React.FC = () => {
  const form = useForm<SwaggerSchema>({
    resolver: zodResolver(basicFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
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
            {fields.map((field, index) => (
              <div className="flex flex-col gap-2" key={field.id}>
                <FormField
                  control={form.control}
                  name={`paths.${index}.method`}
                  render={() => (
                    <FormItem>
                      <FormLabel>HTTP Method</FormLabel>
                      <div className="flex flex-row gap-4">
                        {items.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name={`paths.${index}.method`}
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-1 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked: boolean) => {
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
                  name={`paths.${index}.endpoint`}
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
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => append({ endpoint: '', method: [] })}
            >
              Add Endpoint
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2 ml-1 bg-red-300 hover:bg-red-500 hover:text-white"
              onClick={() => {
                if (fields.length > 1) {
                  remove(fields.length - 1);
                }
              }}
              disabled={fields.length === 1}
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
