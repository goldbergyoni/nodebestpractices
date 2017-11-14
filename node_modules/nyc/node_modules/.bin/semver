#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -x "$basedir/node" ]; then
  "$basedir/node"  "$basedir/../semver/bin/semver" "$@"
  ret=$?
else 
  node  "$basedir/../semver/bin/semver" "$@"
  ret=$?
fi
exit $ret
