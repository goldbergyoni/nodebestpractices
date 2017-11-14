module.exports =

	# pads a number with leading zeroes
	#
	# http://stackoverflow.com/a/10073788/607997
	pad: (n, width, z = '0') ->

		n = n + ''

		if n.length >= width

			n

		else

			new Array(width - n.length + 1).join(z) + n