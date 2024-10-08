const items = [
    "Coffee shop", "Grocery store", "Gym", "Park", "Library",
    "Restaurant", "Movie theater", "Bakery", "Pharmacy", "Post office"
];

const itemList = document.getElementById('itemList');

items.forEach(item => {
    const listItem = document.createElement('div');
    listItem.textContent = item;
    listItem.addEventListener('click', () => {
        alert(`You selected ${item}`);
        // Here you can add functionality to interact with the map
        toggleDropdown();
    });
    itemList.appendChild(listItem);
});

function toggleDropdown() {
    document.getElementById("itemList").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// hello