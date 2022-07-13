import React from 'react';

type IProps = {
  name: number;
};

export function Hello(props: IProps) {
  return (
    <div>
      hello, {props.name}
    </div>
  );
}
