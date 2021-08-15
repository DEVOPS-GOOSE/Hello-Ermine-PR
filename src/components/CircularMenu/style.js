import styled from 'styled-components';

export const StyledDiv = styled.div`
  --circular-menu-size: min(28vh, 250px);
  --menu-item-width: calc(var(--circular-menu-size) * 0.47);
  --menu-item-height: calc(var(--circular-menu-size) * 0.2);
  width: 100%;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  /* transform: translateX(-50%); */

  &:before {
    content: '';
    width: var(--circular-menu-size);
    height: var(--circular-menu-size);
    top: 50%;
    right: 0;
    transform: translate(52%, -50%);
    position: absolute;
    border-radius: 50%;
    border: 12px solid rgba(255, 255, 255, 0.555);
    /* background: rgb(255, 0, 0); */
    -webkit-mask-image: linear-gradient(to right, white 10%, transparent 45%);
  }
`;

export const Item = styled.div`
  width: var(--menu-item-width);
  height: var(--menu-item-height);
  font-size: 2rem;
  border-radius: 20px;
  background: rgb(231, 231, 231);
  position: absolute;
  top: 50%;
  right: 0;
  transform-origin: 100% 50%;
  transform: translate(-170%, -50%);
  opacity: ${(props) => (props.show ? 0.4 : 0)};
  transition: .2s ease-out;

  &.active {
    opacity: 1;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.5),
      0 0 100px rgba(255, 255, 255, 0.2);
  }
`;
