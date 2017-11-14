'use strict';

const crypto = require('crypto'),
      jwt = require('jsonwebtoken'),
      bcrypt = require('bcryptjs'),
      config = require('configurationManager');

module.exports.hashPassword = async function (password, salt) {
  return await bcrypt.hash(password, salt);
};

module.exports.verifyPassword = async function (password, hashedPassowrd, salt) {
  const pwd = await module.exports.hashPassword(password, salt);
  return hashedPassowrd === pwd;
//	return hashedPassowrd === module.exports.hashPassword(password, salt);
};

module.exports.generateSalt = async function () {
  return await bcrypt.genSalt(10);
};

module.exports.generateJwt = function (data, expirationInMinutes) {
	if (expirationInMinutes)
		data.exp = Math.floor(Date.now() / 1000) + (60 * expirationInMinutes);

	return jwt.sign(data, config.auth.app.jwtSecret);
};

module.exports.decodeJwt = function (token) {
	return jwt.decode(token, config.auth.app.jwtSecret);
};

module.exports.verifyAndDecodeJwt = function (token) {
	let decoded = null;
	try {
		decoded = jwt.verify(token, config.auth.app.jwtSecret);
	} catch (err) {
		// expired
	}
	return decoded;
};

module.exports.encodeData = function (data) {
	try {
		const cipher = crypto.createCipher('aes192', config.app.encryption.dataEncryptionKey);
		let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
		encrypted += cipher.final('hex');
		return encrypted;
	}
	catch (e) {
		// log error
	}
};

module.exports.decodeData = function (encrypted) {
	try {
		const decipher = crypto.createDecipher('aes192', config.app.encryption.dataEncryptionKey);
		let decrypted = decipher.update(encrypted, 'hex', 'utf8');
		decrypted += decipher.final('utf8');
		return JSON.parse(decrypted);
	}
	catch (e) {
		// log error
	}
};
