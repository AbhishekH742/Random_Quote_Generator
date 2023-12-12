
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const button = document.querySelector('.btn');

const quotes = [
    {
        quote: `
        “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
        person:`Marilyn Monroe`
    },
    {
        quote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        person:`Albert Einstein`
    }
    ,
    {
        quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
        person:`Bernard M. Baruch`
    }
    ,
    {
        quote:`We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.`,
        person:`Swami Vivekananda`
    }
    ,{
        quote:`Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.`,
        person:`A. P. J. Abdul Kalam`
    }
    ,{
        quote:`Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy it`,
        person:`Sai Baba`
    },{
        quote:`Good governance with good intentions is the hallmark of our government. Implementation with integrity is our core passion.`,
        person:`Narendra Modi`
    },
    {
        quote:`As long as you remain true to yourself and continue training with sincerity, nobody can stop you from achieving excellence`,
        person:`Milkha Singh`
    }
];

button.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText  = quotes[random].person;
})