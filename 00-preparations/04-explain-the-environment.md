# Explain the Environment

In order to solve tasks and see examples from code, you need to have [Node.js](https://nodejs.org/download) installed.

> NOTE: on the `.rdp` virtual machines - you will NOT have to do this. Node.js is already installed over there.

_Node.js_ - is the runtime environment for _JavaScript_. Thanks to this environment, we can actually run our code and also see - what is happening on the `CONSOLE`.

_Node.js_ has an interpreter for JavaScript (the V8 engine from chromium), just as the browser (Chrome also have V8 as an Interpreter).

_Interpreter_ is the one thing really responsible for "Read and interpret" your code.

--- 

## TL;DR How to run my JavaScript ?

To run any code from the file, you need to have a file, with te code, for example:

`/sample-file.js`

```javascript
console.log('Hello from JavaScript!');
```

Then, using command line:
```shell
node sample-file.js
```

That's it.

### Things to keep in mind:

When you run command `node sample-file.js` the crucial part is - to be inside the folder where this file is.

The easiest option to achieve that is, by right-click on the folder where the file is, and click on `Open in Integrated Terminal` , then you will see, that inside the opened console, you will have a path, like:

```shell
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\workspace\sample-node> 
```

Here, you see that we are inside the path: `C:\workspace\sample-node`, so if your file `sample-file.js` is inside folder `sample-node` - the command:

```shell
PS C:\workspace\sample-node> node sample-file.js
```

Will work fine.

### Run file using path:

You can also be inside folder: `C:\workspace` - then you can also run the program if you will provide right path to it. So command will change to:

```shell
PS C:\workspace> node ./sample-node/sample-file.js
```

As you can se - the command with `node` + `path` DEPEND on place where You are in folder tree structure.

### How system recognize `node` program / command?

`node` + `path` will work, when (AND ONLY when) you have [Node LTS](https://nodejs.org/en/) installed on your system.
