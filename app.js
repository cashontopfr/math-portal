// Main application logic

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const topicsGrid = document.getElementById('topics-grid');
  const categoryTags = document.querySelectorAll('.tag-btn');
  const resultCount = document.getElementById('result-count');

  // Modal elements
  const topicModal = document.getElementById('topic-modal');
  const modalClose = document.getElementById('modal-close');
  const modalIcon = document.getElementById('modal-icon');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalLevel = document.getElementById('modal-level');
  const modalSummary = document.getElementById('modal-summary');
  const modalConcepts = document.getElementById('modal-concepts');
  const modalExampleProblem = document.getElementById('modal-example-problem');
  const modalExampleSteps = document.getElementById('modal-example-steps');
  const btnModalPractice = document.getElementById('btn-modal-practice');
  const modalKhanLink = document.getElementById('modal-khan-link');

  let currentCategory = 'all';
  let searchQuery = '';
  let activeModalTopic = null;

  // Initialize Quiz
  const quiz = new MathQuiz();

  function openTopicModal(topicId) {
    const topic = mathTopics.find(t => t.id === topicId);
    if (!topic || !topic.guide) return;

    activeModalTopic = topic;

    modalIcon.textContent = topic.icon;
    modalTitle.textContent = topic.title;
    modalCategory.textContent = topic.category;

    // Level styling
    modalLevel.textContent = topic.level;
    modalLevel.className = 'card-level';
    if (topic.level === 'Beginner') modalLevel.classList.add('level-beginner');
    else if (topic.level === 'Intermediate') modalLevel.classList.add('level-intermediate');
    else if (topic.level === 'Advanced') modalLevel.classList.add('level-advanced');
    else if (topic.level === 'Expert') modalLevel.classList.add('level-expert');

    // Summary
    modalSummary.textContent = topic.guide.summary;

    // Concepts
    modalConcepts.innerHTML = '';
    topic.guide.keyConcepts.forEach((concept) => {
      const li = document.createElement('li');
      li.textContent = concept;
      modalConcepts.appendChild(li);
    });

    // Worked Example
    modalExampleProblem.textContent = topic.guide.workedExample.problem;
    modalExampleSteps.innerHTML = '';
    topic.guide.workedExample.stepByStep.forEach((step) => {
      const div = document.createElement('div');
      div.className = 'modal-step-item';
      div.textContent = step;
      modalExampleSteps.appendChild(div);
    });

    // External Reference Link
    modalKhanLink.href = topic.url;

    // Show modal
    topicModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeTopicModal() {
    topicModal.style.display = 'none';
    document.body.style.overflow = '';
    activeModalTopic = null;
  }

  // Modal event listeners
  if (modalClose) {
    modalClose.addEventListener('click', closeTopicModal);
  }

  if (topicModal) {
    topicModal.addEventListener('click', (e) => {
      if (e.target === topicModal) {
        closeTopicModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && topicModal.style.display === 'flex') {
      closeTopicModal();
    }
  });

  if (btnModalPractice) {
    btnModalPractice.addEventListener('click', () => {
      if (activeModalTopic && activeModalTopic.grade) {
        const targetGrade = activeModalTopic.grade;
        closeTopicModal();

        // Switch to the target grade in Practice Zone
        const gradeButtons = document.querySelectorAll('.grade-btn');
        gradeButtons.forEach((btn) => {
          if (btn.getAttribute('data-grade') === targetGrade) {
            btn.click();
          }
        });

        // Smooth scroll to practice arena
        const practiceSection = document.getElementById('practice');
        if (practiceSection) {
          practiceSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  function renderTopics(topics) {
    topicsGrid.innerHTML = '';

    if (topics.length === 0) {
      topicsGrid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🔍</div>
          <h3>No matching math topics found</h3>
          <p>Try searching for terms like "algebra", "derivatives", "fractions", or "geometry".</p>
        </div>
      `;
      resultCount.textContent = '0 topics found';
      return;
    }

    resultCount.textContent = `${topics.length} topic${topics.length === 1 ? '' : 's'} available`;

    topics.forEach((topic) => {
      const card = document.createElement('article');
      card.className = 'topic-card';

      // Level badge color
      let levelClass = 'level-beginner';
      if (topic.level === 'Intermediate') levelClass = 'level-intermediate';
      if (topic.level === 'Advanced') levelClass = 'level-advanced';
      if (topic.level === 'Expert') levelClass = 'level-expert';

      card.innerHTML = `
        <div class="card-header">
          <span class="card-icon">${topic.icon}</span>
          <span class="card-level ${levelClass}">${topic.level}</span>
        </div>
        <div class="card-body">
          <span class="card-category">${topic.category}</span>
          <h3 class="card-title">${topic.title}</h3>
          <p class="card-desc">${topic.description}</p>
          <div class="card-tags">
            ${topic.tags.map(tag => `<span class="tag-pill">#${tag}</span>`).join('')}
          </div>
        </div>
        <div class="card-footer">
          <button class="btn-study" data-id="${topic.id}">
            Study Topic with MathVerse ➔
          </button>
        </div>
      `;

      const studyBtn = card.querySelector('.btn-study');
      studyBtn.addEventListener('click', () => {
        openTopicModal(topic.id);
      });

      topicsGrid.appendChild(card);
    });
  }

  function filterTopics() {
    const query = searchQuery.trim().toLowerCase();

    const filtered = mathTopics.filter((topic) => {
      const matchesCategory =
        currentCategory === 'all' ||
        topic.category.toLowerCase() === currentCategory.toLowerCase();

      const matchesSearch =
        query === '' ||
        topic.title.toLowerCase().includes(query) ||
        topic.description.toLowerCase().includes(query) ||
        topic.tags.some(tag => tag.toLowerCase().includes(query)) ||
        topic.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    renderTopics(filtered);
  }

  // Event Listeners
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    searchClear.style.display = searchQuery ? 'block' : 'none';
    filterTopics();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.style.display = 'none';
    searchInput.focus();
    filterTopics();
  });

  categoryTags.forEach((btn) => {
    btn.addEventListener('click', () => {
      categoryTags.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      filterTopics();
    });
  });

  // Initial render
  filterTopics();
});
