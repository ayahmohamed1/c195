export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayTitle: string;
  birthdayText: string;
  balloonImage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  thingsWeWannaDo: string[];
  loveLetterTitle?: string;
  loveLetterSubtitle?: string;
  loveLetterParagraphs?: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
}

const defaultThings: string[] = [
  "Get engaged in our second year of college and build a beautiful life together.",
  "Have kids because you're gonna be the best dad ever.",
  "Sit on the beach in winter and hug eachother tightly.",
  `Travel together to all our dream destinations (Switzerland first).`,
  "Walk in the rain, holding hands, listening to music and never letting go.",
  "Grow old together, falling more in love with eachother every single day.",
  "Celebrate every little achievement together and always be each other's biggest supporters.",
];

export const defaultLoveLetterParagraphs: string[] = [
  "to my Seif, loving you is the most beautiful thing I've ever experienced.",
  "You are my safe place and the only person I can be truly myself with.",
  "I love the man you are, your gentle heart, your voice, your sweet smile that shines my days and everything about you.",
  "I choose you through the easy days and the hard ones, today and for all our years ahead.",
  "Happy 18th birthday to my forever favourite person.",
];

const ahmedGift: GiftData = {
  senderName: "Shahd",
  receiverName: "Seif",
  envelopeImage: "/images/envelope-placeholder.png",
  cardMessage: "Check out these awesome surprises made just for you, Seif! ✨",
  birthdayTitle: "",
  birthdayText:
    "Our first hangout together... I fell in love with the most handsome and precious man 🤍",
  balloonImage: "/images/cat.png",
  birthdayWishesTitle: "Happy 18th birthday to my favorite person and best future engineer",
  birthdayWishesMessage:
    " You make my whole world brighter with your laughter, warmth, handsome smile and just your existence. I'm so lucky and grateful to have you and I can't wait to be by your side forever. Wishing you endless happiness babe you deserve it.",
  thingsWeWannaDo: defaultThings,
  loveLetterTitle: "The little things I love about you",
  loveLetterSubtitle: "To My Seif, With All My Love 💓",
  loveLetterParagraphs: defaultLoveLetterParagraphs,
  musicCoverImage: "/images/song-cover.jpg",
  musicUrl: "/music/our-song.mp3",
  songTitle: "Our Special Track",
};

const giftData: Record<string, GiftData> = {
  ahmed: ahmedGift,
  amir: ahmedGift,
  aya: {
    ...ahmedGift,
    senderName: "Aya",
    cardMessage: "Check out these awesome surprises for YOU!",
  },
};

export default giftData;