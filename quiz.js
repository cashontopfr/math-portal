// Grade-Based Self-Contained Math Quiz Engine

class MathQuiz {
  constructor() {
    this.currentGrade = '1';
    this.currentProblem = null;
    this.score = 0;
    this.totalAttempts = 0;
    this.streak = 0;

    this.gradeDescriptions = {
      '1': 'Grade 1: Basic addition, subtraction up to 20, number comparisons, and sequences.',
      '2': 'Grade 2: Two-digit addition and subtraction, skip counting, and mental arithmetic.',
      '3': 'Grade 3: Multiplication tables (up to 12), basic division, and fractional parts.',
      '4': 'Grade 4: Multi-digit operations, division with remainders, and perimeter/area.',
      '5': 'Grade 5: Decimals, fractions, place value, and 3D rectangular volume.',
      '6': 'Grade 6: Percentages, negative integers, powers, and exponent properties.',
      '7': 'Grade 7: Two-step algebraic equations, ratios, and rates.',
      '8': 'Grade 8: Multi-step linear equations, Pythagorean theorem, and slopes.',
      'high': 'High School: Quadratic equations, trigonometry, and calculus derivatives.'
    };

    // DOM Elements
    this.gradeDescriptionElem = document.getElementById('grade-description');
    this.topicIndicatorElem = document.getElementById('quiz-topic-indicator');
    this.problemElem = document.getElementById('quiz-problem');
    this.feedbackElem = document.getElementById('quiz-feedback');
    this.explanationElem = document.getElementById('quiz-explanation');
    this.scoreElem = document.getElementById('quiz-score');
    this.streakElem = document.getElementById('quiz-streak');
    
    this.inputContainer = document.getElementById('quiz-input-container');
    this.inputElem = document.getElementById('quiz-answer');
    this.submitBtn = document.getElementById('btn-submit-answer');
    
    this.optionsContainer = document.getElementById('quiz-options-container');
    this.nextBtn = document.getElementById('btn-next-question');
    this.gradeButtons = document.querySelectorAll('.grade-btn');

    this.init();
  }

  init() {
    // Grade button switching
    this.gradeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.gradeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentGrade = btn.getAttribute('data-grade');
        if (this.gradeDescriptionElem) {
          this.gradeDescriptionElem.textContent = this.gradeDescriptions[this.currentGrade] || '';
        }
        this.generateProblem();
      });
    });

    // Submit answer on button or Enter key
    if (this.submitBtn) {
      this.submitBtn.addEventListener('click', () => this.checkInputAnswer());
    }
    if (this.inputElem) {
      this.inputElem.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.checkInputAnswer();
        }
      });
    }

    // Next question button
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.generateProblem());
    }

    // Start with Grade 1
    this.generateProblem();
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateProblem() {
    // Reset UI state
    this.feedbackElem.textContent = '';
    this.feedbackElem.className = 'quiz-feedback';
    this.explanationElem.style.display = 'none';
    this.explanationElem.innerHTML = '';
    this.nextBtn.style.display = 'none';

    // Generate based on selected grade
    switch (this.currentGrade) {
      case '1':
        this.generateGrade1();
        break;
      case '2':
        this.generateGrade2();
        break;
      case '3':
        this.generateGrade3();
        break;
      case '4':
        this.generateGrade4();
        break;
      case '5':
        this.generateGrade5();
        break;
      case '6':
        this.generateGrade6();
        break;
      case '7':
        this.generateGrade7();
        break;
      case '8':
        this.generateGrade8();
        break;
      case 'high':
        this.generateHighSchool();
        break;
      default:
        this.generateGrade1();
    }

    this.renderCurrentProblem();
  }

  renderCurrentProblem() {
    this.topicIndicatorElem.textContent = `Grade ${this.currentGrade === 'high' ? 'High School' : this.currentGrade} • ${this.currentProblem.topic}`;
    this.problemElem.innerHTML = this.currentProblem.question;

    if (this.currentProblem.isMultipleChoice) {
      this.inputContainer.style.display = 'none';
      this.optionsContainer.style.display = 'grid';
      this.optionsContainer.innerHTML = '';

      this.currentProblem.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerHTML = opt;
        btn.addEventListener('click', () => this.checkChoiceAnswer(opt, btn));
        this.optionsContainer.appendChild(btn);
      });
    } else {
      this.optionsContainer.style.display = 'none';
      this.inputContainer.style.display = 'flex';
      this.inputElem.value = '';
      this.inputElem.disabled = false;
      this.submitBtn.disabled = false;
      this.submitBtn.style.display = 'inline-block';
      this.inputElem.focus();
    }
  }

  /* ========================================================
     GRADE PROBLEM GENERATORS
     ======================================================== */

  generateGrade1() {
    const types = ['add', 'sub', 'compare'];
    const type = types[this.getRandomInt(0, types.length - 1)];

    if (type === 'add') {
      const a = this.getRandomInt(1, 10);
      const b = this.getRandomInt(1, 9);
      this.currentProblem = {
        topic: 'Addition up to 20',
        question: `What is <strong>${a} + ${b}</strong>?`,
        answer: a + b,
        isMultipleChoice: false,
        explanation: `Start at ${a} and count forward ${b} steps: <strong>${a + b}</strong>.`
      };
    } else if (type === 'sub') {
      const a = this.getRandomInt(5, 18);
      const b = this.getRandomInt(1, a);
      this.currentProblem = {
        topic: 'Subtraction within 20',
        question: `What is <strong>${a} - ${b}</strong>?`,
        answer: a - b,
        isMultipleChoice: false,
        explanation: `Subtract ${b} from ${a} to get <strong>${a - b}</strong>.`
      };
    } else {
      const a = this.getRandomInt(1, 20);
      let b = this.getRandomInt(1, 20);
      let correctSymbol = a > b ? '>' : (a < b ? '<' : '=');
      this.currentProblem = {
        topic: 'Comparing Numbers',
        question: `Which symbol belongs in the blank? <strong>${a} ___ ${b}</strong>`,
        answer: correctSymbol,
        isMultipleChoice: true,
        options: ['<', '=', '>'],
        explanation: `${a} is ${correctSymbol === '>' ? 'greater than' : (correctSymbol === '<' ? 'less than' : 'equal to')} ${b}.`
      };
    }
  }

  generateGrade2() {
    const types = ['add2', 'sub2', 'skip'];
    const type = types[this.getRandomInt(0, types.length - 1)];

    if (type === 'add2') {
      const a = this.getRandomInt(15, 65);
      const b = this.getRandomInt(10, 34);
      this.currentProblem = {
        topic: '2-Digit Addition',
        question: `Calculate: <strong>${a} + ${b}</strong>`,
        answer: a + b,
        isMultipleChoice: false,
        explanation: `Add the ones place (${a % 10} + ${b % 10}) and the tens place (${Math.floor(a/10)}0 + ${Math.floor(b/10)}0) = <strong>${a + b}</strong>.`
      };
    } else if (type === 'sub2') {
      const a = this.getRandomInt(30, 99);
      const b = this.getRandomInt(10, a - 5);
      this.currentProblem = {
        topic: '2-Digit Subtraction',
        question: `Calculate: <strong>${a} - ${b}</strong>`,
        answer: a - b,
        isMultipleChoice: false,
        explanation: `${a} minus ${b} equals <strong>${a - b}</strong>.`
      };
    } else {
      const step = [2, 5, 10][this.getRandomInt(0, 2)];
      const start = this.getRandomInt(1, 5) * step;
      const s1 = start;
      const s2 = start + step;
      const s3 = start + step * 2;
      const ans = start + step * 3;
      this.currentProblem = {
        topic: 'Skip Counting Sequence',
        question: `What is the next number? <strong>${s1}, ${s2}, ${s3}, ___</strong>`,
        answer: ans,
        isMultipleChoice: false,
        explanation: `The pattern increases by ${step} every step. ${s3} + ${step} = <strong>${ans}</strong>.`
      };
    }
  }

  generateGrade3() {
    const types = ['mult', 'div', 'frac'];
    const type = types[this.getRandomInt(0, types.length - 1)];

    if (type === 'mult') {
      const a = this.getRandomInt(3, 10);
      const b = this.getRandomInt(3, 10);
      this.currentProblem = {
        topic: 'Multiplication Tables',
        question: `What is <strong>${a} × ${b}</strong>?`,
        answer: a * b,
        isMultipleChoice: false,
        explanation: `${a} groups of ${b} equal <strong>${a * b}</strong>.`
      };
    } else if (type === 'div') {
      const b = this.getRandomInt(2, 9);
      const ans = this.getRandomInt(2, 9);
      const a = b * ans;
      this.currentProblem = {
        topic: 'Basic Division',
        question: `What is <strong>${a} ÷ ${b}</strong>?`,
        answer: ans,
        isMultipleChoice: false,
        explanation: `Because ${b} × ${ans} = ${a}, ${a} ÷ ${b} = <strong>${ans}</strong>.`
      };
    } else {
      const denom = [2, 3, 4, 5][this.getRandomInt(0, 3)];
      const mult = this.getRandomInt(2, 8);
      const total = denom * mult;
      this.currentProblem = {
        topic: 'Fraction of a Whole',
        question: `What is <strong>1/${denom} of ${total}</strong>?`,
        answer: mult,
        isMultipleChoice: false,
        explanation: `Divide ${total} by the denominator ${denom}: ${total} ÷ ${denom} = <strong>${mult}</strong>.`
      };
    }
  }

  generateGrade4() {
    const types = ['mult_multi', 'perimeter', 'area'];
    const type = types[this.getRandomInt(0, types.length - 1)];

    if (type === 'mult_multi') {
      const a = this.getRandomInt(12, 45);
      const b = this.getRandomInt(3, 8);
      this.currentProblem = {
        topic: 'Multi-Digit Multiplication',
        question: `Calculate: <strong>${a} × ${b}</strong>`,
        answer: a * b,
        isMultipleChoice: false,
        explanation: `${a} × ${b} = (${Math.floor(a/10)*10} × ${b}) + (${a%10} × ${b}) = <strong>${a * b}</strong>.`
      };
    } else if (type === 'perimeter') {
      const length = this.getRandomInt(5, 20);
      const width = this.getRandomInt(3, 15);
      this.currentProblem = {
        topic: 'Perimeter of a Rectangle',
        question: `Find the perimeter of a rectangle with length <strong>${length} cm</strong> and width <strong>${width} cm</strong>.`,
        answer: 2 * (length + width),
        isMultipleChoice: false,
        explanation: `Perimeter formula: P = 2 × (length + width) = 2 × (${length} + ${width}) = <strong>${2 * (length + width)} cm</strong>.`
      };
    } else {
      const length = this.getRandomInt(4, 15);
      const width = this.getRandomInt(3, 12);
      this.currentProblem = {
        topic: 'Area of a Rectangle',
        question: `Find the area of a rectangle with length <strong>${length} m</strong> and width <strong>${width} m</strong>.`,
        answer: length * width,
        isMultipleChoice: false,
        explanation: `Area formula: A = length × width = ${length} × ${width} = <strong>${length * width} m²</strong>.`
      };
    }
  }

  generateGrade5() {
    const types = ['dec_add', 'dec_sub', 'volume'];
    const type = types[this.getRandomInt(0, types.length - 1)];

    if (type === 'dec_add') {
      const a = (this.getRandomInt(15, 60) / 10).toFixed(1);
      const b = (this.getRandomInt(12, 45) / 10).toFixed(1);
      const ans = (parseFloat(a) + parseFloat(b)).toFixed(1);
      this.currentProblem = {
        topic: 'Decimal Addition',
        question: `What is <strong>${a} + ${b}</strong>?`,
        answer: parseFloat(ans),
        isMultipleChoice: false,
        explanation: `Align the decimal points: ${a} + ${b} = <strong>${ans}</strong>.`
      };
    } else if (type === 'dec_sub') {
      const a = (this.getRandomInt(50, 95) / 10).toFixed(1);
      const b = (this.getRandomInt(10, 45) / 10).toFixed(1);
      const ans = (parseFloat(a) - parseFloat(b)).toFixed(1);
      this.currentProblem = {
        topic: 'Decimal Subtraction',
        question: `What is <strong>${a} - ${b}</strong>?`,
        answer: parseFloat(ans),
        isMultipleChoice: false,
        explanation: `${a} minus ${b} = <strong>${ans}</strong>.`
      };
    } else {
      const l = this.getRandomInt(3, 8);
      const w = this.getRandomInt(2, 6);
      const h = this.getRandomInt(2, 5);
      this.currentProblem = {
        topic: 'Volume of Rectangular Prism',
        question: `A box has length <strong>${l}</strong>, width <strong>${w}</strong>, and height <strong>${h}</strong>. What is its volume?`,
        answer: l * w * h,
        isMultipleChoice: false,
        explanation: `Volume = length × width × height = ${l} × ${w} × ${h} = <strong>${l * w * h}</strong>.`
      };
    }
  }

  generateGrade6() {
    const types = ['percent', 'negative_add', 'exponent'];
    const type = types[this.getRandomInt(0, types.length - 1)];

    if (type === 'percent') {
      const p = [10, 20, 25, 50, 75][this.getRandomInt(0, 4)];
      const total = this.getRandomInt(2, 10) * (p === 25 || p === 75 ? 4 : 10);
      const ans = (p / 100) * total;
      this.currentProblem = {
        topic: 'Percentages',
        question: `What is <strong>${p}% of ${total}</strong>?`,
        answer: ans,
        isMultipleChoice: false,
        explanation: `${p}% = ${p/100}. Then ${p/100} × ${total} = <strong>${ans}</strong>.`
      };
    } else if (type === 'negative_add') {
      const a = -1 * this.getRandomInt(4, 18);
      const b = this.getRandomInt(5, 25);
      this.currentProblem = {
        topic: 'Negative Numbers',
        question: `Calculate: <strong>(${a}) + ${b}</strong>`,
        answer: a + b,
        isMultipleChoice: false,
        explanation: `Starting at ${a} and moving right ${b} on the number line gives <strong>${a + b}</strong>.`
      };
    } else {
      const base = this.getRandomInt(2, 5);
      const exp = base === 2 ? this.getRandomInt(3, 5) : (base === 3 ? this.getRandomInt(2, 3) : 2);
      const ans = Math.pow(base, exp);
      this.currentProblem = {
        topic: 'Exponents',
        question: `Evaluate <strong>${base}<sup>${exp}</sup></strong>`,
        answer: ans,
        isMultipleChoice: false,
        explanation: `${base} multiplied by itself ${exp} times = <strong>${ans}</strong>.`
      };
    }
  }

  generateGrade7() {
    const types = ['linear_2step', 'proportion'];
    const type = types[this.getRandomInt(0, types.length - 1)];

    if (type === 'linear_2step') {
      const x = this.getRandomInt(2, 9);
      const a = this.getRandomInt(2, 6);
      const b = this.getRandomInt(3, 15);
      const c = a * x + b;
      this.currentProblem = {
        topic: 'Two-Step Equation',
        question: `Solve for <em>x</em>: <strong>${a}x + ${b} = ${c}</strong>`,
        answer: x,
        isMultipleChoice: false,
        explanation: `Subtract ${b} from both sides: ${a}x = ${c - b}. Then divide by ${a}: x = <strong>${x}</strong>.`
      };
    } else {
      const x = this.getRandomInt(2, 8);
      const factor = this.getRandomInt(2, 4);
      const a = 4;
      const b = 12;
      // x / a = (x * factor) / (a * factor)
      const top2 = x * factor;
      const bot2 = a * factor;
      this.currentProblem = {
        topic: 'Solving Proportions',
        question: `Solve for <em>x</em>: <strong>x / ${a} = ${top2} / ${bot2}</strong>`,
        answer: x,
        isMultipleChoice: false,
        explanation: `Cross multiply: ${bot2}x = ${a} × ${top2} = ${a * top2}. Dividing by ${bot2} gives x = <strong>${x}</strong>.`
      };
    }
  }

  generateGrade8() {
    const types = ['linear_both_sides', 'pythagorean'];
    const type = types[this.getRandomInt(0, types.length - 1)];

    if (type === 'linear_both_sides') {
      const x = this.getRandomInt(2, 7);
      const a = this.getRandomInt(4, 7);
      const b = this.getRandomInt(2, a - 1);
      const const1 = this.getRandomInt(1, 10);
      // a*x - const1 = b*x + (a*x - b*x - const1)
      const diff = (a - b) * x;
      const const2 = diff - const1;
      const sign = const2 >= 0 ? `+ ${const2}` : `- ${Math.abs(const2)}`;

      this.currentProblem = {
        topic: 'Variables on Both Sides',
        question: `Solve for <em>x</em>: <strong>${a}x - ${const1} = ${b}x ${sign}</strong>`,
        answer: x,
        isMultipleChoice: false,
        explanation: `Subtract ${b}x from both sides: ${a - b}x - ${const1} = ${const2}. Add ${const1}: ${a - b}x = ${const2 + const1}. Divide by ${a - b}: x = <strong>${x}</strong>.`
      };
    } else {
      const triples = [
        [3, 4, 5],
        [6, 8, 10],
        [5, 12, 13]
      ];
      const selected = triples[this.getRandomInt(0, triples.length - 1)];
      const [a, b, c] = selected;

      this.currentProblem = {
        topic: 'Pythagorean Theorem',
        question: `In a right triangle with legs <strong>a = ${a}</strong> and <strong>b = ${b}</strong>, what is hypotenuse <strong>c</strong>?`,
        answer: c,
        isMultipleChoice: false,
        explanation: `c² = a² + b² = ${a}² + ${b}² = ${a*a} + ${b*b} = ${c*c}. Taking the square root gives c = <strong>${c}</strong>.`
      };
    }
  }

  generateHighSchool() {
    const types = ['quad', 'trig', 'deriv'];
    const type = types[this.getRandomInt(0, types.length - 1)];

    if (type === 'quad') {
      const r1 = this.getRandomInt(1, 5);
      const r2 = this.getRandomInt(1, 5);
      const b = -(r1 + r2);
      const c = r1 * r2;
      const bStr = b < 0 ? `- ${Math.abs(b)}x` : `+ ${b}x`;
      const cStr = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;

      // Ask for the larger root
      const larger = Math.max(r1, r2);
      this.currentProblem = {
        topic: 'Quadratic Equations',
        question: `Find the larger root of <strong>x² ${bStr} ${cStr} = 0</strong>`,
        answer: larger,
        isMultipleChoice: false,
        explanation: `Factoring gives (x - ${r1})(x - ${r2}) = 0. The roots are x = ${r1} and x = ${r2}. The larger root is <strong>${larger}</strong>.`
      };
    } else if (type === 'trig') {
      const angles = [
        { q: 'sin(30°)', ans: '0.5', note: 'Opposite/Hypotenuse on a 30-60-90 triangle is 1/2 = 0.5' },
        { q: 'cos(60°)', ans: '0.5', note: 'Adjacent/Hypotenuse on a 30-60-90 triangle is 1/2 = 0.5' },
        { q: 'tan(45°)', ans: '1', note: 'Opposite and Adjacent sides are equal on a 45-45-90 triangle: 1/1 = 1' },
        { q: 'sin(90°)', ans: '1', note: 'On the unit circle, at 90° (π/2 radians), the y-coordinate is 1' }
      ];
      const chosen = angles[this.getRandomInt(0, angles.length - 1)];
      this.currentProblem = {
        topic: 'Trigonometric Values',
        question: `What is the exact value of <strong>${chosen.q}</strong>?`,
        answer: parseFloat(chosen.ans),
        isMultipleChoice: true,
        options: ['0', '0.5', '1', '2'],
        explanation: `${chosen.note}. Therefore <strong>${chosen.q} = ${chosen.ans}</strong>.`
      };
    } else {
      const coeff = this.getRandomInt(2, 5);
      const power = this.getRandomInt(2, 3);
      const xVal = this.getRandomInt(1, 3);
      // f(x) = coeff * x^power
      // f'(x) = coeff * power * x^(power - 1)
      const dCoeff = coeff * power;
      const dPower = power - 1;
      const ans = dCoeff * Math.pow(xVal, dPower);

      this.currentProblem = {
        topic: 'Calculus: Power Rule Derivative',
        question: `If <strong>f(x) = ${coeff}x<sup>${power}</sup></strong>, find <strong>f'(${xVal})</strong>.`,
        answer: ans,
        isMultipleChoice: false,
        explanation: `Using the power rule: f'(x) = ${coeff} × ${power}x<sup>${power-1}</sup> = ${dCoeff}x${dPower > 1 ? '<sup>' + dPower + '</sup>' : ''}. Evaluating at x = ${xVal}: ${dCoeff}(${xVal}) = <strong>${ans}</strong>.`
      };
    }
  }

  /* ========================================================
     EVALUATION LOGIC
     ======================================================== */

  checkInputAnswer() {
    const userVal = this.inputElem.value.trim();
    if (!userVal) {
      this.feedbackElem.textContent = 'Please enter an answer.';
      this.feedbackElem.className = 'quiz-feedback error';
      return;
    }

    const numAnswer = parseFloat(userVal);
    const expected = this.currentProblem.answer;

    this.submitBtn.style.display = 'none';
    this.inputElem.disabled = true;
    this.nextBtn.style.display = 'inline-block';
    this.totalAttempts++;

    const isCorrect = typeof expected === 'number'
      ? Math.abs(numAnswer - expected) < 0.05
      : userVal.toLowerCase() === expected.toString().toLowerCase();

    if (isCorrect) {
      this.score++;
      this.streak++;
      this.feedbackElem.textContent = '🎉 Correct! Outstanding work!';
      this.feedbackElem.className = 'quiz-feedback correct';
    } else {
      this.streak = 0;
      this.feedbackElem.textContent = `❌ Incorrect. The correct answer is ${expected}.`;
      this.feedbackElem.className = 'quiz-feedback incorrect';
    }

    this.showExplanation();
    this.updateStats();
  }

  checkChoiceAnswer(selectedOption, clickedBtn) {
    const expected = this.currentProblem.answer.toString();
    const isCorrect = selectedOption.toString() === expected;

    // Disable all options
    const allBtns = this.optionsContainer.querySelectorAll('.quiz-option-btn');
    allBtns.forEach((btn) => {
      btn.disabled = true;
      if (btn.innerHTML === expected) {
        btn.classList.add('correct');
      }
    });

    if (!isCorrect) {
      clickedBtn.classList.add('incorrect');
      this.streak = 0;
      this.feedbackElem.textContent = `❌ Incorrect. The correct choice was ${expected}.`;
      this.feedbackElem.className = 'quiz-feedback incorrect';
    } else {
      this.score++;
      this.streak++;
      this.feedbackElem.textContent = '🎉 Correct! Outstanding work!';
      this.feedbackElem.className = 'quiz-feedback correct';
    }

    this.totalAttempts++;
    this.nextBtn.style.display = 'inline-block';
    this.showExplanation();
    this.updateStats();
  }

  showExplanation() {
    if (this.currentProblem.explanation) {
      this.explanationElem.innerHTML = `<strong>Solution Breakdown:</strong><br>${this.currentProblem.explanation}`;
      this.explanationElem.style.display = 'block';
    }
  }

  updateStats() {
    if (this.scoreElem) {
      this.scoreElem.textContent = `${this.score} / ${this.totalAttempts}`;
    }
    if (this.streakElem) {
      this.streakElem.textContent = `🔥 ${this.streak}`;
    }
  }
}
