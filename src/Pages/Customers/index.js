import { useState, useEffect } from "react";
import { Typography, Space, Table, Avatar, Rate } from "antd";
import { getCustomers } from "../../API";
const Customers = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={40} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        style={{
          width: "80vw",
        }}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} style={{ width: 50, height: 50 }} />;
            },
          },
          {
            title: "FirstName",
            dataIndex: "firstName",
          },
          {
            title: "LastName",
            dataIndex: "lastName",
            render: (value) => {
              return <span>${value}</span>;
            },
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },
          {
            title: "Address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address} , {address.city}
                </span>
              );
            },
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

export default Customers;
