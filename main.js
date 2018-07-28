magic8Ball = [
'It is certain',
'It is decidedly so',
'Without a doubt',
'Yes, definitely',
'You may rely on it',
'As I see it, yes',
'Most likely',
'Outlook good',
'Yes',
'Signs point to yes',
'Reply hazy try again',
'Ask again later',
'Better not tell you now',
'Cannot predict now',
'Concentrate and ask again',
'Don\'t count on it',
'My reply is no',
'My sources say no',
'Outlook not so good',
'Very doubtful',
];

let randomIndex = (length) => {
  return Math.floor((Math.random() * length));
};

console.log(magic8Ball[randomIndex(magic8Ball.length)]);

console.log(magic8Ball[0]);

console.log(magic8Ball[magic8Ball.length - 1]);

console.log('====');

for(let i = 0; i < 10; i++) {
  console.log(magic8Ball[i]);
}

console.log('====');

for(let i = 10; i < magic8Ball.length; i++) {
  console.log(magic8Ball[i]);
}

console.log('====');

magic8Ball.unshift('Listen, no');
magic8Ball.splice(10, 0, 'yeah yeah yeah');
magic8Ball.push('Hell no');

console.log(magic8Ball);

magic8Ball[0] ='Ask again later';
console.log(magic8Ball);
