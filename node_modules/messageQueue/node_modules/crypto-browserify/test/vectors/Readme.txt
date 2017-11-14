
File formats:

There are two files included for this byte-oriented test.  
One file contains the messages and the other file contains the hashes.

The message files provided use "compact strings" to store the message values.  
Compact strings are used to represented the messages in a compact form.  
A compact string has the form
	z || b || n(1) || n(2) || ... || n(z)
where z>=0 that represents the number of n, b is either 0 or 1, and 
each n(i) is a decimal integer representing a positive number.  
The length of the compact string is given by the summation of the n(i).

The compact string is interpreted as the representation of the bit string 
consisting of b repeated n(1) times, followed by 1-b repeated n(2) times, 
followed by b repeated n(3) times, and so on.

Example:
	M = 5 1 7 13 5 1 2
	where z = 5 and b = 1.  Then the compact string M represents the bit string
	1111111000000000000011111011
	where 1 is repeated 7 times, 0 is repeated 13 times, 1 is repeated 5 times,
	0 is repeated 1 time, and 1 is repeated 2 times.

