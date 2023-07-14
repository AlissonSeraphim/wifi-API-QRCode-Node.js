const qrCodeButton = document.getElementById('qrCodeButton');

const getQRCode = async () => {
  console.log('clickado getQRCode');
  try {
    const response = await fetch('https://wifi-api-laravel-alisson.up.railway.app/wifi');
    const data = await response.json();
    console.log('response', response);
    console.log('data', data);
    const { qrCodeUrl } = data;

    return qrCodeUrl;
  } catch (error) {
    console.log(error.message);
  }
};

const createImg = async () => {
  console.log('clickado createImg');
  const qrcodeImg = await getQRCode();

  console.log('qrcode final', qrcodeImg);

  const img = document.createElement('img');
  img.src = qrcodeImg;
  img.alt = 'qr code';

  document.getElementById('body').appendChild(img);

  console.log('Imagem criada com sucesso');
};

qrCodeButton.addEventListener('click', () => {
  console.log('click disparado');
  createImg();
});
