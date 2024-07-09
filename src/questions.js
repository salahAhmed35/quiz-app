export const Questions = [
  {
    "question": "What is the output of the following code: \n\nconsole.log(0.1 + 0.2 === 0.3);",
    "answers": [
      "true",
      "false",
      "undefined",
      "NaN"
    ],
    "correctAnswer": 1
  },
  {
    "question": "What does the 'useReducer' hook return?",
    "answers": [
      "An array with state and a dispatch function",
      "A function and an array",
      "A state and a setState function",
      "A reducer function and an initial state"
    ],
    "correctAnswer": 0
  },
  {
    "question": "In React, what is the purpose of 'React.memo'?",
    "answers": [
      "To memoize the result of a function",
      "To optimize performance by preventing unnecessary re-renders",
      "To create a higher-order component",
      "To manage state in functional components"
    ],
    "correctAnswer": 1
  },
  {
    "question": "What is the output of the following code: \n\nconsole.log([] + []);",
    "answers": [
      "[]",
      "undefined",
      "'' (empty string)",
      "null"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Which method is used to update the state in a class component?",
    "answers": [
      "this.setState",
      "this.updateState",
      "this.changeState",
      "this.modifyState"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What will be the value of 'a' after the following code executes?\n\nconst a = [...new Set([1, 2, 2, 3, 4, 4])];",
    "answers": [
      "[1, 2, 2, 3, 4, 4]",
      "[1, 2, 3, 4]",
      "[1, 3, 4]",
      "undefined"
    ],
    "correctAnswer": 1
  },
  {
    "question": "In React, what does the 'useEffect' hook return?",
    "answers": [
      "A cleanup function",
      "A value",
      "A state variable",
      "Nothing"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Which of the following is true about 'Context' in React?",
    "answers": [
      "Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
      "Context is a way to manage state in React applications.",
      "Context is used for handling side effects in React components.",
      "Context is a lifecycle method in class components."
    ],
    "correctAnswer": 0
  },
  {
    "question": "What will be the output of the following code?\n\nconst promise = new Promise((resolve, reject) => resolve(1));\npromise.then((value) => console.log(value)).finally(() => console.log('finally'));",
    "answers": [
      "1",
      "finally",
      "1 finally",
      "finally 1"
    ],
    "correctAnswer": 2
  },
  {
    "question": "What is the output of the following code: \n\nconsole.log(typeof null);",
    "answers": [
      "'object'",
      "'null'",
      "'undefined'",
      "'string'"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a 'closure' in JavaScript?",
    "answers": [
      "A function combined with its lexical environment",
      "A function that takes another function as an argument",
      "A function that returns another function",
      "A function that runs asynchronously"
    ],
    "correctAnswer": 0
  },
  {
    "question": "In React, how can you prevent a component from re-rendering?",
    "answers": [
      "Using shouldComponentUpdate lifecycle method",
      "Using PureComponent or React.memo",
      "Both of the above",
      "None of the above"
    ],
    "correctAnswer": 2
  },
  {
    "question": "What is the purpose of 'keys' in React?",
    "answers": [
      "To uniquely identify elements in an array",
      "To store state in components",
      "To handle events",
      "To define component lifecycle methods"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What will be the output of the following code?\n\nlet foo = 'Hello';\n(function() {\n  console.log(foo);\n  let foo = 'World';\n  console.log(foo);\n})();",
    "answers": [
      "Hello World",
      "undefined World",
      "ReferenceError",
      "Hello undefined"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is true about 'React.Fragment'?",
    "answers": [
      "It can only have one child",
      "It allows a component to return multiple elements",
      "It can take props",
      "It is used to memoize a component"
    ],
    "correctAnswer": 1
  },
  {
    "question": "What will be the value of 'b' after the following code executes?\n\nconst obj = { a: 1 };\nconst b = { ...obj, a: 2 };",
    "answers": [
      "{ a: 1 }",
      "{ a: 2 }",
      "undefined",
      "{ a: 1, a: 2 }"
    ],
    "correctAnswer": 1
  },
  {
    "question": "In React, what is the purpose of 'useRef' hook?",
    "answers": [
      "To persist values across renders",
      "To reference a DOM element",
      "To store a mutable value",
      "All of the above"
    ],
    "correctAnswer": 3
  },
  {
    "question": "What is the output of the following code: \n\nconsole.log([1, 2] + [3, 4]);",
    "answers": [
      "'1,23,4'",
      "'1,2,3,4'",
      "'1 2 3 4'",
      "'1234'"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following statements about React hooks is true?",
    "answers": [
      "Hooks can be called conditionally",
      "Hooks can be called from class components",
      "Hooks can be called inside loops",
      "Hooks can be called at the top level of functional components"
    ],
    "correctAnswer": 3
  },
  {
    "question": "What will be the output of the following code?\n\nconsole.log(typeof NaN);",
    "answers": [
      "'number'",
      "'NaN'",
      "'undefined'",
      "'object'"
    ],
    "correctAnswer": 0
  }
]
