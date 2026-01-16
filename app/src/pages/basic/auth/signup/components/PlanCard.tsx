import { Card, Button, Typography, Tag } from "antd";

const { Title, Text } = Typography;

type PlanCardProps = {
  title: string;
  price: number;
  highlighted?: boolean;
  period: string;
};

const PlanCard = ({
  title,
  price,
  highlighted = false,
  period,
}: PlanCardProps) => (
  <Card
    bordered
    hoverable
    style={{
      height: "100%",
      borderColor: highlighted ? "#1677ff" : undefined,
    }}
  >
    {highlighted && (
      <Tag color="blue" style={{ marginBottom: 8 }}>
        Most Popular
      </Tag>
    )}

    <Title level={3}>{title}</Title>
    <Title level={2}>${price}</Title>
    <Text type="secondary">per user / {period}</Text>

    <div style={{ marginTop: 16 }}>
      <Text>✔ Core features</Text>
      <br />
      <Text>✔ Email support</Text>
      {title === "Standard" && (
        <>
          <br />
          <Text>✔ Advanced analytics</Text>
        </>
      )}
    </div>

    <Button
      type={highlighted ? "primary" : "default"}
      block
      style={{ marginTop: 24 }}
    >
      Choose {title}
    </Button>
  </Card>
);

export default PlanCard;
