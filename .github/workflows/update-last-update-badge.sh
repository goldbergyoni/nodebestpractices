#!/bin/bash
set -e

INPUT_FILE=$1

url_encode() {
    # url_encode <string>
    local length="${#1}"
    for (( i = 0; i < length; i++ )); do
        local c="${1:i:1}"
        case $c in
            [a-zA-Z0-9.~_-]) printf "$c" ;;
            *) printf '%%%02X' "'$c" ;;
        esac
    done
}

is_there_last_update_badge() {
    local input_file=$1
    local updated_badge_regex=$2

    if grep -q "$updated_badge_regex" "$input_file"; then return 0
    else return 1
    fi
}

is_last_update_badge_date_is_today() {
    local input_file=$1
    local updated_badge=$2

    if grep -q "$updated_badge" "$input_file"; then return 0
    else return 1
    fi
}


# We use already encoded string emoji because I'm on Windows and the calendar emoji failed to render
CALENDAR_EMOJI_ENCODED='%F0%9F%93%85'

# Date format example: March 03, 2021
CURRENT_DATE=`date +"%B %d, %Y"`

# We explicitly matching the img.shields.io/badge because when we change the provider of the badge the input will be changed too
LAST_UPDATE_BADGE_REGEX='<img id="last-update-badge" src="https:\/\/img\.shields\.io\/badge\/[^>]*>'

UPDATED_BADGE_URL="https:\/\/img.shields.io\/badge\/${CALENDAR_EMOJI_ENCODED}$(url_encode " Last update - ${CURRENT_DATE}-green").svg"
UPDATED_LAST_UPDATE_BADGE="<img id=\"last-update-badge\" src=\"$UPDATED_BADGE_URL\" alt=\"Last update: $CURRENT_DATE\" />"


if ! is_there_last_update_badge "$INPUT_FILE" "$LAST_UPDATE_BADGE_REGEX"; then
    # Print with red foreground
    echo -e "\033[31mError: Can't find Last update badge\033[m"
    exit 1
fi

if is_last_update_badge_date_is_today "$INPUT_FILE" "$UPDATED_LAST_UPDATE_BADGE"; then
    echo "No need to update the $INPUT_FILE, the last update badge already pointing to today"
    exit 0
fi

sed -i "s@$LAST_UPDATE_BADGE_REGEX@$UPDATED_LAST_UPDATE_BADGE@" "$INPUT_FILE"
