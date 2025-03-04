import { useBaseUrl } from '@/constants';
import { useLocation } from '@umijs/max';
import { FunctionComponent } from 'react';
import Collection from '../collection';
import ListLayout from '../component/ListLayout';
import Home from '../home';
interface ListIndexProps {
  [props: string]: any;
}

const ListIndex: FunctionComponent<ListIndexProps> = () => {
  const location = useLocation();
  const baseUrl = useBaseUrl();
  const { pathname } = location;
  const pathMap: { [key: string]: JSX.Element } = {
    [`${baseUrl}/home`]: <Home />,
    [`${baseUrl}/collection`]: <Collection />,
  };
  return (
    <ListLayout initKey={pathname.replace(`${baseUrl}/`, '')}>
      {pathMap[pathname]}
    </ListLayout>
  );
};

export default ListIndex;
