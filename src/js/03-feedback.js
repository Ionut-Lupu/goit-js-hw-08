import throttle from 'lodash.throttle';

const email = document.querySelector("input[name='email']");
const message = document.querySelector("textarea[name='message']");
const form = document.querySelector('.feedback-form');

// Funcția pentru a salva datele în localStorage
const saveFormData = () => {
  const savedInfo = {
    email: email.value,
    message: message.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(savedInfo));  
};

// Urmărirea evenimentului de input și salvarea datelor cu throttle
form.addEventListener('input', throttle(saveFormData, 500));

// Verificarea și completarea formularului cu datele salvate la încărcarea paginii
window.addEventListener('DOMContentLoaded', () => {
  const completedInfo = localStorage.getItem('feedback-form-state');
  if (completedInfo) {
    const parsedInfo = JSON.parse(completedInfo);
    email.value = parsedInfo.email;
    message.value = parsedInfo.message;
  }
});

// Manejarea evenimentului de trimitere a formularului
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Oprirea comportamentului implicit de trimitere a formularului
  
  // Obținerea datelor din localStorage
  const completedInfo = localStorage.getItem('feedback-form-state');
  
  // Afisarea datelor în consolă
  if (completedInfo) {
    const parsedInfo = JSON.parse(completedInfo);
    console.log('Datele salvate în localStorage:', parsedInfo);
  }
  
  // Ștergerea datelor din localStorage
  localStorage.removeItem('feedback-form-state');
  
  // Resetarea valorilor câmpurilor formularului
  email.value = '';
  message.value = '';
});
