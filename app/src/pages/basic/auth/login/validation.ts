import type { Rule } from "antd/es/form";

export const loginValidationRules = {
  email: [
    { required: true, message: "Please enter your email address" },
    { type: "email", message: "Please enter a valid email address" },
  ] as Rule[],

  password: [{ required: true, message: "Please create a password" }] as Rule[],
};
