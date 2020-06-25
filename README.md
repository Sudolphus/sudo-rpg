# _Sudo's RPG_

#### _An RPG set in Sudo's Dungeon, 06.24.20_

#### By _**Micheal Hansen**_

## Description

_This is an attempt at building an RPG browser game. A player should be able to build a character, and go through a few encounters to try out the system._

## Specifications

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program creates a Game object to hold necessary values** | User clicks New Game | Game = {} |
| **Program allows for a character object** | None | Character = {} |
| **Program assigns basic abilities for all characters** | None | Character = {attack(); block();} |
| **Program allows for warrior, thief, and wizard object that extend character objects** | None | Warrior = {} |
| **Program allows user to select a class, and adds that class to the Game object** | User selects Warrior | Game = {playerCharacter = Warrior {}} |
| **Program sets statistics based on the class** | None | Warrior = {HP = 20, Stamina = 10, Strength = 10, Intelligence = 3, Dexterity = 8} |
| **Program sets abilities based on the class** | None | Warrior = {... powerSmash() doubleStrike()} |
| **Program allows for basic abilites for characters regardless of class** | None | Warrior = {... attack(); block();} |


## Setup/Installation Requirements

Software Requirements
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase
3. A package manager like Node.js to install the packages, if you wish to develop

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Open index.html to play the game
3. Open with your code editor of choice and install the packages if you'd rather develop

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone {PUT_REPO_HERE}`
2. Navigate into the `{NAME_OF_DIRECTORY}` directory in Visual Studio Code or preferred text editor
`code .`
3. Get the necessary packages `npm install`.
4. Compile the code `npm run build`.
5. Open index.html in Chrome or preferred browser:
`open dist/index.html`

#### To see my live website go to {GH_PAGES_LINK_HERE}!


## Known Bugs

_None currently known; most problems are likely because the game is incomplete, as opposed to bugged._

## Support and contact details

_Please reach out through my GitHub account._

## Technologies Used

* _HTML_
* _CSS (including Bootstrap)_
* _JavaScript (including jQuery)_
* _VSCode_
* _Node.js (including webpack)_

### License

Copyright (c) 2020 **_Micheal Hansen_**

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to dealin the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._