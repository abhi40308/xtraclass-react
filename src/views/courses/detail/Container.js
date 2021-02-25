import React from 'react';

import Sidebar from './Sidebar';

const Container = (props) => {
  console.log('>>> props', props);
  const { match } = props;
  return (
    <>
      <Sidebar />
      <div>Test div thingy</div>
    </>
  );
};

export default Container;
