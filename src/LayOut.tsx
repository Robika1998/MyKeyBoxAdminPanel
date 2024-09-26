import { Button, Layout, Menu } from "antd";
import { ReactNode, useState } from "react";
import {
  LockOutlined,
  HomeOutlined,
  SettingOutlined,
  FileAddOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const logo = "../src/assets/logo/logo-light.png";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function LayOut({ children }: { children: ReactNode }) {
  const nav = useNavigate();
  const [selectedKey, setSelectedKey] = useState("/");
  const [collapsed, setCollapsed] = useState(false);

  const navigationHandler = (key: string) => {
    setSelectedKey(key);
    nav(key);
  };

  return (
    <>
      <Button
        type="primary"
        style={{ position: "fixed", top: 16, right: 16, zIndex: 1000 }}
        onClick={() => {}}
      >
        Log Out
      </Button>

      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" style={{ height: "60px", margin: 5 }}>
            <img src={logo} alt="Logo" style={{ height: 60, width: 60 }} />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[selectedKey]}
            onSelect={({ key }) => navigationHandler(key)}
          >
            <Menu.Item key="/" icon={<HomeOutlined />}>
              Home
            </Menu.Item>

            <SubMenu key="locker" icon={<LockOutlined />} title="Locker">
              <Menu.Item
                key="/locker/add"
                onClick={() => nav("/locker/add")}
                icon={<FileAddOutlined />}
              >
                Add Locker
              </Menu.Item>
              <Menu.Item
                key="/locker/list"
                onClick={() => nav("/locker/list")}
                icon={<UnorderedListOutlined />}
              >
                Locker List
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/settings" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header
            style={{ backgroundColor: "#001529", color: "#fff", padding: 0 }}
          ></Header>

          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              backgroundColor: "#fff",
            }}
          >
            {children}
          </Content>

          <Footer style={{ textAlign: "center" }}>©2024 MyKeyBox</Footer>
        </Layout>
      </Layout>
    </>
  );
}
