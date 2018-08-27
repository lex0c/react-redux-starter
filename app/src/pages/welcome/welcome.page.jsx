import React from 'react';
import cssModules from 'react-css-modules';

import WelcomeComponents from '../../components/welcome/welcome.component';
import styles from './welcome.page.scss';

const WelcomePage = (props) => (
  <div className={styles.container}>
    <WelcomeComponents
      {...props}
    />
  </div>
);

export default cssModules(WelcomePage, styles);
