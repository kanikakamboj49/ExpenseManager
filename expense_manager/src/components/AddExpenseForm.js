import {
  Form,
  Button,
  DatePicker,
  Input,
  InputNumber,
  Select,
  ConfigProvider,
  message,
} from "antd";
import { useState } from "react";
import { GiMoneyStack } from "react-icons/gi";

const AddExpenseForm = () => {
  const { TextArea } = Input;
  const [messageApi, contextHolder] = message.useMessage();
  const [showUse, setShowUse] = useState(false);

  const onFinish = (values) => {
    console.log("Date:", new Date(values.date));
    console.log("Amount:", values.amount);
    console.log("Category:", values.category);
    if (values.category === "expense") {
      console.log("Use:", values.use);
    }
    const newObject = {
      Date: new Date(values.date),
      Amount: values.amount,
      Category: values.category,
      Use: values.category === "expense" ? values.use : "-",
    };

    console.log(newObject);
    messageApi.open({
      type: "success",
      content: "Successfully added!",
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);

    messageApi.open({
      type: "error",
      content: "Oops! Something went wrong.",
    });
  };

  const handleChange = (value) => {
    if (value === "expense") {
      setShowUse(true);
    } else {
      setShowUse(false);
    }
  };

  const form = (
    <Form
      className="flex flex-col justify-center items-center mt-7 p-2"
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 30,
      }}
      layout="horizontal"
      style={{
        maxWidth: 600,
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
          name="date"
          label="Date"
          style={{
            width: 250,
          }}
          rules={[
            {
              required: true,
              message: "Please input the date!",
            },
          ]}
          hasFeedback
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="amount"
          label="Amount"
          rules={[
            {
              required: true,
              message: "Please input the date!",
            },
          ]}
          hasFeedback
        >
          <InputNumber className="w-full" min={1} />
        </Form.Item>

        <Form.Item name="category" label="Category">
          <Select
            style={{
              width: 140,
            }}
            onChange={handleChange}
            options={[
              {
                value: "fund",
                label: "Fund",
              },
              {
                value: "expense",
                label: "Expense",
              },
            ]}
          />
        </Form.Item>

        {showUse && (
          <Form.Item
            name="use"
            label="Use"
            requiredMark="optional"
            rules={[
              {
                required: true,
                message: "Please enter the use!",
              },
            ]}
            hasFeedback
          >
            <TextArea rows={4} cols={30} />
          </Form.Item>
        )}

        <Form.Item>
          <Button className="text-neutral-300 ml-8 w-full" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </ConfigProvider>
    </Form>
  );

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col items-center m-10 font-bold text-lg text-emerald-900">
        <GiMoneyStack className="text-8xl text-emerald-800" />
        Add Your Expense Today!
      </div>

      <div className=" form-container border w-1/4 drop-shadow-lg ... rounded-lg  flex flex-col justify-center items-center">
        {form}
        {contextHolder}
      </div>
    </div>
  );
};

export default AddExpenseForm;
