//@ts-nocheck
import { Col, ColProps, Form, FormInstance, Input, Radio, Row } from 'antd';
import { FunctionComponent } from 'react';
export interface CustomizeFormProps {
  form?: FormInstance<any>;
  colProps: ColProps;
  formItems: formItems[];
}
interface formItems {
  formItemProps: typeof Form.Item & {
    name: string;
    label: string;
    rules: any[];
  };
  childrenType: 'input' | 'radio';
  childrenProps: any;
}

const CustomizeForm: FunctionComponent<CustomizeFormProps> = (props) => {
  const { form, colProps, formItems } = props;
  const childrenTypeMap = (
    tyepname: string,
    // props: any,
  ): Record<'input' | 'radio', JSX.Element> => {
    const childrenMap = {
      input: <Input />,
      radio: <Radio.Group />,
    };
    // childrenMap[tyepname].props = props;
    return childrenMap[tyepname];
  };
  return (
    <Row>
      <Form form={form} layout="inline">
        {formItems.map((item, index) => {
          return (
            <Col {...colProps} key={index}>
              <Form.Item {...item.formItemProps}>
                {childrenTypeMap(item.childrenType, item.childrenProps)}
              </Form.Item>
            </Col>
          );
        })}
      </Form>
    </Row>
  );
};

export default CustomizeForm;
