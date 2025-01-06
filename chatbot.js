function handleInput(event) {
    if (event.key === "Enter") {
        const userInput = document.getElementById('user-input').value;
        if (userInput.trim() !== "") {
            addMessage('user', userInput);
            document.getElementById('user-input').value = ""; // Clear input field
            setTimeout(() => {
                addMessage('bot', getBotResponse(userInput));
            }, 1000);
        }
    }
}

function addMessage(sender, message) {
    const chatboxContent = document.getElementById('chatbox-content');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender + '-message');
    messageElement.textContent = message;
    chatboxContent.appendChild(messageElement);
    chatboxContent.scrollTop = chatboxContent.scrollHeight; // Scroll to latest message
}

function getBotResponse(userInput) {
    const responses = {
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm just a bot, but I'm doing great! 😊",
        "bye": "Goodbye! Take care!",
        "default": "Sorry, I don't understand that. Can you rephrase?"
    };
    return responses[userInput.toLowerCase()] || responses["default"];
}
