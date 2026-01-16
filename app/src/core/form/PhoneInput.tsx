import React from "react";
import { Form, Input, Select, Space } from "antd";
import type { PhoneInputProps } from "@app/types/form/input";

const defaultCountryCodes = [
  { label: "+1 (USA/Canada)", value: "1" },
  { label: "+44 (UK)", value: "44" },
  { label: "+61 (Australia)", value: "61" },
  { label: "+91 (India)", value: "91" },
  { label: "+81 (Japan)", value: "81" },
  { label: "+49 (Germany)", value: "49" },
  { label: "+33 (France)", value: "33" },
  { label: "+86 (China)", value: "86" },
  { label: "+55 (Brazil)", value: "55" },
  { label: "+27 (South Africa)", value: "27" },
];

const PhoneInput: React.FC<PhoneInputProps> = ({
  name,
  prefixName = "prefix",
  label = "Phone Number",
  placeholder = "9876543210",
  options = defaultCountryCodes,
  initialPrefix = "91",
  rules,
  ...rest
}) => {
  return (
    <Form.Item name={name} label={label} rules={rules} {...rest}>
      <Space.Compact block>
        <Form.Item name={prefixName} noStyle initialValue={initialPrefix}>
          <Select style={{ width: 150 }} options={options} />
        </Form.Item>
        <Input placeholder={placeholder} />
      </Space.Compact>
    </Form.Item>
  );
};

export default PhoneInput;
