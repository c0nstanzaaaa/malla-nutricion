const courses = [
  { code: "MAT1", name: "Matemáticas", prereqs: [] },
  { code: "BIO1", name: "Biología celular", prereqs: [], unlocks: ["NUT1"] },
  { code: "QUI1", name: "Química general y orgánica", prereqs: [], unlocks: ["BIOQ"] },
  { code: "MORF1", name: "Morfología I", prereqs: [], unlocks: ["EVAL1"] },
  { code: "ING1", name: "Inglés I", prereqs: [], unlocks: ["ING2"] },
  { code: "INTRO", name: "Introducción a la nutrición", prereqs: [], unlocks: ["BIOET"] },
  { code: "MORF2", name: "Morfología II", prereqs: ["MORF1"], unlocks: ["FISIO"] },
  { code: "NUT1", name: "Nutrición humana", prereqs: ["BIO1", "QUI1"], unlocks: ["EVAL1"] },
  { code: "BIOET", name: "Bioética", prereqs: ["INTRO"], unlocks: [] },
  { code: "BIOQ", name: "Bioquímica", prereqs: ["QUI1"], unlocks: ["MICRO", "FISIO"] },
  { code: "ING2", name: "Inglés aplicado a la nutrición I", prereqs: ["ING1"], unlocks: ["ING3"] },
  { code: "ING3", name: "Inglés aplicado a la nutrición II", prereqs: ["ING2"], unlocks: [] },
  { code: "FISIO", name: "Fisiología", prereqs: ["MORF2", "BIOQ"], unlocks: ["FISIO1"] },
  { code: "EVAL1", name: "Evaluación nutricional I", prereqs: ["MORF1", "NUT1"], unlocks: ["EVAL2", "SALUD", "EDUPROM", "ENVEJEC"] },
  { code: "MICRO", name: "Microbiología y parasitología", prereqs: ["BIOQ"], unlocks: ["HIGIENE", "TECDIET"] },
  { code: "HIGIENE", name: "Higiene y control alimentos", prereqs: ["MICRO"], unlocks: ["TECDIET"] },
  { code: "TECDIET", name: "Técnicas dietéticas", prereqs: ["HIGIENE"], unlocks: ["PLAN", "BROMA"] },
  { code: "EVAL2", name: "Evaluación nutricional II", prereqs: ["EVAL1"], unlocks: ["MATINF", "PI1", "CLINAD"] },
  { code: "FISIO1", name: "Fisiopatología I", prereqs: ["FISIO"], unlocks: ["FISIO2", "FARMA"] },
  { code: "FISIO2", name: "Fisiopatología II", prereqs: ["FISIO1"], unlocks: ["CLINPED", "CLINAD", "ECNT"] },
  { code: "FARMA", name: "Farmacología en nutrición", prereqs: ["FISIO1"], unlocks: ["CLINAD", "ECNT"] },
  { code: "CLINAD", name: "Nutrición clínica adulto y mayor", prereqs: ["FISIO2", "FARMA"], unlocks: ["CLINPED", "ECNT", "METINV", "INTEG2", "PI2", "NUTMETA"] },
  { code: "CLINPED", name: "Nutrición clínica pediátrica", prereqs: ["MATINF", "CLINAD"], unlocks: ["PI2", "NUTMETA"] },
  { code: "MATINF", name: "Nutrición materno infantil", prereqs: ["EVAL2"], unlocks: ["CLINPED"] },
  { code: "ECNT", name: "Enfermedades crónicas nutricionales", prereqs: ["FISIO2", "FARMA", "CLINAD"], unlocks: ["EJERC"] },
  { code: "EDUPROM", name: "Educación y promoción en salud", prereqs: ["EVAL1"], unlocks: ["PI1"] },
  { code: "ENVEJEC", name: "Envejecimiento activo", prereqs: ["EVAL1"], unlocks: [] },
  { code: "SALUD", name: "Salud pública y comunitaria", prereqs: ["EVAL1"], unlocks: ["EPID", "PI1"] },
  { code: "PI1", name: "Práctica intermedia I", prereqs: ["EVAL2", "SALUD", "EDUPROM"], unlocks: ["INTEG2", "PI2"] },
  { code: "PLAN", name: "Planificación alimentaria", prereqs: ["TECDIET"], unlocks: ["ADMINGRAL"] },
  { code: "BROMA", name: "Bromatología", prereqs: ["TECDIET"], unlocks: ["TECNO"] },
  { code: "TECNO", name: "Tecnología alimentos", prereqs: ["BROMA"], unlocks: ["METINV", "CALIDAD"] },
  { code: "FUNDINV", name: "Fundamentos investigación", prereqs: [], unlocks: ["METINV"] },
  { code: "BIOEST", name: "Bioestadística", prereqs: [], unlocks: ["METINV"] },
  { code: "METINV", name: "Metodología investigación", prereqs: ["TECNO", "FUNDINV", "BIOEST"], unlocks: ["TESIS", "DISEÑO"] },
  { code: "TESIS", name: "Proyecto de tesis", prereqs: ["METINV"], unlocks: ["PRACTICA"] },
  { code: "ADMINGRAL", name: "Administración general", prereqs: ["PLAN"], unlocks: ["CALIDAD", "INTEG2", "PI3"] },
  { code: "CALIDAD", name: "Gestión calidad en servicios", prereqs: ["ADMINGRAL", "TECNO"], unlocks: ["PI3"] },
  { code: "PI2", name: "Práctica intermedia II", prereqs: ["CLINPED", "CLINAD"], unlocks: ["PI3"] },
  { code: "PI3", name: "Práctica intermedia III", prereqs: ["PI2", "CALIDAD"], unlocks: ["PRACTICA"] },
  { code: "INTEG2", name: "Integración en nutrición II", prereqs: ["PI1", "CLINAD", "ADMINGRAL"], unlocks: [] },
  { code: "ELECT1", name: "Electivo I", prereqs: [], unlocks: ["ELECT2"] },
  { code: "ELECT2", name: "Electivo II", prereqs: ["ELECT1"], unlocks: ["PRACTICA"] },
  { code: "EJERC", name: "Enfermedades metabólicas y ejercicio", prereqs: ["ECNT"], unlocks: ["DEPORTE"] },
  { code: "DEPORTE", name: "Nutrición y deporte", prereqs: ["EJERC"], unlocks: ["PRACTICA"] },
  { code: "DISEÑO", name: "Diseño de proyectos comunidad", prereqs: ["METINV"], unlocks: ["PRACTICA"] },
  { code: "NUTMETA", name: "Nutrición y enfermedades metabólicas", prereqs: ["CLINPED", "CLINAD"], unlocks: ["PRACTICA"] },
  { code: "PRACTICA", name: "Práctica profesional", prereqs: ["TESIS", "DEPORTE", "DISEÑO", "ELECT2", "PI3", "NUTMETA"], unlocks: [] }
];

const grid = document.getElementById("grid");

function createCourse(course) {
  const div = document.createElement("div");
  div.classList.add("course");
  div.dataset.code = course.code;
  div.textContent = course.name;

  const isLocked = course.prereqs.length > 0;
  if (isLocked) div.classList.add("locked");

  div.addEventListener("click", () => {
    if (div.classList.contains("locked") || div.classList.contains("completed")) return;

    div.classList.add("completed");
    unlockCourses(course.code);
  });

  grid.appendChild(div);
}

function unlockCourses(code) {
  courses.forEach(course => {
    if (course.prereqs.includes(code)) {
      const prereqsCompleted = course.prereqs.every(pr =>
        document.querySelector(`[data-code='${pr}']`)?.classList.contains("completed")
      );
      if (prereqsCompleted) {
        const target = document.querySelector(`[data-code='${course.code}']`);
        if (target) target.classList.remove("locked");
      }
    }
  });
}

courses.forEach(createCourse);

