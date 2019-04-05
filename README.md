# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.

The .forEach doesn't return anything.  For each array element it will call the function, and when it's finished, it's done.  I think .forEach is a good general tool if touching each element in an array is important.

The .map also calls the function and passes through each array element, but it will build a new array with the values.  Map is great for changing elements in an array. For instance, in the case of numbers, multiplying each number by something like 3 and returning a new array with the changes.


2. What is the difference between a function and a method?

  A method is a function inside of an object, or should I say within the scope of an object.  So I guess one could say a method works implicitly inside the object it is called in.

  A function is called by name.  Perhaps one could say a method is too, but I think the difference is that a function doesn't have  an object associated with it. 

3. What is closure?

  This is where an inner function has access to an outer function that encapsulates it.  Maybe it would be better to say it's a function that is inside the scope of another function and has access to its variables.


4. Describe the four rules of the 'this' keyword.

   I will have to create an example to help with these answers.

   First: Global context.  When in the global scope, the value of 'this' will be in the window/console Object.

   Second: Implicit binding.  Whenever a function is called by a preceding dot, the object left of the dot gets “this”.  myDog gets “this”.

		const myDog = {
            greeting: “Woof”;
            dogTalk: function(food){
 		    console.log(`${this.dogTalk}, I like ${food}`	
		  }
        };
         myDog.greeting(‘bones’);

    Third: New Binding. Whenever a constructor function is used, ‘this’ refers to the specific instance of the object that is created and returned by the constructor function.  ‘This’ is referring to peter and sally.

		function Person(name){
  		   this.name = name;
           this.talk = function() {
  			console.log(this.name + ‘ is having fun’);
          }
		}
		const peter = new Person(‘Peter’);
        const sally = new Person(‘Sally’);


     Fourth: Explicit Binding.  When Javascript’s call or apply method is used, ‘this’ is explicitly defined.  This can been seen using .call, .apply, or .bind. In this case, peter and sally will switch.

		function Person(name){
  		    this.name = name;
            this.talk = function() {
  			console.log(this.name + ‘ is having fun’);
          }
		}
		const peter = new Person(‘Peter’);
        const sally = new Person(‘Sally’);

        peter.talk.call(sally);
        sally.talk.call(peter);




5. Why do we need super() in an extended class?

    Super is used to access and call functions on an object’s parent.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
