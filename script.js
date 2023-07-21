const dobEl = document.getElementById('dob');
const outputEl = document.getElementById('output');
const outputContainerEl = document.getElementById('output-conteiner');


function calculateAge() {
    let yyyy = dobEl.value.split('-')[0];
    let mm = dobEl.value.split('-')[1];
    let dd = dobEl.value.split('-')[2];

    function updateAge() {
        const birthDate = new Date(yyyy, mm - 1, dd);
        const currentDate = new Date();

        const ageInMilliseconds = currentDate - birthDate;
        const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
        const ageInMinutes = Math.floor(ageInSeconds / 60);
        const ageInHours = Math.floor(ageInMinutes / 60);
        const ageInDays = Math.floor(ageInHours / 24);
        const ageInMonths = Math.floor(ageInDays / 30.436875);
        const ageInYears = Math.floor(ageInDays / 365.25);

        const seconds = ageInSeconds % 60;
        const minutes = ageInMinutes % 60;
        const hours = ageInHours % 24;
        const days = ageInDays % 30.436875;
        const months = ageInMonths % 12;
        const years = ageInYears;

        let outputStr = `<span>${years}</span> years, <span>${months}</span> months, <span>${Math.floor(days)}</span> days, <span>${hours}</span> hours, <span>${minutes}</span> minutes, <span>${seconds}</span> seconds`;

        outputEl.innerHTML = outputStr;
    }

    updateAge();
    outputContainerEl.classList.remove('hide');
    outputContainerEl.classList.add('show');
    setInterval(updateAge, 1000);
}
