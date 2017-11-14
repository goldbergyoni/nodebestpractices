'use strict';

const nodemailer = require('nodemailer');
const config = require('configurationManager');
const logger = require('logger');

function sendMail(to, subject, body, cc, bcc) {
	if (!to || !(subject || body))
		return;

	const transporter = nodemailer.createTransport(config.app.mail.transport);
	const mailOptions = {
		from: config.app.mail.inflowzSystemEmail,
		to: to,
		cc: cc,
		bcc: bcc,
		subject: subject,
		html: body
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			//logger.log(logger.LogTypes.Error, "Failed to send mail.");
			//logger.log(logger.LogTypes.Error, err);
		}
		else {
			//logger.log(logger.LogTypes.Info, "Mail sent to: " + to);
		}
	});
}

module.exports = {
	sendMail
};


