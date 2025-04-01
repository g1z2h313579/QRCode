import { useBaseUrl } from '@/constants';
import { Button, ConfigProvider } from 'antd';
import { FunctionComponent } from 'react';
import { history } from 'umi';
import style from './index.less';
interface ForgetPwdMailAccessProps {
  [props: string]: any;
}

const ForgetPwdMailAccess: FunctionComponent<ForgetPwdMailAccessProps> = () => {
  const baseUrl = useBaseUrl();
  return (
    <div className={style.login}>
      <div className={style.loginBox} style={{ textAlign: 'center' }}>
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
          <h3>パスワードリセットの通知が送信されました</h3>
          <p>メールアドレスサインインして情報をご確認ください</p>
          <Button
            className="cuzPrimary"
            onClick={() => {
              history.push(`${baseUrl}/forgetPwdMailReset`);
            }}
          >
            ログインへ
          </Button>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default ForgetPwdMailAccess;
