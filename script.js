const navbar = document.getElementById('navbar');
        let scrolled = false;

        window.onscroll = function() {
            if(window.pageYOffset > 100) {
                navbar.classList.remove('top');
                if(!scrolled) {
                    navbar.style.transform = 'translateY(-70px)'
                }
                setTimeout(function() {
                    navbar.style.transform = 'translateY(0)';
                    scrolled = true;
                },200);
            } else {
                navbar.classList.add('top');
                scrolled = false;
            }
        }

        // Toggle Chat Function
        function toggleChat() {
            const chatContainer = document.getElementById('chat-container');
            chatContainer.classList.toggle('hidden');
        }

        // Chat Functionality
        document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    appendMessage(userInput, 'user');
    document.getElementById('user-input').value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        appendMessage(botResponse, 'bot');
    }, 500);
}

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;

    const messagesContainer = document.getElementById('messages');
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(userInput) {
    // Simple hardcoded responses
    const responses = {
        'hello': 'Hello! How can I help you today?',
        'hi': 'Hi there! How can I assist you?',
        'hey' : 'Hey! How can i help you?',
        'products': 'We offer a variety of products including A, B, and C. Would you like to know more?',
        'contact': 'You can contact us at contact@doutya.com.',
        'bye': 'Goodbye! Have a great day!'
    };

    const lowerCaseInput = userInput.toLowerCase();
    return responses[lowerCaseInput] || 'I am sorry, I do not understand that. Can you please rephrase?';
}
        