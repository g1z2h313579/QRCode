import { useBaseUrl } from '@/constants';
import CustomizeForm, { CustomizeFormProps } from '@/pages/components/form';
import formStyle from '@/pages/components/form/index.less';
import { product } from '@/pages/entity';
import { history } from '@umijs/max';
import {
  Button,
  Col,
  ConfigProvider,
  Flex,
  Form,
  GetProp,
  Image,
  Input,
  Modal,
  Row,
  Space,
  Table,
  UploadFile,
  UploadProps,
} from 'antd';
import { FunctionComponent, useEffect, useMemo, useState } from 'react';
interface MerchantDetailProps {
  [props: string]: any;
}
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const MerchantDetail: FunctionComponent<MerchantDetailProps> = () => {
  const [form] = Form.useForm();
  const [modalForm] = Form.useForm();
  const baseUrl = useBaseUrl();
  const [options, setOptions] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [edited, setEdited] = useState(true);
  const [fileList, setFileList] = useState<any>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  let optionShow = Form.useWatch(product.product_type.key, form) === '1';

  useEffect(() => {
    // setTimeout(() => {
    //   form.setFieldValue(product.products_id.key, 1);
    //   form.setFieldValue(product.product_name.key, 123);
    //   form.setFieldValue(product.product_type.key, "1");
    // }, 1000);
  }, []);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);
  const [modalDataSource, setModalDataSource] = useState<any>([
    {
      [product.products_id.key]: '1',
      [product.product_name.key]: '商品1',
      [product.price.key]: 1000,
    },
    {
      [product.products_id.key]: '2',
      [product.product_name.key]: '商品2',
      [product.price.key]: 2000,
    },
    {
      [product.products_id.key]: '3',
      [product.product_name.key]: '商品3',
      [product.price.key]: 3000,
    },
    {
      [product.products_id.key]: '4',
      [product.product_name.key]: '商品4',
      [product.price.key]: 4000,
    },
    {
      [product.products_id.key]: '5',
      [product.product_name.key]: '商品5',
      [product.price.key]: 5000,
    },
    {
      [product.products_id.key]: '6',
      [product.product_name.key]: '商品6',
      [product.price.key]: 6000,
    },
    {
      [product.products_id.key]: '7',
      [product.product_name.key]: '商品7',
      [product.price.key]: 7000,
    },
    {
      [product.products_id.key]: '8',
      [product.product_name.key]: '商品8',
      [product.price.key]: 8000,
    },
    {
      [product.products_id.key]: '9',
      [product.product_name.key]: '商品9',
      [product.price.key]: 9000,
    },
    {
      [product.products_id.key]: '10',
      [product.product_name.key]: '商品10',
      [product.price.key]: 10000,
    },
    {
      [product.products_id.key]: '11',
      [product.product_name.key]: '商品11',
      [product.price.key]: 11000,
    },
  ]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const merchantForm: CustomizeFormProps[] = useMemo(() => {
    return [
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
            childrenProps: {
              disabled: true,
            },
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
              name: product.price.key,
              label: '商品価格',
              // rules: [{ required: true, message: '加盟店IDを入力してください' }],
            },
            childrenType: 'number',
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
            },
          },
        ],
      },
    ];
  }, [JSON.stringify(form.getFieldsValue())]);
  const modalTableColumns = [
    {
      title: '商品ID',
      dataIndex: product.products_id.key,
      key: product.products_id.key,
    },
    {
      title: '商品名',
      dataIndex: product.product_name.key,
      key: product.product_name.key,
    },
    {
      title: '商品価格',
      dataIndex: product.price.key,
      key: product.price.key,
    },
  ];
  const optionsRender = () => {
    const modalBtn = (
      <Button
        onClick={async () => {
          setOpen(true);
          setSelectedRowKeys(
            options.map((item: any) => item[product.products_id.key]),
          );
          // const res = await queryProjectList();
          // setModalDataSource(res);
          // 11条测试数据
          // setModalDataSource();
        }}
      >
        + オプション商品選択
      </Button>
    );
    const optionDomItem = (item: any, index: number, dom?: any) => (
      <Flex key={index} gap={'middle'}>
        <Input
          disabled
          value={item[product.product_name.key]}
          style={{ width: '14rem' }}
        />
        <Button
          onClick={() => {
            const newOptions = options.filter(
              (_: any, i: number) => i !== index,
            );
            setOptions(newOptions);
          }}
        >
          削除
        </Button>
        {dom}
      </Flex>
    );
    if (edited) {
      if (options.length === 0) {
        return modalBtn;
      }
      return (
        <Flex vertical={true} gap={'small'} style={{ padding: '10px 0' }}>
          {options.map((item: any, index: number) => {
            if (index === 0) {
              return optionDomItem(item, index, modalBtn);
            }
            return optionDomItem(item, index);
          })}
        </Flex>
      );
    } else {
      //TODO : 待渲染商品的选项
      // const options = form.getFieldValue(product.options.key);
      return (
        <>
          {options.map((item: any, index: number) => {
            if (index === 0) {
              return optionDomItem(item, index, modalBtn);
            }
            return optionDomItem(item, index);
          })}
        </>
      );
    }
  };
  const buttonRender = () => {
    const id = form.getFieldValue(product.products_id.key);
    if (id && !edited) {
      return (
        <Flex gap={'middle'}>
          <Button
            onClick={() => {
              setEdited(true);
            }}
            type="primary"
          >
            編集
          </Button>
          <Button
            onClick={() => {
              // setEdited(true);
            }}
          >
            削除
          </Button>
        </Flex>
      );
    } else {
      return (
        <Flex gap={'middle'}>
          <Button
            onClick={() => {
              setEdited(false);
              console.log(form.getFieldsValue(), '----');
            }}
            type="primary"
          >
            保存
          </Button>
          <Button
            onClick={() => {
              setEdited(false);
              if (id) {
                //TODO: 请求数据再渲染一次
              } else {
                history.push(`${baseUrl}/merchant/product`);
              }
            }}
          >
            キャンセル
          </Button>
        </Flex>
      );
    }
  };

  return (
    <div>
      {merchantForm.map((item, index) => {
        return (
          <CustomizeForm
            key={index}
            form={form}
            colProps={item.colProps}
            formItems={item.formItems}
            disabled={!edited}
          />
        );
      })}
      <Row
        style={{
          display: optionShow ? 'block' : 'none',
        }}
      >
        <Form
          form={form}
          layout="inline"
          className={`${formStyle.formContainer} formContainer`}
          disabled={!edited}
        >
          <Col span={24}>
            <ConfigProvider
              theme={{
                components: {
                  Form: {
                    labelHeight: 50,
                  },
                },
              }}
            >
              <Form.Item label="商品オプション">
                <div className={formStyle.childrenWarp}>{optionsRender()}</div>
              </Form.Item>
            </ConfigProvider>
          </Col>
        </Form>
      </Row>
      <CustomizeForm
        form={form}
        disabled={!edited}
        colProps={{
          sm: 24,
          md: 24,
          xl: 24,
        }}
        formItems={[
          {
            formItemProps: {
              name: product.products_image.key,
              label: '商品画像',
              // rules: [{ required: true, message: '加盟店IDを入力してください' }],
            },
            childrenType: 'image',
            childrenProps: {
              action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
              listType: 'picture-card',
              fileList,
              onPreview: handlePreview,
              onChange: handleChange,
            },
          },
        ]}
      />
      <CustomizeForm
        form={form}
        disabled={!edited}
        colProps={{
          sm: 24,
          md: 24,
          xl: 24,
        }}
        formItems={[
          {
            formItemProps: {
              name: product.description.key,
              label: '商品説明',
              // rules: [{ required: true, message: '加盟店IDを入力してください' }],
            },
            childrenType: 'textarea',
            childrenProps: {
              autoSize: { minRows: 2, maxRows: 6 },
            },
          },
        ]}
      />
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
      <div style={{ marginTop: '20px' }}>{buttonRender()}</div>
      <Modal
        open={open}
        title="オプション商品を選択"
        forceRender={true}
        onCancel={() => {
          setOpen(false);
          setSelectedRowKeys([]);
          modalForm.resetFields();
        }}
        width={800}
        footer={
          <Flex gap={'middle'}>
            <Button
              type={'primary'}
              onClick={() => {
                const m = modalDataSource.filter((item: any) =>
                  selectedRowKeys.includes(item[product.products_id.key]),
                );
                setOptions(m);
                setOpen(false);
                setSelectedRowKeys([]);
                modalForm.resetFields();
              }}
            >
              追加
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
                setSelectedRowKeys([]);
                modalForm.resetFields();
              }}
            >
              閉じる
            </Button>
          </Flex>
        }
      >
        <Row>
          <Form
            form={modalForm}
            layout="inline"
            style={{ width: '100%', marginBottom: '10px' }}
          >
            <Col span={18}>
              <Form.Item name={'search'}>
                <Input placeholder="商品ID、商品名などを入力して検索してください" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Space size={0}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={() => {
                      console.log(modalForm.getFieldsValue(), '----');
                      setModalDataSource(
                        modalDataSource.filter((item: any) => {
                          return (
                            modalForm.getFieldValue('search') &&
                            item.productName.includes(
                              modalForm.getFieldValue('search'),
                            )
                          );
                        }),
                      );
                      // modalForm.submit();
                    }}
                  >
                    検索
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    onClick={() => {
                      modalForm.resetFields();
                    }}
                  >
                    条件クリア
                  </Button>
                </Form.Item>
              </Space>
            </Col>
          </Form>
        </Row>

        <Table
          columns={modalTableColumns}
          rowKey={product.products_id.key}
          scroll={{ y: 300 }}
          dataSource={modalDataSource}
          rowSelection={{
            selectedRowKeys,
            onChange: onSelectChange,
          }}
        />
      </Modal>
    </div>
  );
};

export default MerchantDetail;
