const playerArry = [];


function display(player) {

    if (playerArry.length > 5) {
        if (playerArry.length = 5) {
            alert('You cannot add 5 more players');
            return element.disabled = false;
        }
    }

    const tableBody = document.getElementById('player-table');
    tableBody.innerHTML = "";

    for (let i = 0; i < player.length; i++) {
        const name = playerArry[i].playerName;

        const tr = document.createElement("tr");
        tr.innerHTML =
            `
            <th>${1 + i} </th>
            <th>${name}  </td>
        `;
        tableBody.appendChild(tr);

    }

}


function selectedV(element) {

    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }
    playerArry.push(playerObj);

    display(playerArry);


    element.disabled = true;
}