import { useBaseUrl } from '@/constants';
import CustomizeForm, { CustomizeFormProps } from '@/pages/components/form';
import { user } from '@/pages/entity';
import { history } from '@umijs/max';
import { Button, Form, Table } from 'antd';
import { ColumnsType } from 'antd/es/table/InternalTable';
import { FunctionComponent } from 'react';
import style from './index.less';
interface AdminListProps {
  [props: string]: any;
}

const AdminList: FunctionComponent<AdminListProps> = () => {
  const [form] = Form.useForm();
  const baseUrl = useBaseUrl();
  const adminForm: CustomizeFormProps[] = [
    {
      colProps: {
        sm: 24,
        md: 12,
        xl: 6,
      },
      formItems: [
        {
          formItemProps: {
            name: user.user_id.key,
            label: '管理者ID',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: user.user_name.key,
            label: '管理者名',
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: user.status.key,
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
        {
          formItemProps: {
            name: user.email.key,
            label: 'メールアドレス',
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
            name: user.registration_date.key,
            label: '登録日',
          },
          childrenType: 'dateRange',
        },
        {
          formItemProps: {
            name: user.update_date.key,
            label: '更新日',
          },
          childrenType: 'dateRange',
        },
        {
          formItemProps: {
            name: user.deletion_date.key,
            label: '削除日',
          },
          childrenType: 'dateRange',
        },
      ],
    },
  ];

  const columns: ColumnsType<any> = [
    {
      title: '管理者ID',
      dataIndex: user.user_id.key,
      key: user.user_id.key,
    },
    {
      title: '管理者名',
      dataIndex: user.user_name.key,
      key: user.user_name.key,
    },
    {
      title: 'ステータス',
      dataIndex: user.status.key,
      key: user.status.key,
    },
    {
      title: 'メールアドレス',
      dataIndex: user.email.key,
      key: user.email.key,
    },
    {
      title: '登録日',
      dataIndex: user.registration_date.key,
      key: user.registration_date.key,
    },
    {
      title: '更新日',
      dataIndex: user.update_date.key,
      key: user.update_date.key,
    },
    {
      title: '削除日',
      dataIndex: user.deletion_date.key,
      key: user.deletion_date.key,
    },
  ];
  const dataSource: any[] = [];
  return (
    <div className={style.userList}>
      {adminForm.map((item, index) => {
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
              history.push(`${baseUrl}/setting/adminRegister`);
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

export default AdminList;
