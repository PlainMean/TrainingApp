function init() {
    console.log("RUNNING")
    addExercise("squat")
    addExercise("bench")
    // addExercise("deadlift")
}

init()

function postRequest(data) {
    const url = "http://127.0.0.1:8000/exercise_set/";

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function addExercise(exercise) {
    addExInterface(exercise)
    addExListener(exercise)
}

function addExInterface(exerciseDivId) {
    var name = exerciseDivId
    console.log(name)
    const exerciseDiv = document.getElementById(exerciseDivId)

    // create title
    const label = document.createElement('label');
    var labelId = `${name}Count`;
    label.setAttribute('for', labelId);
    label.textContent = name + " ";

    exerciseDiv.appendChild(label)

    // create selection
    const selectBox = document.createElement('select');
    selectBox.className = "exercise"

    // why is this not added even though its in the style????
    selectBox.style.cursor = "pointer"

    exerciseDiv.appendChild(selectBox);

    [3, 5, 8].forEach(val => {
        const option = document.createElement('option');
        option.value = val;
        option.textContent = val;
        // the flow is create div -> create other element -> append to div
        // -> create other element -> append to other elment -> and so on ...
        selectBox.appendChild(option);
    });

    const addInputs = (count) => {

        // Removes all existing rows before writing
        exerciseDiv.querySelectorAll('div').forEach(rowDiv => rowDiv.remove());

        for (let i=0; i < count; i++) {
            const rowDiv = document.createElement('div')
            rowDiv.style.display = 'flex';
            rowDiv.style.justifyContent = 'center';
            rowDiv.className = 'row'

            // which set
            const num = document.createElement('p');
            num.textContent = i + 1
            num.className = 'small'

            // weight input
            const weightInput = document.createElement('input');
            weightInput.type = 'text';
            weightInput.placeholder = `set ${i + 1}`;
            weightInput.className = 'box';
            weightInput.id = `${name}WeightSet${i}`;

            // kg
            const weight = document.createElement('p');
            weight.textContent = 'KG'
            weight.className = 'small'

            // reps input
            const repsInput = document.createElement('input');
            repsInput.type = 'text';
            repsInput.placeholder = `set ${i + 1}`;
            repsInput.className = 'box';
            repsInput.id = `${name}RepsSet${i}`;

            // reps
            const reps = document.createElement('p');
            reps.textContent = 'Reps'
            reps.className = 'small'



            rowDiv.appendChild(num);
            rowDiv.appendChild(weightInput);
            rowDiv.appendChild(weight);
            rowDiv.appendChild(repsInput);
            rowDiv.appendChild(reps);

            exerciseDiv.appendChild(rowDiv);
        };
    }

    // this only runs once in the beginning?
    selectBox.value = 3;

    // adds 2
    addInputs(2)

    // updates the number of fields based on the new value of selectBox.value
    selectBox.addEventListener('change', () => {
        // selectbox is able to "dynamically" be updated based on new value
        addInputs(selectBox.value)
    });
};


function addExListener (exerciseId) {
    document.getElementById('submitBtn').addEventListener('click', () => {
        const formContainer = document.getElementById(exerciseId);
        const rows = formContainer.querySelectorAll('.row');

        const setNum = []
        const weights = []
        const reps = []

        const getCurrentDate = () => {
            const date = new Date();
            return date.toISOString().split('T')[0]; // YYYY-MM-DD format
        };

        const currentDate = getCurrentDate();


        rows.forEach((row, idx) => {
            const inputs = row.querySelectorAll('input');

            var set = idx + 1
            setNum.push(set)

            var weight;
            var rep;

            inputs.forEach(input => {
                if (input.id.includes('Weight')) {
                    weights.push(Number(input.value));
                    // one is temporary
                    weight = Number(input.value)
                } else if (input.id.includes('Reps')) {
                    reps.push(Number(input.value));
                    // one is temporary
                    rep = Number(input.value)
                }
            });

            const data = {
                time: currentDate,  // Use the desired date in ISO format
                name: exerciseId,
                weight: weight,
                set: set,
                reps: rep
            };
            // ! one post request for each set in the loop
            postRequest(data)
        });
        // const workoutData = {
        //     "SET": setNum,
        //     "WEIGHT": weights,
        //     "REPS": reps
        // };
        // console.log(workoutData)


    });

}

/*
WORKOUT_DATE    EXERCISE    SET     WEIGHT  REPS
2024-10-23      "squat"     5       50      10
2024-10-23      "deadlift"  3       100     8
*/

