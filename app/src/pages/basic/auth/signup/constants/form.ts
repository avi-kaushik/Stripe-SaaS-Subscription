import type { Rule } from "antd/es/form";

type GetFieldValueFn = (name: string) => unknown; // more type-safe than `any`

export const signupValidationRules = {
  firstName: [
    { required: true, message: "Please enter your first name" },
  ] as Rule[],
  lastName: [
    { required: true, message: "Please enter your last name" },
  ] as Rule[],

  email: [
    { required: true, message: "Please enter your email address" },
    { type: "email", message: "Please enter a valid email address" },
  ] as Rule[],

  password: [{ required: true, message: "Please create a password" }] as Rule[],

  confirmPassword: (getFieldValue: GetFieldValueFn): Rule[] => [
    { required: true, message: "Please confirm your password" },
    {
      validator(_, value) {
        return !value || getFieldValue("password") === value
          ? Promise.resolve()
          : Promise.reject(new Error("Passwords do not match"));
      },
    },
  ],

  phone: [
    { required: true, message: "Please enter your phone number" },
  ] as Rule[],

  agreement: [
    {
      validator: (_: unknown, value: boolean) =>
        value
          ? Promise.resolve()
          : Promise.reject(new Error("Accept terms to continue")),
    },
  ] as Rule[],
};
