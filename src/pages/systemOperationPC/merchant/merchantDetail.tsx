import CustomizeForm, { CustomizeFormProps } from '@/pages/components/form';
import { useParams } from '@umijs/max';
import { Button, Form } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import weekday from 'dayjs/plugin/weekday';
import { FunctionComponent, useMemo, useState } from 'react';
import style from './index.less';
interface MerchantDetailProps {
  [props: string]: any;
}
dayjs.extend(weekday);
dayjs.extend(localizedFormat);
dayjs.locale('ja'); // 设置为日语
const MerchantDetail: FunctionComponent<MerchantDetailProps> = () => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);
  const params = useParams();
  const merchantId = params.merchantId;
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
          childrenProps: {
            disabled: merchantId ? true : false,
          },
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
        md: 24,
        xl: 24,
      },
      formItems: [
        {
          formItemProps: {
            name: 'attachment',
            label: '添付ファイル',
          },
          childrenType: 'attachment',
          childrenProps: {
            action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
            onChange({ file, fileList }: { file: any; fileList: any[] }) {
              if (file.status !== 'uploading') {
                console.log(file, fileList);
              }
              if (file.status === 'done') {
                form.setFieldValue('attachment', fileList);
              }
            },
            multiple: true,
          },
        },
      ],
    },
  ];
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
    if (merchantId && disabled) {
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
    } else if (!merchantId) {
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
  }, [merchantId, disabled]);
  return (
    <div>
      {merchantForm.map((item, index) => {
        return (
          <CustomizeForm
            key={index}
            form={form}
            colProps={item.colProps}
            formItems={item.formItems}
            disabled={merchantId ? disabled : false}
          />
        );
      })}
      <div>{btn}</div>
    </div>
  );
};

export default MerchantDetail;
