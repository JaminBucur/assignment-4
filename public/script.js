function showAddProfileModal() {
    var addProfileModal = new bootstrap.Modal(document.getElementById('addProfileModal'));
    addProfileModal.show();
}

function submitAddProfile() {
    var username = document.getElementById('add-username').value;
    var password = document.getElementById('add-password').value;
    var email = document.getElementById('add-email').value;

    fetch('/createProfile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: email
        })
    })
        .then(response => {
            if (response.ok) {
                location.reload();
            } else {
                console.error('Error adding profile');
            }
        })
        .catch(error => console.error('Error adding profile:', error));

    var addProfileModal = bootstrap.Modal.getInstance(document.getElementById('addProfileModal'));
    addProfileModal.hide();
}

function deleteProfile(username) {
    fetch('/deleteProfile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username
        })
    }).then(location.reload());
}
function editUser(username, password, email) {
    document.getElementById('edit-username').value = username;
    document.getElementById('edit-password').value = password;
    document.getElementById('edit-email').value = email;
    var myModal = new bootstrap.Modal(document.getElementById('editUserModal'));
    myModal.show();
}
function submitEdit() {
    var username = document.getElementById('edit-username').value;
    var password = document.getElementById('edit-password').value;
    var email = document.getElementById('edit-email').value;

    fetch('/editProfile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: email
        })
    }).then(location.reload());

    myModal.hide();
}