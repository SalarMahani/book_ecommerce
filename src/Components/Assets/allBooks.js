import bookZero from "./books-picture/book-zero-v1.jpeg";
import bookOne from "./books-picture/book-one-v1.jpg";
import bookTwo from "./books-picture/book-two-v1.jpg";
import bookThree from "./books-picture/book-three-v1.jpg";
import bookFour from "./books-picture/book-four-v1.jpg";
//Not Translated Books
import bookZeroEnglish from "./books-picture/book-zero-v2.jpeg";
import bookOneEnglish from "./books-picture/book-one-v2.jpg";
import bookTwoEnglish from "./books-picture/book-two-v2.jpg";
import bookThreeEnglish from "./books-picture/book-three-v2.jpg";
import bookFourEnglish from "./books-picture/book-four-v1.jpg";
import bookFiveEnglish from "./books-picture/book-five-v1.jpg";
import bookSixEnglish from "./books-picture/book-six-v1.jpg";
import bookSevenEnglish from "./books-picture/book-seven-v1.jpg";
import bookEightEnglish from "./books-picture/book-eight-v1.jpg";
import bookNineEnglish from "./books-picture/book-nine-v1.jpg";
import bookTenEnglish from "./books-picture/book-ten-v1.jpg";
import bookElevenEnglish from "./books-picture/book-eleven-v1.jpg";
import bookTweleveEnglish from "./books-picture/book-tweleve-v1.jpg";
import bookThirteenEnglish from "./books-picture/book-thirteen-v1.jpg";
import bookFourteenEnglish from "./books-picture/book-fourteen-v1.jpg";
import bookFifteenEnglish from "./books-picture/book-fifteen-v1.jpg";
import bookSixteenEnglish from "./books-picture/book-sixteen-v1.jpg";

const allBook = [
  {
    id: 0,
    name: "بدهی استخوان",
    category: "translated",
    image: bookZero,
    price: 10,
    description: "به زودی ترجمه میشود...",
    bookNumber: "کتاب صفرم",
    pageNumber: 175,
    language: "فارسی",
  },
  {
    id: 1,
    name: "قانون اول جادوگری",
    category: "translated",
    image: bookOne,
    price: "رایگان",
    description:
      "در عصری تاریک، زندگی کردن شجاعت را می‌طلبد، و بیش از شجاعت صرف، برای به چالش کشیدن کسانی که فرمانروایی میکنند، ریچارد و کیلن باید این چالش را بپذیرند یا قربانیان بعدی شوند. " +
      "درسرزمینی اسرارآمیزی فراتر از انتظار که حتی بهترین ها قلبشان می تواند به آنها خیانت کند. با این حال، ریچارد از هیچ چیز به اندازه اسرار شمشیرش که ممکن است در مورد روح خود فاش کند نمی ترسد. عاشق شدن آنها را نابود می کند - به دلایلی که ریچارد نمی تواند تصور کند و کیلن جرات گفتن ندارد. " +
      "کیلان در تاریک ترین ساعت، شکار بی امان، عذاب خیانت و از دست دادن، از ریچارد می خواهد که به فراتر از شمشیر خود برسد - تا در درون خود چیزی نجیب تر را فرا بخواند. هیچ کدام نمی دانند که قوانین نبرد به تازگی تغییر کرده است. . . یا اینکه زمان آنها تمام شده است.",
    bookNumber: "کتاب اول",
    pageNumber: 848,
    language: "فارسی",
  },
  {
    id: 2,
    name: "سنگ اشک ها",
    category: "translated",
    image: bookTwo,
    price: "رایگان",
    description: "به زودی ترجمه میشود...",
    bookNumber: "کتاب دوم",
    pageNumber: 992,
    language: "فارسی",
  },
  {
    id: 3,
    name: "مسلک پارسیان",
    category: "translated",
    image: bookThree,
    price: "رایگان",
    description: "به زودی ترجمه میشود...",
    bookNumber: "کتاب سوم",
    pageNumber: 640,
    language: "فارسی",
  },
  {
    id: 4,
    name: "معبد بادها",
    category: "translated",
    image: bookFour,
    price: "رایگان",
    description: "به زودی ترجمه میشود...",
    bookNumber: "کتاب چهارم",
    pageNumber: 832,
    language: "فارسی",
  },
  {
    id: 5,
    name: "Wizard's First Rule",
    category: "notTranslated",
    image: bookOneEnglish,
    price: "Free",
    description:
      "In the aftermath of the brutal murder of his father, a mysterious woman, Kahlan Amnell, appears in Richard Cypher's forest sanctuary seeking help . . . and more. His world, his very beliefs, are shattered when ancient debts come due with thundering violence.\n" +
      "\n" +
      "In a dark age it takes courage to live, and more than mere courage to challenge those who hold dominion, Richard and Kahlan must take up that challenge or become the next victims. Beyond awaits a bewitching land where even the best of their hearts could betray them. Yet, Richard fears nothing so much as what secrets his sword might reveal about his own soul. Falling in love would destroy them--for reasons Richard can't imagine and Kahlan dare not say.\n" +
      "\n" +
      "In their darkest hour, hunted relentlessly, tormented by treachery and loss, Kahlan calls upon Richard to reach beyond his sword--to invoke within himself something more noble. Neither knows that the rules of battle have just changed . . . or that their time has run out.",
    bookNumber: "first book",
    pageNumber: 848,
    language: "english",
  },
  {
    id: 6,
    name: "Stone Of Tears",
    category: "notTranslated",
    image: bookTwoEnglish,
    price: "Free",
    description:
      "Kahlan has at last gained the one goal she had always thought was beyond her grasp ... love. Against all odds, the ancient bonds of secret oaths, and the dark talents of men long dead, Richard has won her heart.\n" +
      "\n" +
      "Amid sudden and disastrous events, Richard's life is called due to satisfy those treacherous oaths. To save his life, Kahlan must forsake Richard's love and cast him into the chains of slavery, knowing there could be no sin worse than such a betrayal.\n" +
      "\n" +
      "Richard is determined to unlock the secrets bound in the magic of ancient oaths and to again be free. Kahlan, alone with the terrible truth of what she has done, must set about altering the course of a world thrown into war. But even that may be easier than ever winning back the heart of the only man she will ever love.\n" +
      "\n" +
      "War, suffering, torture, and deceit lie in their paths, and nothing will save them from a destiny of violent death, unless their courage and faith are joined with luck and they find the elusive...Stone of Tears.",
    bookNumber: "second book",
    pageNumber: 992,
    language: "english",
  },
  {
    id: 7,
    name: "Blood Of The Fold",
    category: "notTranslated",
    image: bookThreeEnglish,
    price: "Free",
    description:
      "In a world as rich an real as our own, Richard Rahl and Kahlan Amnell stand against the ancient forces which besiege the New World--forces so terrible that when they last threatened, they could only be withstood by sealing of the Old world from whence they came. Now the barrier has been breached, and the New World is again beset by their evil power.\n" +
      "\n" +
      "War and treachery plague the world, and only Richard and Ahlan can save it from an Armageddon of unimaginable savagery and destruction.",
    bookNumber: "third book",
    pageNumber: 640,
    language: "english",
  },
  {
    id: 8,
    name: "Temple Of The Winds ",
    category: "notTranslated",
    image: bookFourEnglish,
    price: "Free",
    description:
      "On the red moon will come the firestorm...\n" +
      "\n" +
      "Wielding the Sword of Truth, Richard Rahl has battled death itself and come to the defense of the D'Haran people. But now the power-mad Emperor Jagang confronts Richard with a swift and inexorable foe: a mystical plague cutting a deadly swath across the land and slaying thousands of innocent victims.\n" +
      "\n" +
      "To quench the inferno, he must seek remedy in the wind...\n" +
      "\n" +
      "To fight it Richard and his beloved Kahlan Amnell will risk everything to uncover the source of the terrible plague-the magic sealed away for three millennia in the Temple of the Winds.\n" +
      "\n" +
      "Lightning will find him on that path...\n" +
      "\n" +
      "But when prophecy throws the shadow of betrayal across their mission and threatens to destroy them, Richard must accept the Truth and find a way to pay the price the winds demand...or he and his world will perish.",
    bookNumber: "fourth book",

    pageNumber: 832,
    language: "english",
  },
  {
    id: 9,
    name: "SOUL OF THE FIRE ",
    category: "notTranslated",
    image: bookFiveEnglish,
    price: "Free",
    bookNumber: 5,
    pageNumber: "??",
    language: "english",
  },
  {
    id: 10,
    name: "PILLARS OF CREATION ",
    category: "notTranslated",
    image: bookSixEnglish,
    price: "Free",
    bookNumber: "sixth book",
    pageNumber: "??",
    language: "english",
  },
  {
    id: 11,
    name: "PILLARS OF CREATION",
    category: "notTranslated",
    image: bookSevenEnglish,
    price: "Free",
    bookNumber: "seventh book",
    pageNumber: "??",
    language: "english",
  },
  {
    id: 12,
    name: "NAKED EMPIRE ",
    category: "notTranslated",
    image: bookEightEnglish,
    price: "Free",
    bookNumber: "eighth book",
    pageNumber: "??",
    language: "english",
  },
  {
    id: 13,
    name: " CHAINFIRE",
    category: "notTranslated",
    image: bookNineEnglish,
    price: "Free",
    bookNumber: "ninth book",
    pageNumber: "??",
    language: "english",
  },
  {
    id: 14,
    name: "PHANTOM",
    category: "notTranslated",
    image: bookTenEnglish,
    price: "Free",
    bookNumber: "tenth book",
    pageNumber: "??",
    language: "english",
  },
  {
    id: 15,
    name: "CONFESSOR",
    category: "notTranslated",
    image: bookElevenEnglish,
    price: "Free",
    bookNumber: "eleventh book",
    pageNumber: "??",
    language: "english",
  },
  {
    id: 16,
    name: " FIRST CONFESSOR",
    category: "notTranslated",
    image: bookTweleveEnglish,
    price: "Free",
    bookNumber: "twelfth book",
    pageNumber: "??",
    language: "english",
  },
  {
    id: 17,
    name: "THE OMEN MACHINE",
    category: "notTranslated",
    image: bookThirteenEnglish,
    price: "Free",
    bookNumber: "thirteenth book",
    pageNumber: "??",
    language: "english",
  },
  {
    id: 18,
    name: "THE THIRD KINGDOM",
    category: "notTranslated",
    image: bookFourteenEnglish,
    price: "Free",
    bookNumber: "fourteenth book",
    pageNumber: "??",
    language: "english",
  },
  {
    id: 19,
    name: "SEVERED SOULS",
    category: "notTranslated",
    image: bookFifteenEnglish,
    price: "Free",
    bookNumber: "fifteenth book",
    pageNumber: "??",
    language: "english",
  },
  {
    id: 20,
    name: "WARHEART",
    category: "notTranslated",
    image: bookSixteenEnglish,
    price: "Free",
    bookNumber: "sixteenth book",
    pageNumber: "??",
    language: "english",
  },
  {
    id: 21,
    name: " DEBT OF BONES",
    category: "notTranslated",
    image: bookZeroEnglish,
    price: "Free",
    bookNumber: "zeroth book",
    pageNumber: "??",
    language: "english",
  },
];
export default allBook;
