export function nowDate() {
  return date = new Date();
}

export function dateToFormat(date, _format) {
  let str = '';
  if(_format===`yyyy-mm-dd'T'HH:MM:ss`){
    str = date.toISOString().replace(/\..*/, '');
  }
}

/**
 * Array 여부 check, Array가 빈 값인지 check
 * 
 * @param {*} arr 확인할 Array를 입력 받음
 * @returns boolean값으로 true 일경우 Array가 값이 있고, false일 경우 빈 배열
 */
export function isEmptyArr(arr) {
  if(Array.isArray(arr) && arr.length === 0){
    return true;
  }
  return false;
}

/**
 * Object 여부 check, Object가 빈 값인지 check
 * 
 * @param {*} obj 확인할 Object를 입력 받음
 * @returns boolean값으로 true 일 경우 Object가 값이 있고, false일 경우 빈 Object
 */
export function isEmptyobj(obj) {
  if(obj.constructor === Object && Object.keys(obj).length === 0){
    return true;
  }
  return false;
}

