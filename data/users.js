import { v4 as uuidv4 } from 'uuid'

const users = [
  {
    id: uuidv4(),
    user: "testuser1",
    password: 123456,
    transactions: [
      {
        amount: "$3.13",
        category: "electronics",
        date: "4/4/2021",
        address: "89777 Trailsway Circle",
        storeName: "White-Lebsack",
        item: "Type-C Cable"
      }, 
      {
        amount: "$1.02",
        category: "banking",
        date: "8/29/2020",
        address: "31732 Little Fleur Hill",
        storeName: "Connelly, Bernier and Brekke",
        item: "interest"
      }, 
      {
        amount: "$3.54",
        category: "grocery",
        date: "4/30/2021",
        address: "2282 Glendale Trail",
        storeName: "Lakin, Vandervort and Schulist",
        item: "Bread - English Muffin"
      }, 
      {
        amount: "$2.55",
        category: "grocery",
        date: "4/7/2021",
        address: "40 Hayes Hill",
        storeName: "Ebert-Kuhn",
        item: "Nut - Almond, Blanched, Sliced"
      }, 
      {
        amount: "$4.29",
        category: "grocery",
        date: "1/28/2021",
        address: "2509 Bartillon Crossing",
        storeName: "Hodkiewicz Group",
        item: "Dooleys Toffee"
      }, 
      {
        amount: "$9.88",
        category: "electronics",
        date: "12/1/2020",
        address: "6889 Oakridge Alley",
        storeName: "Connelly and Sons",
        item: "Phone Case"
      }, 
      {
        amount: "$3.48",
        category: "food",
        date: "6/24/2021",
        address: "84270 Mayer Court",
        storeName: "Kemmer Group",
        item: "Ostrich - Prime Cut"
      }, 
      {
        amount: "$1.85",
        category: "electronics",
        date: "10/21/2020",
        address: "97595 Sullivan Crossing",
        storeName: "Grant Inc",
        item: "Flashdrive"
      }, 
      {
        amount: "$5.56",
        category: "banking",
        date: "8/29/2020",
        address: "674 Arapahoe Street",
        storeName: "O'Keefe, Zemlak and Keebler",
        item: "trading"
      }, 
      {
        amount: "$6.86",
        category: "electronics",
        date: "2/16/2021",
        address: "3175 Hoard Parkway",
        storeName: "Rowe, MacGyver and Schultz",
        item: "Micro SD Card"
      }
    ]
  },
  {
    id: uuidv4(),
    user: 'testuser2',
    password: 135791,
    transactions: [
      {
        amount: "$4.45",
        category: "banking",
        date: "4/25/2021",
        address: "1801 Amoth Way",
        storeName: "Nader Inc",
        item: "Trading"
      }, 
      {
        amount: "$50.14",
        category: "electronics",
        date: "4/2/2021",
        address: "92 Kensington Court",
        storeName: "Tremblay LLC",
        item: "Xbox Controller"
      }, 
      {
        amount: "$4.69",
        category: "grocery",
        date: "9/9/2020",
        address: "8 Algoma Plaza",
        storeName: "Kuvalis-McLaughlin",
        item: "Lemon Grass"
      }, 
      {
        amount: "$32.50",
        category: "electronics",
        date: "6/2/2021",
        address: "61 5th Place",
        storeName: "Daugherty-Ward",
        item: "Camera Caseholder"
      }, 
      {
        amount: "$90.56",
        category: "electronics",
        date: "1/30/2021",
        address: "0779 Florence Avenue",
        storeName: "Stehr, White and Ebert",
        item: "Wifi Extender"
      }, 
      {
        amount: "$8.06",
        category: "banking",
        date: "8/16/2020",
        address: "0 Leroy Park",
        storeName: "Koss Group",
        item: "trading"
      }, 
      {
        amount: "$6.90",
        category: "food",
        date: "5/30/2021",
        address: "645 Lyons Pass",
        storeName: "Barton, Bednar and Hoppe",
        item: "Veal Inside - Provimi"
      }, 
      {
        amount: "$3.29",
        category: "food",
        date: "3/16/2021",
        address: "4549 Summer Ridge Alley",
        storeName: "Wiegand, Barton and Heaney",
        item: "Rice - Wild"
      }, 
      {
        amount: "$8.44",
        category: "electronics",
        date: "4/15/2021",
        address: "0 Havey Hill",
        storeName: "Romaguera, Borer and Runolfsdottir",
        item: "HDMI Cable"
      }, 
      {
        amount: "$5.15",
        category: "banking",
        date: "9/28/2020",
        address: "031 Morning Plaza",
        storeName: "Braun-Mante",
        item: "trading"
      }
    ]
  },
];

export default users;