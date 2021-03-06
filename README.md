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
| **Program allows characters to take damage** | Player attacked for 5 | Warrior = {HP = 15..} |
| **Program allows characters to heal damage, up to their maximum hp** | Player healed for 5 | Warrior = {HP = 20..}|
| **Program detects if a player has been defeated** | Player hp = 0 | "You Have Been Defeated!" |
| **Program tracks player inventory** | None | Warrior = {.. inventory = {} ..} |
| **Program adds items to inventory** | Player picks up sword | Warrior = {.. inventory = {sword} ..} |
| **Program removes items from inventory** | Player drops sword | Warrior = {.. inventory = {} ..} |
| **Program has item objects that have stats** | None | Sword = {damage = 2, slot = 'weapon'} |
| **Program allows equipping items to correct slot** | Player equips sword | Warrior = {.. inventory = {}, equipment = {sword} ..} |
| **Program only allows equipping if of a legal class** | Player equips sword while wizard | Wizard = { .. inventory = {sword} .. equipment = {} ..} |
| **Program allows unequipping items** | Player unequips sword | Warrior = {.. inventory = {sword}, equipment = {} ..} |
| **Program swaps items if equipping to a filled slot** | Player equips axe while sword equipped | Warrior = {.. inventory = {sword}, weapon = {axe} ..} |
| **Program updates abilities based on equipment** | Player attacks while sword equipped | Damage = Damage + 2 |
| **Program can create enemies with attributes** | None | Enemy = {Strength = 5; HP = 10} |
| **Enemies can deal damage** | Enemy with strength 10 attacks | Player takes 10 damage |
| **Enemies can take damage** | Player attacks for 10 damage | Enemy = {.. HP = 0} |
| **Enemies are removed when HP = 0** | Enemy HP = 0 | Enemy removed from Game |

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
`git clone https://github.com/Sudolphus/sudo-rpg`
2. Navigate into the `sudo-rpg` directory in Visual Studio Code or preferred text editor
`code .`
3. Get the necessary packages `npm install`.
4. Compile the code `npm run build`.
5. Open index.html in Chrome or preferred browser:
`open dist/index.html`

## Known Bugs

_Items don't properly delete when picked up, allowing infinite duping. The button to go to the second room with the first actual enemy doesn't currently work._

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