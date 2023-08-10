import { Card, Col, Row } from "antd";
import { LuReceipt } from "react-icons/lu";

const ReceiptPage = () => {
  const receipt = (
    <Row gutter={16}>
      <Col span={8}>
        <Card
          className="flex flex-col items-center"
          title="COLLECTED"
          bordered={false}
        >
          15000
        </Card>
      </Col>
      <Col span={8}>
        <Card
          className="flex flex-col items-center text-red-700"
          title="SPENT"
          bordered={false}
        >
          1000
        </Card>
      </Col>
      <Col span={8}>
        <Card
          className="flex flex-col items-center text-emerald-700"
          title="REMAINING"
          bordered={false}
        >
          14000
        </Card>
      </Col>
    </Row>
  );
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-10 font-bold text-2xl text-emerald-900">
        <LuReceipt className="text-4xl text-emerald-800" />
        Expense Summary
      </div>
      <div>{receipt}</div>
    </div>
  );
};

export default ReceiptPage;
