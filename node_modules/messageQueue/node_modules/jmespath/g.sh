#!/bin/bash
grunt
uglifyjs artifacts/jmespath.min.js -b -o /tmp/jmespath.min.js
uglifyjs artifacts/jmespath.min.js -b -o ~/Source/jmespath.site/docs/_build/html/_static/js/jmespath.min.js
#cp artifacts/jmespath.min.js ~/Source/jmespath.site/docs/_build/html/_static/js/
