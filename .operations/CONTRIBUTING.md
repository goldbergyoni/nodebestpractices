# Contribution guidelines

## Lovely & friendly atmosphere

Our code of conduct is 5 words long: we are all friends here

We recognize that being professional and kind are the same thing and strive to maximize our professionalism

## Handling issues and PRs

<br/>
In a nutshell, every issue is an opprtunity to gain new knowledge and attract new contributor. Therefore we aim for vast response and welcoming words 💚

When merging a new PR, add the contributor to our credits list using the all-contributors bot. Just include this text as a PR comment:

`@all-contributors please add @username for content`

The specific PR/issue resolustion depends on its kind:

**A. New best practice or fundamental changes to existing content -** In that case, involve at least 1 other members to solicit enough feedback for this change. Start by greeting the contributor, ensure the formalities are fine, ensure it conforms to our [writing guidelines](./writing-guidelines.md), ensure enough information was provided and then get at least 1 more collaborators and allow at least a week for comments

**B. Plain text change (e.g. Grammar correctness) -** When super-simple wording edits are proposed (i.e. not new content rather language correctness), one can just greet, approve and merge immediately

**C. Translations to a new (not existing) language -** When offered to add new language, greet the person and paste our [translation guidelines](./common-answers.md)

**D. Edits to existing translations -** If the change can be inferred by the reviewer (e.g., a change of a symbol, number or just date update) then feel free to merge alone. If familiarity with the language is needed, tag the original translator and ask for feedback. The translators name can be found in the home page under "Translations"

**D. Dicussions and ideas -** When a technical discussion or just general conversation is brought into a new issue, apply your own judgements whether to tag other collaborators


## Assets to be aware of

- Our content writing guidelines [can be found here](./writing-guidelines.md)
- Common questions and answers to issues/PRs [can be found here](./common-answers.md)

## Precommit

Before pushing, verify your Markdown passes [the linter](https://www.npmjs.com/package/markdownlint-cli) :

```bash
npm run lint
```
For example fix basic errors : 

```bash
npm run lint --fix
```

## Contribution model

### Steering committee 🏆

Members of the steering committee work together to provide guidance and future direction to the project. Each committee member has a particular expertise which they share their knowledge on, and work to lead further improvements to the project in that area. The steering committee members are responsible for approving new best practices, and ensuring current best practices remain relevant.

### Collaborators 👍

Collaborators are members who are contributing to the repository on a regular basis, through suggesting new best practices, triaging issues, reviewing pull requests and more. Along with the steering committee, each collaborator leads a project tracked under our Github projects.

The role is in place to help the steering committee ensure that the content provided is of high standard, up-to-date with the industry, and available in many languages. Members who frequently participate in these activities will be invited to become a collaborator, based on the quality of their contributions.

The steering committee periodically reviews the collaborator list to identify inactive collaborators. Inactive collaborators can choose to either continue in or step down from their role, in which case they are acknowledged as a past collaborator. They may later request that the steering committee restore them to active status.
