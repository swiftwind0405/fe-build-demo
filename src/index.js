import {Hello} from './components/Hello';
import {add} from './utils/common';

const render = () => {
  return (
    <Hello name={add(1, 3)}/>
  );
}

export { render };
