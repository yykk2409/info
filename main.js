let counter = 0;
  const h1 = document.querySelector('h1');
  h1.addEventListener('click', () => {
      counter++;
      if (counter >= 10){
          window.location.href = 'https://google-zotv.onrender.com';
      }
  })
