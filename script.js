const question = document.getElementById('question');
const image = document.getElementById('valentine-image');
const pleaText = document.getElementById('plea-text');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

const noResponses = [
  {
    question: 'Are you suuure babyluv? 🥺',
    plea: 'I can do your dishes for a week... maybe two.',
    image: 'https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif',
    alt: 'Puppy making pleading eyes'
  },
  {
    question: 'Babiegang Pretty please with extra sprinkles? 🍓',
    plea: 'I even practiced my cutest face just for this moment.',
    image: 'https://media.giphy.com/media/l0HlK8p0RkW6uS6gM/giphy.gif',
    alt: 'Cute cat begging lovingly'
  },
  {
    question: 'Don’t break my tiny heart 💔 I am literally your baby',
    plea: 'Look! Tiny bear holding a tiny love letter.',
    image: 'https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif',
    alt: 'Adorable bear with heart'
  },
  {
    question: 'Last chance to save me from sadness 😭',
    plea: 'I promise unlimited hugs and forehead kisses.',
    image: 'https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif',
    alt: 'Crying cute animal asking for love'
  }
];

const yesResponse = {
  question: 'YAYYYYY! You made me the happiest ever! 💞',
  plea: 'Best. Valentine. Ever. I adore you! ✨',
  image: 'https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif',
  alt: 'Happy dancing cute animals celebrating'
};

let noClickCount = 0;

noBtn.addEventListener('click', () => {
  const step = noResponses[noClickCount % noResponses.length];
  noClickCount += 1;

  question.textContent = `${step.question} (No count: ${noClickCount})`;
  pleaText.textContent = step.plea;
  image.src = step.image;
  image.alt = step.alt;

  const growth = Math.min(noClickCount * 8, 200);
  yesBtn.style.transform = `scale(${1 + growth / 100})`;
  yesBtn.textContent = `Yes 💘${'!'.repeat(Math.min(noClickCount, 8))}`;
});

yesBtn.addEventListener('click', () => {
  question.textContent = yesResponse.question;
  pleaText.textContent = yesResponse.plea;
  image.src = yesResponse.image;
  image.alt = yesResponse.alt;

  yesBtn.textContent = 'You said YES! 💍';
  yesBtn.disabled = true;
  noBtn.disabled = true;
  noBtn.textContent = 'Nope (retired)';

  yesBtn.style.transform = 'scale(1.05)';
});
