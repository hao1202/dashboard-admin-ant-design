import { useState, useEffect } from "react";
import { Typography, Space, Table, Avatar, Rate } from "antd";
import { getOrders } from "../../API";
const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={40} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        style={{
          width: "80vw",
        }}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => {
              return <span>${value}</span>;
            },
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => {
              return <span>${value}</span>;
            },
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={{
          pageSize: 6,
        }}
      ></Table>
    </Space>
  );
};

export default Orders;
