const { BayesClassifier } = require('natural');
const classifier = new BayesClassifier();

/* Adding data set using addDocument method */
classifier.addDocument('I don\'t feel good ', 'weak');
classifier.addDocument('I am positive', 'confident');
classifier.addDocument('it\' great to be here', 'confident');
classifier.addDocument('I can do this', 'confident');
classifier.addDocument('I am going to leave', 'weak');
classifier.addDocument('Maybe', 'weak');
classifier.addDocument('negative', 'weak');
classifier.addDocument('possible', 'weak');
classifier.addDocument('will', 'confident');
classifier.addDocument('should', 'confident');
classifier.addDocument('I got this', 'confident');
classifier.addDocument('we are excited', 'confident');
classifier.addDocument('I know what I am doing', 'confident');
classifier.addDocument('I have a strong feeling', 'confident');
classifier.addDocument('are you sure', 'weak');
classifier.addDocument('I am out', 'weak');
classifier.addDocument('there is no solution', 'weak');
classifier.addDocument('the path looks blurry', 'weak');
classifier.addDocument('I feel good about this', 'confident');
classifier.addDocument('I have done this a million times', 'confident');
classifier.addDocument('I have the information I need', 'confident');

/* train the model */
classifier.train();

/* get the output printed */
console.log(classifier.classify('the potion could possibly work')); // weak
console.log(classifier.classify('I\'m feeling excited')); // confident