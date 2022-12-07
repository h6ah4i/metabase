import styled from "@emotion/styled";
import {
  focusOutlineStyle,
  inputPadding,
  inputTypography,
  numericInputReset,
} from "metabase/core/style/input";
import { color } from "metabase/lib/colors";

export const Input = styled.input`
  ${inputPadding};
  ${inputTypography};
  ${focusOutlineStyle("brand")};
  ${numericInputReset};

  border: 1px solid ${() => color("border")};
  border-radius: 0.5rem;
  color: ${() => color("text-dark")};
  transition: border 0.3s;
`;
