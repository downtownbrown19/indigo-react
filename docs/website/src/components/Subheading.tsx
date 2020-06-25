import * as React from "react";
import { Row, Text } from "@tlon/indigo-react";

const Subheading = ({ headline, ...props }) => (
  <Row p='7'>
    <Text bold fontSize='1'>{headline}</Text>
  </Row>
);

export default Subheading;
