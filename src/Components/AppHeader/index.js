import { Avatar, Badge, Drawer, List, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";

const AppHeader = () => {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="AppHeader">
      {/* <Image
        width={40}
        className="header-img"
        src="https://yt3.ggpht.com/LTY3n5x_N_7pUCiwRAZiHOKYftilrZr_PkpkeLfGWSH3i6vZcmRUU35iGXsZaC4X27eP9cZn3Q=s88-c-k-c0x00ffffff-no-rj"
      /> */}
      <Avatar
        shape="circle"
        alt="anh dai dien"
        src="https://yt3.ggpht.com/LTY3n5x_N_7pUCiwRAZiHOKYftilrZr_PkpkeLfGWSH3i6vZcmRUU35iGXsZaC4X27eP9cZn3Q=s88-c-k-c0x00ffffff-no-rj"
      />
      <Typography.Title>Dashboard</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notification"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>
                  {item.title} has been ordered!
                </Typography.Text>
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
};

export default AppHeader;
