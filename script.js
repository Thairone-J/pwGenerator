let password = '';
const card = document.getElementById('card');
const output = document.createElement('div');
const outputTitle = document.createElement('div');
const appTitle = card.querySelector('h1');
const notification = document.createElement('div');
appTitle.insertAdjacentElement('afterend', output);
output.insertAdjacentElement('afterend', notification);
card.insertBefore(outputTitle, output);

document.getElementById('generate-button').addEventListener('click', function () {
  const input = document.getElementById('input');
  const userInput = input.value;
  generatePassword(userInput);
});

function generatePassword(pwsize) {
  if (pwsize < 12 || pwsize > 142) {
    alert('Password must be between 12 and 142 characters.');
    return;
  }

  password = '';
  output.textContent = '';
  
  const chars = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '_',
    '=',
    '+',
    '{',
    '}',
    '[',
    ']',
    '\\',
    '|',
    ';',
    ':',
    '"',
    "'",
    '<',
    '>',
    ',',
    '.',
    '/',
    '?',
  ];

  for (let i = 0; i <= pwsize - 1; i++) {
    let randomIndex = Math.round(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  output.textContent = password;
  output.setAttribute('class', 'password-output');
  copyToClipboard(password);
  outputTitle.textContent = '⬇️ Generated Password ⬇️';
  notification.textContent = 'Copied to clipboard!';
  notification.setAttribute('class', 'notification');
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}
