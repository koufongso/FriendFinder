/**
 * find the person in the friends list that has the minimum scores difference to a given person
 * @param {Array} friends a array that contain all the person info
 * @param {Object} person a given person
 * @returns an array that contain the matched person's index in the lsit and the difference
 */
function match(friends, person) {
    var scores = person.scores;
    var diffMin = Number.POSITIVE_INFINITY;
    var idMin = -1;
    for (var i = 0; i < friends.length; i++) {
        var diff = 0;
        var temp = friends[i].scores;
        for (var j = 0; j < temp.length; j++) {
            diff += Math.abs(parseInt(scores[j]) - parseInt(temp[j]));
        }
        if (diff < diffMin) {
            diffMin = diff;
            idMin = i;
        }
    }
    return [idMin,diffMin];
}

module.exports = match;