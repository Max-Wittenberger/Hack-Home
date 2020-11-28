function ask_for_permission() {

}

function activate() {
    Notification.requestPermission(function() {});
    alert("You will now be informed every 15 seconds, of course you can change that later ;)");
    setInterval(function() {
        new Notification(document.getElementById('title').value, {
            body: document.getElementById('body').value,
            icon: document.getElementById('icon').value
        });
    }, 15 * 1000); // 60 * 1000 milsec = 1 minute ;D
}

function send_test() {
    Notification.requestPermission(function() {});
    new Notification(document.getElementById('title').value, {
        body: document.getElementById('body').value,
        icon: document.getElementById('icon').value
    });
}