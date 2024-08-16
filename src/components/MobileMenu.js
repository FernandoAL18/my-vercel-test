import React from 'react';
import browseIcon from '../assets/icons/index.svg';
import casinoIcon from '../assets/icons/poker-cards.svg';
import betsIcon from '../assets/icons/ticket.svg';
import sportsIcon from '../assets/icons/ball.svg';
import chatIcon from '../assets/icons/chatea.svg';

const MobileMenu = () => {
  return (
    <div style={styles.menu}>
      <div style={styles.menuItem}>
        <img src={browseIcon} alt="Browse" style={styles.icon} />
        <div style={styles.label}>Browse</div>
      </div>
      <div style={styles.menuItem}>
        <img src={casinoIcon} alt="Casino" style={styles.icon} />
        <div style={styles.label}>Casino</div>
      </div>
      <div style={styles.menuItem}>
        <img src={betsIcon} alt="Bets" style={styles.icon} />
        <div style={styles.label}>Bets</div>
      </div>
      <div style={styles.menuItem}>
        <img src={sportsIcon} alt="Sports" style={styles.icon} />
        <div style={styles.label}>Sports</div>
      </div>
      <div style={styles.menuItem}>
        <img src={chatIcon} alt="Chat" style={styles.icon} />
        <div style={styles.label}>Chat</div>
      </div>
    </div>
  );
};

const styles = {
  menu: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#0F0E18',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '12px 0',
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#ffffff',
  },
  icon: {
    width: '17px',
    height: '17px',
    marginBottom: '5px',
  },
  label: {
    fontSize: '11px',
    color: '#ffffff',
    fontWeight: 'bold', // Makes the text bold
  },
    active: {
    color: '#FF007A', // Pink-purple color
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    backgroundColor: '#FF007A', // Pink-purple color
  },
};

export default MobileMenu;
