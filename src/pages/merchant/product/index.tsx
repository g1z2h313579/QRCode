import { useBaseUrl } from '@/constants';
import CustomizeForm, { CustomizeFormProps } from '@/pages/components/form';
import { product } from '@/pages/entity';
import { history } from '@umijs/max';
import { Button, Form, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import { FunctionComponent } from 'react';
import style from './index.less';
interface ProductListProps {
  [props: string]: any;
}

const ProductList: FunctionComponent<ProductListProps> = () => {
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
            name: product.products_id.key,
            label: '商品ID',
            // rules: [{ required: true, message: '加盟店IDを入力してください' }],
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: product.product_name.key,
            label: '商品名',
            // rules: [{ required: true, message: '加盟店名を入力してください' }],
          },
          childrenType: 'input',
        },
        {
          formItemProps: {
            name: product.status.key,
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
            name: [
              product.price.key,
              product.price_from.key,
              product.price_to.key,
            ],
            label: '商品価格',
            // rules: [{ required: true, message: '加盟店IDを入力してください' }],
          },
          childrenType: 'numberRange',
          childrenProps: {
            from: {
              // onChange: (value: any) => {
              //   form.setFieldValue(form.getFieldValue(product.price.key)[0], value);
              // }
            },
            to: {
              // onChange: (value: any) => {
              //   form.setFieldValue(form.getFieldValue(product.price.key)[1], value);
              // }
            },
          },
        },
        {
          formItemProps: {
            name: product.product_type.key,
            label: '商品区分',
            // rules: [{ required: true, message: '加盟店名を入力してください' }],
          },
          childrenType: 'select',
          childrenProps: {
            options: [
              { value: '1', label: '商品' },
              { value: '2', label: 'オプション商品' },
            ],
            value: form.getFieldValue(product.product_type.key),
            onChange: (value: any) => {
              form.setFieldValue(product.product_type.key, value);
            },
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
            name: product.registration_date.key,
            label: '登録日',
          },
          childrenType: 'dateRange',
          childrenProps: {
            onChange: (value: dayjs.ConfigType, dateString: string[]) => {
              form.setFieldValue(product.registration_date.key, dateString);
            },
          },
        },
        {
          formItemProps: {
            name: product.update_date.key,
            label: '更新日',
          },
          childrenType: 'dateRange',
          childrenProps: {
            onChange: (value: dayjs.ConfigType, dateString: string[]) => {
              form.setFieldValue(product.update_date.key, dateString);
            },
          },
        },
        {
          formItemProps: {
            name: product.deletion_date.key,
            label: '削除日',
          },
          childrenType: 'dateRange',
          childrenProps: {
            onChange: (value: dayjs.ConfigType, dateString: string[]) => {
              form.setFieldValue(product.deletion_date.key, dateString);
            },
          },
        },
      ],
    },
  ];
  const columns: ColumnsType<any> = [
    {
      dataIndex: product.products_id.key,
      title: '商品ID',
    },
    {
      dataIndex: product.product_name.key,
      title: '商品名',
    },
    {
      dataIndex: product.status.key,
      title: 'ステータス',
    },
    {
      dataIndex: product.price.key,
      title: '商品価格',
    },
    {
      dataIndex: product.product_type.key,
      title: '商品区分',
    },
    {
      dataIndex: product.registration_date.key,
      title: '登録日',
    },
    {
      dataIndex: product.update_date.key,
      title: '更新日',
    },
    {
      dataIndex: product.deletion_date.key,
      title: '削除日',
    },
  ];
  return (
    <div className={style.productContainer}>
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
              history.push(`${baseUrl}/product/productRegister`);
            }}
          >
            新規作成
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={[]} />
    </div>
  );
};

export default ProductList;
