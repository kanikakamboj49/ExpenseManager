import { Card, Col, Row } from "antd";

const ReceiptPage = () => {
  return (
    <div>
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
            className="flex flex-col items-center"
            title="SPENT"
            bordered={false}
          >
            1000
          </Card>
        </Col>
        <Col span={8}>
          <Card
            className="flex flex-col items-center"
            title="REMAINING"
            bordered={false}
          >
            14000
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ReceiptPage;
