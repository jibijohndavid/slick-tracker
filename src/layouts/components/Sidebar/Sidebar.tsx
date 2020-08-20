import { Typography } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import React from "react";
import AvatarText from "src/components/AvatharText";
import GeneralButton from "src/components/Button/GeneralButon";

import Nav from "../Nav";
import useStyles from "./styles";

const Sidebar = () => {
  const styles = useStyles();

  return (
    <aside className={styles.container}>
      <Nav />
      <AvatarText
        imgSrc="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
        txtOne="Happy Sunday,"
        txtTwo="John!"
        altText="Profile Image"
      />
      <div className={styles.quickBar}>
        <Typography variant="h4" component="h4" color="textSecondary">
          Sidebar
        </Typography>
      </div>
      <div style={{ width: '100%' }}>
        <GeneralButton
          btnText="Add Task"
          btnvariant="contained"
          btnColor="secondary"
          btnIcon={<AddIcon />}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
