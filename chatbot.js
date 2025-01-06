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
        "hello": "Hey there, sugar! What’s on your mind? 😏",
        "how are you": "Living the fabulous life, darling. Just like I always do. 😘",
        "what's up": "Oh, just waiting for you to say something interesting. 😈",
        "ladyboy": "Oh honey, I am *LadyBOyAI*, all about that fabulous life. 💅",
        "can you help me": "Of course, darling! But you better ask *nicely*. 😏",
        "bye": "Leaving so soon? Well, don't make me miss you too much. 😘",
        "default": "Mmmm... I don't understand that. But don't worry, I’m not judging you. 😜"
    };
    return responses[userInput.toLowerCase()] || responses["default"];
}
