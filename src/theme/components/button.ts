export const Button = {
  baseStyle: {
    paddingBlock: 1,
    paddingInline: 2,
    color: "#fff",
    width: 'max-content',
    '&:hover': { opacity: 0.7 }
  },
  variants: {
    primary: {
      backgroundColor: "brand.primary",
    },
    secondary: {
      backgroundColor: "brand.secondary",
      color: 'brand.primary'
    }
  },
  defaultProps: {
    variant: 'primary'
  }
};
