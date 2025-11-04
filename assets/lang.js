
function switchLanguage(){
  const parts = location.pathname.split('/').filter(Boolean);
  let filename = 'index.html';
  if(parts.length === 0){ location.assign('/en/'); return; }
  const last = parts[parts.length-1];
  if(last.includes('.html')){
    filename = parts.pop();
  } else {
    filename = 'index.html';
  }
  const lang = (parts.pop() || 'en').toLowerCase();
  const other = lang === 'en' ? 'th' : 'en';
  const newPath = '/' + [other, (filename==='index.html'?'':filename)].filter(Boolean).join('/');
  location.assign(newPath);
}
