import collectionRef, { getDocuments } from "../Model/Firebase";

export const login = async (username, password) => {
    console.log('Login Submitted');
    console.log('Username:', username);
    console.log('Password:', password);

    console.log('Attempting login...');

    getDocuments().then(users => {
        if (!users || users.length === 0) {
            console.log('No matching user.');
            //console.log('Users length:', users.length);
            return;
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
                console.log('Login successful:', users[i]);
                return users[i];
            }
        }
        console.log('Password or username incorrect.');
    });
};