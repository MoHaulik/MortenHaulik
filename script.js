let startTime;
let elapsedTime = 0;
let timerInterval;
let isPaused = false;
let record = 0;
let sessionHistory = JSON.parse(localStorage.getItem('sessionHistory')) || [];
let encouragingMessages = [
  "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "Hard work beats talent when talent doesn’t work hard. - Tim Notke",
  "Dream big and dare to fail. - Norman Vaughan",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don’t count the days, make the days count. - Muhammad Ali",
  "Do what you can with all you have, wherever you are. - Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. - William James",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
  "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  "This is only the beginning. - Morten Haulik",
  // Add more quotes to make up at least 55
];
let messageInterval;

// Load previous session duration and session history when the page loads
window.onload = function() {
  let previousDuration = localStorage.getItem("workDuration");
  if (previousDuration) {
    record = parseFloat(previousDuration);
    updateRecord();
  }
  displaySessionHistory();
}

function startStopWorkMode() {
  if (!timerInterval) {
    startWorkMode();
  } else {
    endWorkMode();
  }
}

function startWorkMode() {
  if (isPaused) {
    startTime = new Date().getTime() - elapsedTime;
  } else {
    startTime = new Date().getTime();
  }
  timerInterval = setInterval(updateTimer, 100);
  messageInterval = setInterval(showEncouragingMessage, 120000); // 2 minutes
  document.getElementById("vegeta-casual").classList.add("hidden");
  document.getElementById("vegeta-super").classList.remove("hidden");
  document.getElementById("timer").classList.remove("hidden");
  isPaused = false;

  setTimeout(fadeOutTimer, 60000); // Fade out timer after 1 minute
}

function updateTimer() {
  let currentTime = new Date().getTime();
  elapsedTime = currentTime - startTime;
  let seconds = Math.floor(elapsedTime / 1000) % 60;
  let minutes = Math.floor(elapsedTime / (1000 * 60));
  document.getElementById("minutes").innerText = pad(minutes);
  document.getElementById("seconds").innerText = pad(seconds);
}

function pad(value) {
  return value < 10 ? "0" + value : value;
}

function updateRecord() {
  document.getElementById("record").innerText = formatTime(record);
}

function saveSession() {
  localStorage.setItem("workDuration
, record.toString());
}

function endWorkMode() {
  clearInterval(timerInterval);
  clearInterval(messageInterval);
  if (record < elapsedTime) {
    record = elapsedTime;
    updateRecord();
    saveSession();
  }
  saveSessionHistory(elapsedTime);
  elapsedTime = 0;
  isPaused = false;
  document.getElementById("vegeta-casual").classList.remove("hidden");
  document.getElementById("vegeta-super").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");
  displaySessionHistory();
  updateStatistics();
  showStatistics();
}

function fadeOutTimer() {
  document.getElementById("timer").classList.add("hidden");
}

function showEncouragingMessage() {
  let message = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
  document.getElementById("messages").innerText = message;
  setTimeout(() => {
    document.getElementById("messages").innerText = "";
  }, 5000);
}

function saveSessionHistory(duration) {
  let session = {
    duration: duration,
    timestamp: new Date().toLocaleString()
  };
  sessionHistory.push(session);
  localStorage.setItem('sessionHistory', JSON.stringify(sessionHistory));
}

function displaySessionHistory() {
  let historyList = document.getElementById("history-list");
  historyList.innerHTML = "";
  sessionHistory.forEach(session => {
    let listItem = document.createElement("li");
    listItem.innerText = `Duration: ${formatTime(session.duration)}, Date: ${session.timestamp}`;
    historyList.appendChild(listItem);
  });
}

function updateStatistics() {
  let totalDuration = sessionHistory.reduce((total, session) => total + session.duration, 0);
  let averageDuration = totalDuration / sessionHistory.length;
  let longestSession = Math.max(...sessionHistory.map(session => session.duration));

  document.getElementById("total-time").innerText = `Total Time: ${(totalDuration / 60000).toFixed(2)} mins`;
  document.getElementById("average-time").innerText = `Average Session: ${(averageDuration / 60000).toFixed(2)} mins`;
  document.getElementById("longest-session").innerText = `Longest Session: ${(longestSession / 60000).toFixed(2)} mins`;

  displayChart();
}

function displayChart() {
  let ctx = document.getElementById('work-chart').getContext('2d');
  let labels = sessionHistory.map(session => session.timestamp);
  let data = sessionHistory.map(session => session.duration / 60000);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Session Duration (minutes)',
        data: data,
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function showStatistics() {
  document.getElementById("statistics").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("statistics").classList.add("hidden");
    startWorkMode();
  }, 30000);
}

function formatTime(ms) {
  let seconds = Math.floor(ms / 1000) % 60;
  let minutes = Math.floor(ms / (1000 * 60));
  return `${pad(minutes)}:${pad(seconds)}`;
}
