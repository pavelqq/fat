import React from 'react';

const Page = props => {
  const { title, children, ...rest } = props;

  return (
    <div {...rest}>
      <>
        <title>{title}</title>
      </>
      {children}
    </div>
  );
};

export default Page;
