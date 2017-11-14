# Mocha needs YOU!

*Did you know* Mocha [is a dependency of over 100,000 projects](https://libraries.io/npm/mocha) published to npm alone?

**Despite this, we're currently unable to merge most pull requests due to lack of maintenance resources.**

**Are you interested in triaging issues or reviewing open PRs?  Have some time to hack on its codebase?**  If you would like to help maintain Mocha, please contact `@boneskull` on [Gitter](https://gitter.im/mochajs/mocha).

*Thank you* :kissing_heart: to all of you interested in helping.  These are Mocha's immediate needs:

1. Increase test coverage on Node.js and browser
  - Increase integration coverage for all reporters
    - `html` reporter must be tested in browser
    - ~~Basic console reporters (*not* `nyan`, `landing`, etc.) must be tested in **both** browser and Node.js contexts; PhantomJS can consume all console reporters~~
    - ~~Filesystem-based reporters must be tested in Node.js context~~
    - **UPDATE - May 24 2017**: Thanks to [community contributions](https://github.com/mochajs/mocha/blob/master/CHANGELOG.md#mag-coverage), the coverage on most reporters has increased dramatically!  The `html` reporter is still in [dire need of coverage](https://coveralls.io/builds/11674428/source?filename=lib%2Freporters%2Fhtml.js).
  - Increase coverage against all interfaces (`exports` in particular).  Ideally this becomes a "matrix" where we repeat sets of integration tests across all interfaces.
  - Refactor non-Node.js-specific tests to allow them to run in a browser context.  Node.js-specific tests include those which *require* the CLI or filesystem.  Most everything else is fair game.
2.  Review current open pull requests
  - We need individuals familiar with Mocha's codebase. Got questions?  Ask them in [our chat room](https://gitter.im/mochajs/mocha).
  - Pull requests **must** have supporting tests.  The only exceptions are pure cosmetic or non-functional changes.
  - Pull request contributors must sign [the CLA](https://cla.js.foundation/mochajs/mocha).
3. Close old, inactive issues and pull requests
  - ~~A bot should do this.  We need a bot. Got a bot?~~ We now use GitHub's own [probot-stale](https://www.npmjs.com/package/probot-stale).
4. Triage issues
  - If we run into "critical" bugs, they need fixing.
  - "Critical" means Mocha is broken w/o workarounds for a *large percentage* of users
  - Otherwise: respond to issues, close new dupe issues, confirm bugs, ask for more info, etc.

Once we gain ground on the above items, we can work together formalize our contribution guidelines and governance.  For further info & ideas, please see our [projects](https://github.com/mochajs/mocha/projects/).

*You needn't be a maintainer to submit a pull request for test coverage!*

-- @boneskull, *Jan 17 2016*

<br><br>
<p align="center">
  <img src="https://cldup.com/xFVFxOioAU.svg" alt="Mocha test framework"/>
</p>

[![Build Status](https://api.travis-ci.org/mochajs/mocha.svg?branch=master)](http://travis-ci.org/mochajs/mocha)
[![Coverage Status](https://coveralls.io/repos/github/mochajs/mocha/badge.svg)](https://coveralls.io/github/mochajs/mocha)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmochajs%2Fmocha.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmochajs%2Fmocha?ref=badge_shield)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mochajs/mocha?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![OpenCollective](https://opencollective.com/mochajs/backers/badge.svg)](#backers)
[![OpenCollective](https://opencollective.com/mochajs/sponsors/badge.svg)](#sponsors)
<br><img alt="Mocha Browser Support h/t SauceLabs" src="https://saucelabs.com/browser-matrix/mochajs.svg" width="354">

  Mocha is a simple, flexible, fun JavaScript test framework for node.js and the browser. For more information view the [documentation](http://mochajs.org).

## Links

  - [Changelog](https://github.com/mochajs/mocha/blob/master/CHANGELOG.md)
  - [Google Group](http://groups.google.com/group/mochajs)
  - [Wiki](https://github.com/mochajs/mocha/wiki)
  - Mocha [Extensions and reporters](https://github.com/mochajs/mocha/wiki)


## Backers

[Become a backer]((https://opencollective.com/mochajs#backer)) and show your support to our open source project.

<a href="https://opencollective.com/mochajs/backer/0/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/0/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/1/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/1/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/2/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/2/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/3/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/3/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/4/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/4/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/5/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/5/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/6/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/6/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/7/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/7/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/8/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/8/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/9/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/9/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/10/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/10/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/11/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/11/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/12/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/12/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/13/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/13/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/14/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/14/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/15/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/15/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/16/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/16/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/17/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/17/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/18/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/18/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/19/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/19/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/20/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/20/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/21/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/21/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/22/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/22/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/23/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/23/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/24/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/24/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/25/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/25/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/26/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/26/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/27/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/27/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/28/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/28/avatar"></a>
<a href="https://opencollective.com/mochajs/backer/29/website" target="_blank"><img src="https://opencollective.com/mochajs/backer/29/avatar"></a>


## Sponsors

Does your company use Mocha?  Ask your manager or marketing team if your company would be interested in supporting our project.  Support will allow the maintainers to dedicate more time for maintenance and new features for everyone.  Also, your company's logo will show [on GitHub](https://github.com/mochajs/mocha#readme) and on [our site](https://mochajs.org)--who doesn't want a little extra exposure?  [Here's the info](https://opencollective.com/mochajs#sponsor).

<a href="https://opencollective.com/mochajs/sponsor/0/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/0/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/1/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/1/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/2/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/2/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/3/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/3/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/4/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/4/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/5/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/5/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/6/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/6/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/7/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/7/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/8/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/8/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/9/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/9/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/10/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/10/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/11/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/11/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/12/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/12/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/13/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/13/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/14/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/14/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/15/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/15/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/16/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/16/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/17/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/17/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/18/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/18/avatar"></a>
<a href="https://opencollective.com/mochajs/sponsor/19/website" target="_blank"><img src="https://opencollective.com/mochajs/sponsor/19/avatar"></a>

## License

[MIT](LICENSE)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmochajs%2Fmocha.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmochajs%2Fmocha?ref=badge_large)
