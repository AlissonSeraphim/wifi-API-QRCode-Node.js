const wifiForm = document.getElementById('wifiForm');

const postInAPI = async (loginData) => {
  const loginJson = JSON.stringify(loginData);
  
  const response = await fetch('https://wifi-api-laravel-alisson.up.railway.app/wifi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: loginJson,
  });
  const data = await response.json();

  return data;
};

const verifyValues = async () => {
  const usernameValue = document.getElementById('username').value;
  const passwordValue = document.getElementById('password').value;

  if (!usernameValue || !passwordValue) {
    alert('Username ou Password faltando');
   return;
  }

  const login = {
    username: usernameValue,
    password: passwordValue,
  };
  await postInAPI(login);
  window.location.href = './wifi.html';
};

wifiForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submit trigado');
  verifyValues();
});
