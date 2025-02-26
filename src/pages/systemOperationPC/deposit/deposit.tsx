import { FunctionComponent } from 'react';
interface DepositProps {
  [props: string]: any;
}

const Deposit: FunctionComponent<DepositProps> = () => {
  return (
    <div>
      <h1>Deposit</h1>
    </div>
  );
};

export default Deposit;
