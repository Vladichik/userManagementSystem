"use strict";

var MOCK_USERS_DATA = [{
  "id": 1,
  "first_name": "Barbara",
  "last_name": "Harris",
  "email": "bharris0@apache.org",
  "city": "A dos Negros",
  "longitude": "-9.1167",
  "latitude": "39.35",
  "photo": "https://robohash.org/aliquidhicvoluptatem.jpg?size=100x100\u0026set=set1",
  "reg_date": "10/31/2015",
  "phone_number": "351-(899)893-0455",
  "group": "Jabberstorm"
},
  {
    "id": 2,
    "first_name": "Helen",
    "last_name": "Kelly",
    "email": "hkelly1@unesco.org",
    "city": "Wudian",
    "longitude": "112.77102",
    "latitude": "31.98325",
    "photo": "https://robohash.org/voluptatibusasperioresdolor.png?size=100x100\u0026set=set1",
    "reg_date": "9/21/2015",
    "phone_number": "86-(300)838-5818",
    "group": "Browsebug"
  },
  {
    "id": 3,
    "first_name": "Janet",
    "last_name": "Stephens",
    "email": "jstephens2@mysql.com",
    "city": "Obršani",
    "longitude": "21.3615",
    "latitude": "41.28168",
    "photo": "https://robohash.org/iustodoloresea.bmp?size=100x100\u0026set=set1",
    "reg_date": "1/17/2016",
    "phone_number": "389-(758)223-4191",
    "group": "Skinte"
  },
  {
    "id": 4,
    "first_name": "Janet",
    "last_name": "Nichols",
    "email": "jnichols3@plala.or.jp",
    "city": "São Miguel dos Campos",
    "longitude": "-36.09361",
    "latitude": "-9.78111",
    "photo": "https://robohash.org/voluptatumperspiciatisfugiat.bmp?size=100x100\u0026set=set1",
    "reg_date": "3/14/2016",
    "phone_number": "55-(898)660-0947",
    "group": "Thoughtmix"
  },
  {
    "id": 5,
    "first_name": "Steve",
    "last_name": "Mills",
    "email": "smills4@wisc.edu",
    "city": "Fusagasuga",
    "longitude": "-74.36378",
    "latitude": "4.33646",
    "photo": "https://robohash.org/nondoloremnatus.png?size=100x100\u0026set=set1",
    "reg_date": "3/17/2016",
    "phone_number": "57-(460)552-6953",
    "group": "Voonix"
  },
  {
    "id": 6,
    "first_name": "Jean",
    "last_name": "Watkins",
    "email": "jwatkins5@1und1.de",
    "city": "Cilimus Kulon",
    "longitude": "108.5874",
    "latitude": "-7.0992",
    "photo": "https://robohash.org/liberoeaquemolestiae.png?size=100x100\u0026set=set1",
    "reg_date": "8/12/2016",
    "phone_number": "62-(195)766-0851",
    "group": "Aivee"
  },
  {
    "id": 7,
    "first_name": "Steven",
    "last_name": "Campbell",
    "email": "scampbell6@unicef.org",
    "city": "Beraim",
    "longitude": "116.3396",
    "latitude": "-8.7068",
    "photo": "https://robohash.org/etvoluptatedeleniti.png?size=100x100\u0026set=set1",
    "reg_date": "8/21/2016",
    "phone_number": "62-(690)309-6886",
    "group": "Wordware"
  },
  {
    "id": 8,
    "first_name": "Joyce",
    "last_name": "Garza",
    "email": "jgarza7@theglobeandmail.com",
    "city": "Khān Neshīn",
    "longitude": "63.7888",
    "latitude": "30.5488",
    "photo": "https://robohash.org/eanatusconsequatur.bmp?size=100x100\u0026set=set1",
    "reg_date": "6/17/2016",
    "phone_number": "93-(569)125-3503",
    "group": "Wikizz"
  },
  {
    "id": 9,
    "first_name": "Carl",
    "last_name": "Crawford",
    "email": "ccrawford8@deviantart.com",
    "city": "Celestynów",
    "longitude": "21.39107",
    "latitude": "52.06093",
    "photo": "https://robohash.org/aliquideosvoluptates.png?size=100x100\u0026set=set1",
    "reg_date": "8/6/2016",
    "phone_number": "48-(865)402-8257",
    "group": "Gabcube"
  },
  {
    "id": 10,
    "first_name": "Bobby",
    "last_name": "Lee",
    "email": "blee9@google.ca",
    "city": "Bosanski Šamac",
    "longitude": "18.46756",
    "latitude": "45.05986",
    "photo": "https://robohash.org/doloreadipiscidolorem.bmp?size=100x100\u0026set=set1",
    "reg_date": "6/3/2016",
    "phone_number": "387-(341)349-8772",
    "group": "Topiczoom"
  },
  {
    "id": 11,
    "first_name": "Deborah",
    "last_name": "Burns",
    "email": "dburnsa@google.co.jp",
    "city": "Tuplice",
    "longitude": "14.82914",
    "latitude": "51.67639",
    "photo": "https://robohash.org/numquamveronam.jpg?size=100x100\u0026set=set1",
    "reg_date": "3/3/2016",
    "phone_number": "48-(699)657-9554",
    "group": "Cogidoo"
  },
  {
    "id": 12,
    "first_name": "Nicole",
    "last_name": "Nelson",
    "email": "nnelsonb@github.io",
    "city": "Youlongchuan",
    "longitude": "105.88205",
    "latitude": "33.88872",
    "photo": "https://robohash.org/veritatisnequenon.bmp?size=100x100\u0026set=set1",
    "reg_date": "9/29/2015",
    "phone_number": "86-(444)940-8966",
    "group": "Jetpulse"
  },
  {
    "id": 13,
    "first_name": "Joshua",
    "last_name": "Hunt",
    "email": "jhuntc@economist.com",
    "city": "Áthyra",
    "longitude": "22.59279",
    "latitude": "40.82615",
    "photo": "https://robohash.org/saepeestomnis.png?size=100x100\u0026set=set1",
    "reg_date": "4/16/2016",
    "phone_number": "30-(315)122-6131",
    "group": "Ntags"
  },
  {
    "id": 14,
    "first_name": "Larry",
    "last_name": "Crawford",
    "email": "lcrawfordd@nytimes.com",
    "city": "Maoya",
    "longitude": "107.16538",
    "latitude": "28.09319",
    "photo": "https://robohash.org/etsitesse.jpg?size=100x100\u0026set=set1",
    "reg_date": "7/30/2016",
    "phone_number": "86-(372)981-7651",
    "group": "Mita"
  },
  {
    "id": 15,
    "first_name": "Janice",
    "last_name": "Kelly",
    "email": "jkellye@dyndns.org",
    "city": "Totolan",
    "longitude": "123.84702",
    "latitude": "9.63286",
    "photo": "https://robohash.org/magnamdelenitidolores.jpg?size=100x100\u0026set=set1",
    "reg_date": "4/10/2016",
    "phone_number": "63-(188)602-5029",
    "group": "Twitterbridge"
  },
  {
    "id": 16,
    "first_name": "Gregory",
    "last_name": "Campbell",
    "email": "gcampbellf@google.cn",
    "city": "Uppsala",
    "longitude": "17.6454",
    "latitude": "59.8585",
    "photo": "https://robohash.org/illumdignissimospraesentium.bmp?size=100x100\u0026set=set1",
    "reg_date": "7/19/2016",
    "phone_number": "46-(369)976-3278",
    "group": "Photolist"
  },
  {
    "id": 17,
    "first_name": "Lois",
    "last_name": "Harris",
    "email": "lharrisg@cafepress.com",
    "city": "Vạn Giã",
    "longitude": "109.22069",
    "latitude": "12.69203",
    "photo": "https://robohash.org/quaeratpariaturest.bmp?size=100x100\u0026set=set1",
    "reg_date": "9/19/2015",
    "phone_number": "84-(395)747-2178",
    "group": "Roombo"
  },
  {
    "id": 18,
    "first_name": "Anthony",
    "last_name": "Nguyen",
    "email": "anguyenh@vinaora.com",
    "city": "Genyem",
    "longitude": "140.1495",
    "latitude": "-2.5791",
    "photo": "https://robohash.org/utaspernaturconsequatur.png?size=100x100\u0026set=set1",
    "reg_date": "9/20/2015",
    "phone_number": "62-(402)493-1770",
    "group": "Skilith"
  },
  {
    "id": 19,
    "first_name": "Jacqueline",
    "last_name": "Harrison",
    "email": "jharrisoni@miitbeian.gov.cn",
    "city": "Carangola",
    "longitude": "-42.02944",
    "latitude": "-20.73306",
    "photo": "https://robohash.org/harumquosnatus.jpg?size=100x100\u0026set=set1",
    "reg_date": "11/20/2015",
    "phone_number": "55-(801)839-5032",
    "group": "Feedmix"
  },
  {
    "id": 20,
    "first_name": "Brandon",
    "last_name": "Jacobs",
    "email": "bjacobsj@mysql.com",
    "city": "Tangtou",
    "longitude": "118.13218",
    "latitude": "25.80551",
    "photo": "https://robohash.org/doloremnoneos.jpg?size=100x100\u0026set=set1",
    "reg_date": "3/24/2016",
    "phone_number": "86-(728)263-2856",
    "group": "Myworks"
  },
  {
    "id": 21,
    "first_name": "Anna",
    "last_name": "Howell",
    "email": "ahowellk@sohu.com",
    "city": "Liliana",
    "longitude": "124.1397",
    "latitude": "-9.6976",
    "photo": "https://robohash.org/molestiaevoluptatemplaceat.png?size=100x100\u0026set=set1",
    "reg_date": "8/17/2016",
    "phone_number": "62-(564)155-7014",
    "group": "Skalith"
  },
  {
    "id": 22,
    "first_name": "Jesse",
    "last_name": "Murphy",
    "email": "jmurphyl@whitehouse.gov",
    "city": "Indianapolis",
    "longitude": "-86.272",
    "latitude": "39.849",
    "photo": "https://robohash.org/animisaepesoluta.bmp?size=100x100\u0026set=set1",
    "reg_date": "4/26/2016",
    "phone_number": "1-(317)629-0888",
    "group": "Yadel"
  },
  {
    "id": 23,
    "first_name": "Nancy",
    "last_name": "Duncan",
    "email": "nduncanm@ebay.com",
    "city": "Paraíso de Chabasquén",
    "longitude": "-69.94754",
    "latitude": "9.43365",
    "photo": "https://robohash.org/cumqueplaceatet.jpg?size=100x100\u0026set=set1",
    "reg_date": "10/5/2015",
    "phone_number": "58-(865)622-2221",
    "group": "Rhycero"
  },
  {
    "id": 24,
    "first_name": "Julia",
    "last_name": "Burke",
    "email": "jburken@stumbleupon.com",
    "city": "Eqlīd",
    "longitude": "52.69701",
    "latitude": "30.89885",
    "photo": "https://robohash.org/odititaqueipsa.jpg?size=100x100\u0026set=set1",
    "reg_date": "11/18/2015",
    "phone_number": "98-(550)415-1735",
    "group": "Brainlounge"
  },
  {
    "id": 25,
    "first_name": "Clarence",
    "last_name": "Bailey",
    "email": "cbaileyo@gizmodo.com",
    "city": "Neskaupstaður",
    "longitude": "-13.68368",
    "latitude": "65.14819",
    "photo": "https://robohash.org/autmagnireiciendis.jpg?size=100x100\u0026set=set1",
    "reg_date": "8/10/2016",
    "phone_number": "354-(525)527-6835",
    "group": "Thoughtsphere"
  },
  {
    "id": 26,
    "first_name": "Edward",
    "last_name": "Lawson",
    "email": "elawsonp@chicagotribune.com",
    "city": "Uralets",
    "longitude": "59.6497",
    "latitude": "57.6614",
    "photo": "https://robohash.org/necessitatibusmolestiaequi.png?size=100x100\u0026set=set1",
    "reg_date": "11/18/2015",
    "phone_number": "7-(167)788-2735",
    "group": "Gabtype"
  },
  {
    "id": 27,
    "first_name": "Helen",
    "last_name": "Richardson",
    "email": "hrichardsonq@opera.com",
    "city": "Mülheim an der Ruhr",
    "longitude": "6.8982",
    "latitude": "51.4421",
    "photo": "https://robohash.org/consequaturautvero.png?size=100x100\u0026set=set1",
    "reg_date": "8/9/2016",
    "phone_number": "49-(202)860-7857",
    "group": "Izio"
  },
  {
    "id": 28,
    "first_name": "Pamela",
    "last_name": "Watson",
    "email": "pwatsonr@china.com.cn",
    "city": "Knin",
    "longitude": "16.2",
    "latitude": "44.04389",
    "photo": "https://robohash.org/nequeblanditiisnobis.jpg?size=100x100\u0026set=set1",
    "reg_date": "7/15/2016",
    "phone_number": "385-(768)820-7744",
    "group": "Yodel"
  },
  {
    "id": 29,
    "first_name": "Rebecca",
    "last_name": "Castillo",
    "email": "rcastillos@harvard.edu",
    "city": "Potolo",
    "longitude": "-65.52861",
    "latitude": "-19.00556",
    "photo": "https://robohash.org/debitisvoluptateullam.jpg?size=100x100\u0026set=set1",
    "reg_date": "9/1/2016",
    "phone_number": "591-(349)347-7347",
    "group": "Youspan"
  },
  {
    "id": 30,
    "first_name": "Janet",
    "last_name": "Ford",
    "email": "jfordt@wix.com",
    "city": "Béziers",
    "longitude": "3.219",
    "latitude": "43.3476",
    "photo": "https://robohash.org/adipisciabaut.png?size=100x100\u0026set=set1",
    "reg_date": "3/29/2016",
    "phone_number": "33-(990)913-8778",
    "group": "Eimbee"
  }];
