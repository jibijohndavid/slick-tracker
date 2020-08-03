import React from 'react';

import Nav from '../Nav';
import useStyles from './styles';
import GeneralButton from '../GeneralButton';
import AddIcon from '@material-ui/icons/Add';
import { orange } from '@material-ui/core/colors';
import AvatharText from '../AvatharText';

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
