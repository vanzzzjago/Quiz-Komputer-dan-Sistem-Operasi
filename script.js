// AUDIO SYSTEM
const audioContext = new AudioContext();

function playBeep() {
    const oscillator = audioContext.createOscillator();

    oscillator.type = "sine";
    oscillator.frequency.value = 1000;
    oscillator.connect(audioContext.destination);

    oscillator.start();

    setTimeout(() => {
        oscillator.stop();
    }, 150);
}


//==============================
// DATA SOAL PILIHAN GANDA
//==============================

const multipleChoiceQuestions = [

{
question:"Komputer adalah perangkat elektronik yang digunakan untuk ....",

options:[
"A. Bermain game saja",
"B. Mengolah data menjadi informasi",
"C. Menggambar secara manual",
"D. Mengirim surat melalui pos"
]
},

{
question:"Berikut yang termasuk contoh komputer adalah ....",

options:[
"A. Buku",
"B. Smartphone",
"C. Pulpen",
"D. Penggaris"
]
},

{
question:"CPU merupakan ....",

options:[
"A. Penyimpanan permanen",
"B. Otak komputer",
"C. Perangkat output",
"D. Sistem operasi"
]
},

{
question:"Fungsi utama RAM adalah ....",

options:[
"A. Menyimpan data secara permanen",
"B. Menyimpan data sementara",
"C. Menampilkan gambar",
"D. Menghubungkan internet"
]
},

{
question:"SSD digunakan untuk ....",

options:[
"A. Menampilkan video",
"B. Menyimpan data permanen",
"C. Mengolah data",
"D. Menghubungkan mouse"
]
},

{
question:"Motherboard berfungsi sebagai ....",

options:[
"A. Perangkat input",
"B. Pusat penghubung seluruh komponen komputer",
"C. Penyimpanan data",
"D. Sistem operasi"
]
},

{
question:"Komponen yang berfungsi menyalurkan daya listrik ke seluruh komputer adalah ....",

options:[
"A. CPU",
"B. SSD",
"C. Power Supply",
"D. RAM"
]
},

{
question:"Berikut yang termasuk perangkat input adalah ....",

options:[
"A. Monitor",
"B. Printer",
"C. Keyboard",
"D. Speaker"
]
},

{
question:"Perangkat yang digunakan untuk menggerakkan kursor adalah ....",

options:[
"A. Mouse",
"B. Printer",
"C. Webcam",
"D. Speaker"
]
},

{
question:"Webcam digunakan untuk ....",

options:[
"A. Mencetak dokumen",
"B. Menampilkan video",
"C. Memasukkan gambar atau video",
"D. Menyimpan file"
]
},

{
question:"Perangkat yang digunakan untuk mencetak dokumen adalah ....",

options:[
"A. Speaker",
"B. Printer",
"C. Monitor",
"D. Scanner"
]
},

{
question:"Tahapan pertama dalam cara kerja komputer adalah ....",

options:[
"A. Output",
"B. Input",
"C. Penyimpanan",
"D. Booting"
]
},

{
question:"Komponen CPU yang bertugas melakukan perhitungan adalah ....",

options:[
"A. BIOS",
"B. ALU",
"C. Driver",
"D. Browser"
]
},

{
question:"Software adalah ....",

options:[
"A. Perangkat keras komputer",
"B. Komponen fisik komputer",
"C. Kumpulan program atau instruksi",
"D. Kabel penghubung komputer"
]
},

{
question:"Yang termasuk sistem operasi adalah ....",

options:[
"A. Discord",
"B. Google Chrome",
"C. Windows",
"D. Spotify"
]
},

{
question:"Driver berfungsi untuk ....",

options:[
"A. Menghubungkan perangkat keras dengan sistem operasi",
"B. Menyimpan data",
"C. Menampilkan gambar",
"D. Mencetak dokumen"
]
},

{
question:"Linux merupakan sistem operasi yang bersifat ....",

options:[
"A. Berbayar dan tertutup",
"B. Open-source",
"C. Khusus untuk game",
"D. Tidak dapat dimodifikasi"
]
},

{
question:"Proses ketika komputer dinyalakan hingga siap digunakan disebut ....",

options:[
"A. Login",
"B. Download",
"C. Booting",
"D. Upload"
]
},

{
question:"Setelah BIOS melakukan pengecekan komponen, maka tahap berikutnya adalah ....",

options:[
"A. Desktop ditampilkan",
"B. Sistem operasi dimuat ke dalam RAM",
"C. Komputer dimatikan",
"D. Login dihapus"
]
},

{
question:"Folder berfungsi untuk ....",

options:[
"A. Menampilkan website",
"B. Mengelompokkan file",
"C. Menjalankan aplikasi",
"D. Mengatur RAM"
]
},

{
question:"Ekstensi file Microsoft Excel adalah ....",

options:[
"A. .pdf",
"B. .mp4",
"C. .xlsx",
"D. .exe"
]
},

{
question:"Browser digunakan untuk ....",

options:[
"A. Menjalankan CPU",
"B. Mengakses internet dan membuka website",
"C. Mengolah data",
"D. Mencetak dokumen"
]
},

{
question:"Google termasuk ....",

options:[
"A. Sistem Operasi",
"B. Search Engine",
"C. Browser",
"D. Website Belanja"
]
},

{
question:"Email digunakan untuk ....",

options:[
"A. Mengirim dan menerima pesan",
"B. Mengganti RAM",
"C. Menginstal SSD",
"D. Memformat komputer"
]
},

{
question:"Data yang tersimpan di RAM akan ....",

options:[
"A. Tetap tersimpan selamanya",
"B. Hilang ketika komputer dimatikan",
"C. Berubah menjadi SSD",
"D. Berpindah ke monitor"
]
}

];



//==============================
// SOAL ESSAY
//==============================


const essayQuestions = [

"Jelaskan pengertian komputer dan sebutkan minimal tiga fungsi komputer!",

"Jelaskan perbedaan antara RAM dan SSD beserta fungsinya masing-masing!",

"Sebutkan dan jelaskan empat tahapan utama cara kerja komputer!",

"Apa yang dimaksud dengan sistem operasi? Sebutkan tiga contoh sistem operasi yang kamu ketahui!",

"Jelaskan proses booting komputer mulai dari tombol power ditekan hingga komputer siap digunakan!"

];




//==============================
// KUNCI JAWABAN
//==============================


const answerKey = [

"B",
"B",
"B",
"B",
"B",
"B",
"C",
"C",
"A",
"C",
"B",
"B",
"B",
"C",
"C",
"A",
"B",
"C",
"B",
"B",
"C",
"B",
"B",
"A",
"B"

];




//==============================
// TOTAL SOAL
//==============================

const totalQuestions = 30;


//==============================
// JAWABAN USER
//==============================

let userAnswers = new Array(25).fill("");

let essayAnswers = new Array(5).fill("");




//==============================
// VARIABEL QUIZ
//==============================


let currentQuestion = 0;

let timer;

let totalTime = 1800; //30 menit

let score = 0;

let correctAnswer = 0;

let wrongAnswer = 0;

let usedTime = 0;




//==============================
// DOM SELECTOR
//==============================


const startSection =
document.getElementById("startSection");

const quizSection =
document.getElementById("quizSection");

const resultSection =
document.getElementById("resultSection");

const reviewSection =
document.getElementById("reviewSection");

const questionContainer =
document.getElementById("questionContainer");

const questionNumber =
document.getElementById("questionNumber");

const timerDisplay =
document.getElementById("timer");

const progressFill =
document.getElementById("progressFill");

const progressText =
document.getElementById("progressText");

const navigatorContainer =
document.getElementById("questionNavigator");

const clock =
document.getElementById("clock");

//==================================================
// LOADING SCREEN + REAL TIME CLOCK +
// START QUIZ + TIMER COUNTDOWN
//==================================================



//==============================
// LOADING SCREEN
//==============================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading-screen").style.display = "none";

    }, 2000);

});




//==============================
// JAM REAL TIME
//==============================

function updateClock() {

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${hours} : ${minutes} : ${seconds} WIB`;

}


// jalan terus setiap 1 detik
setInterval(updateClock, 1000);

// tampil pertama kali
updateClock();




//==============================
// INPUT USER
//==============================

let participantName = "";
let participantClass = "";


//=========================================
// START QUIZ BUTTON
//=========================================

const startQuizBtn =
document.getElementById("startQuizBtn");


startQuizBtn.addEventListener("click", () => {

    // AMBIL INPUT USER
    participantName =
    document.getElementById("namaPeserta").value.trim();

    participantClass =
    document.getElementById("kelasPeserta").value.trim();

    // VALIDASI INPUT
    if (participantName === "" || participantClass === "") {

        alert("Silakan isi Nama dan Kelas terlebih dahulu!");
        return;

    }

    // AKTIFKAN AUDIO SYSTEM
    audioContext.resume();

    // GANTI HALAMAN
    startSection.classList.add("hidden");
    quizSection.classList.remove("hidden");

    // TAMPILKAN IDENTITAS PESERTA
    document.getElementById("displayNama").textContent =
        "Nama : " + participantName;

    document.getElementById("displayKelas").textContent =
        "Kelas : " + participantClass;

    // MULAI TIMER QUIZ
    startTimer();


    // TAMPILKAN SOAL PERTAMA
    renderQuestion();

    // BUAT QUESTION NAVIGATOR
    createNavigator();

    // UPDATE PROGRESS BAR
    updateProgress();

});

//==============================
// TIMER QUIZ
//==============================

function startTimer() {

    timer = setInterval(() => {

        totalTime--;

        // TOTAL WAKTU YANG SUDAH DIGUNAKAN
        usedTime++;


        // HITUNG MENIT DAN DETIK
        const minutes =
        Math.floor(totalTime / 60);

        const seconds =
        totalTime % 60;

        timerDisplay.textContent =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        // WARNING TIMER < 5 MENIT
        if (totalTime <= 300) {
            timerDisplay.style.color = "yellow";
            timerDisplay.style.animation = "pulse 1s infinite";
        }

        // WARNING TIMER < 1 MENIT
        if (totalTime <= 60) {
            timerDisplay.style.color = "red";
        }

        // AUTO SUBMIT
        if (totalTime <= 0) {
            clearInterval(timer);
            alert("Waktu habis! Quiz akan dikumpulkan.");
            submitQuiz();
        }
    }, 1000);
}


//==============================
// FORMAT WAKTU PENGERJAAN
//==============================

function formatUsedTime(seconds) {


    const minute =
    Math.floor(seconds / 60);

    const second =
    seconds % 60;


    return `${minute} Menit ${second} Detik`;

}







//==============================
// RESET TIMER (OPTIONAL)
//==============================

function resetTimer() {

    clearInterval(timer);

    totalTime = 1800;

    usedTime = 0;


    timerDisplay.textContent = "30:00";

}






//==================================================
// PART 2 SELESAI
//==================================================

//==================================================
// PART 3
// RENDER QUESTION + NAVIGATOR +
// SAVE ANSWER + PROGRESS BAR
//==================================================


//==============================
// RENDER SOAL
//==============================

function renderQuestion() {

    questionContainer.innerHTML = "";

    // SOAL PILIHAN GANDA
    if (currentQuestion < 25) {

        const questionData =
        multipleChoiceQuestions[currentQuestion];

        questionNumber.textContent =
        `Soal Nomor ${currentQuestion + 1}`;


        // PERTANYAAN
        const title =
        document.createElement("h3");

        title.textContent =
        questionData.question;

        questionContainer.appendChild(title);



        // PILIHAN JAWABAN
        questionData.options.forEach((option, index) => {

            const div =
            document.createElement("div");

            div.classList.add("option");


            const radio =
            document.createElement("input");

            radio.type = "radio";
            radio.name = "answer";

            // A B C D
            const value =
            String.fromCharCode(65 + index);

            radio.value = value;


            // JIKA SUDAH DIJAWAB
            if (userAnswers[currentQuestion] === value) {

                radio.checked = true;

            }



            // SIMPAN JAWABAN USER
            radio.addEventListener("change", () => {

                userAnswers[currentQuestion] = value;

                updateNavigator();
                updateProgress();

            });


            const label =
            document.createElement("label");

            label.textContent = option;


            div.appendChild(radio);
            div.appendChild(label);

            questionContainer.appendChild(div);


        });

    }


    //=========================================
    // SOAL ESSAY
    //=========================================

    else {

        const essayIndex =
        currentQuestion - 25;


        questionNumber.textContent =
        `Essay Nomor ${essayIndex + 1}`;


        const title =
        document.createElement("h3");


        title.textContent =
        essayQuestions[essayIndex];


        questionContainer.appendChild(title);



        // TEXT AREA
        const textarea =
        document.createElement("textarea");


        textarea.placeholder =
        "Tuliskan jawabanmu di sini...";


        textarea.value =
        essayAnswers[essayIndex];



        // AUTO SAVE ESSAY
        textarea.addEventListener("input", () => {

            essayAnswers[essayIndex] =
            textarea.value;


            updateNavigator();
            updateProgress();


            // AUTO RESIZE
            textarea.style.height = "auto";
            textarea.style.height =
            textarea.scrollHeight + "px";

        });



        questionContainer.appendChild(textarea);

    }


    // UPDATE NAVIGATOR
    updateNavigator();

}



//==================================================
// QUESTION NAVIGATOR
//==================================================

function createNavigator() {

    navigatorContainer.innerHTML = "";


    for (let i = 0; i < totalQuestions; i++) {


        const button =
        document.createElement("button");


        button.textContent = i + 1;

        button.classList.add("nav-btn");


        button.addEventListener("click", () => {

            currentQuestion = i;

            renderQuestion();

        });


        navigatorContainer.appendChild(button);

    }


    updateNavigator();

}



//==================================================
// UPDATE NAVIGATOR
//==================================================

function updateNavigator() {


    const buttons =
    document.querySelectorAll(".nav-btn");


    buttons.forEach((button, index) => {


        button.classList.remove(
            "answered",
            "unanswered",
            "current"
        );


        // SOAL YANG DIBUKA
        if (index === currentQuestion) {

            button.classList.add("current");

        }


        // PILIHAN GANDA
        else if (index < 25 &&
            userAnswers[index] !== "") {

            button.classList.add("answered");

        }


        // ESSAY
        else if (index >= 25 &&
            essayAnswers[index - 25].trim() !== "") {

            button.classList.add("answered");

        }


        // BELUM DIISI
        else {

            button.classList.add("unanswered");

        }

    });

}



//==================================================
// PROGRESS BAR
//==================================================

function updateProgress() {

    let answered = 0;


    // HITUNG PG
    userAnswers.forEach(answer => {

        if (answer !== "") {

            answered++;

        }

    });



    // HITUNG ESSAY
    essayAnswers.forEach(answer => {

        if (answer.trim() !== "") {

            answered++;

        }

    });



    progressText.textContent =
    `${answered}/30 Soal Telah Dijawab`;


    // PERSENTASE
    const percent =
    (answered / totalQuestions) * 100;


    progressFill.style.width =
    percent + "%";

}



//==================================================
// PART 3 SELESAI
//==================================================

//==================================================
// PART 4
// NEXT BUTTON + PREVIOUS BUTTON +
// SUBMIT QUIZ + HITUNG NILAI
//==================================================



//==============================
// DOM BUTTON
//==============================

const nextBtn =
document.getElementById("nextBtn");

const prevBtn =
document.getElementById("prevBtn");

const submitBtn =
document.getElementById("submitBtn");




//==============================
// NEXT BUTTON
//==============================

nextBtn.addEventListener("click", () => {

    if (currentQuestion < totalQuestions - 1) {

        currentQuestion++;

        renderQuestion();

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    }

});




//==============================
// PREVIOUS BUTTON
//==============================

prevBtn.addEventListener("click", () => {

    if (currentQuestion > 0) {

        currentQuestion--;

        renderQuestion();

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    }

});




//==============================
// POPUP SUBMIT
//==============================

const submitPopup =
document.getElementById("submitPopup");

const yesSubmit =
document.getElementById("yesSubmit");

const noSubmit =
document.getElementById("noSubmit");




//==============================
// TOMBOL SUBMIT QUIZ
//==============================

submitBtn.addEventListener("click", () => {

    submitPopup.classList.remove("hidden");

});




//==============================
// BATAL SUBMIT
//==============================

noSubmit.addEventListener("click", () => {

    submitPopup.classList.add("hidden");

});




//==============================
// YAKIN SUBMIT
//==============================

yesSubmit.addEventListener("click", () => {

    submitPopup.classList.add("hidden");

    submitQuiz();

});




//==============================
// HITUNG NILAI
//==============================

function calculateScore() {

    score = 0;
    correctAnswer = 0;
    wrongAnswer = 0;


    for (let i = 0; i < 25; i++) {

        // BELUM DIISI
        if (userAnswers[i] === "") {

            continue;

        }


        // BENAR
        if (userAnswers[i] === answerKey[i]) {

            correctAnswer++;

        }


        // SALAH
        else {

            wrongAnswer++;

        }

    }


    // 1 SOAL = 4 POIN
    score = correctAnswer * 4;


}




//==============================
// HITUNG SOAL BELUM DIISI
//==============================

function countUnanswered() {

    let unanswered = 0;


    // PG
    userAnswers.forEach(answer => {

        if (answer === "") {

            unanswered++;

        }

    });


    // ESSAY
    essayAnswers.forEach(answer => {

        if (answer.trim() === "") {

            unanswered++;

        }

    });


    return unanswered;

}




//==============================
// SUBMIT QUIZ
//==============================

function submitQuiz() {

    clearInterval(timer);


    calculateScore();


    // SEMBUNYIKAN QUIZ
    quizSection.classList.add("hidden");


    // TAMPILKAN RESULT
    resultSection.classList.remove("hidden");


    // TOTAL BELUM DIISI
    const unanswered =
    countUnanswered();




    // HASIL QUIZ

    document.getElementById("hasilNama").textContent =

        "Nama : " + participantName;


    document.getElementById("hasilKelas").textContent =

        "Kelas : " + participantClass;


    document.getElementById("hasilNilai").textContent =

        "Nilai : " + score + " / 100";


    document.getElementById("hasilBenar").textContent =

        "Jawaban Benar : " + correctAnswer;


    document.getElementById("hasilSalah").textContent =

        "Jawaban Salah : " + wrongAnswer;


    document.getElementById("hasilBelum").textContent =

        "Belum Dijawab : " + unanswered;


    document.getElementById("hasilWaktu").textContent =

        "Waktu Pengerjaan : "
        + formatUsedTime(usedTime);



    // SIMPAN LEADERBOARD
    saveLeaderboard();


    // CONFETTI
    startConfetti();

}



//==================================================
// PART 4 SELESAI
//==================================================

//==================================================
// PART 5
// LEADERBOARD + LOCAL STORAGE + RANKING
//==================================================


//==============================
// LOAD LEADERBOARD
//==============================

function loadLeaderboard() {

    const leaderboard =
        JSON.parse(localStorage.getItem("leaderboard"))
        || [];


    renderLeaderboard(leaderboard);

}





//==============================
// SAVE LEADERBOARD
//==============================

function saveLeaderboard() {

    let leaderboard =
        JSON.parse(localStorage.getItem("leaderboard"))
        || [];


    // DATA PESERTA
    leaderboard.push({

        nama: participantName,

        kelas: participantClass,

        nilai: score,

        waktu: usedTime

    });



    // SORTING
    leaderboard.sort((a, b) => {

        // NILAI TERTINGGI
        if (b.nilai !== a.nilai) {

            return b.nilai - a.nilai;

        }

        // JIKA NILAI SAMA
        // WAKTU PALING CEPAT MENANG
        return a.waktu - b.waktu;

    });



    // SIMPAN KE LOCAL STORAGE
    localStorage.setItem(
        "leaderboard",
        JSON.stringify(leaderboard)
    );


    // UPDATE TABEL
    renderLeaderboard(leaderboard);

}





//==============================
// RENDER LEADERBOARD
//==============================

function renderLeaderboard(data) {

    const leaderboardBody =
        document.getElementById("leaderboardBody");


    leaderboardBody.innerHTML = "";



    // HANYA TAMPILKAN TOP 10
    data.slice(0, 10).forEach((player, index) => {

        const row =
            document.createElement("tr");



        row.innerHTML = `

        <td>${index + 1}</td>

        <td>${player.nama}</td>

        <td>${player.kelas}</td>

        <td>${player.nilai}</td>

        <td>${formatUsedTime(player.waktu)}</td>

        `;


        leaderboardBody.appendChild(row);

    });

}





//==============================
// RESET LEADERBOARD
//==============================

const resetLeaderboardBtn =
document.getElementById("resetLeaderboardBtn");


resetLeaderboardBtn.addEventListener("click", () => {

    const confirmReset =
        confirm("Apakah Anda yakin ingin menghapus seluruh leaderboard?");


    if (confirmReset) {

        localStorage.removeItem("leaderboard");

        loadLeaderboard();

        alert("Leaderboard berhasil direset.");

    }

});






//==============================
// LOAD LEADERBOARD SAAT WEBSITE DIBUKA
//==============================

loadLeaderboard();




//==================================================
// PART 5 SELESAI
//==================================================

//==================================================
// PART 6
// REVIEW JAWABAN + DOWNLOAD TXT +
// KERJAKAN LAGI
//==================================================


//==============================
// DOM BUTTON
//==============================

const reviewBtn =
document.getElementById("reviewBtn");

const downloadBtn =
document.getElementById("downloadBtn");

const retryBtn =
document.getElementById("retryBtn");

const backResultBtn =
document.getElementById("backResultBtn");

const reviewContainer =
document.getElementById("reviewContainer");




//==============================
// REVIEW JAWABAN SAYA
//==============================

reviewBtn.addEventListener("click", () => {

    resultSection.classList.add("hidden");

    reviewSection.classList.remove("hidden");

    renderReview();

});




//==============================
// RENDER REVIEW
//==============================

function renderReview() {

    reviewContainer.innerHTML = "";



    // SOAL PILIHAN GANDA
    for(let i=0; i<25; i++){

        const div =
        document.createElement("div");

        div.classList.add("review-question");


        div.innerHTML = `

        <h3>Soal ${i+1}</h3>

        <p>
        ${multipleChoiceQuestions[i].question}
        </p>

        <br>

        <p>
        Jawaban Anda :
        ${userAnswers[i] || "Belum Dijawab"}
        </p>

        `;


        reviewContainer.appendChild(div);

    }



    // SOAL ESSAY
    for(let i=0; i<5; i++){

        const div =
        document.createElement("div");

        div.classList.add("review-question");


        div.innerHTML = `

        <h3>Essay ${i+1}</h3>

        <p>
        ${essayQuestions[i]}
        </p>

        <br>

        <p>
        ${essayAnswers[i] || "Belum Dijawab"}
        </p>

        `;


        reviewContainer.appendChild(div);

    }


}





//==============================
// KEMBALI KE RESULT
//==============================

backResultBtn.addEventListener("click", () => {

    reviewSection.classList.add("hidden");

    resultSection.classList.remove("hidden");

});







//==============================
// DOWNLOAD TXT
//==============================

downloadBtn.addEventListener("click", () => {

    downloadTXT();

});





function downloadTXT(){


    let content = "";


    content += "====================================\n";
    content += "QUIZ DASAR KOMPUTER DAN SISTEM OPERASI\n";
    content += "====================================\n\n";


    content += "Nama : "
    + participantName + "\n";

    content += "Kelas : "
    + participantClass + "\n";


    content += "Nilai : "
    + score + "\n";


    content += "Benar : "
    + correctAnswer + "\n";


    content += "Salah : "
    + wrongAnswer + "\n";


    content += "Waktu : "
    + formatUsedTime(usedTime) + "\n\n";


    //================================
    // JAWABAN PG
    //================================

    content += "JAWABAN PILIHAN GANDA\n\n";


    for(let i=0; i<25; i++){

        content +=

        `${i+1}. ${userAnswers[i] || "Belum Dijawab"}\n`;

    }



    content += "\n\n";


    //================================
    // JAWABAN ESSAY
    //================================

    content += "JAWABAN ESSAY\n\n";


    for(let i=0; i<5; i++){

        content +=

        `${i+1}. ${essayAnswers[i] || "Belum Dijawab"}\n\n`;

    }



    //================================
    // DOWNLOAD FILE
    //================================

    const blob =
    new Blob([content], {

        type : "text/plain"

    });



    const link =
    document.createElement("a");


    link.href =
    URL.createObjectURL(blob);


    link.download =
    "Jawaban_Quiz.txt";


    link.click();


}





//==============================
// KERJAKAN LAGI
//==============================

retryBtn.addEventListener("click", () => {

    location.reload();

});






//==================================================
// PART 6 SELESAI
//==================================================

//==================================================
// PART 7
// GRADE + ACHIEVEMENT + CONFETTI
//==================================================


//==============================
// VARIABEL GRADE
//==============================

let grade = "";

let achievement = "";




//==============================
// HITUNG GRADE
//==============================

function calculateGrade(){

    if(score >= 90){

        grade = "A";

    }

    else if(score >= 80){

        grade = "B";

    }

    else if(score >= 70){

        grade = "C";

    }

    else if(score >= 60){

        grade = "D";

    }

    else{

        grade = "E";

    }

}





//==============================
// ACHIEVEMENT SYSTEM
//==============================

function calculateAchievement(){


    achievement = "";


    // PERFECT SCORE
    if(score === 100){

        achievement =
        "🏆 PERFECT SCORE";

    }


    // EXCELLENT
    else if(score >= 90){

        achievement =
        "🔥 EXCELLENT";

    }


    // GOOD JOB
    else if(score >= 80){

        achievement =
        "⭐ GOOD JOB";

    }


    // KEEP LEARNING
    else if(score >= 60){

        achievement =
        "👍 KEEP LEARNING";

    }


    // JANGAN MENYERAH
    else{

        achievement =
        "💪 JANGAN MENYERAH";

    }


}




//==============================
// TAMPILKAN GRADE
//==============================

function showGrade(){


    document.getElementById(
        "hasilGrade"
    ).textContent =

    "Grade : " + grade;



    document.getElementById(
        "hasilAchievement"
    ).textContent =

    "Achievement : "
    + achievement;


}




//==============================
// CONFETTI ANIMATION
//==============================

function startConfetti(){


    // JIKA NILAI BAGUS
    if(score >= 80){

        alert(
        "Selamat! Anda mendapatkan nilai yang sangat baik!"
        );

    }


    // PERFECT SCORE
    if(score === 100){

        alert(
        "PERFECT SCORE !!!\n\nAnda sangat memahami materi Dasar Komputer dan Sistem Operasi."
        );

    }


}




//==================================================
// UPDATE SUBMIT QUIZ
//==================================================


// Tambahkan 3 baris ini di dalam function
// submitQuiz()

/*

calculateGrade();

calculateAchievement();

showGrade();

*/


// LETAKNYA DI BAWAH :

/*

calculateScore();

*/


//==================================================
// PART 7 SELESAI
//==================================================