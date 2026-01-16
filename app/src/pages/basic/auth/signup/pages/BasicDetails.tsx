import { Form, Input, Button, Row, Col } from "antd";
import { signupValidationRules } from "../constants/form";
import PhoneInput from "@app/core/form/PhoneInput";
import CheckBoxInput from "@app/core/form/CheckBoxInput";

const BasicDetails = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ maxWidth: 500, margin: "40px auto" }}
    >
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={signupValidationRules.firstName}
          >
            <Input placeholder="John" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={signupValidationRules.lastName}
          >
            <Input placeholder="Doe" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="email"
        label="Email Address"
        rules={signupValidationRules.email}
      >
        <Input placeholder="john.doe@example.com" />
      </Form.Item>

      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            name="password"
            label="Password"
            rules={signupValidationRules.password}
          >
            <Input.Password placeholder="••••••••" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={signupValidationRules.confirmPassword(form.getFieldValue)}
          >
            <Input.Password placeholder="Re-enter password" />
          </Form.Item>
        </Col>
      </Row>

      <PhoneInput name="phone" rules={signupValidationRules.phone} />

      <CheckBoxInput name="agreement" rules={signupValidationRules.agreement}>
        I agree to <a href="/terms">Terms & Conditions</a> and{" "}
        <a href="/privacy">Privacy Policy</a>
      </CheckBoxInput>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Continue to Subscription
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BasicDetails;
