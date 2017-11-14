function confirmOwner {
  person="$(npm whoami)"
  if [ "$person" != "rizowski" ]; then
    echo "Not Rizowski";
    exit 1;
  fi
}

confirmOwner
npm run clean
npm i

npm publish
