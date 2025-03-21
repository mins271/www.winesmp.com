// Add snowflakes dynamically
document.addEventListener('DOMContentLoaded', () => {
  const snowContainer = document.querySelector('.snow');
  
  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // Randomize size, position, and animation duration
    const size = Math.random() * 10 + 5; // size between 5px and 15px
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // random duration between 5s to 10s
    
    snowContainer.appendChild(snowflake);

    // Remove snowflake after it falls
    snowflake.addEventListener('animationend', () => {
      snowflake.remove();
    });
  }

  // Create snowflakes at intervals
  setInterval(createSnowflake, 200); // Creates a snowflake every 200ms
});
