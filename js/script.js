// Reserved for future site-wide scripts
const milestones = document.querySelectorAll(".milestone");
const detailBox = document.getElementById("milestone-detail");
const contentBox = document.getElementById("milestone-content");

const milestoneData = {
  "2000": `<b>2000</b><br>Started as a small family farm behind our home. From early 2000s, people began trusting us with our pure, farm-fresh milk.`,
  "2020": `<b>2020</b><br>By the time of the COVID-19 pandemic, we expanded into a small-scale business. The trust and demand grew rapidly.`,
  "2024": `<b>2024</b><br>We specialized in dried cow dung manure and started small-scale vermicompost. Quality and organic standards became our trademark.`,
  "Future": `<b>Future</b><br>We’re working toward large-scale milk production along with expanding our vegetable and manure lines, while staying rooted in honesty and sustainability.`
};

milestones.forEach(ms => {
  ms.addEventListener("click", () => {
    const year = ms.dataset.year;
    contentBox.innerHTML = milestoneData[year];
    detailBox.style.display = "block";

    milestones.forEach(m => {
      m.classList.remove("active");
      m.classList.add("faded");
    });
    ms.classList.add("active");
  });
});

// Close when clicked outside
document.addEventListener("click", e => {
  const isMilestone = e.target.closest(".milestone");
  const isDetail = e.target.closest("#milestone-detail");

  if (!isMilestone && !isDetail) {
    detailBox.style.display = "none";
    milestones.forEach(m => {
      m.classList.remove("active", "faded");
    });
  }
});
// Lightbox Image Viewer
document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.classList.remove('active');
    }
  });
});
// Contact Modal Logic
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contactModal');
  const openBtn = document.getElementById('openContactModal');
  const closeBtn = document.querySelector('.close-btn');

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });
});

