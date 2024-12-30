const memes = 'Memes/';
const JPG = '.jpg';
const images = [
    "1a55a", "1agnf", "1bgw", "1bim", "1buxli", "1dz4xa", "1h7in3", "1hj6i2", "1j1pyb", "1j7rqt",
    "1joc8h", "1otk96", "2atw8c", "2b5p", "2fm6x", "2hgfw", "2p3dw0", "2pkdw4", "2so1le", "2wifvo",
    "2yn2xy", "2z9ixy", "2zj3", "2zxa17", "3bdd27", "3e5sun", "3ho6l0", "3jgukd", "3lmzyx", "3m5mp",
    "3si4", "3u04h5", "4bh6h", "4rylcm", "5blorg", "5mir21", "5o32tt", "5tbqc0", "6mkg", "6woq7y",
    "7bk2", "7bv2j9", "7iskwn", "8d317n", "8gmiw7", "8h0c8", "8p0a", "9au02y", "14wa6i", "18ps27",
    "26am", "26hb", "29gymp", "29s5ao", "30r1af", "31e42m", "33rsw", "33t1zc", "35fmu0", "39osmx",
    "39t1o", "45oewu", "49a5w7", "51s5", "56p56k", "64sz4u", "65exzi", "70op6j", "75awb", "86vlk",
    "91i10d", "96v08g (1)", "96v08g", "145qvv", "475uja", "89148o", "amuvy", "brbbk", "c6kz",
    "ca3z3", "e8gx0", "ehuy4", "ere3z", "g9odq", "gk5el", "h62sv", "hafl", "lntct", "of959", "p0a19",
    "ph0di", "qiev6", "qkbjv", "sa", "wczz", "z55dp"
];

function generateRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageElement = document.getElementById('randomMeme');
    imageElement.src = `${memes}${images[randomIndex]}${JPG}`;
    imageElement.style.display = 'block';
}

document.getElementById('random').addEventListener('click', generateRandomImage);
