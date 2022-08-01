import React    from "react";
import template from "./HOC.jsx";

class HOC extends React.Component {
  render() {
    return template.call(this);
  }
}

export default HOC;
