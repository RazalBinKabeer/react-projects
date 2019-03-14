import { css } from "@emotion/react";

const style = css`
  color: hotpink;
  font-size: 24px;
`;

const CssPropExample = () => {
  return <div css={style}>Styled with Emotion!</div>;
};

export default CssPropExample;
