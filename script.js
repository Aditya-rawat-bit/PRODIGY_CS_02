document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = getPasswordFeedback(password);
});

function getPasswordFeedback(password) {
    let strength = 'Weak';
    let feedback = '';
    const criteria = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        numbers: /[0-9]/.test(password),
        special: /[!@#\$%\^&\*]/.test(password)
    };
    
    let score = 0;
    for (const key in criteria) {
        if (criteria[key]) {
            score++;
        }
    }

    switch(score) {
        case 5:
            strength = 'Very Strong';
            break;
        case 4:
            strength = 'Strong';
            break;
        case 3:
            strength = 'Medium';
            break;
        default:
            strength = 'Weak';
            break;
    }

    feedback += `<div class="strength ${strength.toLowerCase()}">${strength}</div>`;
    feedback += `<ul>`;
    feedback += `<li class="${criteria.length ? 'met' : 'unmet'}">At least 8 characters</li>`;
    feedback += `<li class="${criteria.uppercase ? 'met' : 'unmet'}">At least one uppercase letter</li>`;
    feedback += `<li class="${criteria.lowercase ? 'met' : 'unmet'}">At least one lowercase letter</li>`;
    feedback += `<li class="${criteria.numbers ? 'met' : 'unmet'}">At least one number</li>`;
    feedback += `<li class="${criteria.special ? 'met' : 'unmet'}">At least one special character</li>`;
    feedback += `</ul>`;

    return feedback;
}
