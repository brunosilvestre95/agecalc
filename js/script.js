
function calculate() {
    const dayInput = document.getElementById('days').value;
    const monthInput = document.getElementById('months').value;
    const yearInput = document.getElementById('years').value;

    const dayError = document.getElementById('day-error');
    const monthError = document.getElementById('month-error');
    const yearError = document.getElementById('year-error');

    // limpar msg de error
    dayError.textContent = '';
    monthError.textContent = '';
    yearError.textContent = '';

    const today = new Date();
    const birthDate = new Date(yearInput, monthInput - 1, dayInput);

    let hasError = false;

    // datas válidas
    if (dayInput < 1 || dayInput > new Date(yearInput, monthInput, 0).getDate()) {
        dayError.textContent = 'Must be a valid day';
        hasError = true;
    }
    if (monthInput < 1 || monthInput > 12) {
        monthError.textContent = 'Must be a valid month';
        hasError = true;
    }
    if (yearInput > today.getFullYear()) {
        yearError.textContent = 'Must be in the past';
        hasError = true;
    } else if (yearInput < 0) {
        yearError.textContent = 'Must be a valid year';
        hasError = true;
    }

    // interromper cálculo caso tenha algum erro
    if (hasError) {
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // calculo de dias/meses se o dia ainda não chegou esse mês
    if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    //resultados
    document.getElementById('yresult').textContent = `${years} Years`;
    document.getElementById('mresult').textContent = `${months} Months`;
    document.getElementById('dresult').textContent = `${days} Days`;
}

