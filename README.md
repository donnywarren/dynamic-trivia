# Project Overview

## DYNAMIC TRIVIA

## Project Description

"Mobile first" app for a timed trivia game in which the player attempts to answer as many questions as possible in a give amount of time.  The player will be able to choose a difficulty level and category.  Player will receive 10 points for each correct answer.  Using css animations and transitions, the UX/UI will have a cineomagraphic feel with an elegant appearance.  This will be acheived by layering full screen div elements (there will be no scrolling) and toggling their display and opacity properties. 

## API and Data Sample

[Open Trivia DB](https://opentdb.com/)

Sample response for mythology/hard/multiple choice:

```

"response_code": 0,
"results": [
{
"category": "Mythology",
"type": "multiple",
"difficulty": "hard",
"question": "Talos, the mythical giant bronze man, was the protector of which island?",
"correct_answer": "Crete",
"incorrect_answers": [
"Sardinia",
"Sicily",
"Cyprus"
]
},
{
"category": "Mythology",
"type": "multiple",
"difficulty": "hard",
"question": "What was the punishment for Sysiphus&#039;s craftiness?",
"correct_answer": "Cursed to roll a boulder up a hill for eternity.",
"incorrect_answers": [
"Tied to a boulder for eternity, being pecked by birds.",
"Standing in a lake filled with water he could not drink.",
"To fell a tree that regenerated after every axe swing."
]
},

```

## Wireframes

Wireframes built and hosted at wireframes.cc:

[WELCOME SCREEN](https://wireframe.cc/1tLRqW)

[INSTRUCTIONS SCREEN](https://wireframe.cc/7jugxk)

[CATEGORY SCREEN](https://wireframe.cc/mnIlG9)

[GAME SCREEN](https://wireframe.cc/kEJqau)


#### MVP 
```
  I. Locate and test external api for stability, content quality and reliability 
 II. Produce basic page layouts for each of the necessary app screens
III. User functionality will include:
	a) animated welcome screen
	b) instruction screen with difficulty selection buttons
	c) category selection screeen with six category buttons
	d) game play screen with:
		1. start button that converts to animated timer
		2. current score board
		3. question with 4 randomly arranged answers
		4. new game button
		
 IV. App will be responsive to larger screen sizes but fundamentaly designed for mobile
```

#### PostMVP  

[HALL OF FAME SCREEN](https://wireframe.cc/56KD7P)


- Use local storage to save top five scores
- Monitor player score and announce when they've scored in the top 5
- Provided input field for user to submit their name to the 'Hall of Fame'
- Advanced CSS animations and transitions to upgrade UX/UI

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|July 13| Project Approval | Incomplete
|July 13| HTML including links/scripts/meta, basics layout CSS and JS for api call and count down clock| Incomplete
|July 14| Basic functional CSS (transitions/div display properties), JS to link screens/toggle classes | Incomplete
|July 15| JS for randomizing and placing data| Incomplete
|July 16| Testing and more advanced CSS styling if time allows| Incomplete
|July 17| Wake up early and begin freaking out about presenting my MVP | Incomplete

## Priority Matrix

Because many of the tasks are dependent on each other I built my matrix with general categories.

![PRIORITY MATRIX](/priority-matrix.pdf)

## Timeframes

My coding schedule for the week is based on a minimum of 8 hours of actual coding per day.  I am very excited about this project, so I will spend 12 hours per day if necessary.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML structure | M | 6hrs| 0hrs | 0hrs |
| Basic CSS for general layout | M | 3hrs| 0hrs | 0hrs |
| Build button templates for all screens | H | 3hrs| 0hrs | 0hrs |
| API to wired buttons and screens | H | 6hrs| 0hrs | 0hrs |
| Functional CSS for screen display: none/init, opacity: 0/1 | H | 4hrs| 0hrs | 0hrs |
| JS to check answer, evaluate right/wrong, update score | H | 4hrs| 0hrs | 0hrs |
| Build count down clock including HTML/CSS/JS | H | 6hrs| 0hrs | 0hrs |
| JS to end game at time and display results | H | 2hrs| 0hrs | 0hrs |
| JS to wire new game | H | 2hrs| 0hrs | 0hrs |
| Advanced features and styling (improve UX/UI) | L | 3hrs| 0hrs | 0hrs |
| Total | H | 34hrs| 0hrs | 0hrs |

## Code Snippet

TBA

## Change Log
 
 TBA
