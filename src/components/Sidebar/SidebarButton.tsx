import * as React from "react";
import { IconType } from "react-icons";

interface Props {
  id: string | number;
  Icon: IconType;
  size: number;
  tooltip?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SidebarButton = (props: Props) => {
  return (
    <button
      className="sidebar__button group"
      key={props.id}
      onClick={props.handleClick}
    >
      <props.Icon size={props.size} />

      {props.tooltip && (
        <span className="tooltip group-hover:scale-100 hover:scale-0">
          {props.tooltip}
        </span>
      )}
    </button>
  );
};

export default SidebarButton;
