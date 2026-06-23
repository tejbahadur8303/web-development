// ============================================================
//  music.js  —  Full Spotify-like player for the clone
//  (player logic unchanged, added: detail panel + search)
// ============================================================

// ── TRACK DATA ───────────────────────────────────────────────
// NOTE: `src` fields are placeholder royalty-free audio (SoundHelix).
// Real commercial tracks by these artists are copyrighted and can't be
// hosted here — replace `src` with your own licensed/royalty-free files
// (e.g. local mp3s in an /audio folder) to make these play for real.
const tracks = [
  {
    id: 0,
    title: "Top 50 – Global",
    artist: "Various Artists",
    img: "card1img.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 1,
    title: "Winning Speech",
    artist: "Karan Aujla",
    img: "card2img.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 2,
    title: "Barbad (Saiyaara)",
    artist: "Sachin-Jigar, Aditya Rikhari",
    img: "card3img.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 3,
    title: "Mann Mera",
    artist: "Aditya Rikhari, Faheem Abdullah",
    img: "card4img.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: 4,
    title: "Tum Se",
    artist: "Vishal Mishra",
    img: "card5img.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    id: 5,
    title: "Excuses",
    artist: "AP Dhillon, Karan Aujla",
    img: "card6img.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
  {
    id: 6,
    title: "Daily Updates",
    artist: "Guru Randhawa",
    img: "i1.jpg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    id: 7,
    title: "Deevaniyat",
    artist: "Vishal Mishra, Koushik-Guddu",
    img: "i3.jpg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  },
  {
    id: 8,
    title: "Saiyaara (Title Track)",
    artist: "Tanishk Bagchi, Vishal Mishra",
    img: "i4.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  },
  {
    id: 9,
    title: "Hasseen",
    artist: "Talwinder, NDS, Rippy Grewal",
    img: "i5.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
  },
  {
    id: 10,
    title: "Fanaa",
    artist: "Sevanshi",
    img: "i6.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
  },
  {
    id: 11,
    title: "Tum Hi Ho",
    artist: "Arijit Singh, Mithoon",
    img: "i7.jpeg.webp",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 12,
    title: "Bollywood & Chill",
    artist: "A.R. Rahman, Sachin-Jigar",
    img: "hq720-2.jpg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
  },
  {
    id: 13,
    title: "Brown Munde",
    artist: "AP Dhillon, Gurinder Gill",
    img: "i8.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
  },
  {
    id: 14,
    title: "Top 100 Haryanavi",
    artist: "Masoom Sharma, Dhanda Nyoliwala",
    img: "i9.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
  },
  {
    id: 15,
    title: "Desi Hits",
    artist: "AP Dhillon, Karan Aujla",
    img: "i11.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
  },
  {
    id: 16,
    title: "Bekhayali",
    artist: "Sachet Tandon, Sachet-Parampara",
    img: "i12.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 17,
    title: "Chai Classics",
    artist: "Kishore Kumar, Lata Mangeshkar",
    img: "i13.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 18,
    title: "70's Love Hits",
    artist: "Kishore Kumar, Asha Bhosle",
    img: "i14.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 19,
    title: "Soch Na Sake",
    artist: "Arijit Singh, Amaal Mallik",
    img: "i15.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: 20,
    title: "Lover",
    artist: "Diljit Dosanjh",
    img: "card2img.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    id: 21,
    title: "G.O.A.T.",
    artist: "Diljit Dosanjh",
    img: "card3img.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
  {
    id: 22,
    title: "Bijlee Bijlee",
    artist: "Harrdy Sandhu",
    img: "card4img.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    id: 23,
    title: "Naina",
    artist: "Armaan Malik",
    img: "card5img.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  },
  {
    id: 24,
    title: "Wajah Tum Ho",
    artist: "Armaan Malik",
    img: "card6img.jpeg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  },
  {
    id: 25,
    title: "Param Sundari",
    artist: "Sona Mohapatra, Shreya Ghoshal",
    img: "i1.jpg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
  },
  {
    id: 26,
    title: "Ambarsariya",
    artist: "Sona Mohapatra",
    img: "i3.jpg",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
  },
];

// ── STATE ────────────────────────────────────────────────────
const audio = document.getElementById("audioPlayer");
let curIdx = -1;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let isMuted = false;
let prevVol = 0.7;
audio.volume = prevVol;

// ── DOM (player bar) ─────────────────────────────────────────
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");
const repeatBtn = document.getElementById("repeat");
const likeBtn = document.getElementById("like");
const muteBtn = document.getElementById("mute");

const progressBar = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");
const progressDot = document.getElementById("progressDot");
const currentTimeEl = document.getElementById("currentTime");
const totalTimeEl = document.getElementById("totalTime");

const volumeBar = document.getElementById("volumeBar");
const volumeFill = document.getElementById("volumeFill");

const nowImg = document.getElementById("nowImg");
const nowTitle = document.getElementById("nowTitle");
const nowArtist = document.getElementById("nowArtist");

// ── DOM (detail panel) ───────────────────────────────────────
const detailPanel = document.getElementById("detailPanel");
const detailOverlay = document.getElementById("detailOverlay");
const detailClose = document.getElementById("detailClose");
const detailImg = document.getElementById("detailImg");
const detailTitle = document.getElementById("detailTitle");
const detailArtist = document.getElementById("detailArtist");
const detailPlayBtn = document.getElementById("detailPlayBtn");
const detailProgress = document.getElementById("detailProgress");
const detailProgressFill = document.getElementById("detailProgressFill");
const detailProgressDot = document.getElementById("detailProgressDot");
const detailCurrentTime = document.getElementById("detailCurrentTime");
const detailTotalTime = document.getElementById("detailTotalTime");

// ── DOM (search) ─────────────────────────────────────────────
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchClear = document.getElementById("searchClear");

// ── HELPERS ──────────────────────────────────────────────────
function fmt(s) {
  if (!s || isNaN(s)) return "0:00";
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}

function resolveImg(imgName) {
  // some images in the markup use "spotify.images/..." prefix, some don't.
  // Try the raw name first; browser will 404-fallback handled via onerror.
  return imgName;
}

// ── CARD CLICK → OPEN DETAIL PANEL ───────────────────────────
function bindCardClicks() {
  document.querySelectorAll(".card[data-track-id]").forEach((card) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      const id = parseInt(card.dataset.trackId, 10);
      openDetailPanel(id);
    });
  });
}

function openDetailPanel(idx) {
  const t = tracks[idx];
  if (!t) return;

  detailImg.src = resolveImg(t.img);
  detailImg.onerror = () => {
    detailImg.src = "";
    detailImg.style.background = "#282828";
  };
  detailTitle.textContent = t.title;
  detailArtist.textContent = t.artist;

  detailPanel.classList.add("open");
  detailOverlay.classList.add("open");
  document.body.classList.add("panel-open");

  // Auto-play the selected track
  loadAndPlay(idx);
}

function closeDetailPanel() {
  detailPanel.classList.remove("open");
  detailOverlay.classList.remove("open");
  document.body.classList.remove("panel-open");
}

detailClose.addEventListener("click", closeDetailPanel);
detailOverlay.addEventListener("click", closeDetailPanel);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && detailPanel.classList.contains("open")) {
    closeDetailPanel();
  }
});

detailPlayBtn.addEventListener("click", togglePlayPause);

detailProgress.addEventListener("click", (e) => {
  if (!audio.duration) return;
  const r = detailProgress.getBoundingClientRect();
  audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
});

// ── CORE PLAYBACK ────────────────────────────────────────────
function loadAndPlay(idx) {
  curIdx = idx;
  const t = tracks[idx];
  audio.src = t.src;
  audio.load();
  audio.play().catch((e) => console.warn(e));

  // update "now playing" section in player bar
  nowTitle.textContent = t.title;
  nowArtist.textContent = t.artist;
  nowImg.src = resolveImg(t.img);
  nowImg.onerror = () => {
    nowImg.style.display = "none";
  };
  nowImg.style.display = "block";

  // keep detail panel in sync if it's open on a different track
  if (detailPanel.classList.contains("open")) {
    detailImg.src = resolveImg(t.img);
    detailTitle.textContent = t.title;
    detailArtist.textContent = t.artist;
  }

  highlightCard();
}

function togglePlayPause() {
  if (curIdx === -1) {
    loadAndPlay(0);
    return;
  }
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play().catch((e) => console.warn(e));
  }
}

function playNext() {
  const next = isShuffle
    ? Math.floor(Math.random() * tracks.length)
    : (curIdx + 1) % tracks.length;
  loadAndPlay(next);
}

function playPrev() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  loadAndPlay((curIdx - 1 + tracks.length) % tracks.length);
}

// ── AUDIO EVENTS ─────────────────────────────────────────────
audio.addEventListener("play", () => {
  isPlaying = true;
  playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  playBtn.classList.add("active");
  detailPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
});
audio.addEventListener("pause", () => {
  isPlaying = false;
  playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  playBtn.classList.remove("active");
  detailPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
});
audio.addEventListener("ended", () => {
  if (isRepeat) {
    audio.currentTime = 0;
    audio.play();
  } else playNext();
});
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;

  progressFill.style.width = pct + "%";
  progressDot.style.left = `calc(${pct}% - 6px)`;
  currentTimeEl.textContent = fmt(audio.currentTime);
  totalTimeEl.textContent = fmt(audio.duration);

  // mirror into detail panel
  detailProgressFill.style.width = pct + "%";
  detailProgressDot.style.left = `calc(${pct}% - 6px)`;
  detailCurrentTime.textContent = fmt(audio.currentTime);
  detailTotalTime.textContent = fmt(audio.duration);
});
audio.addEventListener("loadedmetadata", () => {
  totalTimeEl.textContent = fmt(audio.duration);
  detailTotalTime.textContent = fmt(audio.duration);
});

// ── PROGRESS SEEK (player bar) ────────────────────────────────
progressBar.addEventListener("click", (e) => {
  if (!audio.duration) return;
  const r = progressBar.getBoundingClientRect();
  audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
});

// ── VOLUME ───────────────────────────────────────────────────
volumeBar.addEventListener("click", (e) => {
  const r = volumeBar.getBoundingClientRect();
  const v = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
  audio.volume = v;
  prevVol = v;
  volumeFill.style.width = v * 100 + "%";
  isMuted = v === 0;
  updateMuteIcon();
});

muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  audio.volume = isMuted ? 0 : prevVol;
  volumeFill.style.width = isMuted ? "0%" : prevVol * 100 + "%";
  updateMuteIcon();
});

function updateMuteIcon() {
  muteBtn.innerHTML = isMuted
    ? '<i class="fa-solid fa-volume-xmark"></i>'
    : '<i class="fa-solid fa-volume-high"></i>';
}

// ── CONTROLS ─────────────────────────────────────────────────
playBtn.addEventListener("click", togglePlayPause);
nextBtn.addEventListener("click", playNext);
prevBtn.addEventListener("click", playPrev);

shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("toggled", isShuffle);
});
repeatBtn.addEventListener("click", () => {
  isRepeat = !isRepeat;
  audio.loop = isRepeat;
  repeatBtn.classList.toggle("toggled", isRepeat);
});
likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("liked");
});

// ── HIGHLIGHT ACTIVE CARD ────────────────────────────────────
function highlightCard() {
  document.querySelectorAll(".card[data-track-id]").forEach((c) => {
    const isActive = parseInt(c.dataset.trackId, 10) === curIdx;
    c.style.border = isActive ? "2px solid #1DB954" : "";
    c.style.boxShadow = isActive ? "0 0 10px #1DB95466" : "";
  });
}

// ── KEYBOARD SHORTCUTS ───────────────────────────────────────
document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT") return;
  if (e.code === "Space") {
    e.preventDefault();
    togglePlayPause();
  }
  if (e.code === "ArrowRight") playNext();
  if (e.code === "ArrowLeft") playPrev();
  if (e.code === "ArrowUp") {
    audio.volume = Math.min(1, audio.volume + 0.1);
    volumeFill.style.width = audio.volume * 100 + "%";
  }
  if (e.code === "ArrowDown") {
    audio.volume = Math.max(0, audio.volume - 0.1);
    volumeFill.style.width = audio.volume * 100 + "%";
  }
});

// ── STICKY NAV SHADOW ────────────────────────────────────────
const mainContent = document.querySelector(".main-content");
const stickyNav = document.querySelector(".sticky-nav");
if (mainContent && stickyNav) {
  mainContent.addEventListener("scroll", () => {
    stickyNav.style.boxShadow =
      mainContent.scrollTop > 5 ? "0 4px 20px rgba(0,0,0,.7)" : "";
  });
}

// ============================================================
//  SEARCH
// ============================================================
function renderSearchResults(query) {
  const q = query.trim().toLowerCase();

  if (!q) {
    searchResults.classList.remove("open");
    searchResults.innerHTML = "";
    searchClear.style.display = "none";
    return;
  }

  searchClear.style.display = "block";

  const matches = tracks.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.artist.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    searchResults.innerHTML = `<div class="search-empty">No songs found for "${escapeHtml(
      query
    )}"</div>`;
    searchResults.classList.add("open");
    return;
  }

  searchResults.innerHTML = matches
    .map(
      (t) => `
      <div class="search-item" data-track-id="${t.id}">
        <img src="${resolveImg(t.img)}" class="search-item-img" onerror="this.style.background='#282828'; this.src='';" />
        <div class="search-item-meta">
          <div class="search-item-title">${escapeHtml(t.title)}</div>
          <div class="search-item-artist">${escapeHtml(t.artist)}</div>
        </div>
        <i class="fa-solid fa-play search-item-play"></i>
      </div>
    `
    )
    .join("");

  searchResults.classList.add("open");

  searchResults.querySelectorAll(".search-item").forEach((item) => {
    item.addEventListener("click", () => {
      const id = parseInt(item.dataset.trackId, 10);
      openDetailPanel(id);
      clearSearch();
    });
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function clearSearch() {
  searchInput.value = "";
  searchResults.classList.remove("open");
  searchResults.innerHTML = "";
  searchClear.style.display = "none";
}

if (searchInput) {
  searchInput.addEventListener("input", (e) => renderSearchResults(e.target.value));
  searchInput.addEventListener("focus", (e) => {
    if (e.target.value.trim()) renderSearchResults(e.target.value);
  });
}

if (searchClear) {
  searchClear.addEventListener("click", clearSearch);
}

// close search dropdown when clicking outside
document.addEventListener("click", (e) => {
  const searchWrap = document.getElementById("searchWrap");
  if (searchWrap && !searchWrap.contains(e.target)) {
    searchResults.classList.remove("open");
  }
});

// ============================================================
//  INIT
// ============================================================
bindCardClicks();
