import React from "react";

import { JournalIcon, QuestionMarkIcon } from "src/assets/icons";

import { isPusherBase, isPusherEventNote, Pusher } from "src/model/pusher";
import { Colors } from "src/theme/Colors";
import { SizeV2 } from "src/theme/Size";

import Avatar, { AvatarProps } from "./Avatar";
import { getPusherInitials } from "src/helpers/getPusherInitials";

interface AvatarTypeSpecificProps extends AvatarProps {
  name: string;
  pushers: Pusher[];
}

const AvatarTypeSpecific = (props: AvatarTypeSpecificProps) => {
  if (isPusherBase(props.name)) {
    return <Avatar {...props} name={null} icon={<QuestionMarkIcon />} />;
  }

  if (isPusherEventNote(props.name)) {
    return (
      <Avatar
        backgroundColor={Colors.PRIMARY_TRANSPARENT}
        {...props}
        name={null}
        icon={<JournalIcon width={SizeV2.XL} />}
      />
    );
  }

  return (
    <Avatar
      {...props}
      name={
        props.pushers
          ? getPusherInitials(props.name, props.pushers)
          : props.name
      }
    />
  );
};

export default AvatarTypeSpecific;
