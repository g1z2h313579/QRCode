import { dayjs, useBaseUrl } from '@/constants';
import CustomizeForm, { CustomizeFormProps } from '@/pages/components/form';
import { settlement } from '@/pages/entity';
import { history, useParams } from '@umijs/max';
import { Button, Form } from 'antd';
import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import style from './settlement.less';
interface SettlementDetailProps {
  [key: string]: any;
}
type productFormList = {
  productName: string;
  price: number;
};

const SettlementDetail: FunctionComponent<SettlementDetailProps> = () => {
  const [form] = Form.useForm();
  const [productDataList, setProductDataList] = useState<productFormList[]>([]);
  const params = useParams();
  const baseUrl = useBaseUrl();
  const settlementId = params.settlementId;
  const productList = (
    productFormList: productFormList[],
  ): CustomizeFormProps[] => {
    return productFormList
      .map<CustomizeFormProps[]>((item, index) => {
        return [
          {
            colProps: {
              sm: 24,
              md: 24,
              xl: 24,
            },
            formItems: [
              {
                formItemProps: {
                  name: settlement.product_name.key + '-' + index,
                  label: '商品名',
                },
                childrenType: 'text',
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
                  name: settlement.product_name.key + '-' + index,
                  label: '商品金額',
                },
                childrenType: 'text',
              },
            ],
          },
        ];
      })
      .flat();
  };
  const errorList: CustomizeFormProps[] = [
    {
      colProps: {
        sm: 24,
        md: 24,
        xl: 24,
      },
      formItems: [
        {
          formItemProps: {
            name: settlement.error_code.key,
            label: 'エラーコード',
          },
          childrenType: 'text',
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
            name: settlement.error_message.key,
            label: 'エラー内容',
          },
          childrenType: 'text',
        },
      ],
    },
  ];

  const settlementForm: CustomizeFormProps[] = useMemo(() => {
    const p: CustomizeFormProps[] = [
      {
        colProps: {
          sm: 24,
          md: 24,
          xl: 24,
        },
        formItems: [
          {
            formItemProps: {
              name: settlement.settlement_id.key,
              label: '決済ID',
            },
            childrenType: 'text',
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
              name: settlement.settlement_time.key,
              label: '決済日時',
            },
            childrenType: 'text',
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
              name: settlement.settlement_amount.key,
              label: '合計金額',
            },
            childrenType: 'text',
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
              name: settlement.status.key,
              label: 'ステータス',
            },
            childrenType: 'text',
          },
        ],
      },
      ...errorList,
    ];
    const productFormList = productList(productDataList);
    p.splice(2, 0, ...productFormList);
    return p;
  }, [productDataList]);
  useEffect(() => {
    setProductDataList([
      {
        productName: '商品1',
        price: 1000,
      },
      {
        productName: '商品2',
        price: 2000,
      },
    ]);
    const commonData = {
      [settlement.settlement_id.key]: settlementId,
      [settlement.settlement_time.key]: `${dayjs().format(
        'YYYY年M月D日',
      )}(${dayjs().format('dd')})`,
      [settlement.settlement_amount.key]: 3000,
      [settlement.status.key]: 0,
      [settlement.registration_date.key]: `${dayjs().format(
        'YYYY年M月D日',
      )}(${dayjs().format('dd')})`,
      [settlement.update_date.key]: `${dayjs().format(
        'YYYY年M月D日',
      )}(${dayjs().format('dd')})`,
      [settlement.deletion_date.key]: `${dayjs().format(
        'YYYY年M月D日',
      )}(${dayjs().format('dd')})`,
      [settlement.error_code.key]: '0000',
      [settlement.error_message.key]: 'エラー内容',
    };
    const pdata = [
      {
        productName: '商品1',
        price: 1000,
      },
      {
        productName: '商品2',
        price: 2000,
      },
    ].reduce<any>((pre, cur, index) => {
      pre[settlement.product_name.key + '-' + index] = cur.productName;
      pre[settlement.product_price.key + '-' + index] = cur.price;
      return pre;
    }, {});
    const data = {
      ...commonData,
      ...pdata,
    };
    console.log(data);
    form.setFieldsValue(data);
  }, [settlementId]);
  const btn = useMemo(() => {
    const date = (
      <div>
        <span className={style.dateName}>登録日</span>
        <span className={style.date}>{`${dayjs(
          form.getFieldValue(settlement.registration_date.key),
        ).format('YYYY年M月D日')}(${dayjs(
          form.getFieldValue(settlement.registration_date.key),
        ).format('dd')})`}</span>
        <span className={style.dateName}>更新日</span>
        <span className={style.date}>{`${dayjs(
          form.getFieldValue(settlement.update_date.key),
        ).format('YYYY年M月D日')}(${dayjs(
          form.getFieldValue(settlement.update_date.key),
        ).format('dd')})`}</span>
        <span className={style.dateName}>削除日</span>
        <span className={style.date}>{`${dayjs(
          form.getFieldValue(settlement.deletion_date.key),
        ).format('YYYY年M月D日')}(${dayjs(
          form.getFieldValue(settlement.deletion_date.key),
        ).format('dd')})`}</span>
      </div>
    );
    return (
      <div className={style.detailBtn}>
        <div>
          <Button type={'primary'} onClick={() => {}}>
            CSV出力
          </Button>
          <Button
            onClick={() => {
              history.push(`${baseUrl}/settlement/settlementList`);
            }}
          >
            戻る
          </Button>
        </div>
        {date}
      </div>
    );
  }, [settlementId]);
  return (
    <div>
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
      <div>{btn}</div>
    </div>
  );
};

export default SettlementDetail;
