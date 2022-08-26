$confirm('Would you like to open the Windows93 JS Docs?', function (ok){
  if (ok) {
    $window('http://www.windows93.net/docs/Beginners%20Guide/02customizing/') //The Yttiferous.dev thing or whatever was kinda old anyways... So i removed it.
    $window('https://itspablo.gitbook.io/windows93-docs/intro/readme')
  } else {
    $alert.info('Ok!')
  }
});
