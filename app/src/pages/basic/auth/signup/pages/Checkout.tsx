import { Spin, Progress, Typography, Space } from "antd";
import { LoadingOutlined, CreditCardOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Checkout = () => {
  return (
    <div
      style={{
        margin: "40px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Space direction="vertical" align="center" size="large">
        {/* Loader Icon */}
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />

        {/* Title */}
        <Title level={3} style={{ margin: 0 }}>
          Processing your checkout
        </Title>

        {/* Info Text */}
        <Text type="secondary" style={{ textAlign: "center" }}>
          Please wait while we redirect you to the secure payment gateway.
        </Text>

        {/* Progress bar (indeterminate feel) */}
        <Progress
          percent={70}
          status="active"
          showInfo={false}
          style={{ width: 260 }}
        />

        {/* Payment hint */}
        <Space>
          <CreditCardOutlined />
          <Text type="secondary">Redirecting for online payment</Text>
        </Space>
      </Space>
    </div>
  );
};

export default Checkout;
