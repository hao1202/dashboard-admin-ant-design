import { Card, Space, Statistic } from "antd";

const DashboardCart = ({ title, value, icon, bg }) => {
  return (
    <Card
      style={{
        width: 300,
        height: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bg,
      }}
    >
      <Space direction="horizontal" size={20}>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

export default DashboardCart;
