// Get elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Function to append messages to the chat box
function appendMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(sender === 'user' ? 'user-msg' : 'bot-msg');
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

// Function to generate bot responses
function getBotResponse(userMessage) {
  let response = "I'm sorry, I don't understand that.";

  if (userMessage.toLowerCase().includes("hello")) {
    response = "Hi! How can I help you today?";
  } else if (userMessage.toLowerCase().includes("how are you")) {
    response = "I'm doing great, thank you for asking!";
  } else if (userMessage.toLowerCase().includes("bye")) {
    response = "Goodbye! Have a nice day!";
  }

  return response;
}

// Send message when the button is clicked
sendBtn.addEventListener('click', () => {
  const message = userInput.value.trim();
  if (message) {
    appendMessage(message, 'user');
    const botResponse = getBotResponse(message);
    appendMessage(botResponse, 'bot');
    userInput.value = '';
  }
});

// Optionally, send a message when the Enter key is pressed
userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendBtn.click();
  }
});
