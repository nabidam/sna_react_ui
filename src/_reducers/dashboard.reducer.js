import {DashboardConstants} from "../_constants";

export const DashboardReducer = {
  triggerDrawer,
  lastTrackers,
  changeSnackbarStatus,
  selectedTrackerMenu,
  selectedTrackerDashboardItem
};

const initState0 = {
  isDrawerOpen: false
};

 const initState1 = {
  /* trackers: [
     {
       id: 1,
       name: "ترامپ",
       username: "user1",
       created_at: "۵ ساعت پیش",
       date: new Date(2019, 1, 2),
       active: 1,
       social: {
         twitter: 1,
         instagram: 1
       }
     },
     {
       id: 2,
       name: "نیکزی",
       username: "user1",
       created_at: "۸ ساعت پیش",
       date: new Date(2018, 1, 2),
       active: 1,
       social: {
         twitter: 1,
         instagram: null
       }
     },
     {
       id: 3,
       name: "کاله",
       username: "user1",
       created_at: "۱ روز پیش",
       date: new Date(2017, 1, 2) ,
       active: 1,
       social: {
         twitter: 1,
         instagram: 1
       }
     },
     {
       id: 4,
       name: "کافه لمیز",
       username: "user1",
       created_at: "۱ روز پیش",
       date: new Date(2016, 1, 2),
       active: 1,
       social: {
         twitter: 1,
         instagram: 1
       }
     },
     {
       id: 5,
       name: "۱۴۰۰",
       username: "user1",
       created_at: "۵ روز پیش",
       date: new Date(2015, 1, 2),
       active: 0,
       social: {
         twitter: null,
         instagram: 1
       }
     },
     {
       id: 6,
       name: "نفتکش",
       username: "user1",
       created_at: "۸ روز پیش",
       date: new Date(2014, 1, 2),
       active: 1,
       social: {
         twitter: 1,
         instagram: 1
       }
     }
   ],*/
   trackers: [
     {
       id: 1,
       name: "ترامپ",
       active: 1,
       social: {
         twitter: 1,
         instagram: 1
       },
       retrieved_posts: 682,
       date: "12 خرداد 98",
       time: "16:43"
     },
     {
       id: 2,
       name: "پرسپولیس",
       active: 1,
       social: {
         twitter: 1,
         instagram: null
       },
       retrieved_posts: 682,
       date: "18 خرداد 98",
       time: "16:43"
     },
     {
       id: 3,
       name: "استادیوم",
       active: 1,
       social: {
         twitter: 1,
         instagram: 1
       },
       retrieved_posts: 682,
       date: "10 خرداد 98",
       time: "16:43"
     },
     {
       id: 4,
       name: "اپل",
       active: 0,
       social: {
         twitter: 1,
         instagram: 1
       },
       retrieved_posts: 682,
       date: "10 خرداد 98",
       time: "16:43"
     },
     {
       id: 5,
       name: "هنگ کنگ",
       active: 0,
       social: {
         twitter: 1,
         instagram: null
       },
       retrieved_posts: 682,
       date: "10 خرداد 98",
       time: "16:43"
     }
   ],
   lastTrackerId: 4,
   selectedTracker: 3,
   selectedTrackersType: 1,
   selectedEmotion: ""
 };

 const initState2 = {
   isSnackbarOpen: false,
   snackbarMessage: ''
 };

 const initState3 =
     {
         selectedTrackerId: 0,
         name: ''
     };

 const initState4 =
     {
       selectedTrackerDashboardItem: null,//dashboard,posts!,keywords,influencers,emotions,groups
       selectedPage: "trackers",
       selectedGroup: 0,
       selectedKeyword: "",
       selectedAnalysisType: 1,
       selectedTracker: 0,
       analysis: [
         {
           id: 1,
           name: "رز میرداماد",
           active: 1,
           date: "12 خرداد 98",
           time: "16:43"
         },
         {
           id: 2,
           name: "آزادی",
           active: 1,
           date: "18 خرداد 98",
           time: "16:43"
         },
         {
           id: 3,
           name: "تیراژه",
           active: 0,
           date: "10 خرداد 98",
           time: "16:43"
         }
       ],
       groups: [
         {
           id: 1,
           name: "سیاست",
           posts: 8240,
           overall_likes: 4339,
           average_likes: 1455,
           overall_comments: 4339,
           average_comments: 1897,
           effective_accounts: 156,
           content_emotion: -1,
           comment_emotion: -1
         },
         {
           id: 2,
           name: "آمریکا",
           posts: 8240,
           overall_likes: 4339,
           average_likes: 1455,
           overall_comments: 4339,
           average_comments: 1897,
           effective_accounts: 156,
           content_emotion: -1,
           comment_emotion: +1
         },
         {
           id: 3,
           name: "کاخ سفید",
           posts: 8240,
           overall_likes: 4339,
           average_likes: 1455,
           overall_comments: 4339,
           average_comments: 1897,
           effective_accounts: 156,
           content_emotion: -1,
           comment_emotion: -1
         },
         {
           id: 4,
           name: "امور خارجه",
           posts: 8240,
           overall_likes: 4339,
           average_likes: 1455,
           overall_comments: 4339,
           average_comments: 1897,
           effective_accounts: 156,
           content_emotion: +1,
           comment_emotion: +1
         },
         {
           id: 5,
           name: "واردات",
           posts: 8240,
           overall_likes: 4339,
           average_likes: 1455,
           overall_comments: 4339,
           average_comments: 1897,
           effective_accounts: 156,
           content_emotion: +1,
           comment_emotion: -1
         },
         {
           id: 6,
           name: "برجام",
           posts: 8240,
           overall_likes: 4339,
           average_likes: 1455,
           overall_comments: 4339,
           average_comments: 1897,
           effective_accounts: 156,
           content_emotion: +1,
           comment_emotion: +1
         },
         {
           id: 7,
           name: "تحریم",
           posts: 8240,
           overall_likes: 4339,
           average_likes: 1455,
           overall_comments: 4339,
           average_comments: 1897,
           effective_accounts: 156,
           content_emotion: -1,
           comment_emotion: +1
         }
       ],
       trends: [
         {
           id: 1,
           name: "مروارید",
           posts: 8240,
           accounts: 8240,
           likes: 4339,
           comments: 1455,
           initiators: [
             {
               id: 1,
               name: "مرتضی محمدی",
               username: "morteza"
             },
             {
               id: 2,
               name: "سارا مرادی",
               username: "moradi"
             },
             {
               id: 3,
               name: "سیروان",
               username: "sirone"
             }
           ],
           influencers: [
             {
               id: 1,
               name: "مرتضی محمدی",
               username: "morteza"
             },
             {
               id: 2,
               name: "سارا مرادی",
               username: "moradi"
             },
             {
               id: 3,
               name: "سیروان",
               username: "sirone"
             }
           ],
           content_emotion: -1,
           comment_emotion: 1,
           related_words: ["گرینلند", "پمپئو", "فلورانس", "تغییرات", "بیکاری"]
         },
         {
           id: 2,
           name: "خزر",
           posts: 8240,
           accounts: 8240,
           likes: 4339,
           comments: 1455,
           initiators: [
             {
               id: 1,
               name: "مرتضی محمدی",
               username: "morteza"
             },
             {
               id: 2,
               name: "سارا مرادی",
               username: "moradi"
             },
             {
               id: 3,
               name: "سیروان",
               username: "sirone"
             }
           ],
           influencers: [
             {
               id: 1,
               name: "مرتضی محمدی",
               username: "morteza"
             },
             {
               id: 2,
               name: "سارا مرادی",
               username: "moradi"
             },
             {
               id: 3,
               name: "سیروان",
               username: "sirone"
             }
           ],
           content_emotion: -1,
           comment_emotion: -1,
           related_words: ["گرینلند", "پمپئو", "فلورانس", "تغییرات", "بیکاری"]
         },
         {
           id: 3,
           name: "محمودیه",
           posts: 8240,
           accounts: 8240,
           likes: 4339,
           comments: 1455,
           initiators: [
             {
               id: 1,
               name: "مرتضی محمدی",
               username: "morteza"
             },
             {
               id: 2,
               name: "سارا مرادی",
               username: "moradi"
             },
             {
               id: 3,
               name: "سیروان",
               username: "sirone"
             }
           ],
           influencers: [
             {
               id: 1,
               name: "مرتضی محمدی",
               username: "morteza"
             },
             {
               id: 2,
               name: "سارا مرادی",
               username: "moradi"
             },
             {
               id: 3,
               name: "سیروان",
               username: "sirone"
             }
           ],
           content_emotion: 1,
           comment_emotion: 1,
           related_words: ["گرینلند", "پمپئو", "فلورانس", "تغییرات", "بیکاری"]
         },
         {
           id: 4,
           name: "پلیکان",
           posts: 8240,
           accounts: 8240,
           likes: 4339,
           comments: 1455,
           initiators: [
             {
               id: 1,
               name: "مرتضی محمدی",
               username: "morteza"
             },
             {
               id: 2,
               name: "سارا مرادی",
               username: "moradi"
             },
             {
               id: 3,
               name: "سیروان",
               username: "sirone"
             }
           ],
           influencers: [
             {
               id: 1,
               name: "مرتضی محمدی",
               username: "morteza"
             },
             {
               id: 2,
               name: "سارا مرادی",
               username: "moradi"
             },
             {
               id: 3,
               name: "سیروان",
               username: "sirone"
             }
           ],
           content_emotion: +1,
           comment_emotion: -1,
           related_words: ["گرینلند", "پمپئو", "فلورانس", "تغییرات", "بیکاری"]
         },
         {
           id: 5,
           name: "دریانورد",
           posts: 8240,
           accounts: 8240,
           likes: 4339,
           comments: 1455,
           initiators: [
             {
               id: 1,
               name: "مرتضی محمدی",
               username: "morteza"
             },
             {
               id: 2,
               name: "سارا مرادی",
               username: "moradi"
             },
             {
               id: 3,
               name: "سیروان",
               username: "sirone"
             }
           ],
           influencers: [
             {
               id: 1,
               name: "مرتضی محمدی",
               username: "morteza"
             },
             {
               id: 2,
               name: "سارا مرادی",
               username: "moradi"
             },
             {
               id: 3,
               name: "سیروان",
               username: "sirone"
             }
           ],
           content_emotion: -1,
           comment_emotion: 1,
           related_words: ["گرینلند", "پمپئو", "فلورانس", "تغییرات", "بیکاری"]
         }
       ],
       accounts: [
         {
           id: 1,
           social_media: "twitter",
           name: "سیروان",
           username: "sirone",
           followers: 1998,
           followings: 134,
           posts: 7333
         },
         {
           id: 2,
           social_media: "instagram",
           name: "میلاد",
           username: "milad",
           followers: 1998,
           followings: 134,
           posts: 7333
         }
       ],
       projects: [
         {
           id: 1,
           name: "کاله",
           date: "12 خرداد 1398",
           time: "16:43",
           queries: [
             {
               id: 1,
               name: "ماست",
               date: "12 خرداد 1398",
               time: "16:43",
               retrieved_posts: 682,
               active: 1
             },
             {
               id: 2,
               name: "صبحانه",
               date: "12 خرداد 1398",
               time: "16:43",
               retrieved_posts: 682,
               active: 1
             },
             {
               id: 3,
               name: "سفر",
               date: "12 خرداد 1398",
               time: "16:43",
               retrieved_posts: 682,
               active: 1
             }
           ]
         },
         {
           id: 2,
           name: "بازتاب",
           date: "12 خرداد 1398",
           time: "16:43",
           queries: [
             {
               id: 1,
               name: "ماست",
               date: "12 خرداد 1398",
               time: "16:43",
               retrieved_posts: 682,
               active: 1
             },
             {
               id: 2,
               name: "صبحانه",
               date: "12 خرداد 1398",
               time: "16:43",
               retrieved_posts: 682,
               active: 1
             },
             {
               id: 3,
               name: "سفر",
               date: "12 خرداد 1398",
               time: "16:43",
               retrieved_posts: 682,
               active: 1
             },
             {
               id: 4,
               name: "پیکنیک",
               date: "12 خرداد 1398",
               time: "16:43",
               retrieved_posts: 682,
               active: 1
             },
             {
               id: 5,
               name: "خبر",
               date: "12 خرداد 1398",
               time: "16:43",
               retrieved_posts: 682,
               active: 1
             }
           ]
         },
         {
           id: 3,
           name: "مطالعه",
           date: "12 خرداد 1398",
           time: "16:43",
           queries: [
             {
               id: 1,
               name: "ماست",
               date: "12 خرداد 1398",
               time: "16:43",
               retrieved_posts: 682,
               active: 1
             },
             {
               id: 2,
               name: "صبحانه",
               date: "12 خرداد 1398",
               time: "16:43",
               retrieved_posts: 682,
               active: 1
             },
             {
               id: 3,
               name: "سفر",
               date: "12 خرداد 1398",
               time: "16:43",
               retrieved_posts: 682,
               active: 1
             },
             {
               id: 4,
               name: "کتاب",
               date: "12 خرداد 1398",
               time: "16:43",
               retrieved_posts: 682,
               active: 1
             },
             {
               id: 5,
               name: "انتشار",
               date: "12 خرداد 1398",
               time: "16:43",
               retrieved_posts: 682,
               active: 1
             },
             {
               id: 6,
               name: "نویسنده",
               date: "12 خرداد 1398",
               time: "16:43",
               retrieved_posts: 682,
               active: 1
             }
           ]
         }
       ],
       myPosts: [
         {
           id: 1,
           post:
               "نصیحت به غرض می‌شنود به نزدیک صاحب دیوان رفتم به سابقه معرفتی که در میان ما بود و صورت حالش بیان کردم و اهلیت و استحقاقش بگفتم تا به کاری مختصرش نصب کردن",
           date: "24 مهر 1398",
           time: "14:30",
           sent_network: [{network: "twitter"}, {network: "instagram"}],
           hashtags: [{tag: "گرینلند"}, {tag: "پمپئو"}, {tag: "فلورانس"}]
         },
         {
           id: 2,
           post:
               "نصیحت به غرض می‌شنود به نزدیک صاحب دیوان رفتم به سابقه معرفتی که در میان ما بود و صورت حالش بیان کردم و اهلیت و استحقاقش بگفتم تا به کاری مختصرش نصب کردن",
           date: "24 مهر 1398",
           time: "14:30",
           sent_network: [{network: "twitter"}, {network: "instagram"}],
           hashtags: [{tag: "گرینلند"}, {tag: "پمپئو"}, {tag: "فلورانس"}]
         },
         {
           id: 3,
           post:
               "نصیحت به غرض می‌شنود به نزدیک صاحب دیوان رفتم به سابقه معرفتی که در میان ما بود و صورت حالش بیان کردم و اهلیت و استحقاقش بگفتم تا به کاری مختصرش نصب کردن",
           date: "24 مهر 1398",
           time: "14:30",
           sent_network: [{network: "twitter"}, {network: "instagram"}],
           hashtags: [{tag: "گرینلند"}, {tag: "پمپئو"}, {tag: "فلورانس"}]
         }
       ],
       influencers: [
         {
           id: 1,
           name: "مرتضی محمدی",
           username: "morteza",
           posts: 8240,
           overall_likes: 4339,
           average_likes: 1455,
           overall_comments: 4339,
           average_comments: 1897,
           motivation: 66,
           content_emotion: -1,
           comment_emotion: -1
         },
         {
           id: 2,
           username: "moradi",
           name: "سارا مرادی",
           posts: 6557,
           overall_likes: 4339,
           average_likes: 4339,
           overall_comments: 4339,
           average_comments: 2890,
           motivation: 58,
           content_emotion: +1,
           comment_emotion: +1
         },
         {
           id: 3,
           username: "sirone",
           name: "سیروان",
           posts: 4455,
           overall_likes: 4339,
           average_likes: 1455,
           overall_comments: 4339,
           average_comments: 1897,
           motivation: 45,
           content_emotion: +1,
           comment_emotion: -1
         },
         {
           id: 4,
           username: "maryqueen",
           name: "مریم قاسم",
           posts: 3897,
           overall_likes: 4339,
           average_likes: 1455,
           overall_comments: 4339,
           average_comments: 1897,
           motivation: 42,
           content_emotion: +1,
           comment_emotion: +1
         },
         {
           id: 5,
           username: "vtalimar",
           name: "وحید علیمردی",
           posts: 2890,
           overall_likes: 4339,
           average_likes: 966,
           overall_comments: 4339,
           average_comments: 2890,
           motivation: 41,
           content_emotion: +1,
           comment_emotion: -1
         }
       ],
       keywords: [
         {
           text: "گرینلند",
           value: 1345
         },
         {
           text: "پمپئو",
           value: 922
         },
         {
           text: "فلورانس",
           value: 876
         },
         {
           text: "تغییر",
           value: 562
         },
         {
           text: "بیکاری",
           value: 561
         },
         {
           text: "آسایش",
           value: 428
         },
         {
           text: "آمریکا",
           value: 386
         },
         {
           text: "اقتصاد",
           value: 209
         },
         {
           text: "رشد",
           value: 87
         }
       ],
       words: [
         {
           text: "دونالد",
           value: 20
         },
         {
           text: "تحریم",
           value: 10
         },
         {
           text: "ظریف",
           value: 10
         },
         {
           text: "مردم",
           value: 13
         },
         {
           text: "آمریکا",
           value: 13
         },
         {
           text: "چین",
           value: 10
         },
         {
           text: "ایران",
           value: 8
         },
         {
           text: "تغییر",
           value: 13
         },
         {
           text: "خرید",
           value: 13
         },
         {
           text: "ما",
           value: 10
         },
         {
           text: "کاخ",
           value: 10
         },
         {
           text: "تعرفه",
           value: 10
         },
         {
           text: "جدید",
           value: 8
         },
         {
           text: "گفت",
           value: 10
         },
         {
           text: "رسانه",
           value: 10
         },
         {
           text: "گرینلند",
           value: 13
         }
       ],
       trackers: [
         {
           id: 1,
           name: "ترامپ",
           active: 1,
           social: {
             twitter: 1,
             instagram: 1
           },
           retrieved_posts: 682,
           date: "12 خرداد 98",
           time: "16:43"
         },
         {
           id: 2,
           name: "پرسپولیس",
           active: 1,
           social: {
             twitter: 1,
             instagram: null
           },
           retrieved_posts: 682,
           date: "18 خرداد 98",
           time: "16:43"
         },
         {
           id: 3,
           name: "استادیوم",
           active: 1,
           social: {
             twitter: 1,
             instagram: 1
           },
           retrieved_posts: 682,
           date: "10 خرداد 98",
           time: "16:43"
         },
         {
           id: 4,
           name: "اپل",
           active: 0,
           social: {
             twitter: 1,
             instagram: 1
           },
           retrieved_posts: 682,
           date: "10 خرداد 98",
           time: "16:43"
         },
         {
           id: 5,
           name: "هنگ کنگ",
           active: 0,
           social: {
             twitter: 1,
             instagram: null
           },
           retrieved_posts: 682,
           date: "10 خرداد 98",
           time: "16:43"
         }
       ],
       posts: [
         {
           id: 1,
           username: "morteza",
           name: "مرتضی محمدی",
           post:
               "نصیحت به غرض می‌شنود به نزدیک صاحب دیوان رفتم به سابقه معرفتی که در میان ما بود و صورت حالش بیان",
           emotion: "negative",
           comment_emotion: "negative",
           sharable: 1,
           likes: 8240,
           comments: 4339,
           date: "1398/05/21",
           time: "16:42"
         },
         {
           id: 2,
           username: "moradi",
           name: "سارا مرادی",
           post:
               "نصیحت به غرض می‌شنود به نزدیک صاحب دیوان رفتم به سابقه معرفتی که در میان ما بود و صورت حالش بیان",
           emotion: "positive",
           comment_emotion: "negative",
           sharable: 1,
           likes: 240,
           comments: 39,
           date: "1398/05/21",
           time: "18:42"
         },
         {
           id: 3,
           username: "sirone",
           name: "سیروان",
           post:
               "نصیحت به غرض می‌شنود به نزدیک صاحب دیوان رفتم به سابقه معرفتی که در میان ما بود و صورت حالش بیان",
           emotion: "positive",
           comment_emotion: "positive",
           sharable: 1,
           likes: 82,
           comments: 43,
           date: "1398/05/20",
           time: "19:42"
         },
         {
           id: 4,
           username: "maryqueen",
           name: "مریم قاسم",
           post:
               "نصیحت به غرض می‌شنود به نزدیک صاحب دیوان رفتم به سابقه معرفتی که در میان ما بود و صورت حالش بیان",
           emotion: "positive",
           comment_emotion: "positive",
           sharable: 1,
           likes: 248,
           comments: 13,
           date: "1398/05/19",
           time: "20:42"
         },
         {
           id: 5,
           username: "vtalimar",
           name: "وحید علیمردی",
           post:
               "نصیحت به غرض می‌شنود به نزدیک صاحب دیوان رفتم به سابقه معرفتی که در میان ما بود و صورت حالش بیان",
           emotion: "negative",
           comment_emotion: "positive",
           sharable: 1,
           likes: 120,
           comments: 19,
           date: "1398/05/19",
           time: "22:02"
         }
       ]
     }

 function triggerDrawer(state = initState0, action) {

switch (action.type) {

  case
  DashboardConstants.TRIGGER_DRAWER
  :
    return {
      isDrawerOpen: !state.isDrawerOpen
    };
  default:
    return state;
}
}

 function selectedTrackerMenu(state = initState3, action) {
  switch(action.type)
  {
    case DashboardConstants.SELECT_TRACKER_MENU:
      return {
        selectedTrackerId: action.id,
        name: action.name
      };
    default:
      return state;
  }
}

 function selectedTrackerDashboardItem(state = initState4, action) {
switch (action.type) {
  case DashboardConstants.SELECT_PAGE:
    return {
      ...state,
      selectedPage: action.page
    };
  case DashboardConstants.SELECT_TRACKER_DASHBOARD_LIST_ITEM:
    return {
      ...state,
      selectedTrackerDashboardItem: action.item
    };
  case DashboardConstants.SELECT_ANALYSIS_TYPE:
    return {
      ...state,
      selectedAnalysisType: action.t
    };
  case DashboardConstants.CHANGE_ANALYSIS_STATUS:
    console.log(action);

    return {
      ...state,
      analysis: state.analysis.map(el =>
          el.id == action.analysis ? {...el, active: !el.active} : el
      )
    };
  case DashboardConstants.SELECT_KEYWORD:
    return {
      ...state,
      selectedKeyword: action.word.text
    };
  case DashboardConstants.BACK_TO_TRACKERS:
    return {
      ...state,
      selectedTrackerDashboardItem: null
    };
  case DashboardConstants.SELECT_GROUP:
    return {
      ...state,
      selectedGroup: action.id
    };
  case DashboardConstants.SELECT_TRACKER:
    console.log("SELECT TRACKER")
    console.log(action)
    console.log({
      ...state,
      selectedTracker: action.id,
      selectedTrackerDashboardItem: "dashboard"
    })
    return{
      ...state,
      selectedTracker: action.id,
      selectedTrackerDashboardItem: "dashboard"
    };
  case DashboardConstants.CHANGE_SELCETED_TRACKER:
    return {
      ...state,
      selectedTracker: action.id
    };
  default:
    return state;
}
}

 function lastTrackers(state = initState1, action) {

   switch (action.type) {
    case DashboardConstants.ADD_TRACKER:
      var now = new Date();
      var id = state.lastTrackerId + 1;
      return {
        lastTrackerId: id,
        trackers: [
          ...state.trackers,
          {
            id,
            name: action.data.name,
            terms:action.data.terms,
            date: now
          }
        ],
        selectedTracker:state.selectedTracker
      };
    case DashboardConstants.SELECT_EMOTION:
      return {
        ...state,
        selectedEmotion: action.emotion
      };
    case DashboardConstants.CHANGE_TRACKER_STATUS:
      return {
        ...state,
        trackers: state.trackers.map(el =>
            el.id == action.tracker ? {...el, active: !el.active} : el
        )
      };
     case DashboardConstants.SELECT_TRACKER:
       var selectedTracker = {};
       state.trackers.map(q => {
         if (q.id == action.id) {
           selectedTracker = q;
         }
       });
       return {
         ...state,
         selectedTracker
       };
     case DashboardConstants.SELECT_TRACKERS_TYPE:
       console.log(action.t)
       return {
         ...state,
         selectedTrackersType: action.t
       };
    default:
      return state;
  }
}

 function changeSnackbarStatus(state = initState2, action)
{
  switch (action.type) {
    case DashboardConstants.CHANGE_SNACKBAR_STATUS:
      return {
        isSnackbarOpen: action.data.open,
        snackbarMessage: action.data.msg
      };
    default:
      return state;
  }
}

