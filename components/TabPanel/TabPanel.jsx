import styles from './tabPanel.module.scss'

export default function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
      className={styles.wrapper}
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          
            <div>{children}</div>
          
        )}
      </div>
    );
  }