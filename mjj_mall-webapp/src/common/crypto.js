const crypto = require('crypto');


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

export function cryptotoSha512(password) {
  const shasum = crypto.createHash("sha512");
  shasum.update(password);
  let encodingPassword = shasum.digest('hex');
  console.log("encodingPassword",encodingPassword);

  return encodingPassword;
}