// Add your monthly letters here!
const allLetters = [
    {
        title: "February 14 - 1st Anniversary",
        image: "img/IMG_2405.jpg", // You can change the photo per month
        caption: "Our first anniversary!",
        body: `Hello, my pretty, kind, and tuyoin wife.

Happy 1st anniversary! You taught me so many things like how to be a good bf, how to appreciate things more and be more chalant :P. 
Soon it would be photography na on how to take a picture of you better! I promise to keep practicing until every shot would be a perfect but then again you youself is a masterpiece :P
I cannot believe that its already been a year of us being together akalain mo yun we just matched each other sa boo then BOOm we got here (boo and BOOm get it? HAHAHAHA).
Thank you for being such a wonderful and patient person with me all throughout the 365 days of us being together.

Looking back at our first year, hindi ako nagsisisi to meet you despite saying na we met on a dating app. Not only you made me happier, you also made my life much brighter.
This is just the Year 1 of our journey and cannot wait to spend more days with you. Happy Anniversary, my Cupcake, my Wife, my Angel and many more callsign that I may develop along the way!
Also look oh we look so cute and silly sa picture natin hehe!

Yours truly,
Jello the Pudding`
    },
    {
        title: "March 14 - Month 13",
        image: "",
        caption: "STILL TRYING TO MAKE A DRAWING FOR THIS",
        body: `Dear Wifey,

Happy 13th monthsary, I apologize for making you mad at the beginning of the month especially regarding sa letters. It was never my intention to make you angry, like I said I wanna be a better person for you. 
Kasi ikaw na yan eh, how could I waste the opportunity to a wonderful person like you? Its been a year na nga and i'm still learning how to love you, take care of you, how to make you happy and many more! 
Sorry for being a terrible boyfriend/person to you like not meeting the expectations, and not treating you right(?) as a loving bf should. But like I said again and again,
I wanna be a better person for you even if sinabi mo before na hinanda mo ko for other people LOL asa kang maghihiwalay tayo >:P! Kidding aside, I really really love you ha?

Even if nag-aargue tayo multiple times, I will always be patient to understand your side on why you're getting angry or moody on my actions towards you. I will always be on your side
even if everyone is your enemy or you think everyone is against you. Omki? Love you so so much my beautiful wife!

Yours truly,
Jowa mong panget :P`
    },
    {
        title: "April 14 - Month 14",
        image: "img/Amazon Hello GIF by Project Hail Mary.gif",
        caption: "AMAZE! AMAZE! QUESTION?",
        body: `Hello my wife!

Happy 14th monthsary bebe! And thank you for celebrating my bday with me! I apologize as well na it took me this long to 'type' a letter for you, 
it was never an errand for me to write but it may seem like that kasi first of all I never wrote a proper letter naman talaga and second the effort on making the letter itself or the envelope was not it!! 
So I apologize on that as well. Lastly, I agree naman na parang isang dump yung pag-bigay ko ng letters tas you were so excited pa tas walang ka effort effort yung context of the letters!
Like ughh! Other than that, sorry ulit for making you mad/sad by making a mean tone to you by using "literally" even though it was never my intention to "look down" on you huhu.

Asides all of that, thank you for making me look for Project Hail Mary it was such a goated movie! AMAZE AMAZE! The scene, cinematography, and ost's basically everything!
Would you still love me if I was an alien? Question? :P. I love you so much bebe, I cannot wait to meet you tomorrow! I am so excited talaga to finally meet my gf after 2 months of hiatus HAHAHA.
Especially during this month sobrang hellish! Like exam week and yung defense namin! Grabe talaga paghahabol namin sa requirements! Kaya nawalan tayo bebe time! Nakakasira talaga yung pag-aaral at OJT sa bebe time na yan!

Let's catch up tomorrow omki? I really like you yapping around me it feels so comforting. I love you so much.

Yours truly,
Jello the birthday boy`
    }
];

let currentIdx = 0;
let currentImgIdx = 0;

function showLetter() {
    const current = allLetters[currentIdx];
    const textTarget = document.getElementById("typed-text");
    const titleTarget = document.getElementById("letter-title");
    const photoTarget = document.querySelector("#main-photo img");
    const captionTarget = document.getElementById("photo-caption");
    
    // Set everything instantly
    titleTarget.innerHTML = current.title;
    photoTarget.src = current.image;
    captionTarget.innerHTML = current.caption;
    textTarget.innerHTML = current.body;

    updateButtonStates();
}

function nextLetter() {
    if (currentIdx < allLetters.length - 1) {
        currentIdx++;
        resetAndStart();
    }
}

function prevLetter() {
    if (currentIdx > 0) {
        currentIdx--;
        resetAndStart();
    }
}

function resetAndStart() {
    // Shutter effect for the photo
    const photoFrame = document.getElementById('main-photo');
    if (photoFrame) {
        photoFrame.classList.remove('shutter-effect');
        void photoFrame.offsetWidth; // Trigger reflow
        photoFrame.classList.add('shutter-effect');
    }
    
    showLetter();
}

function updateButtonStates() {
    const prevBtn = document.querySelector('button[onclick="prevLetter()"]');
    const nextBtn = document.querySelector('button[onclick="nextLetter()"]');
    
    if(prevBtn) prevBtn.disabled = (currentIdx === 0);
    if(nextBtn) nextBtn.disabled = (currentIdx === allLetters.length - 1);
}

// Function to create the menu tiles automatically
function buildMenu() {
    const menu = document.getElementById("month-menu");
    menu.innerHTML = ""; // Clear existing

    allLetters.forEach((letter, index) => {
        const btn = document.createElement("button");
        btn.className = "month-tile";
        // This takes just the Month name (e.g., "February") from your title
        btn.innerHTML = letter.title.split(" - ")[0]; 
        btn.onclick = () => selectMonth(index);
        menu.appendChild(btn);
    });
}

function selectMonth(index) {
    currentIdx = index;
    
    // Hide Homepage, Show Letter
    document.getElementById("homepage").classList.add("hidden");
    document.getElementById("main-interface").classList.remove("hidden");
    
    showLetter();
}

function goHome() {
    // Show Homepage, Hide Letter
    document.getElementById("homepage").classList.remove("hidden");
    document.getElementById("main-interface").classList.add("hidden");
}

// Update your window.onload
window.onload = () => {
    buildMenu(); 
};