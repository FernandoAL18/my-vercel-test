import React from 'react';

const BottomMenu = () => {
  const styles = {
    container: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: '#0F0E18',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px 0',
      zIndex: 1000, // Asegura que esté encima de otros elementos
    },
    item: {
      color: '#ffffff',
      fontSize: '14px',
      textAlign: 'center',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.item}>Browse</div>
      <div style={styles.item}>Casino</div>
      <div style={styles.item}>Bets</div>
      <div style={styles.item}>Sports</div>
      <div style={styles.item}>Chat</div>
    </div>
  );
};

export default BottomMenu;
