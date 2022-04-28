export function nowDate() {
  return date = new Date();
}

export function dateToFormat(date, _format) {
  let str = '';
  if(_format===`yyyy-mm-dd'T'HH:MM:ss`){
    str = date.toISOString().replace(/\..*/, '');
  }
}