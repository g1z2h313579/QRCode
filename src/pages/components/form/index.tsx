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
  Radio,
  Row,
  Select,
  Upload,
} from 'antd';
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
    name: string;
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
    | 'attachment';
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
      | 'attachment',
    props: any = {},
  ): JSX.Element => {
    const childrenMap = {
      input: <Input {...props} />,
      radio: <Radio.Group {...props} />,
      select: <Select {...props} />,
      dateRange: <RangePicker {...props} />,
      datePicker: <DatePicker {...props} />,
      attachment: (
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      ),
    };
    return childrenMap[typename];
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
                <Form.Item {...item.formItemProps}>
                  <div className={style.childrenWarp}>
                    {childrenTypeMap(item.childrenType, item.childrenProps)}
                  </div>
                </Form.Item>
              </ConfigProvider>
            </Col>
          );
        })}
      </Form>
    </Row>
  );
};

export default CustomizeForm;
