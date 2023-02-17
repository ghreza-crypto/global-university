const lecturers = [
    {
        img: './assets/images/lecturers/1.png',
        lecturersName: 'Lochia Bengali',
        description1: 'Lochia professor of entrepreneurial legal studies at Harvard University',
        description2: 'He joint the Harvard since 2000 and published his first book at 2001'
    },
    {
        img: './assets/images/lecturers/2.png',
        lecturersName: 'Soong Noh',
        description1: 'Soong is one of legal doctors at Global University',
        description2: 'She joint the Global since 2005 and teaches here BBA'
    },
    {
        img: './assets/images/lecturers/3.png',
        lecturersName: 'Lila Trevino',
        description1: 'Lila is one of legal doctors at Global University',
        description2: 'She joint the Global since 2005 and teaches here BBA'
    },
    {
        img: './assets/images/lecturers/4.png',
        lecturersName: 'Lochia Bengali',
        description1: 'Lochia professor of entrepreneurial legal studies at Harvard University',
        description2: 'He joint the Harvard since 2000 and published his first book at 2001'
    },
    {
        img: './assets/images/lecturers/5.png',
        lecturersName: 'Soong Noh',
        description1: 'Soong is one of legal doctors at Global University',
        description2: 'She joint the Global since 2005 and teaches here BBA'
    },
    {
        img: './assets/images/lecturers/6.png',
        lecturersName: 'Lila Trevino',
        description1: 'Lila is one of legal doctors at Global University',
        description2: 'She joint the Global since 2005 and teaches here BBA'
    }
];
const lecturersContainer=document.getElementById('lecturersContainer');
lecturers.forEach((lecturer) => {
    let html = `<div class="lecturersWrapper">
<img src="${lecturer.img}" alt="lecturers">
<div class="lecturersDescription">
    <h3>${lecturer.lecturersName}</h3>
    <p>${lecturer.description1}</p>
    <div class="line2"></div>
    <p>${lecturer.description2}</p>
</div>
</div>`;
lecturersContainer.insertAdjacentHTML('afterbegin',html);
});