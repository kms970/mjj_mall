const crypto = require('crypto');
/**
 * SHA512 암호화하는 function
 * salt를 이용해서 암호화
 *
 * @param req 암호화 하기전 비밀번호
 * @returns {Promise<void>} 암호화 한 결과
 * @author jslee
 * @since 2022-03-17
 */
export default async function cryptoFunction(req){
  await crypto.randomBytes(54, (err, buf) =>{
    const salt = buf.toString("base64");
    console.log("salt", salt);

     crypto.pbkdf2(req,salt,1203947, 64, 'sha512', (err,key)=>{
      console.log("password", key.toString("base64"));
      return {
        "salt": salt,
        "encodingPassword": key.toString("base64")
      }
    })
  })
}

/**
 * sha512 암호화 하는 functions
 *
 * @param password 암호화를 하기전 비밀번호
 * @returns {string} 암호화된 비밀번호
 * @author jslee
 * @since 2022-03-17
 */
export function cryptotoSha512(password) {
  const shasum = crypto.createHash("sha512");
  shasum.update(password);
  let encodingPassword = shasum.digest('hex');
  console.log("encodingPassword",encodingPassword);

  return encodingPassword;
}