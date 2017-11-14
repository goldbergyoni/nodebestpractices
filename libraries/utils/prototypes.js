'use strict';

Date.prototype.toServerString = function()
{	// return example: '2012-11-04 14:55:45'
	return this.toISOString().replace(/T/, ' ').replace(/\..+/, '');
};

