document.getElementById('calculate-btn').addEventListener('click', function () {

    const perPlayerCostField = document.getElementById('per-player-coast');
    const perPlayerCostString = perPlayerCostField.value;
    const perPlayer = parseFloat(perPlayerCostString);

    const playerListNo = playerArry.length;

    const playerExpensesField = document.getElementById('player-expenses');
    const playerExpenses = perPlayer * playerListNo;
    playerExpensesField.innerText = playerExpenses;
})


document.getElementById('calculate-total').addEventListener('click', function () {
    const perPlayerCostField = document.getElementById('per-player-coast');
    const perPlayerCostString = perPlayerCostField.value;
    const perPlayer = parseFloat(perPlayerCostString);

    const playerListNo = playerArry.length;

    const playerExpensesField = document.getElementById('player-expenses');
    const playerExpenses = perPlayer * playerListNo;
    playerExpensesField.innerText = playerExpenses;


    const managerCostField = document.getElementById('manager-cost');
    const managerCostString = managerCostField.value;
    const manager = parseFloat(managerCostString);

    const coachCostField = document.getElementById('coach-cost');
    const coachCostString = coachCostField.value;
    const coach = parseFloat(coachCostString);

    const toatlFeild = document.getElementById('total-value');
    const totalValue = manager + coach + playerExpenses;
    toatlFeild.innerText = totalValue;
})
