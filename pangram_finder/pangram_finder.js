const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.split('')
}

PangramFinder.prototype.isPangram = function () {

}

module.exports = PangramFinder;
