import exercise1Template from '../templates/exercise-1-statement.md';
import exercise2Template from '../templates/exercise-2-statement.md';
import exercise3Template from '../templates/exercise-3-statement.md';

export default class ExercisesEvaluator {

    constructor(exercisesList) {
        this.exercisePrefix = 'exercise';
        this.exerciseResultPrefix = `${this.exercisePrefix}-result`;
        this.exercisesList = exercisesList;
        this.exercisesTemplates = [
            exercise1Template,
            exercise2Template,
            exercise3Template
        ];
        this.isTimerRunning = false;
        this.intervalFunction = null;
        this.secondsElapsed = 0;
        this.initialize()
    }
    initialize() {
        this.exercisesTemplates
            .forEach((template, exerciseNumber) => {
                if(this.exercisesList[exerciseNumber]) {
                    const selector = `exercise-${exerciseNumber + 1}-statement`
                    document.getElementById(selector).innerHTML = template
                } else {
                    const selector = `exercise-${exerciseNumber + 1}-area`
                    document.getElementById(selector).innerHTML = ""
                }
            })
    }
    generateRandomColor() {
        const availableColors = [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'purple',
            'salmon',
            'magenta',
            'firebrick',
            'goldenrod',
            'springreen',
            'slateblue',
            'tan',
            'chocolate',
            'brown'
        ];
        return availableColors[ Math.trunc(Math.random() * availableColors.length) ];
    }
    updateTimer(reset) {
        const timerDiv = document.getElementById("exercise-timer");
        const minutesDiv = timerDiv.querySelector(".minutes");
        const secondsDiv = timerDiv.querySelector(".seconds");

        if(reset) {
            minutesDiv.textContent = "00";
            secondsDiv.textContent = "00";
            this.secondsElapsed = 0;
        } else {
            this.secondsElapsed++;
            if(this.secondsElapsed % 60 === 0) {
                minutesDiv.textContent = ("0" + this.secondsElapsed / 60).slice(-2);
                secondsDiv.textContent = "00";
            } else {
                secondsDiv.textContent = ("0" + this.secondsElapsed % 60).slice(-2);
            }
        }
    }
    toggleTimer() {
        if(this.isTimerRunning && this.intervalFunction) {
            this.updateTimer(true);
            this.isTimerRunning = false;
            clearInterval(this.intervalFunction);
        } else {
            this.isTimerRunning = true;
            this.intervalFunction = setInterval(() => this.updateTimer(), 1000);
        }
    }
    evaluate() {
        this.exercisesList
            .filter((execerciseExecutor) => execerciseExecutor)
            .forEach((execerciseExecutor, exerciseIndex) => {
                const sourceDivId = `${this.exercisePrefix}-${exerciseIndex + 1}`
                const resultDivId = `${this.exerciseResultPrefix}-${exerciseIndex + 1}`
                const mainParams = [ sourceDivId, resultDivId ].map(selector => document.getElementById(selector))

                switch (exerciseIndex) {
                    case 0:
                    case 1:
                        execerciseExecutor(...mainParams)
                        break
                    case 2:
                        mainParams[0]
                            .querySelector('#start-stop-button')
                            .addEventListener('click', () => this.toggleTimer());
                        execerciseExecutor(...mainParams, this.generateRandomColor)
                        break
                }
            })
    }
}
