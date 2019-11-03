import React, {Component} from "react";
import {Tooltip} from "@material-ui/core";

export default class ExcelDownload extends Component {
  render() {
    return (
        <Tooltip title="دانلود">
          <i className="fas fa-file-excel pointer"/>
        </Tooltip>
    );
  }
}

