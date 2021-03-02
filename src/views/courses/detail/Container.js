import React from 'react';

import Sidebar from './Sidebar';

const Container = (props) => {
  console.log('>>> props', props);
  const { match } = props;
  const id = match.params.id;
  // const prerequisites = ['Learning to write first program', 'Learning a programming language', 'Learning to '];
  const links = [];
  const tracks = ['Learning to write first program', 'Stepping into open source', 'Google Code In (GCI)', ''];
  // get links from firebase.
  return (
    <>
      <Sidebar links={links} id={id} />
      <div>Test div thingy</div>
    </>
  );
};

export default Container;
