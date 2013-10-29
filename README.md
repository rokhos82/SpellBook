SpellBook
=========

SpellBook JavaScript web app for use with The Chronicles System role playing game.


Rather than retool the majority of my SpellManager code I have decided to rebuild the UI from the ground up and modify the data objects for use in this project.

Design Goal
========
Have a simple, intuitive interface for tracking a characters disciplines, spells, and general stats.

Spell Book Features
========
* Use JSON to import and export SpellBook data
* User JSON and localStorage to allow data to persist through browser sessions
* Track attributes and general stats (stamina, pain threshold, etc) of a character
* Track all disciplines that the character knows (rank, xp)
* Track all spells that the character knows (rank, xp)
* Track XP checks and XP expenditures on spells and discplines
* Track traits/HCs that the character has

Calculator Features
========
* Calculate spell casting parameters
* Allow the user to setup casting presets
* Have the calculator use the last casting inputs for a given spell
