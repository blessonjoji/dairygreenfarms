// Reserved for future site-wide scripts

const milestones = document.querySelectorAll(".milestone");

const milestoneData = {
  "2000": `Started as a small family farm behind our home. From early 2000s, people began trusting us with our pure, farm-fresh milk.`,
  "2020": `By the time of the COVID-19 pandemic, we expanded into a small-scale business. The trust and demand grew rapidly.`,
  "2024": `We specialized in dried cow dung manure and started small-scale vermicompost. Quality and organic standards became our trademark.`,
  "Future": `We’re working toward large-scale milk production along with expanding our vegetable and manure lines, while staying rooted in honesty and sustainability.`
};

milestones.forEach(ms => {
  const year = ms.dataset.year;

  // Create detail container inside each milestone
  const detail = document.createElement('div');
  detail.className = 'milestone-inner-detail';
  detail.innerHTML = milestoneData[year] || '';
  ms.appendChild(detail);

  // Click handler
  ms.addEventListener("click", () => {
    const isActive = ms.classList.contains("active");

    // Reset all milestones
    milestones.forEach(m => {
      m.classList.remove("active", "faded");
      m.querySelector(".milestone-inner-detail").style.maxHeight = null;
      m.querySelector(".milestone-inner-detail").classList.remove("visible");
    });

    if (!isActive) {
      ms.classList.add("active");
      milestones.forEach(m => {
        if (m !== ms) m.classList.add("faded");
      });
      const inner = ms.querySelector(".milestone-inner-detail");
      inner.classList.add("visible");
      inner.style.maxHeight = inner.scrollHeight + "px";
    }
  });
});

// Click outside to collapse
document.addEventListener("click", e => {
  const isMilestone = e.target.closest(".milestone");
  if (!isMilestone) {
    milestones.forEach(m => {
      m.classList.remove("active", "faded");
      const inner = m.querySelector(".milestone-inner-detail");
      inner.style.maxHeight = null;
      inner.classList.remove("visible");
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
