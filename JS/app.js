let contacts = [
    {
        name: "Ali",
        number: "9005000000000"
    },
    {
        name: "Veli",
        number: "9005000000001"
    },
    {
        name: "Hale",
        number: "9005000000002"
    },
    {
        name: "Jale",
        number: "9005000000003"
    }
];

document.getElementById("searchButton").addEventListener("click", () => { printSearchResult(contacts) });

document.getElementById("addNewContactButton").addEventListener("click", () => { addNewContact(contacts) });

document.getElementById("removeContactButton").addEventListener("click", () => { removeContact(contacts) });


// Kisileri aramak icin

function search(contacts) {
    keyWord = prompt("Enter a name or number").trim().toUpperCase(); // Kullanıcıdan girdi al
    let searchResult = contacts.filter(function (contact) {
        return (
            contact.name.toUpperCase().includes(keyWord) ||
            contact.number.toUpperCase().includes(keyWord)
        );
    });
    return searchResult;
}

// Kisileri konsola yazdirmak icin

function printSearchResult(contacts) {
    let searchResult = search(contacts);
    if (searchResult.length > 0) {
        searchResult.forEach(function (contact) {
            console.log("|" + contact.name + "|" + contact.number);
        });
    } else {
        alert("Can't find the contact");
    }

}

// Yeni kisi eklemek icin

function addNewContact(contacts) {
    newName = prompt("Enter a name").trim().toUpperCase(); // Kullanıcıdan girdi al
    newNumber = prompt("Enter a number").trim().toUpperCase(); // Kullanıcıdan girdi al
    contacts.push({ name: newName, number: newNumber });
    alert("Added a New Contact")
    console.log(contacts)
}

// Kisi silmek icin

function removeContact(contacts) {
    keyWord = prompt("Enter a name or number").trim().toUpperCase(); // Kullanıcıdan girdi al
    contacts = contacts.filter(contact =>
       !( contact.name.toUpperCase().includes(keyWord) ||
        contact.number.toUpperCase().includes(keyWord)) 
    );
    alert("The Contact deleted")
    console.log(contacts);

}