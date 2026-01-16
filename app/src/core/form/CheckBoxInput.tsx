import React from "react";
import { Form, Checkbox } from "antd";
import type { CheckboxInputProps } from "@app/types/form/input";

const CheckBoxInput: React.FC<CheckboxInputProps> = ({
  name,
  children,
  valuePropName = "checked",
  rules,
  ...rest
}) => {
  return (
    <Form.Item
      name={name}
      valuePropName={valuePropName}
      rules={rules}
      {...rest}
    >
      <Checkbox>{children}</Checkbox>
    </Form.Item>
  );
};

export default CheckBoxInput;
