import dashboard from "../images/dashboard.png";
import memoryimg from "../images/memory.png";

import brand1 from "../images/brand1.png";
import brand2 from "../images/brand2.png";
import brand3 from "../images/brand3.png";
import brand4 from "../images/brand4.png";
import brand5 from "../images/brand5.png";

import place1 from "../images/img1.webp";
import place2 from "../images/img2.webp";
import place3 from "../images/img3.webp";
import place4 from "../images/img4.webp";
import place5 from "../images/img5.jpg";
import place6 from "../images/img6.webp";
import place7 from "../images/img7.webp";
import place8 from "../images/img8.webp";
import place9 from "../images/img9.webp";
import place10 from "../images/img10.webp";

import standardicon from "../images/standardicon.png";
import preminumicon from "../images/preminum.png";
import checkbox from "../images/checkbox.svg";
import uncheckbox from "../images/uncheckbox.svg";

import banner from '../images/banner.webp';

export const brands = [
  { iconSrc: brand1 },
  { iconSrc: brand2 },
  { iconSrc: brand3 },
  { iconSrc: brand4 },
  { iconSrc: brand5 },
];

export const navlinks = [
  { link: "Home", id: "home" },
  { link: "About", id: "about" },
  { link: "Explore", id: "explore" },
  { link: "Pricing", id: "pricing" },
  { link: "Contact", id: "contact" },
];

export const hero = {
  "title": "Wanna Enjoy your life",
  "subtitle": "Then, Join Us",
  "text": "We provide you always your dream places. We always make our customer happy by proving many choices.",
  "btn1": "Get Started",
  "btn2": "Get Demo",
  "img": dashboard,
};

export const memory = {
  "title": "Sweet Memories",
  "subtitle": "Come To Life Again",
  "text": "What we have always taken care for 10 years is always prioritizing the comfort of our users. So, do not our quality.",
  "img": memoryimg,
  "experience": [
    { "number": "10", "title": "Year Experience" },
    { "number": "400", "title": "Year Collaboration" },
    { "number": "30k+", "title": "Happy Customer" },
  ],
};

export const placesAPI = [
  { "placeImg": place1, "location": "Lalitpur", "distance": "4.0 hour dirve", "url": "https://www.tripadvisor.com/Tourism-g315764-Patan_Lalitpur_Kathmandu_Valley_Bagmati_Zone_Central_Region-Vacations.html" },
  { "placeImg": place2, "location": "Kathmandu", "distance": "3.5 hour dirve", "url": "https://www.tripadvisor.com/Tourism-g293890-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region-Vacations.html" },
  { "placeImg": place3, "location": "Bhaktapur", "distance": "2.7 hour drive", "url": "https://www.tripadvisor.com/Tourism-g424934-Bhaktapur_Kathmandu_Valley_Bagmati_Zone_Central_Region-Vacations.html" },
  { "placeImg": place4, "location": "Lumbini", "distance": "7 hour drive", "url": "https://whc.unesco.org/en/list/666/" },
  { "placeImg": place5, "location": "Mt. Everest", "distance": "4.9 hour drive", "url": "https://education.nationalgeographic.org/resource/mount-everest/" },
  { "placeImg": place6, "location": "Pokhara", "distance": "7.5 hour drive", "url": "https://www.pigeontravels.com/tour/2-nights-3-days-pokhara-tour-package-in-nepal/" },
  { "placeImg": place7, "location": "Annapurna Base", "distance": "9.5 hour drive", "url": "https://www.thrillophilia.com/tours/annapurna-base-camp-trekking" },
  { "placeImg": place8, "location": "Ilam", "distance": "15.1 hour drive", "url": "https://hikeontreks.com/hike_package/kathmandu-to-ilam-tour-package/" },
  { "placeImg": place9, "location": "Rara Lake", "distance": "3 Night 4 days", "url": "https://www.hikingannapurna.com/rara-lake-tour-package" },
  { "placeImg": place10, "location": "Mustang", "distance": "2 Night 3 days", "url": "https://www.hikingannapurna.com/mustang-tour-package" },
  { "placeImg": place4, "location": "Sailung", "distance": "2 Night 3 days", "url": "https://www.hikingannapurna.com/mustang-tour-package" },
  { "placeImg": place7, "location": "Poon Hill", "distance": "2 Night 3 days", "url": "https://www.mountainmarttreks.com/trip/poon-hill-trekking-package" },
];

export const pricingapi = {
  "title": "Choose The Plan That Suits You",
  "text": "Many attractive offers by becomming a premium member",
  "btn1": "Monthly",
  "btn2": "Yearly",
  "plans": [
    {
      "planicon": standardicon,
      "title": "Standard Membership",
      "text": "Suitable for all users",
      "plantype": "Free / Year",
      "plancontent": [
        { "iconbox": checkbox, "text": "Find Popular Destination" },
        { "iconbox": checkbox, "text": "Priority Booking Schedule" },
        { "iconbox": checkbox, "text": "Daily Destination News" },
        { "iconbox": uncheckbox, "text": "Invite Friends Feature" },
        { "iconbox": uncheckbox, "text": "Limited Travel Stats" },
        { "iconbox": uncheckbox, "text": "Invite Friends Feature" },
        { "iconbox": uncheckbox, "text": "No Ads & Tax" },
      ],
      "buttonText": "Get Free",
    },
    {
      "planicon": preminumicon,
      "title": "Preminum Membership",
      "text": "Suitable for enthusiast travelers",
      "plantype": "$60 / Year",
      "plancontent": [
        { "iconbox": checkbox, "text": "Find Popular Destination" },
        { "iconbox": checkbox, "text": "Priority Booking Schedule" },
        { "iconbox": checkbox, "text": "Daily Destination News" },
        { "iconbox": checkbox, "text": "Invite Friends Feature" },
        { "iconbox": checkbox, "text": "Advanced Travel Stats" },
        { "iconbox": checkbox, "text": "Invite Friends Feature" },
        { "iconbox": checkbox, "text": "No Ads & Tax" },
      ],
      "buttonText": "Get Started",
    },
  ],
};

export const bannerAPI = {
  "title": "The Greet Outdoors",
  "text": "Whislist Curated By Trave-Li-Yeo.",
  "imgSrc": banner,
  "btnText": "Explore More"
}

export const footerAPI = {
  "titles": [ {"title": "About"},{"title": "Company"},{"title": "Support"} ],
  "links": [
    [
      {"link": "About US"},
      {"link": "Features"},
      {"link": "News"},
      {"link": "Menu"},
    ],
    [
      {"link": "Why Trave-Li-Yeo?"},
      {"link": "Partner with Us"},
      {"link": "FAQ"},
      {"link": "Blog"},
    ],
    [
      {"link": "Account"},
      {"link": "Support Center"},
      {"link": "Feedback"},
      {"link": "Contact Us"},
      {"link": "Accesbility"},
    ],
  ]
};
