var svgCaptcha = require('svg-captcha');
const crypto = require('crypto')

let Encrypt = (data) => {
    let key="gp9";
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

let Decrypt = (encrypted) => {
    let key="gp9";
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

let Random = (Min, Max) => {
      var Range = Max - Min;
      var Rand = Math.random();
      if(Math.round(Rand * Range)==0){
        return Min + 1;
      }
      var num = Min + Math.round(Rand * Range);
      return num;
}


exports.getCode = (req, res,next) => {
    var codeConfig = {
        size: 5,// 验证码长度
        ignoreChars: '0o1i', // 验证码字符中排除 0o1i
        noise: 2, // 干扰线条的数量
        height: 44 
    }
    let status={
        code:200,
        msg:"request is success",
        
    }
    res.status=status;
  
    var captcha = svgCaptcha.create(codeConfig);
    let code=captcha.text.toLowerCase()
    var codeData = {
        img:captcha.data,
       
        mark:Encrypt(code)
    }
  
    console.log(codeData);
    res.documentList=codeData;
        next();
}
