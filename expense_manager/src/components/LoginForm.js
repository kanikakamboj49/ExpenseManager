import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Input, ConfigProvider, message } from "antd";
import { login } from "../actions";
import { GiMoneyStack } from "react-icons/gi";

const LoginForm = () => {
  const myState = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    console.log(values.username);
    console.log(values.password);
    if (values.username === "user" && values.password === "123") {
      dispatch(login());
      console.log("Logged in:", myState);
    } else {
      messageApi.open({
        type: "error",
        content: "Wrong username or password!",
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);

    messageApi.open({
      type: "error",
      content: "Oops! Something went wrong.",
    });
  };

  const form = (
    <div className="p-10">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "rgb(49, 82, 49)",
            },
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Username: user" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password: 123" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </ConfigProvider>
      </Form>
    </div>
  );

  return (
    <div className="border drop-shadow-lg ... rounded-lg  flex flex-col justify-center items-center">
      <div className="flex justify-center items-center font-bold p-1 text-lg text-emerald-900 rounded-t-lg drop-shadow-lg ... h-14 w-full bg-gradient-to-r from-emerald-600 to-green-900 ...">
        <span>
          <GiMoneyStack className="text-4xl text-emerald-800" />
        </span>
        Expense Manager
      </div>
      {contextHolder}
      {form}
    </div>
  );
};
export default LoginForm;
