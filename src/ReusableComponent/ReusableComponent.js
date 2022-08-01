import React    from "react";
import template from "./ReusableComponent.jsx";

class ReusableComponent extends React.Component {
  render() {
    return template.call(this);
  }
}

export default ReusableComponent;
