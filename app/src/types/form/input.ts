import type { FormItemProps } from "antd";
import type { ReactNode } from "react";

export interface CheckboxInputProps extends Omit<FormItemProps, "children"> {
  /** Name of the field in form */
  name: string;
  /** Checkbox label / content */
  children: ReactNode;
  /** Value prop name, default is "checked" */
  valuePropName?: string;
}

export interface PhoneInputProps
  extends Omit<FormItemProps, "children" | "name"> {
  /** Name of the phone number field (main field) */
  name: string;
  /** Name of the prefix field */
  prefixName?: string;
  /** Label for the main input */
  label?: string;
  /** Placeholder for the input */
  placeholder?: string;
  /** Country code options */
  options?: { label: string; value: string }[];
  /** Initial prefix value */
  initialPrefix?: string;
}

export type TextInputType = "text" | "email" | "password";

export interface TextInputProps extends Omit<FormItemProps, "children"> {
  name: string;
  type?: TextInputType; // default: text
  label?: string;
  placeholder?: string;
  /** For confirm password validation */
  dependencies?: string[];
  getFieldValue?: (name: string) => unknown;
}
