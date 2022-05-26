/**
 * @description - Task 6
 * @function studentHogwarts - Private method
 * @returns - Return object
 */

function studentHogwarts() {
    /**
     * Declare th private values
     * @var {Number} privateScore
     * @var {String} name
     */
    let privateScore = 0;
    let name = null;

    /**
     * @function changeScoreBy - Increments the score
     */
    function changeScoreBy(points) {
        privateScore = privateScore + points;
    }

    return {
        /**
         * Public methods returning objects
         * @function setName
         * @param {String} newName
         * ***********************************
         * @function rewardStudent
         * ***********************************
         * @function penalizeStudentd
         * ***********************************
         * @function getScore
         * @returns string
         */
        setName(newName) {
            name = newName;
        },

        rewardStudent() {
            changeScoreBy(1);
        },

        penalizeStudent() {
            changeScoreBy(-1);
        },
        getScore() {
            return name + ": " + privateScore;
        }
    }
}

/**
 * @var {Any} harry - student instance
 * @var {Any} draco - student instance
 */
let harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());