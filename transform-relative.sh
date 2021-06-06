#!/bin/bash

md_files=$(find . -type f -name "*.md" -not -path "./assets" -not -path "./assets/*" -not -path "./.git" -not -path "./.git/*" -not -path "./.github" -not -path "./.github/*" -not -path "./.operations" -not -path "./.operations/*" -not -path "./scripts" -not -path "./scripts/*")

for filepath in $md_files; do
  echo "File path: $filepath"
  filepath_without_language_postfix="${filepath%.$LANG_NAME.md}.md"
  mv "$filepath" "i18n/$LANG_CODE/docusaurus-plugin-content-docs/current/$filepath_without_language_postfix"
done
