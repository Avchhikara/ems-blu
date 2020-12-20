const messages = document.querySelector(".messages");

var socket = io();
socket.on("update", (data) => {
  showMessage(data.message);
});

let shadesSelector = 0;

const availableShades = [
  [
    "rgb(87,195,34)",
    "linear-gradient(90deg, rgba(87,195,34,1) 27%, rgba(253,187,45,1) 100%)",
  ],
  [
    "rgb(195,192,34)",
    "linear-gradient(90deg, rgba(195,192,34,1) 60%, rgba(253,187,45,1) 100%)",
  ],
  [
    "rgb(163,195,34)",
    "linear-gradient(90deg, rgba(163,195,34,1) 54%, rgba(253,187,45,1) 100%)",
  ],
  [
    "rgb(163,195,34)",
    "linear-gradient(90deg, rgba(163,195,34,1) 0%, rgba(45,47,253,1) 100%)",
  ],
  [
    "rgb(225,225,223)",
    "linear-gradient(90deg, rgba(225,225,223,1) 0%, rgba(114,115,173,1) 100%)",
  ],
  ["#076585", "linear-gradient(to right, #fff, #076585)"],
  ["#BBD2C5", "linear-gradient(to right, #536976, #BBD2C5)"],
  ["#9796f0", "linear-gradient(to right, #fbc7d4, #9796f0)"],
  ["#acb6e5", "linear-gradient(to right, #86fde8, #acb6e5)"],
];

function showMessage(message) {
    const msg = document.createElement("div");
    msg.className = "message";
    const timestamp = document.createElement("div");
    timestamp.className = "message__timestamp";
    msg.appendChild(timestamp);
    const msge = document.createElement("div");
    msge.className = "message__message";
    msg.appendChild(msge);
    // Addding timestamp values
    timestamp.textContent = new Date().toLocaleString();
    // Adding message values
    msge.textContent = message;
    // Adding the cool gradient
    const shade = availableShades[shadesSelector % availableShades.length];
    const bgColor = shade[0];
    const bgGradient = shade[1];
    msg.style.background = bgColor;
    msg.style.background = bgGradient;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
    shadesSelector += 1;
}