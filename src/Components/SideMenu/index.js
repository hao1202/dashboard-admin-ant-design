import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState("/");
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        style={{
          margin: 4,
          padding: 8,
          fontSize: 18,
        }}
        onClick={(item) => {
          // item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            icon: (
              <AppstoreOutlined
                style={{
                  fontSize: 18,
                }}
              />
            ),
            label: "Dashboard",
            key: "/",
          },
          {
            icon: (
              <ShopOutlined
                style={{
                  fontSize: 18,
                }}
              />
            ),
            label: "Inventory",
            key: "/inventory",
          },
          {
            icon: (
              <ShoppingCartOutlined
                style={{
                  fontSize: 18,
                }}
              />
            ),
            label: "Orders",
            key: "/orders",
          },
          {
            icon: (
              <UserOutlined
                style={{
                  fontSize: 18,
                }}
              />
            ),
            label: "Customers",
            key: "/customers",
          },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
