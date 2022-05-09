
/* 얕은 복사는 사본을 만들어 내지 않고 원본을 참조 하도록 복사한 척을 하는 것 깊은 복사는 완벽하게 원본과 사본을 나눠 복사하는 방법 */
/**
 * array를 깊은 복사 한다.
 * @param {*} arr 복사할 array
 * 
 * @returns 복사된 array
 */
export function arrDeepCopy(arr){
  return arr.slice();
}

/**
 * object를 깊은 복사 한다.
 * 
 * @param {*} obj 복사할 obj
 * @returns 복사된 object
 */
export function objDeepCopy(obj) {
  var result = {}
  if(typeof obj === "object" && obj !== null ){
    for(i in obj) result[i] = deepCopy(obj[i])
  } else {
    result = obj;
  }
  return result;
}