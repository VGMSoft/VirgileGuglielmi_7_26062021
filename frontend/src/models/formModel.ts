export interface FieldSchema {
  as: string;
  name: string;
  label: string; // user friendly string
  type?: string;
  [k: string]: any; // any additional attributes
}

// The form schema shape
export interface FormSchema {
  fields: FieldSchema[]; // fields
  values: { [k: string]: any };
}