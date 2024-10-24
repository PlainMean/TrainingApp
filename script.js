
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

document.getElementById('submitBtn').addEventListener('click', () => {
    const formContainer = document.getElementById('squat');
    // START FROM HERE
    // extract the set number somehow
    // perhaps queryselectorall(rows) since we know that num rows is
    // dependent on selected sets
    // skip NA fields
    const inputs = formContainer.querySelectorAll('input');
    console.log(inputs)

    const formData = {};
    inputs.forEach((input, idx) => {
        // console.log(input)

        formData['set'] = idx;
        if (input.id.includes('Weight')) {
            formData['weight'] = input.value;
        } else if (input.id.includes('Reps')) {
            formData['reps'] = input.value;
        }
    });

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
    console.log(formData);
});



// exerciseCreator = (name, setsCount) => {
//     const label = document.createElement('label');
//     var selectId = `${name}Count`;
//     label.setAttribute('for', selectId);
//     label.textContent = name + " ";

//     const select = document.createElement('select');
//     select.id = selectId;
//     select.className = 'setsCount';

//     setsCount.forEach(val => {
//         const option = document.createElement('option');
//         option.value = val;
//         option.textContent = val;
//         select.appendChild(option);
//     });

//     const container = document.createElement('div');
//     container.id = selectId + "Div";
//     container.classList.add('custom-text');
//     container.appendChild(label);
//     container.appendChild(select);

//     document.getElementById(selectId).addEventListener(
//         'change', () => generateBoxes(name, setsCount)
//     );

//     return container;
// }

// document.getElementById('squat').appendChild(exerciseCreator('squat', [3,5,8]));

// // create a div


// generateBoxes = (exercise, countId) => {

//     const num = parseInt(document.getElementById(countId).value);
//     const excerciseContainer = document.getElementById(exercise);

//     const boxesContainer = document.createElement('div');
//     boxesContainer.innerHTML = ''; // Clear previous boxes

//     excerciseContainer.appendChild(boxesContainer)

//     for (let i = 1; i <= num; i++) {
//         const row = document.createElement('div');

//         row.style.display = 'flex';
//         row.style.justifyContent = 'center';

//         const setNum = document.createElement('p');
//         setNum.textContent = i
//         setNum.className = 'small'

//         const weight = document.createElement('input');
//         weight.className = 'box';

//         const textWeight = document.createElement('p')
//         textWeight.textContent = 'KG'
//         textWeight.className = 'small'

//         const reps = document.createElement('input');
//         reps.className = 'box';
//         const textReps = document.createElement('p')
//         textReps.textContent = 'Reps'
//         textReps.className = 'small'

//         row.appendChild(setNum);
//         row.appendChild(weight);
//         row.appendChild(textWeight);
//         row.appendChild(reps);
//         row.appendChild(textReps);
//         boxesContainer.appendChild(row);
//     }
// }


// // generateBoxes();
