import uploadImg from '@/assets/img/uploadImage.png';
import { UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  ColProps,
  ConfigProvider,
  DatePicker,
  Form,
  FormInstance,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Upload,
} from 'antd';
import dayjs from 'dayjs';
import { FunctionComponent } from 'react';
import style from './index.less';
export interface CustomizeFormProps {
  form?: FormInstance<any>;
  colProps: ColProps;
  formItems: formItems[];
  disabled?: boolean;
}
interface formItems {
  formItemProps: {
    name: string | string[];
    label: string;
    rules?: any[];
    disabled?: boolean;
  };
  childrenType:
    | 'input'
    | 'radio'
    | 'select'
    | 'dateRange'
    | 'datePicker'
    | 'attachment'
    | 'numberRange'
    | 'number'
    | 'image'
    | 'textarea'
    | 'text';
  childrenProps?: any;
}
const { RangePicker } = DatePicker;

const CustomizeForm: FunctionComponent<CustomizeFormProps> = (props) => {
  const { form, colProps, formItems, disabled = false } = props;

  const childrenTypeMap = (
    typename:
      | 'input'
      | 'radio'
      | 'select'
      | 'dateRange'
      | 'datePicker'
      | 'attachment'
      | 'numberRange'
      | 'number'
      | 'image'
      | 'textarea'
      | 'text',
    props: any,
    formItemValueProps: any,
  ): JSX.Element => {
    const childrenMap = {
      input: <Input {...formItemValueProps} {...props} />,
      radio: <Radio.Group {...formItemValueProps} {...props} />,
      select: <Select {...formItemValueProps} {...props} />,
      dateRange: (form: any) => {
        return (
          <RangePicker
            {...{
              ...formItemValueProps,
              onChange: (value: dayjs.ConfigType, dateString: string[]) => {
                form.setFieldValue(
                  formItemValueProps.item.formItemProps.name,
                  dateString,
                );
              },
              value: undefined,
            }}
            {...props}
          />
        );
      },
      datePicker: (form: any) => {
        return (
          <DatePicker
            style={{ width: '100%' }}
            {...{
              ...formItemValueProps,
              onChange: (value: dayjs.ConfigType, dateString: string) => {
                form.setFieldValue(
                  formItemValueProps.item.formItemProps.name,
                  dateString,
                );
              },
              value: undefined,
            }}
            {...props}
          />
        );
      },
      attachment: (
        <Upload {...formItemValueProps} {...props}>
          <Button icon={<UploadOutlined />}>アップロード</Button>
        </Upload>
      ),
      image: (
        <Upload {...formItemValueProps} {...props} style={{ height: '300px' }}>
          <div>
            <img src={uploadImg} alt="upload" />
            <div style={{ padding: '0 10px' }}>
              クリックまたはドラッグでJPG、PNGファイルをアップロード
            </div>
          </div>
        </Upload>
      ),
      numberRange: <InputNumber {...formItemValueProps} {...props} />,
      number: (
        <InputNumber
          style={{ width: '100%' }}
          {...formItemValueProps}
          {...props}
        />
      ),
      textarea: <Input.TextArea {...formItemValueProps} {...props} />,
      text: (
        <span {...props}>
          {form?.getFieldValue(formItemValueProps.item.formItemProps.name)}
        </span>
      ),
    };
    return typeof childrenMap[typename] === 'function'
      ? childrenMap[typename](form)
      : childrenMap[typename];
  };
  const FormChildrenWrap = (formItemValueProps: any) => {
    return (
      <div className={style.childrenWarp}>
        {childrenTypeMap(
          formItemValueProps.item.childrenType,
          formItemValueProps.item.childrenProps,
          formItemValueProps,
        )}
      </div>
    );
  };
  const formItemRender = (item: formItems) => {
    if (item.childrenType === 'numberRange') {
      return (
        <Form.List name={item.formItemProps.name[0]}>
          {() => {
            return (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Item
                  name={item.formItemProps.name[1]}
                  label={item.formItemProps.label}
                >
                  <FormChildrenWrap item={item} />
                </Form.Item>
                <span style={{ marginRight: '12px' }}>~</span>
                <Form.Item name={item.formItemProps.name[2]}>
                  <FormChildrenWrap item={item} />
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
      );
    }
    return (
      <Form.Item {...item.formItemProps}>
        <FormChildrenWrap item={item} />
      </Form.Item>
    );
  };

  return (
    <Row>
      <Form
        form={form}
        layout="inline"
        className={`${style.formContainer} formContainer`}
        disabled={disabled}
      >
        {formItems.map((item, index) => {
          return (
            <Col {...colProps} key={index}>
              <ConfigProvider
                theme={{
                  components: {
                    Form: {
                      labelHeight: 50,
                    },
                  },
                }}
              >
                {formItemRender(item)}
              </ConfigProvider>
            </Col>
          );
        })}
      </Form>
    </Row>
  );
};

export default CustomizeForm;
