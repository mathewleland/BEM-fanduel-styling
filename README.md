# Recreate FanDuel page with CSS BEM methodology

This is a recreation of the FanDuel live game page, using BEM methodology and SASS preprocessing.  

## Employ CSS Grid everywhere! 🌎 🌍 🌏

Instead of using tables for just about all the data on this page, I tried to create grids within grids within grids everywhere I can.  This helps not only make the html easier to write, but makes the page quite a bit more responsive to to a wider range of screen sizes.  When you adjust the screen size, many of the grids depend on the grid's fractional units (fr) to automatically adjust how much space the team name gets and what's left for the team score.  This is much more scalable for adding in data too, than working with percentages, as you can just add in more and more data with automatic shares of the grid.  Something that *is lacking* is a mobile view, but it just unfortunately wasn't feasible with how much time I was able to put into the project.  BUT just about every browser size, from a tablet to a 27" monitor will have a great view of this current page.  If I were to build a mobile view, the navbar would need a lot of redesign and retooling, while the content would largely stay the same, except with the 'your-scoring' card being flexed to the bottom.



## Organization of SCSS files 🏣 🏣 🏣 

I like to essentially make my main.scss file just a list of scss imported modules that I store in the scss/partials directory.  This makes it easier to modularize the code and is an interpretation on BEM methodology to try to create self-contained components.  I saw the page as a few primary components:
* The navigation bar
* The content within
* The score ticker / footer at the bottom

The content definitely took the lion's share of the work, and this was then further broken down into
* The current game (includes the shot clock, the play by play and stats)
* The player cards within the play-by-play

Each of these components were then treated as their own blocks to start implementing BEM styling.  For example, within the Scoreboard hero component at the top, consider the team scores.  The 'team-info' component is the block, which then has its own elements, the team score and the team name, and each of these have their own modifiers meant for styling (team1 and team2 here).  Ideally, these would be set and populated dynamically depending on API info, but colors like $warriors was hard-coded just for the purpose of the coding assignment.

### Nesting within each 💗

If you continue looking at the ```_current-game.scss``` file, each primary block component nests within itself the children elements and their modifiers via the ```@at-root``` notation.  This is to create more specificity and to utilize Sass's awesome nesting features, but also to be able to be flexible for renaming classes later as components may become more generalized.  This way, you only have to rename it once at the top.

### 🚀🚀🚀 Further directions 🚀🚀🚀

If I had more time to work on this, I would have preferred to create all of what became "blocks" as React components, which would make the html look a lot nicer and be more maintainable and scalable. Components could be things very similar to how the SCSS files are already organized: like ```Navbar.js```, ```Content.js``` and ```ScoreTicker.js```.  ```Content.js``` would then have subcomponents like ```CurrentGame.js``` and a ```Card.js``` for the stats and scoring cards.