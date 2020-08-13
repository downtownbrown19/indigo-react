import * as React from "react";
import { Indicator } from "./Indicator";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { Col } from "./Col";

export type StatelessCheckboxProps = {
  selected: boolean;
  hasError: boolean;
  disabled: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const StatelessCheckbox = ({
  selected,
  disabled,
  hasError,
  onChange,
  children,
  ...props
}: StatelessCheckboxProps) => {
  return (
    <Box display="flex" onClick={onChange} {...props} cursor="pointer">
      <Indicator
        selected={selected}
        disabled={disabled}
        hasError={hasError}
        mr="3"
      >
        <Icon icon={selected ? "CheckmarkBold" : "Blank"} />
      </Indicator>
      <Col>{children}</Col>
    </Box>
  );
};

StatelessCheckbox.displayName = "StatelessCheckbox";
