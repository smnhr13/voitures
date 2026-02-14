const container = document.querySelector('.container');

voitures.forEach(voiture => {
    const card = document.createElement('div');
    card.classList.add('card');

    const h2 = document.createElement('h2');
    h2.textContent = voiture.titre;

    const img = document.createElement('img');
    img.src = voiture.image;
    img.alt = voiture.titre;

    const chevaux = document.createElement('p');
    chevaux.textContent = `Chevaux : ${voiture.chevaux}`;

    const prix = document.createElement('p');
    prix.textContent = `Prix : ${voiture.prix}`;

    const zeroCent = document.createElement('p');
    zeroCent.textContent = `0 à 100 km/h : ${voiture.zeroCent} secondes`;

    const moteur = document.createElement('p');
    moteur.textContent = `Moteur : ${voiture.moteur}`;

    const vitesseMax = document.createElement('p');
    vitesseMax.textContent = `Vitesse max : ${voiture.vitesseMax} km/h`;

    const nbApercu = document.createElement('p');
    nbApercu.textContent = `Nombre d'aperçus : ${voiture.nbApercu}`;

    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(chevaux);
    card.appendChild(prix);
    card.appendChild(moteur);
    card.appendChild(zeroCent);
    card.appendChild(vitesseMax);
    card.appendChild(nbApercu);

    container.appendChild(card);
});