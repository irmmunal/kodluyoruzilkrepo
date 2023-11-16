import getData from './my-module.js';

async function runApp() {

  const userId = 1;

  try {
    const result = await getData(userId);
    console.log('Sonuç:', result);
  } catch (error) {
    console.error('Uygulama hatası:', error.message);
  }
}
runApp(1);
