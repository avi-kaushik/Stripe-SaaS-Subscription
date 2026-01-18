import { Form, Input, Button, Card, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { loginValidationRules } from "./validation";

const { Title, Text } = Typography;

const Login = () => {
  const [form] = Form.useForm();

  return (
    <div
      style={{
        height: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f7fa",
      }}
    >
      <Card
        style={{
          width: 420,
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 24, textAlign: "center" }}>
          <Title level={3} style={{ marginBottom: 4 }}>
            Welcome Back
          </Title>
          <Text type="secondary">Login to continue to your account</Text>
        </div>

        <Form form={form} layout="vertical" size="large" autoComplete="off">
          <Form.Item
            name="email"
            label="Email Address"
            rules={loginValidationRules.email}
          >
            <Input
              prefix={<MailOutlined style={{ marginRight: 4 }} />}
              placeholder="john.doe@example.com"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={loginValidationRules.password}
          >
            <Input.Password
              prefix={<LockOutlined style={{ marginRight: 4 }} />}
              placeholder="••••••••"
            />
          </Form.Item>

          {/* Forgot password */}
          <div style={{ textAlign: "right", marginBottom: 16 }}>
            <Text type="secondary" style={{ cursor: "pointer" }}>
              Forgot password?
            </Text>
          </div>

          {/* Submit */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
