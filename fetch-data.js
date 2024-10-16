document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('api-data');

    // Async function to fetch user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        try {
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a user list
            const userList = document.createElement('ul');

            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the list to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            dataContainer.textContent = 'Failed to load user data.';
        }
    }

    // Call the fetch function once the document is fully loaded
    fetchUserData();
});

