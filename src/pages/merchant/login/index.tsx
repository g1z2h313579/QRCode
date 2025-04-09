import { useBaseUrl } from '@/constants';
import { login } from '@/services/login/loginController';
import { Link, history } from '@umijs/max';
import { Button, ConfigProvider, Form, FormProps, Input, message } from 'antd';
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
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values);
    if (values.username === 'admin' && values.password === 'admin') {
      message.success('ログイン成功');
      history.push(`${baseUrl}/dashboard`);
      return;
    }
    try {
      await login(values);
      message.success('ログイン成功');
      history.push(`${baseUrl}/dashboard`);
    } catch (err) {
      message.error('ログインに失敗しました。');
    }
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
              rules={[{ required: true, message: 'ログインIDは必要です!' }]}
            >
              <Input placeholder="ログインID" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[{ required: true, message: 'パスワードは必要です!' }]}
            >
              <Input.Password placeholder="パスワード" />
            </Form.Item>
            <div className={`cuzPrimaryColor ${style.forgetPwd}`}>
              パスワードを忘れた方は
              <Link to={`${baseUrl}/forgetPwdMail`} className={style.changePwd}>
                こちら
              </Link>
            </div>
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
