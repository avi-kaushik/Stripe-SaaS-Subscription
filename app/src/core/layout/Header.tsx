import { Layout, Menu, Button, Space } from "antd";
import { mainHeaderItems } from "@app/constants/layout/header";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <Layout>
      <AntHeader
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: 20, color: "#1890ff" }}>
          LOGO
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          items={mainHeaderItems}
          style={{
            flex: 1,
            justifyContent: "center",
            borderBottom: "none",
          }}
        />

        <Space>
          <Button type="default" href="/login">
            Login
          </Button>
          <Button type="primary" href="/signup">
            Sign Up
          </Button>
        </Space>
      </AntHeader>
    </Layout>
  );
};

export default Header;
