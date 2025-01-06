// Function to add chat messages to the chat box
function addMessage(content, fromUser = true) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(fromUser ? 'user-message' : 'bot-message');
  messageDiv.textContent = content;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to simulate a bot response (you can connect it to an API like OpenAI)
function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim()) {
    // Display user's message
    addMessage(userInput, true);
    document.getElementById('user-input').value = ''; // Clear input field

    // Simulate a bot response (replace this with actual API integration)
    setTimeout(() => {
      addMessage("Hello! How can I help you?", false);
    }, 1000);
  }
}
