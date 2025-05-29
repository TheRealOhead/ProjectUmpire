# Project: UMPIRE

A webapp to help keep track of kickball games, designed for Matthew "Fresh" "Cocomelon" Trychon by Owen "Ohead" Parker












## Design Needs

### I asked Fresh what he'd need, and he responded with the following

> [something to track the field, outs, innings, teams (we input who is up, if the kick was caught or batter made it to first), and it tracks where that would put other runners on the field (made it to another base/home [we could correct if runner ran extra]). Also if we could get overall percentages for players like how often they’d catch a ball, how often they’d make it to a base, how often they scored etc. 
idk if that’s  all possible, but just something to help track players averages and the field and scoring](https://discord.com/channels/@me/636666279671103508/1377456291601190952)

### I've broken down the requirements here

- Players in the game ✓ and their: ✓
	- Runs ✓
	- Outs (both attributed and received) ✓
	- Where they are ✓
		- Ability to move them ✓
- Team composition ✓
- Current inning ✓
- Keep log of everything that happened ✓
- Some stat tracking ✓
	- Made it to base # : outs ✓
	- Runs ✓
	- Catches ✓
	- Fumbles ✓
	- Homeruns ✓
- Export game data to CSV and/or JSON ✓








## Tabs

### Game

- New game button (confirmation)
- End game button (confirmation)
- Export button for stats
- New player button (popup to enter name)

### Inning

- Current inning number readout
- Out count (number input)
	- Show new inning button when 3 is reached (confirmation)
- A list of each base and the queue of people waiting to kick
	- Players should be draggable between each
	- Dragging a player to an occuppied base should bump players forward
	- Dragging to home should add a run and put them back in the queue
	- Dragging them to the queue should add an out for them

### Player

- Player add / remove (buttons)
- Player selector (dropdown)
	- Optgroup with team names
- Is captain radio button


- Player name (text input)
- Statistics (number inputs)
	- Kick count (autocounted)
	- Run count (autocounted)
	- Out count (autocounted)
	- Made it to base count (autocounted)
	- Fumble count
	- Catch count
	- Foul count
	- Outs administered

### Teams

- Team selector (pretty connected radio buttons)
	- Team name (text input)
	- List of players (set size attribute, not css)
		- Swap to other team button

### Log

- Log (maybe some nice monospace and colored text)
- Write custom log entry (text input and a button)







## Style

- Text inputs should look like normal text, but with a little pencil icon to the right. Tapping/clicking should turn it into a more traditional looking text input
- Number inputs should have their <s>up and down arrows easily pressable on mobile.</s> Turns out the "inner spin buttons" don't even exist on mobile. I will need to recreate them myself The text part should also not be in a box.