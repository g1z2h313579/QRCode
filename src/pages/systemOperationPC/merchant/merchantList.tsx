import { useBaseUrl } from '@/constants';
import CustomizeForm, { CustomizeFormProps } from '@/pages/components/form';
import { merchant } from '@/pages/entity';
import { history } from '@umijs/max';
import { Button, Form, Table } from 'antd';
import { ColumnsType } from 'antd/es/table/InternalTable';
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
            name: merchant.franchise_id.key,
            label: '加盟店ID',
            rules: [{ required: true, message: '加盟店IDを入力してください' }],
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: merchant.franchise_name.key,
            label: '加盟店名',
            rules: [{ required: true, message: '加盟店名を入力してください' }],
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: merchant.status.key,
            label: 'ステータス',
            rules: [
              { required: true, message: 'ステータスを選択してください' },
            ],
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
            name: merchant.business_type.key,
            label: '業種',
          },
          childrenType: 'select',
          childrenProps: {
            options: [
              { value: '1', label: '業種1' },
              { value: '2', label: '業種2' },
              { value: '3', label: '業種3' },
            ],
            value: form.getFieldValue(merchant.business_type.key),
            onChange: (value: any) => {
              form.setFieldValue(merchant.business_type.key, value);
            },
          },
        },
        {
          formItemProps: {
            name: merchant.store_number.key,
            label: '届出番号',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: merchant.agent_name.key,
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
            name: merchant.manager_name.key,
            label: '担当者名',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: merchant.manager_phone.key,
            label: '担当者電話番号',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: merchant.manager_email.key,
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
            name: merchant.postal_code.key,
            label: '郵便番号',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: merchant.prefecture.key,
            label: '都道府県',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: merchant.city.key,
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
            name: merchant.street_address.key,
            label: '町域·番地',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: merchant.building_name.key,
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
            name: merchant.bank_id.key,
            label: '銀行ID',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: merchant.branch_id.key,
            label: '支店ID',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: merchant.account_type.key,
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
            name: merchant.account_number.key,
            label: '口座番号',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: merchant.account_holder.key,
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
            name: merchant.registration_date.key,
            label: '登録日',
          },
          childrenType: 'dateRange',
        },
        {
          formItemProps: {
            name: merchant.update_date.key,
            label: '更新日',
          },
          childrenType: 'dateRange',
        },
        {
          formItemProps: {
            name: merchant.deletion_date.key,
            label: '削除日',
          },
          childrenType: 'dateRange',
        },
      ],
    },
  ];

  const columns: ColumnsType<any> = [
    {
      dataIndex: merchant.franchise_id.key,
      title: '加盟店ID',
      render: (value: any) => {
        return (
          <a
            onClick={() => {
              history.push(`${baseUrl}/merchant/${value}`);
            }}
          >
            {value}
          </a>
        );
      },
    },
    {
      dataIndex: merchant.franchise_name.key,
      title: '加盟店名',
    },
    {
      dataIndex: merchant.status.key,
      title: 'ステータス',
    },
    {
      dataIndex: merchant.agent_name.key,
      title: '代理店名',
    },
    {
      dataIndex: merchant.business_type.key,
      title: '業種',
    },
    {
      dataIndex: merchant.store_number.key,
      title: '届出番号',
    },

    {
      dataIndex: merchant.manager_name.key,
      title: '担当者名',
    },
    {
      dataIndex: merchant.manager_phone.key,
      title: '担当者電話番号',
    },
    {
      dataIndex: merchant.manager_email.key,
      title: '担当者メールアドレス',
    },
  ];
  const dataSource: any[] = [
    // 测试数据
    {
      key: '1',
      [merchant.franchise_id.key]: '12345',
      [merchant.franchise_name.key]: 'テスト加盟店',
      [merchant.status.key]: 1,
      [merchant.agent_name.key]: 'テスト代理店',
      [merchant.business_type.key]: '1',
      [merchant.store_number.key]: '67890',
      [merchant.manager_name.key]: '山田太郎',
      [merchant.manager_phone.key]: '090-1234-5678',
      [merchant.manager_email.key]: 'test@example.com',
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
