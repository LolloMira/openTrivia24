class Trivia {
  constructor(category, type, difficulty, question, correctAnswer, incorrectAnswers) {
    this.category = category;
    this.type = type;
    this.difficulty = difficulty;
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.incorrectAnswers = incorrectAnswers;
  }

  getAllAnswers(){
    const allAnswers = [];
    allAnswers.push(this.correctAnswer);
    allAnswers.push(...this.incorrectAnswers);
    // for (const answ of this.incorrectAnswers) {
    //   allAnswers.push(answ);
    // }
    const shuffledArray = Utility.shuffleArray(allAnswers);
    return shuffledArray;
  }


  checkAnswer(answer){
    console.log(this.correctAnswer);
    console.log(answer);
    console.log('ok');
    let correct = this.decodeHtml(this.correctAnswer)
    console.log(correct);
    if (answer === correct.trim()) {
      console.log("yes")
      return 1;
    } else {
      console.log("no")
      return 0;
    }
  }

  decodeHtml(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
}
