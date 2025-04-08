import { dayjs } from '@/constants';
import { Button, Col, DatePicker, Input, Radio, Row, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import 'dayjs/locale/ja';
import { FunctionComponent, useState } from 'react';
import './payment.less';
interface PaymentListProps {
  [props: string]: any;
}

const PaymentList: FunctionComponent<PaymentListProps> = () => {
  const [paymentDiff, setPaymentDiff] = useState<number>(1);
  const [status, setStatus] = useState<number>(1);
  const [paymentDate, setPaymentDate] = useState<
    [dayjs.Dayjs, string | string[]]
  >([dayjs(), '']);
  const [store, setStore] = useState<string>('');
  const [productId, setProductId] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [loginDateFrom, setLoginDateFrom] = useState<
    [dayjs.Dayjs, string | string[]]
  >([dayjs(), '']);
  const [loginDateTo, setLoginDateTo] = useState<
    [dayjs.Dayjs, string | string[]]
  >([dayjs(), '']);
  const [updateFrom, setUpdateFrom] = useState<
    [dayjs.Dayjs, string | string[]]
  >([dayjs(), '']);
  const [updateTo, setUpdateTo] = useState<[dayjs.Dayjs, string | string[]]>([
    dayjs(),
    '',
  ]);
  const [deleteFrom, setDeleteFrom] = useState<
    [dayjs.Dayjs, string | string[]]
  >([dayjs(), '']);
  const [deleteTo, setDeleteTo] = useState<[dayjs.Dayjs, string | string[]]>([
    dayjs(),
    '',
  ]);
  const inputText = (text: string) => {
    return <span className="inputText">{text}</span>;
  };

  const dateOnchange = (
    dateDispatch: React.Dispatch<
      React.SetStateAction<[dayjs.Dayjs, string | string[]]>
    >,
    ...props: [dayjs.Dayjs, string | string[]]
  ) => {
    dateDispatch(props);
  };
  const columns: ColumnsType<any> = [
    {
      dataIndex: 'paymentId',
      title: '決済ID',
    },
    {
      dataIndex: 'paymentDiff',
      title: '決済区分',
    },
    {
      dataIndex: 'paymentDate',
      title: '決済日時',
    },
    {
      dataIndex: 'store',
      title: '店舗',
    },
    {
      dataIndex: 'productId',
      title: '商品ID',
    },
    {
      dataIndex: 'userId',
      title: '利用者ID',
    },
    {
      dataIndex: 'amount',
      title: '金額',
    },
    {
      dataIndex: 'status',
      title: 'ステータス',
    },
    {
      dataIndex: 'loginDate',
      title: '登録日',
    },
    {
      dataIndex: 'updateDate',
      title: '更新日',
    },
    {
      dataIndex: 'deleteDate',
      title: '削除日',
    },
  ];
  const dataSource = [
    {
      paymentId: '1',
      paymentDiff: '個人',
      paymentDate: '2021-09-01',
      store: 'store1',
      productId: '1',
      userId: '1',
      amount: '1000',
      status: '有効',
      loginDate: '2021-09-01',
      updateDate: '2021-09-01',
      deleteDate: '2021-09-01',
    },
    {
      paymentId: '2',
      paymentDiff: '法人',
      paymentDate: '2021-09-01',
      store: 'store2',
      productId: '2',
      userId: '2',
      amount: '2000',
      status: '無効',
      loginDate: '2021-09-01',
      updateDate: '2021-09-01',
      deleteDate: '2021-09-01',
    },
  ];

  return (
    <div className="payment-list">
      <div className="searchLimit">
        <Row>
          <Col sm={24} md={12} xl={6}>
            <div className="searchLimitItem">
              {inputText('決済ID')}
              <Input key={'paymentId'} />
            </div>
          </Col>
          <Col sm={24} md={12} xl={6}>
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
          <Col sm={24} md={12} xl={6}>
            <div className="searchLimitItem">
              {inputText('決済日時')}
              <DatePicker
                value={paymentDate[0]}
                onChange={(...props) => {
                  dateOnchange(setPaymentDate, ...props);
                }}
                className="datePickerCuz"
              />
            </div>
          </Col>
          <Col sm={24} md={12} xl={6}>
            <div className="searchLimitItem">
              {inputText('店舗')}
              <Input value={store} onChange={(e) => setStore(e.target.value)} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={24} md={12} xl={6}>
            <div className="searchLimitItem">
              {inputText('商品ID')}
              <Input
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
            </div>
          </Col>
          <Col sm={24} md={12} xl={6}>
            <div className="searchLimitItem">
              {inputText('利用者ID')}
              <Input
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
          </Col>
          <Col sm={24} md={12} xl={6}>
            <div className="searchLimitItem">
              {inputText('金額')}
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </Col>
          <Col sm={24} md={12} xl={6}>
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
          <Col sm={24} md={12} xl={8}>
            <div className="searchLimitItem">
              {inputText('登録日')}
              <DatePicker
                value={loginDateFrom[0]}
                onChange={(...props) => {
                  dateOnchange(setLoginDateFrom, ...props);
                }}
                className="datePickerCuz"
              />
              ～
              <DatePicker
                value={loginDateTo[0]}
                onChange={(...props) => {
                  dateOnchange(setLoginDateTo, ...props);
                }}
                className="datePickerCuz"
              />
            </div>
          </Col>
          <Col sm={24} md={12} xl={8}>
            <div className="searchLimitItem">
              {inputText('更新日')}
              <DatePicker
                value={updateFrom[0]}
                onChange={(...props) => {
                  dateOnchange(setUpdateFrom, ...props);
                }}
                className="datePickerCuz"
              />
              ～
              <DatePicker
                value={updateTo[0]}
                onChange={(...props) => {
                  dateOnchange(setUpdateTo, ...props);
                }}
                className="datePickerCuz"
              />
            </div>
          </Col>
          <Col sm={24} md={12} xl={8}>
            <div className="searchLimitItem">
              {inputText('削除日')}
              <DatePicker
                value={deleteFrom[0]}
                onChange={(...props) => {
                  dateOnchange(setDeleteFrom, ...props);
                }}
                className="datePickerCuz"
              />
              ～
              <DatePicker
                value={deleteTo[0]}
                onChange={(...props) => {
                  dateOnchange(setDeleteTo, ...props);
                }}
                className="datePickerCuz"
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="button">
        <div className="buttonLeft">
          <Button
            type={'primary'}
            className="cuzPrimary"
            style={{ marginRight: '10px' }}
          >
            検索
          </Button>
          <Button type="default">条件クリア</Button>
        </div>
        <div className="buttonRight">
          <Button type={'primary'} className="cuzPrimary">
            CSV出力
          </Button>
        </div>
      </div>
      <Table
        scroll={{
          x: 1300,
        }}
        rowKey={'paymentId'}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default PaymentList;
