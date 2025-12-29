document.getElementById('messageForm').addEventListener('submit', function(event) {
event.preventDefault();

var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var subject = document.getElementById('subject').value;
var message = document.getElementById('message').value;
var resultDiv = document.getElementById('formResult');

resultDiv.innerHTML = '';

if (name === '' || email === '' || subject === '' || message === '') {
showMessage('Please fill in all fields!', 'error');
return;
}

var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
showMessage('Please enter a valid email address!', 'error');
return;
}

if (name.length < 2) {
showMessage('Please enter a valid name (at least 2 characters)', 'error');
return;
}

if (message.length < 10) {
showMessage('Please enter a message with at least 10 characters', 'error');
return;
}

showMessage('Thank you, ' + name + '! Your message has been sent successfully.', 'success');
document.getElementById('messageForm').reset();
});

function showMessage(text, type) {
var resultDiv = document.getElementById('formResult');
resultDiv.innerHTML = text;

if (type === 'error') {
resultDiv.style.color = '#FF5555';
resultDiv.style.backgroundColor = '#330000';
resultDiv.style.border = '2px solid #FF5555';
} else {
resultDiv.style.color = '#00FF88';
resultDiv.style.backgroundColor = '#003300';
resultDiv.style.border = '2px solid #00FF88';
}

resultDiv.style.padding = '15px';
resultDiv.style.borderRadius = '8px';
resultDiv.style.marginTop = '20px';
}

function highlightProject(element) {
element.style.backgroundColor = '#2a2a2a';
element.style.borderLeftColor = '#00FF88';
}

function unhighlightProject(element) {
element.style.backgroundColor = '#222222';
element.style.borderLeftColor = '#FF5500';
}

function toggleSkill(barId) {
var bar = document.getElementById(barId);
if (bar.style.width === '0%' || bar.style.width === '') {
var skillLevels = {
'html-bar': '90%',
'css-bar': '85%',
'js-bar': '80%',
'python-bar': '70%',
'r-bar': '65%',
'prolog-bar': '55%'
};

if (skillLevels[barId]) {
bar.style.width = skillLevels[barId];
var percentId = barId.replace('-bar', '-text');
var percentElement = document.getElementById(percentId);
if (percentElement) {
percentElement.style.color = '#00FF88';
percentElement.style.fontWeight = 'bold';
}
}
} else {
bar.style.width = '0%';
}
}

function showAllSkills() {
var skillLevels = {
'html': '90%',
'css': '85%',
'js': '80%',
'python': '70%',
'r': '65%',
'prolog': '55%'
};

for (var skill in skillLevels) {
var bar = document.getElementById(skill + '-bar');
var text = document.getElementById(skill + '-text');
if (bar) bar.style.width = skillLevels[skill];
if (text) {
text.style.color = '#00FF88';
text.style.fontWeight = 'bold';
}
}
document.getElementById('skill-status').innerHTML = 'All levels shown';
}

function resetSkillLevels() {
var skillIds = ['html', 'css', 'js', 'python', 'r', 'prolog'];
skillIds.forEach(function(skill) {
var bar = document.getElementById(skill + '-bar');
var text = document.getElementById(skill + '-text');
if (bar) bar.style.width = '0%';
if (text) {
text.style.color = '';
text.style.fontWeight = '';
}
});
document.getElementById('skill-status').innerHTML = 'All levels reset';
}

window.onload = function() {
var today = new Date();
var dateElement = document.getElementById('current-date');
if (dateElement) {
dateElement.innerHTML = today.toDateString();
}
console.log('Portfolio loaded');
};