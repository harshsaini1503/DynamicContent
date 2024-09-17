document.getElementById('add-item').addEventListener('click', function () {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;

    if (itemName === '' || itemQuantity === '') {
        alert('Please enter both an item name and quantity.');
        return;
    }

    addItemToList(itemName, itemQuantity);
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
});

function addItemToList(name, quantity) {
    const ul = document.getElementById('shopping-list');

    const li = document.createElement('li');
    li.className = 'shopping-list-item';

    const itemDetails = document.createElement('span');
    itemDetails.textContent = `${name} - Quantity: ${quantity}`;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {
        editItem(li, name, quantity);
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        ul.removeChild(li);
    });

    li.appendChild(itemDetails);
    li.appendChild(editButton);
    li.appendChild(removeButton);

    ul.appendChild(li);
}

function editItem(itemElement, name, quantity) {
    const newName = prompt('Edit Item Name:', name);
    const newQuantity = prompt('Edit Quantity:', quantity);

    if (newName && newQuantity) {
        itemElement.firstChild.textContent = `${newName} - Quantity: ${newQuantity}`;
    }
}
