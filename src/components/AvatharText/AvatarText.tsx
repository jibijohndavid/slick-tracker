import Avatar from '@material-ui/core/Avatar';
import React from 'react';

import useStyles from './styles';

type IProps = {
    imgSrc: string;
    txtOne: string;
    txtTwo: string;
    altText: string;
}

const AvatarText = ({ imgSrc, txtOne, txtTwo, altText }: IProps) => {

    const styles = useStyles();

    return (
      <div className={styles.container}>
        <Avatar alt={altText} src={imgSrc} />
        <div className={styles.textWrapper}>
          <div className={styles.salutationText}>{txtOne}</div>
          <div className={styles.nameText}>
            {txtTwo}
          </div>
        </div>
      </div>
    );
};

export default AvatarText;