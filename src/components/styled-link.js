import Link from 'next/link';
import styled from 'styled-components';

// Underlying anchor
const StyledAnchor = styled.a`
  text-decoration: none;
`;

function StyledLink(props) {
  const { href, children, className } = props;

  return (
    <Link href={href} passHref>
      <StyledAnchor className={className}>{children}</StyledAnchor>
    </Link>
  );
}

export default StyledLink;
