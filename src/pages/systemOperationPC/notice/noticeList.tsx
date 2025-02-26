import { FunctionComponent } from 'react';
interface NoticeListProps {
  [props: string]: any;
}

const NoticeList: FunctionComponent<NoticeListProps> = () => {
  return (
    <div>
      <h1>NoticeList</h1>
    </div>
  );
};

export default NoticeList;
