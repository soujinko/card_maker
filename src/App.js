import styles from './app.module.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Login from './components/login/login';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Login authService={authService} />
    </div>
  );
}

export default App;
