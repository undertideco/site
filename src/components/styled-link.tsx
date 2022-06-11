import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

// Underlying anchor
const StyledAnchor = styled.a`
  text-decoration: none;
`;

interface Props {
  href: string;
  className?: string;
}

const StyledLink: React.FC<React.PropsWithChildren<Props>> = function (props) {
  const { href, children, className } = props;

  return (
    <Link href={href} passHref>
      <StyledAnchor className={className}>{children}</StyledAnchor>
    </Link>
  );
};

export default StyledLink;
