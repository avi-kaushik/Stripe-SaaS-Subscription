import { Tabs, Row, Col } from "antd";
import PlanCard from "../components/PlanCard";
import { PRICING_MODEL } from "@app/constants/payments/pricing";

const SubscriptionPlans = () => {
  return (
    <div style={{ maxWidth: 700, margin: "40px auto" }}>
      <Tabs
        defaultActiveKey="weekly"
        centered
        items={Object.entries(PRICING_MODEL).map(
          ([billingKey, billingData]) => ({
            key: billingKey,
            label: billingData.label,
            children: (
              <Row gutter={24}>
                {Object.values(billingData.plans).map((plan) => (
                  <Col xs={24} md={12} key={plan.title}>
                    <PlanCard
                      title={plan.title}
                      price={plan.price}
                      period={billingData.period}
                      highlighted={plan?.highlighted}
                    />
                  </Col>
                ))}
              </Row>
            ),
          })
        )}
      />
    </div>
  );
};

export default SubscriptionPlans;
