WIREFRAMES:

![Desktop](https://i.imgur.com/yxtmNwM.png "Desktop Version")

![Mobile](https://i.imgur.com/1mKAUqj.png "Mobile Version")


USER STORIES:
1. As a user, I want a simple account registration process.
2. As a user, I would like to be able to change my password.
3. As a user, I want my game to have fun background and placemarkers (X's and O's).
4. As a fellow developer, I want the code to be organized and easy to understand with good comments throughout.
5. As the game developer (me), I would like to be able to gather usage data and other statistics regarding my game (ex. how many games a player has played).


TECHNOLOGY USED:
- HTML
- CSS (bootstrap)
- JavaScript
- jQuery
- AJAX


DEVELOPMENT PROCESS:

PLANNING:
I began the process by creating user stories. This allowed me to think about what a user would want in a simple Tic-Tac-Toe game. Next, I created a wireframe to display how I wanted the user interface to appear. Although I did not know if I would be able to implement all of the features displayed in the wireframe, I wanted to keep my options open to the possibilities in case I decided to add more elements at a later time. Finally, I reviewed the List of Requirements for this project and gave each section a due date in which it would have to be completed in order to stay on track for the final submission date.

AUTHENTICATION & GAME UI:
I started the authentication process by creating a HTML file with all of the necessary buttons for the game (Sign Up, Sign In, Sign Out, etc.). Next, I set up event listeners and success/failure responses for each feature. I continuously referred back to my wireframes to guide my decisions of where/when buttons should appear. For the functionality of the game itself, I first thought about all of the functionalities that were required for the game and wrote a list of comments for each. Then underneath each comment, I wrote a block of code to complete that task. Granted, there was a great deal of moving code around and adding/deleting of elements; however, the comments made it easier for me to organize the program as a whole.

STYLING:
When I think about the game of Tic-Tac-Toe, the first thing that comes to mind is memories of when I was a child playing Tic-Tac-Toe with chalk on a small blackboard with my friends. This nostalgic imagery is what inspired my styling choice for my project.


PROBLEM SOLVING STRATEGIES:
The biggest challenge I faced was getting the game to declare a winner. After researching solutions on Stack Overflow and collaborating with my instructor and fellow peers, I formulated a solution. First, I created an example board using an array and noted all of the ways (vertical, horizontal, and diagonal) the user could win.

```
 Logic behind array numbering
 [0][1][2]
 [3][4][5]
 [6][7][8]
```

Next, I used a function to check if there was a winner during that turn by utilizing `if...else...` statements to test each winning condition. For example, to test if there was a Row 1 (horizontal) win, each square would have to

A.) not be empty, and
B.) have the same player marker in each square (all X's or all O's)

If both of these conditions were true, then a winner will be declared. I did this for each of the possible winning conditions.

```
const checkWinner = function () {
  if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {
    $('#message').text('We Have A Winner!')
  }
```


WHAT ELSE COULD BE ADDED TO FUTURE ITERATIONS:
- The option to play against another human or an AI.
- The ability to play the game on desktop and then resume game on phone (concurrent logins).
