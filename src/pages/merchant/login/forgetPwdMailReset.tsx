import { useBaseUrl } from '@/constants';
import { Button, ConfigProvider, Form, FormProps, Input } from 'antd';
import { FunctionComponent } from 'react';
import { history } from 'umi';
import style from './index.less';
interface ForgetPwdMailResetProps {
  [props: string]: any;
}
type FieldType = {
  password: string;
  confirmPassword: string;
};

const ForgetPwdMailReset: FunctionComponent<ForgetPwdMailResetProps> = () => {
  const baseUrl = useBaseUrl();
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    history.push(`${baseUrl}/dashboard`);
    location.reload();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={style.login}>
      <div className={style.loginBox}>
        <div className={style.logo}>LOGO</div>
        <ConfigProvider
          theme={{
            components: {
              Form: {
                itemMarginBottom: 20,
              },
            },
          }}
        >
          <Form
            name="forgetPwdMail"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input placeholder="新しいパスワード" />
            </Form.Item>
            <Form.Item<FieldType>
              name="confirmPassword"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input placeholder="新しいパスワード再確認" />
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
              <Button className="cuzPrimary" htmlType="submit">
                送信
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default ForgetPwdMailReset;
