let team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founer & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
]

const cards_list = document.getElementById('cards');

for (let i = 0; i<team.length; i++){
    let member = team[i];

    console.log(`${member.nome} - ${member.ruolo} - ${member.foto}`);

    cards_list.innerHTML += `
    <img src="./img/${member.foto}" width="200px"/>
    <p>${member.nome}</p>
    <p>${member.ruolo}</p>
    `
}


