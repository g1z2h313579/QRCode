import { useBaseUrl } from '@/constants';
import { Link } from '@umijs/max';
import { Button, ConfigProvider, Form, FormProps, Input } from 'antd';
import { FunctionComponent } from 'react';
import style from './index.less';
interface LoginProps {
  [props: string]: any;
}
type FieldType = {
  username?: string;
  password?: string;
};

const Login: FunctionComponent<LoginProps> = () => {
  const baseUrl = useBaseUrl();
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
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
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item<FieldType>
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input placeholder="ログインID" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password placeholder="パスワード" />
              <div className={`cuzPrimaryColor ${style.forgetPwd}`}>
                パスワードを忘れた方は
                <Link
                  to={`${baseUrl}/forgetPwdMail`}
                  className={style.changePwd}
                >
                  こちら
                </Link>
              </div>
            </Form.Item>

            {/* <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

            <Form.Item style={{ textAlign: 'center' }}>
              <Button className="cuzPrimary" htmlType="submit">
                ログイン
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Login;
