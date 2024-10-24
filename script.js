
const exerciseInterface = (exerciseDivId) => {
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

    [1, 2].forEach(val => {
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
    selectBox.value = 2;

    // adds 2
    addInputs(2)

    // updates the number of fields based on the new value of selectBox.value
    selectBox.addEventListener('change', () => {
        // selectbox is able to "dynamically" be updated based on new value
        addInputs(selectBox.value)
    });
};

exerciseInterface("squat");

exerciseInterface("bench");

//TURN INTO FUNCTION
document.getElementById('submitBtn').addEventListener('click', () => {
    const formContainer = document.getElementById('squat');
    // START FROM HERE
    // extract the set number somehow
    // perhaps queryselectorall(rows) since we know that num rows is
    // dependent on selected sets
    // skip NA fields
    const rows = formContainer.querySelectorAll('.row');

    const setNum = []
    const weights = []
    const reps = []
    rows.forEach((row, idx) => {
        const inputs = row.querySelectorAll('input');

        setNum.push(idx + 1)

        inputs.forEach(input => {
            if (input.id.includes('Weight')) {
                weights.push(Number(input.value));
            } else if (input.id.includes('Reps')) {
                reps.push(Number(input.value));
            }
        });
    });
    const workoutData = {
        "SET": setNum,
        "WEIGHT": weights,
        "REPS": reps
    };
    console.log(workoutData)

    // create an array for all exercises?
    /*
    {
        "squat" {
            set {
                [1, 2, 3]
            }
            weight {
                [50,60,70]
            }
        }
            reps {
                [10,10,10]
        }
    }
    how will it be stored in the data base??

    WORKOUT_DATE    EXERCISE    SET     WEIGHT  REPS
    2024-10-23      "squat"     5       50      10
    2024-10-23      "deadlift"  3       100     8

            */
});


