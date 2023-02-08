function solve() {
    let fnameElement = document.getElementById('fname');
    let lnameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');

    let btnAddWorker = document.getElementById('add-worker');
    btnAddWorker.addEventListener('click', addWorker);

    let tbodyInput = document.getElementById('tbody');
    let sumBudget = document.getElementById('sum');

    function addWorker(e) {
        e.preventDefault();

        let fname = fnameElement.value;
        let lname = lnameElement.value;
        let email = emailElement.value;
        let birth = birthElement.value;
        let position = positionElement.value;
        let salary = salaryElement.value;

        if (!fname || !lname || !email || !birth || !position || !salary) {
            return;
        }

        let tr = document.createElement('tr');

        let tdFname = document.createElement('td');
        tdFname.textContent = fname;
        tr.appendChild(tdFname);

        let tdLname = document.createElement('td');
        tdLname.textContent = lname;
        tr.appendChild(tdLname);

        let tdEmail = document.createElement('td');
        tdEmail.textContent = email;
        tr.appendChild(tdEmail);

        let tdBirth = document.createElement('td');
        tdBirth.textContent = birth;
        tr.appendChild(tdBirth);

        let tdPosition = document.createElement('td');
        tdPosition.textContent = position;
        tr.appendChild(tdPosition);

        let tdSalary = document.createElement('td');
        tdSalary.textContent = salary;
        tr.appendChild(tdSalary);

        let tdButton = document.createElement('td');

        let firedBtn = document.createElement('button');
        firedBtn.classList.add('fired');
        firedBtn.textContent = 'Fired';
        firedBtn.addEventListener('click', fired);
        tdButton.appendChild(firedBtn);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);
        tdButton.appendChild(editBtn);


        tr.appendChild(tdButton);

        tbodyInput.appendChild(tr);

        let currentSum = Number(sumBudget.textContent);
        let newBudget = currentSum + Number(salary);

        sumBudget.textContent = newBudget.toFixed(2);

        fnameElement.value = '';
        lnameElement.value = '';
        emailElement.value = '';
        birthElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';

        function edit(e) {
            let parentEdit = e.target.parentElement.parentElement;

            fnameElement.value = fname;
            lnameElement.value = lname;
            emailElement.value = email;
            birthElement.value = birth;
            positionElement.value = position;
            salaryElement.value = salary;

            let currentSum = Number(sumBudget.textContent);
            sumBudget.textContent = (currentSum - salaryElement.value).toFixed(2);

            parentEdit.remove();
        }

        function fired(e) {
            let parentFired = e.target.parentElement.parentElement;

            let currentSum = Number(sumBudget.textContent);
            sumBudget.textContent = (currentSum - salary).toFixed(2);

            parentFired.remove();
        }
    }
}
solve()