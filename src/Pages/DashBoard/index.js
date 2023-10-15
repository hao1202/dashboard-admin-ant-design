import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Space, Typography } from "antd";
import DashboardCart from "../../Components/DashBoardCart";
import RecentOrders from "../../Components/RecentOrders";
import DashboardChart from "../../Components/DashboardChart";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders } from "../../API";

const Dashboard = () => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customer, setCustomer] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomer(res.total);
    });
  }, [orders, inventory, customer, revenue]);
  return (
    <Space size={40} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal" size={40}>
        <DashboardCart
          bg={"rgba(0 , 255 , 0 , 0.25)"}
          icon={
            <ShoppingCartOutlined
              style={{
                fontSize: 24,
                color: "green",
                backgroundColor: "rgba(0 , 255 , 0 , 0.25)",
                borderRadius: 20,
                padding: 8,
              }}
            />
          }
          title="Orders"
          value={orders}
        />
        <DashboardCart
          bg={"rgba(0 , 0 , 255 , 0.25)"}
          icon={
            <ShoppingOutlined
              style={{
                fontSize: 24,
                color: "blue",
                backgroundColor: "rgba(0 , 0 , 255 , 0.25)",
                borderRadius: 20,
                padding: 8,
              }}
            />
          }
          title="Inventory"
          value={inventory}
        />
        <DashboardCart
          bg={"rgba(0 , 255 , 255 , 0.25)"}
          icon={
            <UserOutlined
              style={{
                fontSize: 24,
                color: "purple",
                backgroundColor: "rgba(0 , 255 , 255 , 0.25)",
                borderRadius: 20,
                padding: 8,
              }}
            />
          }
          title="Customer"
          value={customer}
        />
        <DashboardCart
          bg={"rgba(255, 0 , 0 , 0.25)"}
          icon={
            <DollarCircleOutlined
              style={{
                fontSize: 24,
                color: "red",
                backgroundColor: "rgba(255, 0 , 0 , 0.25)",
                borderRadius: 20,
                padding: 8,
              }}
            />
          }
          title="Revenue"
          value={revenue}
        />
      </Space>
      <Space direction="horizontal" size={70}>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>
  );
};

export default Dashboard;
