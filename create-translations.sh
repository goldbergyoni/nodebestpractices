#!/bin/bash

# Language code (e.g for Russian it's ru)
LANG_CODE=$1

# Language postfix for the filename (e.g for Russian it was russian - README.russian.md)
LANG_NAME=$2

if [[ ! $# -eq 2 ]] ; then
    echo "Prepare folder structure for language migration"
    echo "Usage: $0 <lang-code> <lang-name>"
    echo ""
    echo "Argumets:"
    echo -e "\tlang-code: Language code of the language you want"
    echo -e "\tlang-name: Language name of the files that already exists in the repo (in case of migration)"
    echo ""
    echo "Example: for Russian - "
    echo -e "\t$0 ru russian"
    exit 1
fi

directories=$(find . -type d -not -path "." -not -path "./i18n" -not -path "./i18n/*" -not -path "./assets" -not -path "./assets/*" -not -path "./.git" -not -path "./.git/*" -not -path "./.github" -not -path "./.github/*" -not -path "./.operations" -not -path "./.operations/*" -not -path "./scripts" -not -path "./scripts/*")

for pathname in $directories; do
  echo "Path: $pathname"
  mkdir -p "i18n/$LANG_CODE/docusaurus-plugin-content-docs/current/$pathname"
done

files_for_language=$(find . -type f -name "*.$LANG_NAME.md" -not -path "." -not -path "./i18n" -not -path "./i18n/*" -not -path "./assets" -not -path "./assets/*" -not -path "./.git" -not -path "./.git/*" -not -path "./.github" -not -path "./.github/*" -not -path "./.operations" -not -path "./.operations/*" -not -path "./scripts" -not -path "./scripts/*")

for filepath in $files_for_language; do
  echo "File path: $filepath"
  filepath_without_language_postfix="${filepath%.$LANG_NAME.md}.md"
  mv "$filepath" "i18n/$LANG_CODE/docusaurus-plugin-content-docs/current/$filepath_without_language_postfix"
done
