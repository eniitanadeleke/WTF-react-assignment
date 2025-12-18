What is the document object in JavaScript?


When JavaScript runs in a web page, the browser turns the page into something called the DOM—Document Object Model.

i think of the DOM as a tree of everything on the page:

jvascript talks through the page through the DOM


The document object lets us do the following:

1, See what’s on the page

2, Change text, images, buttons, headings

3, Add or remove elements

Some simples are examples:

document.title           
document.body            
document.getElementById("x")

The document is the doorway into the page from JavaScript. we use it to read or change HTML after the page already loaded.

2) How to access specific elements in the DOM

There is always a neeed to pick out specific parts or the page, his is where the methods come in:

find something by ID
const header = document.getElementById("main-header")


IDs are unique. This means there’s only one with that name in the whole file

find many things by Class: we can fine as many thig as bossible using the same class name. e.g
const buttons = document.getElementsByClassName("btn").This gives you a list of all elements with the class "btn".

find many things by tag
const paragraphs = document.getElementsByTagName("p"). This finds all <p> tags.

modern way with CSS selectors
document.querySelector(".btn")
document.querySelectorAll("div.highlight")


querySelector This finds the first match

querySelectorAll this finds all that matches all matches (like a list)

This is the most flexible and commonly used method.

3) React Hooks — beginner cheatsheet

React hooks are functions you use inside React components that let you add special behavior. React replaced the old class system with hooks so your components could be simpler and more reusable.

the main ones is useState: this Lets you give a component memory.
Example:

const [name, setName] = useState("")


name is the current value

setName is the function to change it

If you call setName("John") the component updates automatically

Every time state changes, React redraws only what changed.

USE EFFECT: This Lets you run code after the component shows on screen.

Example:

useEffect(() => {
  console.log("component did mount")
}, [])


That [] means run only once.

If you put a variable in it, it runs every time that value changes.

Other common hooks

useContext: This  share values between components without passing props

useReducer This lets you handle advanced state logic

useCallback, useMemo This lets you optimize performance helpers

But the biggest ones newbies use first are:

 useState
useEffect

4) Introduction to React fundamentals

This guide explains React from the ground up.

React is a UI library

That means it helps you build user interfaces.

React thinks in terms of components — small reusable building blocks.
Example:
function Button() {
  return <button>Click me</button>
}


This is JSX — a mix of JavaScript and HTML-like syntax.

React turns this JSX into real DOM elements behind the scenes.

JSX: 

Looks like HTML inside JavaScript:

return (
  <div>
    <h1>Hello</h1>
  </div>
)


It’s not HTML — it gets compiled into JavaScript calls.

PROPS:
Props are how you pass data into components.

function Greeting(props) {
  return <h1>Hello {props.name}</h1>
}


You use it like:

<Greeting name="Eniitan" />

Components + State

React components can have state (memory), thanks to hooks like useState.

Example:

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  )
}


Every time you click the setCount() updates the number → the UI updates.













***Asssignment questions and answer***
Question 1: What is NPM?

NPM is a tool that comes with Node.js. It is used to install and manage packages in javascript projects.  React and vite are installed using Npm


Question 2: package.json?

package.json is a file created automatically in every Node.js or react project. it contains te following:
-The project name and version
-Scripts
-A list of dependencies(such as React and vite) and other project configuration details


Question 3: whatis vite?
vite is a modern frontend build tool used to createand run React application it is faster than old tools because
-It starts the development server instantly
-It reloads Quickly when you save changes
-It also builds the final project very fast








































































