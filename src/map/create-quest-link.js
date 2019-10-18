function createAdventureLink(quest) {
    const link = document.createElement('a');
    const img = document.createElement('img');
    img.setAttribute('src', './assets/main/' + quest.id + '.png');
    // img.src = 'assets/main/' + quest.image;
    
    link.classList.add('quest');

    const searchParams = new URLSearchParams();
    console.log(searchParams, 'search')
    searchParams.set('id', quest.id);
    link.href = 'quest.html?' + searchParams.toString();
    link.appendChild(img);

    return link;
}

export default createAdventureLink;