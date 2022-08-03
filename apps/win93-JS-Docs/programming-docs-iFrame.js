$confirm('Would you like to open the Windows93 JS Docs?', function (ok){
  if (ok) {
    $window('yttriferous.dev/windows93-js-docs/old.html')
  } else {
    $alert.info('Ok!')
  }
});
