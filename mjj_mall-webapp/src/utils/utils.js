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


/**
 * 정수형 랜덤 값을 생성하는 functions
 * 
 * @param {*} min 최소값
 * @param {*} max 최대값
 * @returns 랜덤 값
 */
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 실수형 랜덤 값을 생성하는 functions
 * 
 * @param {*} min 최소값
 * @param {*} max 최대값
 * @returns 랜덤 값
 */
export function getRandomFloat(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}