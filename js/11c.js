 const greeting = ['good morning', 'goood afternoon', 'good evening'];

 console.log(greeting);

 let swapGreeting = greeting[0];

 greeting[0] = greeting[greeting.length - 1];

 greeting[greeting.length - 1] = swapGreeting

 console.log(greeting);