// This is used to create ellipsi
export function truncate(width) {
    return `
      width: ${width};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `;
  }

  // This is a mixin example for box shadow
  // To use simply follow the below example:
    //   const StyledComp = styled.div`
    //   ${boxShadowMixin}
    //   ${boxShadowMixinFunc(0, 0, 4, 'rgba(0, 0, 0, 0.5)')}
    // `;
  export const boxShadowMixinFunc = (top, left, blur, color, inset = false) => {
    return `box-shadow: ${inset ? 'inset' : ''} ${top}px ${left}px ${blur}px ${color};`;
  }