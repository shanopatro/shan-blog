// ===== Blog Data =====
const posts = [
  {
    id: 1,
    title: "JavaScript கற்க ஆரம்பிக்க சிறந்த வழி",
    excerpt: "JavaScript ஆரம்பநிலை முதல் மேம்பட்ட நிலை வரை எப்படி கற்கலாம் என்று இந்த கட்டுரையில் விளக்கியிருக்கிறேன்.",
    tag: "தொழில்நுட்பம்",
    emoji: "💻",
    date: "2024-01-15",
    author: "ராஜேஷ்",
    readTime: "5 நிமிடம்"
  },
  {
    id: 2,
    title: "GitHub ஐ திறம்பட பயன்படுத்துவது எப்படி?",
    excerpt: "Git மற்றும் GitHub பயன்படுத்தி உங்கள் திட்டங்களை சிறப்பாக நிர்வகிக்கும் முறைகளை இங்கே காணலாம்.",
    tag: "கருவிகள்",
    emoji: "🐙",
    date: "2024-01-20",
    author: "ராஜேஷ்",
    readTime: "7 நிமிடம்"
  },
  {
    id: 3,
    title: "தொழில்நுட்ப தொழிலில் வெற்றி பெறுவது எப்படி?",
    excerpt: "IT துறையில் நீண்ட கால வெற்றிக்கான திறவுகோல்கள் என்ன என்று இந்த கட்டுரை ஆராய்கிறது.",
    tag: "வாழ்க்கை",
    emoji: "🚀",
    date: "2024-01-25",
    author: "ராஜேஷ்",
    readTime: "6 நிமிடம்"
  },
  {
    id: 4,
    title: "React vs Vue: எது சிறந்தது?",
    excerpt: "React மற்றும் Vue.js ஆகிய இரண்டு பிரபலமான JavaScript frameworks இடையே ஒரு விரிவான ஒப்பீடு.",
    tag: "தொழில்நுட்பம்",
    emoji: "⚛️",
    date: "2024-02-01",
    author: "ராஜேஷ்",
    readTime: "8 நிமிடம்"
  },
  {
    id: 5,
    title: "தமிழில் நிரலாக்கம் கற்பது சாத்தியமா?",
    excerpt: "தமிழ் வழியில் programming கற்கலாமா? என்ன சவால்கள் உள்ளன? இதோ என் அனுபவம்.",
    tag: "கல்வி",
    emoji: "📚",
    date: "2024-02-05",
    author: "ராஜேஷ்",
    readTime: "4 நிமிடம்"
  },
  {
    id: 6,
    title: "Freelancing - சுதந்திரமான வாழ்க்கை",
    excerpt: "Freelance developer ஆக மாறுவது எப்படி? வாடிக்கையாளர்களை எவ்வாறு கண்டுபிடிப்பது?",
    tag: "வாழ்க்கை",
    emoji: "💼",
    date: "2024-02-10",
    author: "ராஜேஷ்",
    readTime: "9 நிமிடம்"
  }
];

// ===== Render Posts =====
function renderPosts(list) {
  const grid = document.getElementById('posts-grid');
  if (!grid) return;
  grid.innerHTML = list.map(post => `
    <article class="post-card" onclick="window.location.href='post.html?id=${post.id}'">
      <div class="post-card-img">${post.emoji}</div>
      <div class="post-card-body">
        <span class="post-tag">${post.tag}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <div class="post-meta">
          <span>📅 ${formatDate(post.date)}</span>
          <span>⏱️ ${post.readTime}</span>
        </div>
      </div>
    </article>
  `).join('');
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('ta-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

// ===== Toggle Mobile Menu =====
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links) links.classList.toggle('open');
}

// ===== Newsletter =====
function subscribe(e) {
  e.preventDefault();
  const msg = document.getElementById('sub-msg');
  if (msg) msg.style.display = 'block';
  e.target.reset();
}

// ===== Contact Form =====
function submitContact(e) {
  e.preventDefault();
  alert('✅ உங்கள் செய்தி அனுப்பப்பட்டது! நன்றி.');
  e.target.reset();
}

// ===== Single Post Rendering =====
function renderSinglePost() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const post = posts.find(p => p.id === id);
  if (!post) return;
  const container = document.getElementById('single-post');
  if (!container) return;
  container.innerHTML = `
    <div class="post-meta" style="margin-bottom:1rem;">
      <span class="post-tag">${post.tag}</span>
    </div>
    <h1>${post.post_title || post.title}</h1>
    <div class="post-meta" style="margin-bottom:2rem;">
      <span>✍️ ${post.author}</span>
      <span>📅 ${formatDate(post.date)}</span>
      <span>⏱️ ${post.readTime}</span>
    </div>
    <div class="post-body">
      <p>${post.excerpt}</p>
      <p>இந்த கட்டுரையில் நாம் ஆழமாக ஆராய்வோம். ஒவ்வொரு கருத்தையும் தெளிவாக புரிந்துகொள்ள உதவும் விதத்தில் விவரிக்கிறேன்.</p>
      <p>தொழில்நுட்பம் என்பது ஒரு கடல். அதில் நீந்துவதற்கு சரியான திசையும், கருவிகளும் தேவை. இந்த வலைப்பதிவு அந்த திசையை காட்டும் ஒளிவிளக்காக திகழும்.</p>
      <p>கேள்விகள் இருந்தால் கமெண்ட் செய்யுங்கள். நன்றி! 🙏</p>
    </div>
    <div style="margin-top:2rem;padding-top:2rem;border-top:1px solid #E7E5E4;">
      <a href="blog.html" style="color:#7C3AED;text-decoration:none;font-weight:600;">← அனைத்து கட்டுரைகளும்</a>
    </div>
  `;
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  renderPosts(posts);
  renderSinglePost();

  // Blog page tag filter
  const tags = document.querySelectorAll('.tag');
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      const filter = tag.textContent;
      const filtered = filter === 'அனைத்தும்' ? posts : posts.filter(p => p.tag === filter);
      renderPosts(filtered);
    });
  });

  // Contact form
  const form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', submitContact);
});
