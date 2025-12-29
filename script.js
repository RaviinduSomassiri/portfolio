// ===== ENHANCED JAVASCRIPT FROM LECTURE NOTES =====

// 1. Form Validation - From Web 5 PDF page 7-10
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values - From Web 4 PDF page 14
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var resultDiv = document.getElementById('formResult');
    
    // Clear previous result
    resultDiv.innerHTML = '';
    resultDiv.style.color = '';
    resultDiv.style.backgroundColor = '';
    
    // Basic validation - check empty fields
    if (name === '' || email === '' || subject === '' || message === '') {
        showMessage('Please fill in all fields!', 'error');
        return;
    }
    
    // Email validation - From Web 5 PDF page 10
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showMessage('Please enter a valid email address!', 'error');
        return;
    }
    
    // Name validation (at least 2 characters)
    if (name.length < 2) {
        showMessage('Please enter a valid name (at least 2 characters)', 'error');
        return;
    }
    
    // Message validation (at least 10 characters)
    if (message.length < 10) {
        showMessage('Please enter a message with at least 10 characters', 'error');
        return;
    }
    
    // If validation passes
    showMessage('Thank you, ' + name + '! Your message has been sent successfully. We will respond within 24 hours.', 'success');
    
    // Clear form
    document.getElementById('messageForm').reset();
});

// Helper function to show messages
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

// 2. Project Hover Effects - Simple interactivity
function highlightProject(element) {
    element.style.backgroundColor = '#2a2a2a';
    element.style.borderLeftColor = '#00FF88';
}

function unhighlightProject(element) {
    element.style.backgroundColor = '#222222';
    element.style.borderLeftColor = '#FF5500';
}

// 3. Interactive Skill Bars - From Web 4 PDF
function toggleSkill(barId) {
    var bar = document.getElementById(barId);
    if (bar.style.width === '0%' || bar.style.width === '') {
        // Set width based on skill
        var skillLevels = {
            'html-bar': '90%',
            'css-bar': '85%',
            'js-bar': '80%',
            'php-bar': '75%',
            'mysql-bar': '70%',
            'python-bar': '70%',
            'r-bar': '65%',
            'cpp-bar': '60%',
            'prolog-bar': '55%'
        };
        
        if (skillLevels[barId]) {
            bar.style.width = skillLevels[barId];
            // Also update the text
            var percentId = barId.replace('-bar', '-percent');
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
    var skillIds = ['html-bar', 'css-bar', 'js-bar', 'php-bar', 'mysql-bar', 'python-bar', 'r-bar', 'cpp-bar', 'prolog-bar'];
    var skillLevels = {
        'html-bar': '90%',
        'css-bar': '85%',
        'js-bar': '80%',
        'php-bar': '75%',
        'mysql-bar': '70%',
        'python-bar': '70%',
        'r-bar': '65%',
        'cpp-bar': '60%',
        'prolog-bar': '55%'
    };
    
    skillIds.forEach(function(id) {
        var bar = document.getElementById(id);
        if (bar) {
            bar.style.width = skillLevels[id];
        }
    });
    
    // Update all percent displays
    for (var id in skillLevels) {
        var percentId = id.replace('-bar', '-percent');
        var percentElement = document.getElementById(percentId);
        if (percentElement) {
            percentElement.style.color = '#00FF88';
            percentElement.style.fontWeight = 'bold';
        }
    }
}

function hideAllSkills() {
    var skillIds = ['html-bar', 'css-bar', 'js-bar', 'php-bar', 'mysql-bar', 'python-bar', 'r-bar', 'cpp-bar', 'prolog-bar'];
    
    skillIds.forEach(function(id) {
        var bar = document.getElementById(id);
        if (bar) {
            bar.style.width = '0%';
        }
    });
    
    // Reset percent displays
    var percentIds = ['html-percent', 'css-percent', 'js-percent', 'php-percent', 'mysql-percent', 'python-percent', 'r-percent', 'cpp-percent', 'prolog-percent'];
    percentIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.style.color = '';
            element.style.fontWeight = '';
        }
    });
}

// 4. Current Date Display - From Web 4 PDF page 41
function displayCurrentDate() {
    var today = new Date();
    var dateElement = document.getElementById('currentDate');
    var yearElement = document.getElementById('currentYear');
    
    if (dateElement) {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = today.toLocaleDateString('en-US', options);
    }
    
    if (yearElement) {
        yearElement.textContent = today.getFullYear();
    }
}

// 5. Page Load Functions
window.onload = function() {
    // Display current date
    displayCurrentDate();
    
    // Set initial skill bar widths to 0
    var skillBars = document.querySelectorAll('.skill-bar div');
    skillBars.forEach(function(bar) {
        bar.style.width = '0%';
    });
    
    // Show welcome message
    console.log('Portfolio loaded successfully - 2025');
};

// 6. Simple greeting based on time - From Web 4 PDF
function getTimeGreeting() {
    var today = new Date();
    var hour = today.getHours();
    
    if (hour < 12) {
        return 'Good morning!';
    } else if (hour < 18) {
        return 'Good afternoon!';
    } else {
        return 'Good evening!';
    }
}

// Call greeting on page load
window.addEventListener('load', function() {
    var greeting = getTimeGreeting();
    // Optional: Display greeting somewhere on page
    // console.log(greeting + ' Welcome to my portfolio.');
});