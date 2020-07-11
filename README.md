# Project Overview

## DYNAMIC TRIVIA

## Project Description

A mobile first app for a timed trivia game in which the player attempts to answer as many questions as possible in a give amount of time.  The player will be able to choose a difficulty level and category.  Player will receive 10 points for each correct answer.  Using css animations and transitions, the UX/UI will have a cineomagraphic feel with an elegant appearance.  This will be acheived by layering full screen div elements (there will be no scrolling) and toggling their display and opacity properties. 

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

[GAME SCREEN](https://wireframe.cc/kEJqau)


#### MVP 

- Locate and test external api for stability, content quality and reliability 
- Produce basic page layouts for each of the necessary app screens
- User functionality will include:
	a) animated welcome screeen
	b) instruction screen with difficulty selection buttons
	c) category selection screeen with six category buttons
	d) game play screen
		1. start button that converts to animated timer
		2. current score board
		3. question with 4 randomly arranged answers
		4. new game button
- App will be responsive to larger screen sizes but fundamentaly designed for mobile


#### PostMVP  

Wireframe post MVP:
[HALL OF FAME SCREEN](https://wireframe.cc/56KD7P)

- Use local storage to save top five scores
- Monitor player score and announce when they've scored in the top 5
- Provided input field for user to submit their name to the 'Hall of Fame'
- Advanced CSS animations and transitions to upgrade UX/UI

## Project Schedule

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|July 13| Project Approval | Incomplete
|July 13| Core Application Structure (HTML, CSS, etc.) | Incomplete
|July 14| Pseudocode / actual code | Incomplete
|July 15| Initial Clickable Model  | Incomplete
|July 16| MVP | Incomplete
|July 17| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| First time learning markdown | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
