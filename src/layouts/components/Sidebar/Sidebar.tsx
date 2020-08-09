import { Typography } from "@material-ui/core";
import React from "react";

import GeneralButton from '../GeneralButton';
import AddIcon from '@material-ui/icons/Add';
import { orange } from '@material-ui/core/colors';
import AvatharText from '../AvatharText';
import Nav from "../Nav";
import useStyles from "./styles";

const Sidebar = () => {
  const styles = useStyles();

  return (
    <aside className={styles.container}>
      <Nav />
      <AvatharText
        imgSrc={
          'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png'
        }
        txtOne={'Happy Sunday,'}
        txtTwo={'John!'}
      />
      <div className={styles.quickBar}>
        <Typography variant="h4" component="h4" color="textSecondary">
          Sidebar
        </Typography>
      </div>
      <div style={{ marginTop: 32 }}>
        <GeneralButton
          btnText={'Add Task'}
          btnIcon={<AddIcon />}
          btnColor={orange}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
