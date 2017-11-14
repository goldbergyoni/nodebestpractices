'use strict';

const enums = require('./enums');

const subjectPrefix = 'Inflowz - ';
const emailHeader = '<html><head><style>body{font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; font-size:13px; color:#333;} .e-password {font-family: Consolas, monaco, monospace;} .footer {font-size:13px;}</style></head><body><div><img src="cid:company-logo" title="inflowz" /></div><br />';
const emailFooter = '<div class="footer"><br /><br />Best regards,<br />The inflowz team.<br /><br />The artificial intelligence process optimization company.</div></body></html>';

function getEmailSubject(emailTemplateType) {

	let subject = subjectPrefix;
	switch(emailTemplateType)
	{
		case enums.EmailTemplateTypes.RESET_PASSWORD:
			subject += "Password reset";
	}

	return subject;
}

function getEmailBody(emailTemplateType, data) {

	let body = emailHeader;
	switch(emailTemplateType)
	{
		case enums.EmailTemplateTypes.RESET_PASSWORD:
			body += "Please click on the link below to reset your password.<br />" + data.link;
	}

	body += emailFooter;
	return body;
}

module.exports = {
	getEmailSubject,
	getEmailBody
};


