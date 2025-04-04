import { useBaseUrl } from '@/constants';
import CustomizeForm, { CustomizeFormProps } from '@/pages/components/form';
import { history } from '@umijs/max';
import { Button, Form, Table } from 'antd';
import { ColumnsType } from 'antd/es/table/InternalTable';
import dayjs from 'dayjs';
import { FunctionComponent } from 'react';
import style from './index.less';

interface merchantListProps {
  [props: string]: any;
}

const MerchantList: FunctionComponent<merchantListProps> = () => {
  const [form] = Form.useForm();
  const baseUrl = useBaseUrl();
  const merchantForm: CustomizeFormProps[] = [
    {
      colProps: {
        sm: 24,
        md: 12,
        xl: 8,
      },
      formItems: [
        {
          formItemProps: {
            name: 'merchantId',
            label: '加盟店ID',
            rules: [{ required: true, message: '加盟店IDを入力してください' }],
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: 'merchantName',
            label: '加盟店名',
            rules: [{ required: true, message: '加盟店名を入力してください' }],
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: 'status',
            label: 'ステータス',
            rules: [
              { required: true, message: 'ステータスを選択してください' },
            ],
          },
          childrenType: 'radio',
          childrenProps: {
            options: [
              { value: 1, label: '有効' },
              { value: 2, label: '無効' },
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
            name: 'industry',
            label: '業種',
          },
          childrenType: 'select',
          childrenProps: {
            options: [
              { value: '1', label: '業種1' },
              { value: '2', label: '業種2' },
              { value: '3', label: '業種3' },
            ],
            value: form.getFieldValue('industry'),
            onChange: (value: any) => {
              form.setFieldValue('industry', value);
            },
          },
        },
        {
          formItemProps: {
            name: 'notificationNum',
            label: '届出番号',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: 'angecyName',
            label: '代理店名',
            // rules: [{ required: true, message: 'ステータスを選択してください' }],
          },
          childrenType: 'input',
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
            name: 'chargeName',
            label: '担当者名',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: 'chargeTel',
            label: '担当者電話番号',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: 'chargeEmail',
            label: '担当者メール',
          },
          childrenType: 'input',
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
            name: 'postalCode',
            label: '郵便番号',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: 'address',
            label: '都道府県',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: 'address2',
            label: '市区町村',
          },
          childrenType: 'input',
        },
      ],
    },
    {
      colProps: {
        sm: 24,
        md: 12,
        xl: 12,
      },
      formItems: [
        {
          formItemProps: {
            name: 'address3',
            label: '町域·番地',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: 'address4',
            label: '建物名·部屋番号',
          },
          childrenType: 'input',
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
            name: 'bankID',
            label: '銀行ID',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: 'branchID',
            label: '支店ID',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: 'bankAccountType',
            label: '口座種類',
          },
          childrenType: 'radio',
          childrenProps: {
            options: [
              { value: 1, label: '普通' },
              { value: 2, label: '当座' },
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
            name: 'bankAccount',
            label: '口座番号',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: 'bankAccountName',
            label: '口座名義人',
          },
          childrenType: 'input',
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
            name: 'registerDate',
            label: '登録日',
          },
          childrenType: 'dateRange',
          childrenProps: {
            onChange: (value: dayjs.ConfigType, dateString: string[]) => {
              form.setFieldValue('registerDate', dateString);
            },
          },
        },
        {
          formItemProps: {
            name: 'updateDate',
            label: '更新日',
          },
          childrenType: 'dateRange',
          childrenProps: {
            onChange: (value: dayjs.ConfigType, dateString: string[]) => {
              form.setFieldValue('updateDate', dateString);
            },
          },
        },
        {
          formItemProps: {
            name: 'deleteDate',
            label: '削除日',
          },
          childrenType: 'dateRange',
          childrenProps: {
            onChange: (value: dayjs.ConfigType, dateString: string[]) => {
              form.setFieldValue('deleteDate', dateString);
            },
          },
        },
      ],
    },
  ];

  const columns: ColumnsType<any> = [
    {
      dataIndex: 'merchantId',
      title: '加盟店ID',
    },
    {
      dataIndex: 'merchantName',
      title: '加盟店名',
    },
    {
      dataIndex: 'status',
      title: 'ステータス',
    },
    {
      dataIndex: 'angecyName',
      title: '代理店名',
    },
    {
      dataIndex: 'industry',
      title: '業種',
    },
    {
      dataIndex: 'notificationNum',
      title: '届出番号',
    },

    {
      dataIndex: 'chargeName',
      title: '担当者名',
    },
    {
      dataIndex: 'chargeTel',
      title: '担当者電話番号',
    },
    {
      dataIndex: 'chargeEmail',
      title: '担当者メールアドレス',
    },
  ];
  const dataSource = [
    {
      key: '1',
      merchantId: '1234567890',
      merchantName: '加盟店名1',
      status: '有効',
      angecyName: '代理店名1',
      industry: '業種1',
      notificationNum: '届出番号1',
      chargeName: '担当者名1',
      chargeTel: '担当者電話番号1',
      chargeEmail: '担当者メールアドレス1',
    },
    {
      key: '2',
      merchantId: '0987654321',
      merchantName: '加盟店名2',
      status: '無効',
      angecyName: '代理店名2',
      industry: '業種2',
      notificationNum: '届出番号2',
      chargeName: '担当者名2',
      chargeTel: '担当者電話番号2',
      chargeEmail: '担当者メールアドレス2',
    },
    {
      key: '3',
      merchantId: '1122334455',
      merchantName: '加盟店名3',
      status: '有効',
      angecyName: '代理店名3',
      industry: '業種3',
      notificationNum: '届出番号3',
      chargeName: '担当者名3',
      chargeTel: '担当者電話番号3',
      chargeEmail: '担当者メールアドレス3',
    },
    {
      key: '4',
      merchantId: '5566778899',
      merchantName: '加盟店名4',
      status: '無効',
      angecyName: '代理店名4',
      industry: '業種4',
      notificationNum: '届出番号4',
      chargeName: '担当者名4',
      chargeTel: '担当者電話番号4',
      chargeEmail: '担当者メールアドレス4',
    },
    {
      key: '5',
      merchantId: '9988776655',
      merchantName: '加盟店名5',
      status: '有効',
      angecyName: '代理店名5',
      industry: '業種5',
      notificationNum: '届出番号5',
      chargeName: '担当者名5',
      chargeTel: '担当者電話番号5',
      chargeEmail: '担当者メールアドレス5',
    },
  ];
  return (
    <div className={style.merchantList}>
      {merchantForm.map((item, index) => {
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
          <Button
            type="primary"
            onClick={() => {
              history.push(`${baseUrl}/merchant/merchantRegister`);
            }}
          >
            新規作成
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={dataSource} scroll={{ y: 300 }} />
    </div>
  );
};

export default MerchantList;
