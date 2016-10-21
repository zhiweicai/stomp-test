// Use SockJS
var username = "guest";
var password = "guest";
var vhost    = "/";
var queue    = "/queue/test"; 

var myoutput;

function on_connect() {  
  console.log("connected!");
  myoutput.innerHTML += 'Connected to RabbitMQ-Web-Stomp<br />';
  client.subscribe(queue, on_message);
}

function on_connection_error() {
  console.log("failed to connect!");
  myoutput.innerHTML += 'Connection failed!<br />';
}

function on_message(m) {
  console.log('Received:' + m);
  myoutput.innerHTML += m.body + '<br />';
}

window.onload = function () {
  myoutput = document.getElementById("console");  
  myoutput.innerHTML += 'Init <br />';
}

var client;
function ConnectToQueue () {

  myoutput.innerHTML += 'Connecting <br />';

  var desip = document.getElementById("ipaddress").value;

  var des = 'ws://' + desip + ':15674/ws'

  console.log (des);
  
  var ws = new WebSocket(des);
  client = Stomp.over(ws);

  client.connect(
    username,
    password,
    on_connect,
    on_connection_error,
    vhost
  );
}