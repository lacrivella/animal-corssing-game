function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        animal: formData.get('animal'),
        bells: 100,
        friendship: 5
    };
    return user;
}

export default makeUser;