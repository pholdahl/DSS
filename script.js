const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

const confirmationButton = document.querySelector(".confirmation-button");

const modal = document.querySelector("#registration-modal");
const modalContent = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");

const registrationForm = document.querySelector("#registration-form");
const registrationSuccess = document.querySelector(".registration-success");
const submitButton = registrationForm.querySelector(".form-submit");

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwheXyFVMf8_yvDYU3hCZ6IhlqiKQSU2rYupMp5Hr1_8acsiNVpCtt-aTfXcAIR-P_2vg/exec";


const registeredCodename = document.querySelector("#registered-codename");
const successMessage = document.querySelector("#success-message");

const successMessages = [
  "Godkjent av byrået. Dr. Watson skulle egentlig registrere seg også, men ombestemte seg i siste liten.",
  "Kodenavn godkjent. Sherlock Holmes deduserte kodenavnet ditt før du rakk å sende inn skjemaet.",
  "Kandidatstatus oppdatert. 221B Baker Street har blitt informert, uten at noen egentlig vet hvorfor.",
  "Kodenavn godkjent. Din 'shaken, not stirred'-holdning er notert, selv om du bare bestilte vann.",
  "Registrering mottatt. Austin Powers ringte for å si 'yeah baby'. Vi valgte å ikke kommentere det videre.",
  "Kodenavn godkjent. Du får ikke en skreddersydd Kingsman-dress, men skjorta di ser stiv nok ut.",
  "Registrering mottatt. Bourne ville husket dette, om han husket noe som helst.",
  "Registrering fullført. Du har ingen lisens til å drepe, men du har lisens til å delta på fest.",
  "Godkjent. Ethan Hunt ringte for å si at han IKKE anbefaler å henge fra tak uten sikkerhetsline. Notér deg det.",
  "Registrering mottatt. M sender sin hilsen, mest fordi hun tror du er en annen.",
  "Kandidat rekruttert. Vi instruerte Bourne om å gi deg opptrening. Han glemte å møte opp. Ironisk nok.",
  "Godkjent av byrået. Du drikker ikke martini rørt, ikke ristet, du drikker husets kaffe, kald.",
  "Kandidatprofil oppdatert. Oppdraget er akseptert, i motsetning til vanlig praksis blir denne meldingen IKKE selvdestruert om fem sekunder.",
  "Registrering fullført. Ethan Hunt ba oss si at masken ikke er inkludert i pakken.",
  "Kandidat godkjent. Du har offisielt flere kodenavn enn Jason Bourne har hukommelsestap.",
  "Registrering mottatt. James Bond ringte og ville ha royalties for stilen din. Vi la på.",
  "Kodenavn godkjent. Forsøk å ikke avsløre det før oppdraget er over.",
  "Kodenavn godkjent. Kontraspionasjeavdelingen falt av stolen av latter, men i positiv forstand.",
  "Registrering mottatt. En måke har blitt utnevnt som din håndterer. Den svarer ikke på henvendelser.",
  "Kandidat godkjent. Bakgrunnssjekken ble utført av en praktikant med bind for øynene.",
  "Du er nå agent. Din superkraft er ukjent, men vi har stor tro på albuene dine.",
  "Kodenavn lagret i en boks merket 'IKKE ÅPNE', som selvsagt betyr at noen allerede har åpnet den.",
  "Registrering fullført. Du har bestått testen. Det var ingen test. Nå er det en test.",
  "Kandidat innrullert. Oppdragsbrief blir levert av en mann som later som han er en lampe.",
  "Du er nå en offisiell agent. Byrået har utstyrt deg med en usynlig jetpack. Bruk fantasien.",
  "Registrering fullført. Vi har testet deg allerede, men glemte av hva vi testet for.",
  "Kandidatstatus: aktivert. Du kan nå snike deg forbi vaktposter ved å gå sakte og se selvsikker ut.",
  "Godkjent av en komité bestående av tre slips og en kaffekopp.",
  "Kodenavn arkivert. Fienden vet ikke at du finnes, hovedsakelig fordi vi glemte å nevne det for noen.",
  "Registrering vellykket. Din spionutstyrspakke inneholder en binders og god selvtillit.",
  "Kandidat godkjent. Du har nå lisens til å høres mystisk ut i sosiale sammenhenger.",
  "DSS erklærer deg herved for 'overraskende kapabel'. Det var ikke ment som kompliment, men ta det.",
  "Registrering fullført. Selvdestruksjonssekvensen aktiveres kun hvis du sier ordet 'lasagne' tre ganger.",
  "Kodenavn godkjent. Din dekkidentitet er 'noen som definitivt ikke er agent'. Solid arbeid.",
  "Registrering mottatt. Vi tror på deg, hovedsakelig fordi alternativet er for skummelt å tenke på.",
  "Registrering fullført. DSS har nå et rimelig godt bilde av hvem du tror du er.",
  "Kandidat registrert. Oppdraget begynner først når du faktisk møter opp.",
  "Du er nå offisielt registrert. Det er uklart hva du har meldt deg på.",
  "DSS bekrefter mottak. Vi setter pris på din overraskende samarbeidsvilje.",
];


/* =========================
   Mobile navigation
========================= */

menuToggle.addEventListener("click", () => {
  siteNav.classList.toggle("is-open");
  menuToggle.classList.toggle("is-active");
});


navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuToggle.classList.remove("is-active");
  });
});


/* =========================
   Modal
========================= */

confirmationButton.addEventListener("click", () => {
  modal.classList.add("is-open");
  document.body.classList.add("modal-open");
});


function closeModal() {
  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");

  modalContent.classList.remove("is-hidden");
  registrationSuccess.classList.remove("is-visible");

  registrationForm.reset();

  registeredCodename.textContent = "";
  successMessage.textContent = "";

  submitButton.disabled = false;
  submitButton.textContent = "REGISTRER KANDIDAT →";
}


modalClose.addEventListener("click", closeModal);


/* Close modal by clicking outside */

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});


/* Close modal with Escape */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});


/* =========================
   Registration
========================= */

function getRandomSuccessMessage() {
  const randomIndex = Math.floor(
    Math.random() * successMessages.length
  );
  return successMessages[randomIndex];
}


registrationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  submitButton.disabled = true;
  submitButton.textContent = "REGISTRERER...";

  const name = document.querySelector("#candidate-name").value.trim();
  const codename = document.querySelector("#codename").value.trim();

  // Choose the message once
  const selectedMessage = getRandomSuccessMessage();

  const formData = new URLSearchParams();

  formData.append("name", name);
  formData.append("codename", codename);
  formData.append("message", selectedMessage);

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors"
    });

    // Use the same values in the success modal
    registeredCodename.textContent = codename;
    successMessage.textContent = selectedMessage;

    modalContent.classList.add("is-hidden");

    setTimeout(() => {
      registrationSuccess.classList.add("is-visible");
    }, 300);

    setTimeout(() => {
      closeModal();
    }, 12000);

  } catch (error) {
    console.error("Registrering feilet:", error);

    submitButton.disabled = false;
    submitButton.textContent = "REGISTRER KANDIDAT →";
  }
});

// registrationForm.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   submitButton.disabled = true;
//   submitButton.textContent = "REGISTRERER...";

//   const name = document.querySelector("#candidate-name").value.trim();
//   const codename = document.querySelector("#codename").value.trim();
  
//   if (!name || !codename) {
//     return;
//   }

//   if (name.length < 2 || codename.length < 2) {
//     return;
//   }

//   const formData = new URLSearchParams();

//   formData.append("name", name);
//   formData.append("codename", codename);

//   try {
//     await fetch(GOOGLE_SCRIPT_URL, {
//       method: "POST",
//       body: formData,
//       mode: "no-cors"
//     });

//     registeredCodename.textContent = codename;
//     successMessage.textContent = getRandomSuccessMessage();

//     modalContent.classList.add("is-hidden");

//     setTimeout(() => {
//       registrationSuccess.classList.add("is-visible");
//     }, 300);

//     setTimeout(() => {
//       closeModal();
//     }, 9000);

//   } catch (error) {
//     console.error("Registrering feilet:", error);

//     submitButton.disabled = false;
//     submitButton.textContent = "REGISTRER KANDIDAT →";
//   }
// });


/* =========================
   DSS Console Easter Egg
========================= */

const consoleMessages = [
  [
    "DSS // SYSTEMSTATUS: OPERATIV",
    "Uvedkommende har ingen grunn til å være her."
  ],
  [
    "DSS // BEGRENSET INNSYN",
    "Du har funnet noe du ikke var ment å finne."
  ],
  [
    "DSS // ADVARSEL",
    "Denne konsollen overvåkes. Sannsynligvis."
  ],
  [
    "DSS // SIKKER KANAL ETABLERT",
    "Kandidaten observeres."
  ],
  [
    "DSS // OPERATØR IDENTIFISERT",
    "Konsolltilgang registrert.",
    "Fortsett som om ingenting har skjedd."
  ],
  [
    "DSS // INTERN MELDING",
    "Hvis du kan lese dette, har du kommet lenger enn forventet."
  ],
  [
    "DSS // SYSTEMMELDING",
    "Godt observert.",
    "De fleste ser ikke etter konsollen.",
    "Dette kan være en fordel under opptaksprøven."
  ],
  [
    "DSS // KLASSIFISERT",
    "Det finnes ingen melding her.",
    "Ikke spør hvorfor."
  ],
  [
  "DSS // FEILKODE 40",
  "Systemet har oppdaget en kandidat med unormalt høy nysgjerrighet.",
  "Ingen tiltak iverksettes på nåværende tidspunkt."
],
[
  "DSS // SIKKERHETSLOGG",
  "DevTools åpnet.",
  "Hendelsen er registrert.",
  "Neida."
],
[
  "DSS // INTERN MELDING",
  "Gratulerer.",
  "Du har funnet nettsidens minst nyttige funksjon."
],
[
  "DSS // ANALYSE FULLFØRT",
  "Teknisk nysgjerrighet: Bekreftet.",
  "Dømmekraft: Under vurdering."
],
[
  "DSS // SYSTEMVARSEL",
  "Du skulle egentlig ikke vært her.",
  "Men når du først er her: Velkommen."
]
];

function printRandomConsoleMessage() {
  const randomIndex = Math.floor(Math.random() * consoleMessages.length);
  const [heading, ...lines] = consoleMessages[randomIndex];

  console.log(
    `%c${heading}`,
    "font-size: 16px; font-weight: bold; color: #8f3030;"
  );

  lines.forEach((line) => {
    console.log(line);
  });
}

printRandomConsoleMessage();