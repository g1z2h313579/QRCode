import { FunctionComponent } from 'react';
import './index.less';
interface LOGOProps {
  [props: string]: any;
}

const LOGO: FunctionComponent<LOGOProps> = () => {
  return <span className="logo">LOGO</span>;
};

export default LOGO;
