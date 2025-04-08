import CustomizeForm, { CustomizeFormProps } from '@/pages/components/form';
import { user } from '@/pages/entity';
import { useParams } from '@umijs/max';
import { Button, Form } from 'antd';
import dayjs from 'dayjs';
import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import style from './index.less';
interface AdminDetailProps {
  [props: string]: any;
}

const AdminDetail: FunctionComponent<AdminDetailProps> = () => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);
  const params = useParams();
  const adminId = params.adminId;
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
  ];
  useEffect(() => {
    form.setFieldsValue({
      [user.registration_date.key]: dayjs().add(11, 'day').format('YYYY-MM-DD'),
      [user.update_date.key]: dayjs().add(11, 'day').format('YYYY-MM-DD'),
      [user.deletion_date.key]: dayjs().add(11, 'day').format('YYYY-MM-DD'),
      [user.user_id.key]: adminId,
      [user.user_name.key]: '管理者名',
      [user.status.key]: 1,
      [user.email.key]: 'メールアドレス',
    });
  }, [adminId]);
  const btn = useMemo(() => {
    const date = (
      <div>
        <span className={style.dateName}>登録日</span>
        <span className={style.date}>{`${dayjs(
          form.getFieldValue('registerDate'),
        ).format('YYYY年M月D日')}(${dayjs(
          form.getFieldValue('registerDate'),
        ).format('dd')})`}</span>
        <span className={style.dateName}>更新日</span>
        <span className={style.date}>{`${dayjs(
          form.getFieldValue('updateDate'),
        ).format('YYYY年M月D日')}(${dayjs(
          form.getFieldValue('updateDate'),
        ).format('dd')})`}</span>
        <span className={style.dateName}>削除日</span>
        <span className={style.date}>{`${dayjs(
          form.getFieldValue('deleteDate'),
        ).format('YYYY年M月D日')}(${dayjs(
          form.getFieldValue('deleteDate'),
        ).format('dd')})`}</span>
      </div>
    );
    if (adminId && disabled) {
      return (
        <div className={style.detailBtn}>
          <div>
            <Button
              type={'primary'}
              onClick={() => {
                setDisabled(false);
              }}
            >
              編集
            </Button>
            <Button>キャンセル</Button>
            <Button>削除</Button>
          </div>
          {date}
        </div>
      );
    } else if (!adminId) {
      return (
        <div className={style.detailBtn}>
          <div>
            <Button
              type={'primary'}
              onClick={() => {
                // setDisabled(false);
              }}
            >
              保存
            </Button>
            <Button>キャンセル</Button>
          </div>
        </div>
      );
    } else {
      return (
        <div className={style.detailBtn}>
          <div>
            <Button
              type={'primary'}
              onClick={() => {
                // setDisabled(false);
              }}
            >
              更新
            </Button>
            <Button>キャンセル</Button>
          </div>
          {date}
        </div>
      );
    }
  }, [adminId, disabled]);
  return (
    <div>
      {adminForm.map((item, index) => {
        return (
          <CustomizeForm
            key={index}
            form={form}
            colProps={item.colProps}
            formItems={item.formItems}
            disabled={adminId ? disabled : false}
          />
        );
      })}
      <div>{btn}</div>
    </div>
  );
};

export default AdminDetail;
