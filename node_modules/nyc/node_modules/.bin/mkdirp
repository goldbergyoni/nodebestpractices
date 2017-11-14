#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -x "$basedir/node" ]; then
  "$basedir/node"  "$basedir/../mkdirp/bin/cmd.js" "$@"
  ret=$?
else 
  node  "$basedir/../mkdirp/bin/cmd.js" "$@"
  ret=$?
fi
exit $ret
