import { FunctionComponent } from 'react';
interface ListProps {
  [props: string]: any;
}

const List: FunctionComponent<ListProps> = () => {
  return <div>List</div>;
};

export default List;
