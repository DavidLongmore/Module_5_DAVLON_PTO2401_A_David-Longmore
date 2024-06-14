// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Topia Twins", artist: "Travis Scott", genre: "Rap" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Pressure", artist: "Rob49", genre: "Rap" },
    { title: "Company", artist: "24k Golden", genre: "R&B" },
    { title: "Stats", artist: "Baby Keem", genre: "Rap" },
    { title: "Bet", artist: "Octavian", genre: "Rap" },
    { title: "Kolomental", artist: "Victony", genre: "Afro" }
];



const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rap",
    "Groot": "Afro"
};


function generatePlaylist(guardians, songs) {
    return Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preferredGenre);
        return { guardian, playlist };
    });
}

function displayPlaylists(playlists) {
    const playlistContainer = document.getElementById('playlists');
    playlists.forEach(({ guardian, playlist }) => {
        const guardianDiv = document.createElement('div');
        guardianDiv.classList.add('guardian-playlist');

        const heading = document.createElement('h2');
        heading.textContent = `${guardian}'s Playlist`;
        guardianDiv.appendChild(heading);

        const songList = document.createElement('ul');
        playlist.forEach(song => {
            const songItem = document.createElement('ul');
            songItem.textContent = `${song.title} by ${song.artist}`;
            songList.appendChild(songItem);
        });

        guardianDiv.appendChild(songList);
        playlistContainer.appendChild(guardianDiv);
    });
}

// Generate the playlists
const playlists = generatePlaylist(guardians, songs);

// Display the playlists in the HTML
displayPlaylists(playlists);


