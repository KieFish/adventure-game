window.addEventListener('load', function () {
    var conversion = document.getElementsByClassName('conversion')[0];

    function addMessage(username, message) {
        conversion.innerText += '[' + username + '] ' + message + '\n';
    }

    var askedForName = false;
    var usersName = '';

    function respond(message) {
        addMessage('Me', message);

        message = message.toLowerCase();

        if (askedForName == true) {
            addMessage('Computer', 'Hello ' + message);
            usersName = message;
            askedForName = false;
        } else if (message == 'what is my name?') {
            if (usersName) {
                addMessage('Computer', 'Your name is ' + usersName);
            } else {
                addMessage('Computer', 'I\'m sorry, you never told me');
            }
        } else if (message == 'hello') {
            addMessage('Computer', 'Hello to you too!');
            addMessage('Computer', 'What is your name?');
            askedForName = true;
        } else if (message == 'bye') {
            addMessage('Computer', 'Goodbye');
        } else if (message == 'one') {
            addMessage('Computer', 'My favourite number!');
        } else if (message == 'two') {
            addMessage('Computer', 'Meh');
        } else if (message == 'three') {
            addMessage('Computer', 'Meh');
        } else if (message == 'four') {
            addMessage('Computer', 'Meh');
        } else {
            addMessage('Computer', 'I\'m sorry, I don\'t understand');
        }
    }

    addMessage('Computer', 'Welcome to the game');

    var input = document.getElementsByClassName('input')[0];

    input.focus();

    input.addEventListener('keydown', function (e) {
        if (e.keyCode == 13) {
            respond(input.value);

            input.value = '';

            e.preventDefault();
        }
    });
});
