import React from "react";
import { Form, Input } from "antd";
import type { TextInputProps } from "@app/types/form/input";

const TextInput: React.FC<TextInputProps> = ({
  name,
  type = "text",
  label,
  placeholder,
  rules,
  dependencies,
  ...rest
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      dependencies={dependencies}
      {...rest}
    >
      {type === "password" ? (
        <Input.Password placeholder={placeholder} />
      ) : (
        <Input type={type} placeholder={placeholder} />
      )}
    </Form.Item>
  );
};

export default TextInput;
