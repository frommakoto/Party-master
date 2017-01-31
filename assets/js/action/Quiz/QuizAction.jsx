/**
 * QuizAction.jsx
 *
 * Description:
 *   Action file for quiz page
 *
 * Author:
 *   @sota1235
 */

export default class QuizAction {
  constructor(emitter, socket) {
    this.emitter = emitter;
    this.socket  = socket;
    this.socket.on('open',        this.displayQuiz.bind(this));
    this.socket.on('vote',        this.voteQuiz.bind(this));
    this.socket.on('answerCheck', this.answerCheck.bind(this));
    this.socket.on('openAnswer',  this.openAnswer.bind(this));
    this.socket.on('finish',      this.finishQuestion.bind(this));
  }
  displayQuiz(id) {
    this.emitter.emit('displayQuiz', id);
    this.emitter.emit('start_sound'); // for audio
  }
  voteQuiz(index) {
    console.log(`vote: ${index}`);
    this.emitter.emit('voteQuiz', index);
  }
  answerCheck() {
    console.log('answer check');
    this.emitter.emit('answerCheck');
    this.emitter.emit('answer_check_sound'); // for audio
  }
  openAnswer(index) {
    console.log(`open answer: ${index}`);
    this.emitter.emit('openAnswer', index);
    this.emitter.emit('open_answer_sound'); // for audio
  }
  finishQuestion() {
    console.log('finish quiz');
    this.emitter.emit('finishQuestion');
  }
}
