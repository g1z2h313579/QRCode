import { Button, Form, FormProps, Input } from 'antd';
import { FunctionComponent } from 'react';
import style from './index.less';
interface LoginProps {
  [props: string]: any;
}
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: FunctionComponent<LoginProps> = () => {
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
        <Form
          name="basic"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          // style={{ maxWidth: 600 }}
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          // autoComplete="off"
        >
          <Form.Item<FieldType>
            // label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="ログインID" />
          </Form.Item>

          <Form.Item<FieldType>
            // label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="パスワード" />
          </Form.Item>
          <div>
            パスワードを忘れた方は
            <a style={{ borderBottom: '1px solid red' }}>こちら</a>
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
      </div>
    </div>
  );
};

export default Login;
