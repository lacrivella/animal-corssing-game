function createChoice(choice) {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    const description = document.createElement('span');
    radio.type = 'radio';
    radio.name = 'choice';
    description.textContent = choice.description;
    //add radio.value = choice.id
    radio.value = choice.id;

    label.appendChild(radio);
    label.appendChild(description);
    return label;
}

export default createChoice;