//@ts-nocheck
import { Form } from 'antd';
import { FunctionComponent } from 'react';

import CustomizeForm, { CustomizeFormProps } from '@/pages/components/form';
import style from './index.less';
interface merchantListProps {
  [props: string]: any;
}

const MerchantList: FunctionComponent<merchantListProps> = () => {
  const [form] = Form.useForm();
  console.log(form);
  const merchantForm: CustomizeFormProps[] = [
    {
      colProps: {
        sm: 24,
        md: 12,
        xl: 6,
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
    </div>
  );
};

export default MerchantList;
