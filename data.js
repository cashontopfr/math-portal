const mathTopics = [
  {
    id: "early-math",
    title: "Early Math Foundations",
    category: "Foundations",
    description: "Learn counting, basic addition and subtraction, shapes, measurement, and comparing numbers.",
    level: "Beginner",
    grade: "1",
    tags: ["counting", "addition", "subtraction", "shapes", "kids", "foundations", "elementary"],
    url: "https://www.khanacademy.org/math/early-math",
    icon: "🔢",
    guide: {
      summary: "Early Math builds the foundational intuition for all numeric reasoning: recognizing numbers, understanding quantities, comparing magnitudes, and simple geometry.",
      keyConcepts: [
        "One-to-One Correspondence: Each counted object corresponds to exactly one number name.",
        "Additive Property: Combining two groups of objects produces a larger sum (e.g., 3 + 4 = 7).",
        "Subtractive Removal: Taking objects away from a collection reduces its total count (e.g., 8 - 3 = 5).",
        "Spatial Shapes: Identifying circles (no corners), triangles (3 sides), rectangles (4 right angles), and squares."
      ],
      workedExample: {
        problem: "Liam has 6 blue marbles and finds 5 red marbles. How many marbles does he have in total?",
        stepByStep: [
          "Step 1: Identify the starting amount: 6 marbles.",
          "Step 2: Recognize the combining action (addition): + 5 marbles.",
          "Step 3: Count forward 5 from 6: 7, 8, 9, 10, 11.",
          "Conclusion: Liam has 11 marbles in total (6 + 5 = 11)."
        ]
      }
    }
  },
  {
    id: "arithmetic",
    title: "Core Arithmetic",
    category: "Foundations",
    description: "Master multiplication, division, fractions, decimals, negative numbers, and place value.",
    level: "Beginner",
    grade: "2",
    tags: ["multiplication", "division", "fractions", "decimals", "arithmetic", "percentages"],
    url: "https://www.khanacademy.org/math/arithmetic",
    icon: "➕",
    guide: {
      summary: "Arithmetic is the engine of math. It extends basic counting into rapid algorithms for multiplication (repeated addition) and division (equal partitioning).",
      keyConcepts: [
        "Place Value: In base-10, every position to the left represents a ten-fold increase (Units, Tens, Hundreds, Thousands).",
        "Multiplication as Arrays: 4 × 6 is equivalent to 4 rows of 6 items = 24.",
        "Division as Inverse: If a × b = c, then c ÷ b = a (with remainder r if not cleanly divisible).",
        "Order of Operations (PEMDAS): Parentheses, Exponents, Multiplication & Division, Addition & Subtraction."
      ],
      workedExample: {
        problem: "Evaluate: 18 + 4 × (12 - 7)",
        stepByStep: [
          "Step 1: Solve inside Parentheses first: (12 - 7) = 5.",
          "Step 2: Perform Multiplication next: 4 × 5 = 20.",
          "Step 3: Perform Addition last: 18 + 20 = 38.",
          "Conclusion: The final answer is 38."
        ]
      }
    }
  },
  {
    id: "pre-algebra",
    title: "Pre-Algebra",
    category: "Algebra",
    description: "Prepare for Algebra by understanding factors, multiples, ratios, proportions, rates, and basic equations.",
    level: "Intermediate",
    grade: "3",
    tags: ["factors", "ratios", "proportions", "exponents", "pre-algebra", "equations"],
    url: "https://www.khanacademy.org/math/pre-algebra",
    icon: "✖️",
    guide: {
      summary: "Pre-Algebra bridges arithmetic and symbolic algebra. It introduces variables (letters representing unknown numbers), integers, prime factorization, and proportionality.",
      keyConcepts: [
        "Variables: Symbols like x or y that act as placeholders for unknown numerical values.",
        "Greatest Common Factor (GCF) & Least Common Multiple (LCM).",
        "Signed Integers: Adding negative numbers moves left on the number line; subtracting a negative turns into addition (a - (-b) = a + b).",
        "Ratios & Proportions: Equivalence relationships like a/b = c/d where cross-products are equal (a·d = b·c)."
      ],
      workedExample: {
        problem: "Simplify: -8 - (-15) + (-6)",
        stepByStep: [
          "Step 1: Handle the double negative: -(-15) becomes +15.",
          "Step 2: Compute -8 + 15 = 7.",
          "Step 3: Add the remaining negative integer: 7 + (-6) = 7 - 6 = 1.",
          "Conclusion: The simplified value is 1."
        ]
      }
    }
  },
  {
    id: "algebra-1",
    title: "Algebra 1",
    category: "Algebra",
    description: "Explore linear equations, inequalities, graphs, systems of equations, functions, and quadratic equations.",
    level: "Intermediate",
    grade: "7",
    tags: ["algebra", "linear equations", "graphing", "quadratics", "inequalities", "polynomials"],
    url: "https://www.khanacademy.org/math/algebra",
    icon: "📈",
    guide: {
      summary: "Algebra 1 is the universal language of modern mathematics and science. It teaches how to isolate variables, model rates of change with linear graphs, and solve systems of constraints.",
      keyConcepts: [
        "Linear Equation Form: y = mx + b, where m is the slope (rise over run) and b is the y-intercept.",
        "Balancing Equations: Any operation performed on one side of the equals sign must be performed on the other side.",
        "Systems of Equations: Solved via substitution or elimination to find the intersection point (x, y).",
        "Quadratic Standard Form: ax² + bx + c = 0, solvable by factoring or the quadratic formula."
      ],
      workedExample: {
        problem: "Solve for x: 3(2x - 4) = 4x + 10",
        stepByStep: [
          "Step 1: Distribute the 3: 6x - 12 = 4x + 10.",
          "Step 2: Subtract 4x from both sides: 2x - 12 = 10.",
          "Step 3: Add 12 to both sides: 2x = 22.",
          "Step 4: Divide by 2: x = 11.",
          "Verification: 3(2(11) - 4) = 3(18) = 54; and 4(11) + 10 = 54. Checks out!"
        ]
      }
    }
  },
  {
    id: "geometry",
    title: "High School Geometry",
    category: "Geometry",
    description: "Study transformations, congruence, similarity, right triangle trigonometry, circles, area, and volume.",
    level: "Intermediate",
    grade: "4",
    tags: ["geometry", "triangles", "circles", "angles", "proofs", "area", "volume", "trigonometry"],
    url: "https://www.khanacademy.org/math/geometry",
    icon: "📐",
    guide: {
      summary: "Geometry investigates visual and physical space: properties of shapes, angles, distances, congruency proofs, circles, and 3D solids.",
      keyConcepts: [
        "Pythagorean Theorem: In a right triangle, a² + b² = c².",
        "Angle Sum Theorem: The interior angles of any planar triangle always sum to 180°.",
        "Circle Formulas: Area A = πr², Circumference C = 2πr.",
        "Geometric Transformations: Translations (sliding), reflections (flipping), and rotations (turning)."
      ],
      workedExample: {
        problem: "A right triangle has legs of length a = 9 cm and b = 12 cm. Find hypotenuse c.",
        stepByStep: [
          "Step 1: Apply Pythagorean Theorem: c² = a² + b².",
          "Step 2: Substitute values: c² = 9² + 12² = 81 + 144 = 225.",
          "Step 3: Take the square root: c = √225 = 15 cm.",
          "Conclusion: The hypotenuse length is 15 cm."
        ]
      }
    }
  },
  {
    id: "algebra-2",
    title: "Algebra 2",
    category: "Algebra",
    description: "Deep dive into polynomial functions, logarithms, transformations of functions, rational exponents, and series.",
    level: "Advanced",
    grade: "8",
    tags: ["algebra 2", "polynomials", "logarithms", "exponential", "complex numbers", "functions"],
    url: "https://www.khanacademy.org/math/algebra2",
    icon: "📊",
    guide: {
      summary: "Algebra 2 elevates algebra to nonlinear realms: exponential growth, logarithmic inverses, imaginary and complex numbers (i² = -1), and polynomial behavior.",
      keyConcepts: [
        "Complex Numbers: Expressed as a + bi, where i = √(-1).",
        "Logarithm Fundamentals: log_b(x) = y means b^y = x. Essential laws: log(ab) = log(a) + log(b).",
        "Polynomial Division & Factor Theorem: If P(c) = 0, then (x - c) is a factor of P(x).",
        "Rational Exponents: x^(m/n) = ⁿ√(xᵐ)."
      ],
      workedExample: {
        problem: "Solve for x: log₂(x + 3) = 5",
        stepByStep: [
          "Step 1: Convert the logarithmic equation into its equivalent exponential form: 2⁵ = x + 3.",
          "Step 2: Calculate 2⁵: 2 × 2 × 2 × 2 × 2 = 32.",
          "Step 3: Solve the linear equation: 32 = x + 3.",
          "Step 4: Subtract 3: x = 29.",
          "Conclusion: x = 29."
        ]
      }
    }
  },
  {
    id: "trigonometry",
    title: "Trigonometry",
    category: "Advanced Math",
    description: "Learn unit circle definitions, trigonometric identities, graphs of sine and cosine, and inverse trig functions.",
    level: "Advanced",
    grade: "high",
    tags: ["trigonometry", "sine", "cosine", "tangent", "unit circle", "radians", "identities"],
    url: "https://www.khanacademy.org/math/trigonometry",
    icon: "🔺",
    guide: {
      summary: "Trigonometry examines the relationship between angles and distances. From right triangle ratios (SOH-CAH-TOA) to the periodic unit circle, trig models cycles, waves, and orbital mechanics.",
      keyConcepts: [
        "Trigonometric Ratios: sin(θ) = Opp/Hyp, cos(θ) = Adj/Hyp, tan(θ) = Opp/Adj.",
        "Unit Circle: A circle of radius 1 centered at (0,0), where (cos θ, sin θ) are coordinates on the rim.",
        "Fundamental Identity: sin²(θ) + cos²(θ) = 1 for all real angles θ.",
        "Radian Measurement: 2π radians = 360°, π radians = 180°."
      ],
      workedExample: {
        problem: "Calculate the exact value of tan(60°) given sin(60°) = √3/2 and cos(60°) = 1/2.",
        stepByStep: [
          "Step 1: Use quotient identity: tan(θ) = sin(θ) / cos(θ).",
          "Step 2: Substitute: tan(60°) = (√3 / 2) / (1 / 2).",
          "Step 3: Multiply by reciprocal: (√3 / 2) × (2 / 1) = √3.",
          "Conclusion: tan(60°) = √3 (approximately 1.732)."
        ]
      }
    }
  },
  {
    id: "precalculus",
    title: "Precalculus",
    category: "Advanced Math",
    description: "Comprehensive preparation for calculus: vectors, matrices, parametric equations, polar coordinates, and series.",
    level: "Advanced",
    grade: "high",
    tags: ["precalculus", "vectors", "matrices", "limits", "polar coordinates", "series"],
    url: "https://www.khanacademy.org/math/precalculus",
    icon: "🧮",
    guide: {
      summary: "Precalculus unites algebra, geometry, and trigonometry to prepare students for calculus by exploring vectors, polar coordinates, and intuition for limits.",
      keyConcepts: [
        "Vectors: Quantities having both magnitude and direction, represented as <x, y>.",
        "Matrix Multiplication: Combining rows and columns to transform coordinates.",
        "Polar Coordinates: Identifying locations via (r, θ) rather than Cartesian (x, y).",
        "Introduction to Limits: What value does a function approach as x draws infinitely close to a number c?"
      ],
      workedExample: {
        problem: "Find the magnitude of vector v = <6, -8>.",
        stepByStep: [
          "Step 1: Apply vector magnitude formula: ||v|| = √(x² + y²).",
          "Step 2: Substitute values: ||v|| = √(6² + (-8)²).",
          "Step 3: Compute squares: ||v|| = √(36 + 64) = √100 = 10.",
          "Conclusion: The magnitude of the vector is 10."
        ]
      }
    }
  },
  {
    id: "ap-calculus-ab",
    title: "Calculus (AP / College AB)",
    category: "Calculus",
    description: "Master limits, continuity, derivatives, differentiation rules, applications of derivatives, and definite integrals.",
    level: "Expert",
    grade: "high",
    tags: ["calculus", "derivatives", "limits", "integrals", "differentiation", "rate of change", "ab"],
    url: "https://www.khanacademy.org/math/ap-calculus-ab",
    icon: "∫",
    guide: {
      summary: "Calculus is the mathematical study of continuous change. Derivatives calculate instantaneous rates of change (slopes), while integrals calculate accumulation (areas under curves).",
      keyConcepts: [
        "Derivative Definition: f'(x) = lim(h→0) [f(x+h) - f(x)] / h.",
        "Power Rule: d/dx [xⁿ] = n·xⁿ⁻¹.",
        "Fundamental Theorem of Calculus: ∫ from a to b of f(x)dx = F(b) - F(a), connecting derivatives and integrals.",
        "Chain Rule: d/dx [f(g(x))] = f'(g(x)) · g'(x)."
      ],
      workedExample: {
        problem: "Find the derivative of f(x) = 4x³ - 5x² + 7x - 9.",
        stepByStep: [
          "Step 1: Differentiate 4x³ using power rule: 4 · 3x² = 12x².",
          "Step 2: Differentiate -5x²: -5 · 2x = -10x.",
          "Step 3: Differentiate 7x: 7 · 1 = 7.",
          "Step 4: Differentiate constant -9: 0.",
          "Conclusion: f'(x) = 12x² - 10x + 7."
        ]
      }
    }
  },
  {
    id: "ap-calculus-bc",
    title: "Calculus (AP / College BC)",
    category: "Calculus",
    description: "Advanced calculus covering integration techniques, differential equations, sequences, Taylor series, and parametric curves.",
    level: "Expert",
    grade: "high",
    tags: ["calculus", "series", "taylor series", "integration techniques", "differential equations", "bc"],
    url: "https://www.khanacademy.org/math/ap-calculus-bc",
    icon: "∂",
    guide: {
      summary: "Calculus BC extends single-variable calculus to advanced integration techniques (integration by parts, partial fractions), parametric motion, and infinite Taylor/Maclaurin series.",
      keyConcepts: [
        "Integration by Parts: ∫ u dv = uv - ∫ v du.",
        "Taylor Series Expansion: Representing any smooth function as an infinite polynomial centered at x = a.",
        "Convergence Tests: Ratio Test, Integral Test, and Alternating Series Test to determine if infinite sums converge.",
        "Polar and Parametric Calculus: Derivatives and arc lengths along parametrized paths."
      ],
      workedExample: {
        problem: "Evaluate: ∫ x · eˣ dx",
        stepByStep: [
          "Step 1: Use integration by parts. Let u = x, dv = eˣ dx.",
          "Step 2: Differentiate u: du = dx; integrate dv: v = eˣ.",
          "Step 3: Apply formula: uv - ∫ v du = x·eˣ - ∫ eˣ dx.",
          "Step 4: Evaluate remaining integral: x·eˣ - eˣ + C = eˣ(x - 1) + C.",
          "Conclusion: The antiderivative is eˣ(x - 1) + C."
        ]
      }
    }
  },
  {
    id: "multivariable-calculus",
    title: "Multivariable Calculus",
    category: "Calculus",
    description: "Extend calculus to multiple dimensions: partial derivatives, gradient vectors, double integrals, and Green's Theorem.",
    level: "Expert",
    grade: "high",
    tags: ["multivariable", "partial derivatives", "gradient", "multiple integrals", "divergence", "curl"],
    url: "https://www.khanacademy.org/math/multivariable-calculus",
    icon: "🌐",
    guide: {
      summary: "Multivariable calculus studies curves, surfaces, and vector fields in 3D and higher dimensions. It is fundamental to machine learning gradient descent, physics, and fluid dynamics.",
      keyConcepts: [
        "Partial Derivatives: Differentiating a function of several variables with respect to one variable while holding others constant.",
        "Gradient Vector (∇f): Points in the direction of steepest ascent on a multidimensional surface.",
        "Double & Triple Integrals: Calculating volume, mass, and center of gravity over 2D and 3D regions.",
        "Vector Field Theorems: Green's, Stokes', and Divergence Theorems relating circulation and flux."
      ],
      workedExample: {
        problem: "Find the gradient ∇f of f(x, y) = 3x²y + 5y³.",
        stepByStep: [
          "Step 1: Compute partial with respect to x (∂f/∂x): treat y as constant: d/dx(3x²y) = 6xy; d/dx(5y³) = 0. So ∂f/∂x = 6xy.",
          "Step 2: Compute partial with respect to y (∂f/∂y): treat x as constant: d/dy(3x²y) = 3x²; d/dy(5y³) = 15y². So ∂f/∂y = 3x² + 15y².",
          "Step 3: Combine into gradient vector: ∇f = <6xy, 3x² + 15y²>.",
          "Conclusion: ∇f(x, y) = <6xy, 3x² + 15y²>."
        ]
      }
    }
  },
  {
    id: "differential-equations",
    title: "Differential Equations",
    category: "Advanced Math",
    description: "Solve first-order and second-order differential equations, Laplace transforms, and modeling real-world systems.",
    level: "Expert",
    grade: "high",
    tags: ["differential equations", "ode", "laplace", "euler", "exponential growth"],
    url: "https://www.khanacademy.org/math/differential-equations",
    icon: "⚡",
    guide: {
      summary: "Differential Equations relate an unknown function to its derivatives. They describe how physical phenomena evolve over time (e.g., heat transfer, population dynamics, circuits).",
      keyConcepts: [
        "Separable Equations: Equations where variables can be segregated on opposite sides of the equals sign: g(y)dy = f(x)dx.",
        "Integrating Factors: Technique for solving first-order linear differential equations dy/dx + P(x)y = Q(x).",
        "Second-Order Linear ODEs: Characteristic equations determining oscillatory, damped, or runaway behavior.",
        "Laplace Transforms: Converting difficult differential equations into simple algebraic equations."
      ],
      workedExample: {
        problem: "Solve the differential equation dy/dx = 3y.",
        stepByStep: [
          "Step 1: Separate variables: (1/y) dy = 3 dx.",
          "Step 2: Integrate both sides: ∫ (1/y) dy = ∫ 3 dx.",
          "Step 3: ln|y| = 3x + C₁.",
          "Step 4: Exponentiate both sides: |y| = e^(3x + C₁) = e^C₁ · e^(3x).",
          "Step 5: Let constant C = ±e^C₁: y(x) = C · e^(3x).",
          "Conclusion: General solution is y(x) = C e^(3x)."
        ]
      }
    }
  },
  {
    id: "linear-algebra",
    title: "Linear Algebra",
    category: "Advanced Math",
    description: "Explore vectors, matrix transformations, determinants, vector spaces, eigenvalues, and eigenvectors.",
    level: "Expert",
    grade: "high",
    tags: ["linear algebra", "matrices", "vectors", "eigenvalues", "dot product", "transformations"],
    url: "https://www.khanacademy.org/math/linear-algebra",
    icon: "🧊",
    guide: {
      summary: "Linear Algebra is the math of linear spaces, matrices, and transformations. It is the mathematical backbone of 3D computer graphics, neural networks, quantum computing, and cryptography.",
      keyConcepts: [
        "Matrix Transformations: Matrices act as functions that stretch, rotate, and shear vector spaces.",
        "Determinants: A scalar value measuring how much an area or volume is scaled by a matrix transformation.",
        "Dot & Cross Products: Dot product measures directional alignment (a · b = ||a|| ||b|| cos θ).",
        "Eigenvalues & Eigenvectors: Vectors whose direction remains invariant under a transformation (Av = λv)."
      ],
      workedExample: {
        problem: "Calculate the determinant of matrix A = [[4, 2], [3, 5]].",
        stepByStep: [
          "Step 1: For a 2x2 matrix [[a, b], [c, d]], the determinant formula is det(A) = ad - bc.",
          "Step 2: Identify components: a = 4, b = 2, c = 3, d = 5.",
          "Step 3: Compute: (4 × 5) - (2 × 3) = 20 - 6 = 14.",
          "Conclusion: det(A) = 14."
        ]
      }
    }
  },
  {
    id: "statistics-probability",
    title: "Statistics & Probability",
    category: "Statistics",
    description: "Analyze data distributions, normal models, confidence intervals, hypothesis testing, probability, and regression.",
    level: "Intermediate",
    grade: "6",
    tags: ["statistics", "probability", "mean", "median", "standard deviation", "hypothesis testing", "normal distribution"],
    url: "https://www.khanacademy.org/math/statistics-probability",
    icon: "🎲",
    guide: {
      summary: "Statistics and Probability provide mathematical tools to quantify uncertainty, uncover patterns in noisy data, and test scientific hypotheses with statistical confidence.",
      keyConcepts: [
        "Measures of Central Tendency: Mean (average), Median (middle value), Mode (most frequent).",
        "Standard Deviation (σ): Measures dispersion and spread of data around the mean.",
        "Normal Distribution (Bell Curve): 68% of data falls within 1σ, 95% within 2σ, and 99.7% within 3σ.",
        "Conditional Probability & Bayes' Theorem: P(A|B) = P(B|A)·P(A) / P(B)."
      ],
      workedExample: {
        problem: "Find the mean of the data set: 12, 16, 20, 24, 28.",
        stepByStep: [
          "Step 1: Sum all numbers: 12 + 16 + 20 + 24 + 28 = 100.",
          "Step 2: Count number of observations: n = 5.",
          "Step 3: Divide sum by count: 100 ÷ 5 = 20.",
          "Conclusion: The mean of the data set is 20."
        ]
      }
    }
  },
  {
    id: "fractions-deepdive",
    title: "Fractions & Decimals Unit",
    category: "Foundations",
    description: "Direct unit module covering fraction multiplication, division, adding mixed numbers, and decimal conversion.",
    level: "Beginner",
    grade: "5",
    tags: ["fractions", "decimals", "mixed numbers", "division"],
    url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic",
    icon: "🍰",
    guide: {
      summary: "Fractions represent parts of a whole. Mastering common denominators, simplification, and conversions to decimals forms the bedrock of algebra and measurement.",
      keyConcepts: [
        "Common Denominators: To add or subtract fractions (a/b + c/d), find a common multiple for the denominators.",
        "Multiplying Fractions: Multiply straight across (a/b × c/d = (a·c)/(b·d)).",
        "Dividing Fractions: Multiply by the reciprocal (a/b ÷ c/d = a/b × d/c).",
        "Decimal Conversion: Divide the numerator by the denominator (e.g., 3/4 = 3 ÷ 4 = 0.75)."
      ],
      workedExample: {
        problem: "Calculate: 2/5 + 1/3",
        stepByStep: [
          "Step 1: Find Least Common Denominator (LCD) of 5 and 3: LCD = 15.",
          "Step 2: Convert 2/5: (2 × 3) / (5 × 3) = 6/15.",
          "Step 3: Convert 1/3: (1 × 5) / (3 × 5) = 5/15.",
          "Step 4: Add numerators over common denominator: (6 + 5) / 15 = 11/15.",
          "Conclusion: 2/5 + 1/3 = 11/15."
        ]
      }
    }
  },
  {
    id: "derivatives-unit",
    title: "Derivatives & Differentiation",
    category: "Calculus",
    description: "Learn power rule, product rule, quotient rule, chain rule, and tangent line slopes with video practice.",
    level: "Expert",
    grade: "high",
    tags: ["derivatives", "chain rule", "power rule", "differentiation"],
    url: "https://www.khanacademy.org/math/differential-calculus/dc-diff-intro",
    icon: "📈",
    guide: {
      summary: "Derivatives measure the instantaneous rate of change of a function. Geometrically, the derivative f'(a) is the exact slope of the tangent line to the curve at x = a.",
      keyConcepts: [
        "Product Rule: d/dx [u · v] = u'v + uv'.",
        "Quotient Rule: d/dx [u / v] = (u'v - uv') / v².",
        "Chain Rule: d/dx [f(g(x))] = f'(g(x)) · g'(x).",
        "Critical Points: Points where f'(x) = 0 or is undefined indicate local maxima, minima, or inflections."
      ],
      workedExample: {
        problem: "Find the slope of the tangent line to y = x² - 4x + 1 at x = 3.",
        stepByStep: [
          "Step 1: Take the derivative using power rule: dy/dx = 2x - 4.",
          "Step 2: Substitute x = 3: dy/dx |₍ₓ₌₃₎ = 2(3) - 4.",
          "Step 3: Compute: 6 - 4 = 2.",
          "Conclusion: The slope of the tangent line at x = 3 is 2."
        ]
      }
    }
  }
];
