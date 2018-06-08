A "First Ever Project" by "Developer" Sam

- The data structure I will utilize will most resemble the api / events / html
system currently being experimented with, because I will be experimenting through
emulation of the techniques already learned and working hard to fill in the
gaps with research of javascript methods.

- As far as I can tell right now, I'm going to give each individual tile of
the game board its own div and have a series of javascript conditions effecting
that div.

- I plan to approach the project as a continued attempt to brute my way into
learning and keeping functional  javascript knowledge and slowly build up my ability to
work independently on these developer deliverables.

- The modularity of my Javascript will be based mostly on what instruction and
assistance I get during the project time. Everything will be in service to the
design deliverables.

- Depending on the time I have to work on this project, and how successfully I
can get the program to work in a bare-bones form, I may draw on my strengths in
CSS and HTML (versus additional work in Javascript functionality) and try to introduce a
'skinning' function that allows the user to download different visual display
profiles from CSS.

- I intend to use GIT and save commits at regular intervals so that there can be
an account of my development process across the week I can work on it, and show
some commitment to good version control practices.

- The additional features will likely be limited to the CSS display modularity.
I may inquire about good ideas for 'little extras' that won't risk the deliverables.

------------
USER STORIES
------------
- "John" is a casual user who has heard about the game, incidentally, from a friend.
- John is not very technically oriented, but owns a smartphone and feels comfortable
enough that he can upload the game, because it was made to sound to him like it was
a webpage you load that you play the game on.
- John opens the game from a friend on his smartphone and tries playing with
his daughter.

- "Jen" is a former student at a generic, unbranded web development program run from
a campus right by Boston's South Station.
- Jen has gone on from the tech intensive to a job as a junior engineer at a startup,
but is always excited to see what new students have come up with in the program
she graduated from. She is going to load the game up directly from a list of
complete deliverables being featured in the web development program's campus
slack channel
- Jen is mostly interested in comparing the game against her own submitted game.
As such, she will be loading it in Chrome and observing the structure of the game
(and any related messages) in the developer tools.

- "Donald" is a recruiter at a larger web-based business who tries to size up
potential new talent he sees on LinkedIn and at tech conferences.
- Donald sees a link to the game in a case study portfolio and decides to play
a few rounds to see what this individual's early web development skills were,
and how he approached problems and structured his learning.
- Donald loads it directly up to his tablet and plays with a coworker.

- "Megan" is a rivetingly obsessed Tic Tac Toe fiend who plays competitively in the
mean streets of Portland, in back-alley Tic Tac Toe brawl houses.
- Megan is, so far, undefeated for the 2018 'Grid Blood' season and has inched
Team X ahead in advance of the Great T3X3 ARENA SHOWDOWN.
- Looking to keep her bleeding-edge advantage, Megan downloads the page to her phone
to get some playtime bullet rounds in.
- Megan will mostly care that the program is swiftly responsive and does not have
any delay lag time, and also will have squares large enough to be easily hit
in sequence with her thumb or forefinger.

----------
WIREFRAMES
----------

Linked in picture form:

https://imgur.com/eEZaHeG
https://imgur.com/tAG93ub
































[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# browser-template

A template for starting front-end projects. Webpack for `require` system, build
pipeline, and development server. Boostrap and Handlebars.js included. No
front-end frameworks included.

## Installation

1. [Download](../../archive/master.zip) this template.
1. Move to the `wdi/projects` directory, then unzip the template directory with
    `unzip /Users/<user-name>/Downloads/browser-template-master.zip`.
1. Rename the template directory from `browser-template-master` to
    `<project-name>-client`.
1. Empty [`README.md`](README.md) and fill with your own content.
1. Replace all instances of `ga-wdi-boston.browser-template` with the name of
    your project.
1. Move into the new project and `git init`.
1. Add all of the files in your project with the command `git add --all`.
      - **Note: This is the only time you should run this command!**
1. Commit all of your files with the command `git commit`.
      - Your commit title should read `Initial commit`.
1. Install dependencies with `npm install`.
1. Create a new repository on [github.com](https://github.com),
    _not GitHub Enterprise_.
1. Name the new repository with the same name used on Step 3.

## Structure

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/index.js`](assets/scripts/index.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

Developers should set `apiUrls.production` and `apiUrls.development` in
[`config/environment.js`](config/environment.js).  With
`apiUrls` set, developers may rely on `apiUrl` as the base for API
URLs.

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss). Bootstrap version 3 is
included in this template.

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

To deploy a browser-template based SPA, run `grunt deploy`.

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt test`: runs any automated tests, depends on `grunt build`
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
