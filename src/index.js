import readlineSync from 'readline-sync';

const { log } = console;
const { question: askUser } = readlineSync;

const play = ({ description, getGameData }) => {
  const roundsCount = 3;

  log('Welcome to the Brain games!');
  const userName = askUser('May I Have your name ? ');
  log(`Hello ${userName}`);
  log(description);

  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, answer } = getGameData();
    const userAnswer = askUser(`Question: ${question} `);

    if (userAnswer !== answer) {
      log(
        ` "${userAnswer}" is a wrong answer ;(. Correct answer was "${answer}".)`,
      );
      log(`Let's try again, ${userName}!`);
      return;
    }

    log('Correct!');
  }

  log(`Congratulations, ${userName}!`);
};

export default play;
