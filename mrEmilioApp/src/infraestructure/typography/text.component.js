import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;
const description = (theme) => `
    font-size: ${theme.fontSizes.description};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const success = (theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.bold}
  color: ${theme.colors.text.success};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;
const big_title = (theme) => `
    font-size: ${theme.fontSizes.big_title};
`;

const small_title = (theme) => `
    font-size: ${theme.fontSizes.title};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;
const labelBold = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.extraBold};
`;

const button_caption = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.button};
`;

const inverse_caption = (theme) => `
font-family: ${theme.fonts.heading};
font-size: ${theme.fontSizes.big_title};
color: ${theme.colors.text.inverse};
`;

const small_error = (theme) => `
font-family: ${theme.fonts.heading};
font-size: ${theme.fontSizes.description};
color: ${theme.colors.ui.error}
font-weight: ${theme.fontWeights.bold};
`;

const variants = {
  body,
  label,
  labelBold,
  caption,
  error,
  success,
  hint,
  description,
  big_title,
  small_title,
  button_caption,
  inverse_caption,
  small_error,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
