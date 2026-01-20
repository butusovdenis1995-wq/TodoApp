import React from "react";
import { formatDistanceToNowStrict } from "date-fns";

export class Data extends React.Component {
  formatTaskTime(taskCreated) {
    if (!taskCreated) return "created just now";
    const date = new Date(taskCreated);
    const timeAgo = formatDistanceToNowStrict(date, {
      addSuffix: true,
      roundingMethod: "floor",
    });

    return `created ${timeAgo}`;
  }
  render() {
    const { taskCreated } = this.props;
    return <span>{this.formatTaskTime(taskCreated)}</span>;
  }
}
