const Header = ({ location, downicon, searchicon, notificationicon }) => {
    return (
      <div className={styles.header}>
        <div className={styles.locationmenu}>
          <div className={location}></div>
          <div className={downicon}></div>
        </div>
        <div className={styles.sideicon}>
          <div className={searchicon}></div>
          <div className={notificationicon}></div>
        </div>
      </div>
    );
  };
  
  export default Header;