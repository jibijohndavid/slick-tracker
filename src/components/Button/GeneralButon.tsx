import { Button } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';

type IProps = {
    btnColor: "inherit" | "primary" | "secondary" | "default";
    btnvariant: "text" | "outlined" | "contained";
    btnText: string;
    btnIcon?: any;
}

const GeneralButton = ({ btnText, btnvariant, btnColor, btnIcon }: IProps) => {
    const styles = useStyles();

    return (
      <div>
        <Button
          variant={btnvariant}
          color={btnColor}
          startIcon={btnIcon}
          className={styles.button}
        >
          {btnText}
        </Button>
      </div>
    );
};

export default GeneralButton;

