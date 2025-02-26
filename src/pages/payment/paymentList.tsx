import { Button, Col, DatePicker, DatePickerProps, Input, Radio, Row, Table } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import "./payment.less"
import { FunctionComponent, useState } from 'react';
import { ColumnsType } from 'antd/es/table';
interface PaymentListProps {}

const PaymentList: FunctionComponent<PaymentListProps> = () => {
  const [paymentDiff, setPaymentDiff] = useState<number>(1);
  const [status, setStatus] = useState<number>(1);
  const [paymentDate, setPaymentDate] = useState<string>('');
  const [store, setStore] = useState<string>('');
  const [productId, setProductId] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [loginDateFrom, setLoginDateFrom] = useState<string>('');
  const [loginDateTo, setLoginDateTo] = useState<string>('');
  const [updateFrom, setUpdateFrom] = useState<string>('');
  const [updateTo, setUpdateTo] = useState<string>('');
  const [deleteFrom, setDeleteFrom] = useState<string>('');
  const [deleteTo, setDeleteTo] = useState<string>('');
  const inputText = (text: string) => {
    return <span className="inputText">{text}</span>;
  };
  console.log("paymentDate", paymentDate)
  const dateOnchange = (dateType:string, ...props:[dayjs.Dayjs, string | string[]]) => {
    const [date, dateString] = props
    console.log(date, dateString);
    eval(`set${dateType}`)(dateString)
  };
  const columns:ColumnsType<any> = [
    {
      dataIndex: "paymentId",
      title: "決済ID",
    },
    {
      dataIndex: "paymentDiff",
      title: "決済区分",
    },
    {
      dataIndex: "paymentDate",
      title: "決済日時",
    },
    {
      dataIndex: "store",
      title: "店舗",
    },
    {
      dataIndex: "productId",
      title: "商品ID",
    },
    {
      dataIndex: "userId",
      title: "利用者ID",
    },
    {
      dataIndex: "amount",
      title: "金額",
    },
    {
      dataIndex: "status",
      title: "ステータス",
    },
    {
      dataIndex: "loginDate",
      title: "登録日",
    },
    {
      dataIndex: "updateDate",
      title: "更新日",
    },
    {
      dataIndex: "deleteDate",
      title: "削除日",
    },
  ]
  const dataSource = [
    {
      paymentId: "1",
      paymentDiff: "個人",
      paymentDate: "2021-09-01",
      store: "store1",
      productId: "1",
      userId: "1",
      amount: "1000",
      status: "有効",
      loginDate: "2021-09-01",
      updateDate: "2021-09-01",
      deleteDate: "2021-09-01",
    },
    {
      paymentId: "2",
      paymentDiff: "法人",
      paymentDate: "2021-09-01",
      store: "store2",
      productId: "2",
      userId: "2",
      amount: "2000",
      status: "無効",
      loginDate: "2021-09-01",
      updateDate: "2021-09-01",
      deleteDate: "2021-09-01",
    }
  ]

  return (
    <div className="payment-list">
      <div className="searchLimit">
        <Row>
          <Col span={6}>
            <div className="searchLimitItem">
              {inputText('決済ID')}
              <Input key={'paymentId'} />
            </div>
          </Col>
          <Col span={6}>
            <div className="searchLimitItem">
              {inputText('決済区分')}
              <Radio.Group
                value={paymentDiff}
                options={[
                  { value: 1, label: '個人' },
                  { value: 2, label: '法人' },
                ]}
                onChange={(e) => setPaymentDiff(e.target.value)}
              />
            </div>
          </Col>
          <Col span={6}>
            <div className="searchLimitItem">
              {inputText('決済日時')}
              <DatePicker onChange={(...props) => {dateOnchange("PaymentDate", ...props)}}  />
            </div>
          </Col>
          <Col span={6}>
            <div className="searchLimitItem">
              {inputText('店舗')}
              <Input value={store} onChange={(e) => setStore(e.target.value)} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <div className="searchLimitItem">
            {inputText('商品ID')}
              <Input value={productId} onChange={(e) => setProductId(e.target.value)} />
            </div>
          </Col>
          <Col span={6}>
            <div className="searchLimitItem">
            {inputText('利用者ID')}
              <Input value={userId} onChange={(e) => setUserId(e.target.value)}/>
            </div>
          </Col>
          <Col span={6}>
            <div className="searchLimitItem">
            {inputText('金額')}
              <Input value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
          </Col>
          <Col span={6}>
            <div className="searchLimitItem">
              {inputText('ステータス')}
              <Radio.Group
                value={status}
                options={[
                  { value: 1, label: '有効' },
                  { value: 2, label: '無効' },
                ]}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div className="searchLimitItem">
              {inputText('登録日')}
              <DatePicker  onChange={(...props) => {dateOnchange("loginDateFrom", ...props)}}  />
              ～
              <DatePicker  onChange={(...props) => {dateOnchange("loginDateTo", ...props)}}  />
            </div>
          </Col>
          <Col span={8}>
            <div className="searchLimitItem">
              {inputText('更新日')}
              <DatePicker  onChange={(...props) => {dateOnchange("updateFrom", ...props)}}  />
              ～
              <DatePicker  onChange={(...props) => {dateOnchange("updateTo", ...props)}}  />
            </div>
          </Col>
          <Col span={8}>
            <div className="searchLimitItem">
              {inputText('削除日')}
              <DatePicker  onChange={(...props) => {dateOnchange("deleteFrom", ...props)}}  />
              ～
              <DatePicker  onChange={(...props) => {dateOnchange("deleteTo", ...props)}}  />
            </div>
          </Col>
        </Row>
      </div>
      <div className='button'>
        <div className='buttonLeft'>
          <Button type={"primary"} className='cuzPrimary' style={{marginRight: "10px"}}>検索</Button>
          <Button type='default'>条件クリア</Button>
        </div>
        <div className='buttonRight'>
          <Button type={"primary"} className='cuzPrimary'>CSV出力</Button>
        </div>
      </div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default PaymentList;
