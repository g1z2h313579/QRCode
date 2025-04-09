import { useBaseUrl } from '@/constants';
import CustomizeForm, { CustomizeFormProps } from '@/pages/components/form';
import { settlement } from '@/pages/entity';
import { history } from '@umijs/max';
import { Button, Form, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import 'dayjs/locale/ja';
import { FunctionComponent } from 'react';
import style from './settlement.less';
interface SettlementListProps {
  [props: string]: any;
}

const SettlementList: FunctionComponent<SettlementListProps> = () => {
  const [form] = Form.useForm();
  const baseUrl = useBaseUrl();
  const settlementForm: CustomizeFormProps[] = [
    {
      colProps: {
        sm: 24,
        md: 12,
        xl: 8,
      },
      formItems: [
        {
          formItemProps: {
            name: settlement.settlement_id.key,
            label: '決済ID',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: settlement.settlement_time.key,
            label: '決済日時',
          },
          childrenType: 'datePicker',
        },
        {
          formItemProps: {
            name: settlement.status.key,
            label: 'ステータス',
          },
          childrenType: 'radio',
          childrenProps: {
            options: [
              { value: 1, label: '有効' },
              { value: 0, label: '無効' },
            ],
          },
        },
      ],
    },
    {
      colProps: {
        sm: 24,
        md: 12,
        xl: 8,
      },
      formItems: [
        {
          formItemProps: {
            name: settlement.franchise_name.key,
            label: '加盟店',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: settlement.product_name.key,
            label: '商品名',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: [
              settlement.settlement_amount.key,
              settlement.settlement_amount_from.key,
              settlement.settlement_amount_to.key,
            ],
            label: '金額',
          },
          childrenType: 'numberRange',
        },
      ],
    },
    {
      colProps: {
        sm: 24,
        md: 12,
        xl: 8,
      },
      formItems: [
        {
          formItemProps: {
            name: settlement.registration_date.key,
            label: '登録日',
          },
          childrenType: 'dateRange',
        },
        {
          formItemProps: {
            name: settlement.update_date.key,
            label: '更新日',
          },
          childrenType: 'dateRange',
        },
        {
          formItemProps: {
            name: settlement.deletion_date.key,
            label: '削除日',
          },
          childrenType: 'dateRange',
        },
      ],
    },
  ];

  const columns: ColumnsType<any> = [
    {
      title: '決済ID',
      dataIndex: settlement.settlement_id.key,
      key: settlement.settlement_id.key,
      render: (value: any) => {
        return (
          <a
            onClick={() => {
              history.push(`${baseUrl}/settlement/${value}`);
            }}
          >
            {value}
          </a>
        );
      },
    },
    {
      title: '決済日時',
      dataIndex: settlement.settlement_time.key,
      key: settlement.settlement_time.key,
    },
    {
      title: 'ステータス',
      dataIndex: settlement.status.key,
      key: settlement.status.key,
    },
    {
      title: '加盟店',
      dataIndex: settlement.franchise_name.key,
      key: settlement.franchise_name.key,
    },
    {
      title: '金額',
      dataIndex: settlement.settlement_amount.key,
      key: settlement.settlement_amount.key,
    },
    {
      title: '商品名',
      dataIndex: settlement.product_name.key,
      key: settlement.product_name.key,
    },
    {
      title: '登録日',
      dataIndex: settlement.registration_date.key,
      key: settlement.registration_date.key,
    },
    {
      title: '更新日',
      dataIndex: settlement.update_date.key,
      key: settlement.update_date.key,
    },
    {
      title: '削除日',
      dataIndex: settlement.deletion_date.key,
      key: settlement.deletion_date.key,
    },
  ];
  const dataSource: any[] = [
    {
      [settlement.settlement_id.key]: '1001',
      [settlement.settlement_time.key]: '2025-01-01 10:00:00',
      [settlement.status.key]: 1,
      [settlement.franchise_name.key]: '加盟店A',
      [settlement.settlement_amount.key]: 5000,
      [settlement.product_name.key]: '商品A',
      [settlement.registration_date.key]: '2025-01-01',
      [settlement.update_date.key]: '2025-01-02',
      [settlement.deletion_date.key]: null,
    },
    {
      [settlement.settlement_id.key]: '1002',
      [settlement.settlement_time.key]: '2025-01-02 11:00:00',
      [settlement.status.key]: 0,
      [settlement.franchise_name.key]: '加盟店B',
      [settlement.settlement_amount.key]: 10000,
      [settlement.product_name.key]: '商品B',
      [settlement.registration_date.key]: '2025-01-02',
      [settlement.update_date.key]: '2025-01-03',
      [settlement.deletion_date.key]: null,
    },
    {
      [settlement.settlement_id.key]: '1003',
      [settlement.settlement_time.key]: '2025-01-03 12:00:00',
      [settlement.status.key]: 1,
      [settlement.franchise_name.key]: '加盟店C',
      [settlement.settlement_amount.key]: 15000,
      [settlement.product_name.key]: '商品C',
      [settlement.registration_date.key]: '2025-01-03',
      [settlement.update_date.key]: '2025-01-04',
      [settlement.deletion_date.key]: null,
    },
  ];
  return (
    <div className={style.settlementList}>
      {settlementForm.map((item, index) => {
        return (
          <CustomizeForm
            key={index}
            form={form}
            colProps={item.colProps}
            formItems={item.formItems}
          />
        );
      })}
      <div className={style.buttonWarp}>
        <div className={style.left}>
          <Button
            type="primary"
            onClick={() => {
              console.log(form.getFieldsValue());
              form.submit();
            }}
          >
            検索
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
            }}
          >
            条件クリア
          </Button>
        </div>
        <div className={style.right}>
          <Button type="primary" onClick={() => {}}>
            CSV出力
          </Button>
        </div>
      </div>
      <Table
        rowKey={settlement.settlement_id.key}
        columns={columns}
        dataSource={dataSource}
        scroll={{ y: 300 }}
      />
    </div>
  );
};

export default SettlementList;
