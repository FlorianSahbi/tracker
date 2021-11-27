import React from "react";

const styles = {
  position: "absolute",
  zIndex: 9999,
  bottom: 0,
  margin: 15,
  textTransform: "Uppercase",
  fontSize: "24px"
}

function LockButton({handleClick}) {
  return <div 
  style={styles}
  onClick={() => handleClick()}
  >Lock</div>
}

export default LockButton;
