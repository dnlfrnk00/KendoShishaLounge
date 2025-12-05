import type { MainCategory } from '../types/menu';

export const menuData: MainCategory[] = [
    {
        id: 'shishas',
        label: 'Shishas',
        subCategories: [
            {
                name: "Shishas",
                imgSrc: "/Images/ShishasThumbnail.png",
                subheading: "Eisschlauch gibt's für 2.00 extra",
                lowerSubheading: "Topfwechsel 7.50",
                items: [
                    { name: "Doppel Apfel", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Traube Minze", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Blaubeere Minze", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Orange Minze", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Kaugummi Zimt", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Love 66", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "African", price: "15.00", zutaten: "", zusatzstoffe: "Im Wechsel", inhalt: "", alk: "" },
                    { name: "Wassermelone", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Banane", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Zitrone", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Kiwi", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Himbeere", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Ice Kaktus", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Ice Bonbon", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Pistazie Vanille", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Okolum", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Haus Mix", price: "15.00", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                ]
            }
        ]
    },
    {
        id: 'drinks',
        label: 'Getränke',
        subCategories: [
            {
                name: "Softdrinks",
                imgSrc: "/Images/SoftdrinksThumbnail.png",
                subheading: "Eisgekühlte Erfrischungsgetränke",
                items: [
                    { name: "Wasser", price: "3.90", zutaten: "", zusatzstoffe: "", inhalt: "0,33L", alk: "Still, Medium" },
                    { name: "Coca Cola", price: "4.20", zutaten: "", zusatzstoffe: "1, 2, 3, 7, 9, 10, 14", inhalt: "0,33L", alk: "" },
                    { name: "Coca Cola Zero", price: "4.20", zutaten: "", zusatzstoffe: "1, 2, 3, 7, 9, 10, 15", inhalt: "0,33L", alk: "" },
                    { name: "Fanta", price: "4.20", zutaten: "", zusatzstoffe: "1, 2, 3, 7, 9, 10, 16", inhalt: "0,33L", alk: "" },
                    { name: "Sprite", price: "4.20", zutaten: "", zusatzstoffe: "1, 2, 3, 7, 9, 10, 17", inhalt: "0,33L", alk: "" },
                    { name: "Spezi Energy", price: "4.20", zutaten: "", zusatzstoffe: "1, 2, 3, 7, 9, 10, 18", inhalt: "0,33L", alk: "" },
                    { name: "Paulaner Spezi", price: "4.20", zutaten: "", zusatzstoffe: "1, 2, 3, 7, 9, 10, 19", inhalt: "0,5L", alk: "" },
                    { name: "Red Bull Classic", price: "4.20", zutaten: "", zusatzstoffe: "1, 4, 10", inhalt: "0,25L", alk: "" },
                    { name: "Red Bull Zero", price: "4.20", zutaten: "", zusatzstoffe: "1, 4, 10", inhalt: "0,25L", alk: "" },
                    { name: "Red Bull White Cocos", price: "4.20", zutaten: "", zusatzstoffe: "1, 4, 10", inhalt: "0,25L", alk: "" },
                    { name: "Elephant Bay ICE Tea", price: "4.20", zutaten: "", zusatzstoffe: "2, 7", inhalt: "0,33L", alk: "" },
                    { name: "Säfte", price: "4.20", zutaten: "", zusatzstoffe: "2, 7, 9", inhalt: "0,33L", alk: "" },
                    { name: "Saftschorle", price: "4.50", zutaten: "", zusatzstoffe: "2, 7, 9", inhalt: "0,33L", alk: "" },
                    { name: "Powerade Blue", price: "4.20", zutaten: "", zusatzstoffe: "2, 7, 10, 14, 15", inhalt: "0,5L", alk: "" },
                ]
            },
            {
                name: "Bier",
                imgSrc: "/Images/BierThumbnail.png",
                subheading: "",
                items: [
                    { name: "Augustiner Helles", price: "4.20", zutaten: "", zusatzstoffe: "", inhalt: "0,5L", alk: "Alkoholisch" },
                    { name: "Desperados", price: "4.50", zutaten: "", zusatzstoffe: "8", inhalt: "0,33L", alk: "Alkoholisch" },
                    { name: "Franziskaner Weizen", price: "4.20", zutaten: "", zusatzstoffe: "", inhalt: "0,5L", alk: "Alkoholisch" },
                    { name: "Cola Weizen", price: "4.50", zutaten: "", zusatzstoffe: "1, 2, 7, 9, 10, 14", inhalt: "0,5L", alk: "Alkoholisch" },
                    { name: "Radler", price: "4.50", zutaten: "", zusatzstoffe: "7", inhalt: "0,5L", alk: "Alkoholisch" },
                ]
            },
            {
                name: "Longdrinks",
                imgSrc: "/Images/LongdrinksThumbnail.png",
                subheading: "Hausgemixte Longdrinks, 475ml",
                items: [
                    { name: "Vodka Bull", price: "9.90", zutaten: "", zusatzstoffe: "1, 4, 10", inhalt: "4cl", alk: "Alkoholisch" },
                    { name: "Vodka Saft", price: "9.90", zutaten: "", zusatzstoffe: "2, 7, 9", inhalt: "4cl", alk: "Alkoholisch" },
                    { name: "Jack Cola", price: "9.90", zutaten: "", zusatzstoffe: "1, 2, 9, 14", inhalt: "4cl", alk: "Alkoholisch" },
                    { name: "Jäger Bull", price: "9.90", zutaten: "", zusatzstoffe: "1, 4, 10", inhalt: "4cl", alk: "Alkoholisch" },
                    { name: "Cuba Libre", price: "9.90", zutaten: "Rum | Cola", zusatzstoffe: "1, 2, 9, 14", inhalt: "0,4L", alk: "Alkoholisch" },
                    { name: "Gin Tonic", price: "9.90", zutaten: "", zusatzstoffe: "1, 4, 10", inhalt: "4cl", alk: "Alkoholisch" },
                ]
            },
            {
                name: "Cocktails",
                imgSrc: "/Images/CocktailsThumbnail.png",
                subheading: "Cocktails mit und ohne Alkohol",
                items: [
                    { name: "Touchdown", price: "9.20", zutaten: "Apricot Brandy | Vodka | Maracujasaft | Grenadine", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholisch" },
                    { name: "Sex on the Beach", price: "9.20", zutaten: "Vodka | Ananassaft | Orangensaft | Grenadine | Apricot Brandy", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholisch" },
                    { name: "Mojito", price: "9.20", zutaten: "Rum | Rohrzucker | Soda | Minze | Limette", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholisch" },
                    { name: "Pina Colada", price: "9.20", zutaten: "Rum | Kokoslikör | Ananassaft", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholisch" },
                    { name: "Long Island Ice Tea", price: "9.20", zutaten: "Vodka | Tequila | Rum | Gin | Ice Tea Pfirsich", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholisch" },
                    { name: "Long Island Red Bull", price: "9.20", zutaten: "Vodka | Tequila | Rum | Gin | Red Bull", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholisch" },
                    { name: "Long Island Cola", price: "9.20", zutaten: "Vodka | Tequila | Rum | Gin | Coca Cola", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholisch" },
                    { name: "Swimming Pool", price: "9.20", zutaten: "Vodka | Kokossirup | Blue Curacao | Ananassaft", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholisch" },
                    { name: "Sweet Bitch", price: "9.20", zutaten: "Tequila | Orangensaft | Grenadine", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholisch" },
                    { name: "Caipirinha", price: "9.20", zutaten: "Cachaca | Limette | Rohrzucker", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholisch" },
                    { name: "Virgin Colada", price: "8.50", zutaten: "Ananassaft | Kokossirup", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholfrei" },
                    { name: "Havanna Juicer", price: "8.50", zutaten: "Maracujasaft | Pfirsichsirup | Orangensaft | Grenadine | Johannisbeersaft", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholfrei" },
                    { name: "Exotic Ipanema", price: "8.50", zutaten: "Maracujasaft | Limette | Mineralwasser", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholfrei" },
                    { name: "Coconut Kiss", price: "8.50", zutaten: "Kokossirup | Ananassaft | Orangensaft | Kirschsaft", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholfrei" },
                    { name: "Kiba", price: "8.50", zutaten: "Kirschsaft | Bananensaft", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholfrei" },
                    { name: "Virgin Mojito", price: "8.50", zutaten: "Limettensaft | Rohrzucker | Ginger Ale", zusatzstoffe: "", inhalt: "0,4L", alk: "Alkoholfrei" },
                ]
            },
            {
                name: "Chill & Drink",
                imgSrc: "/Images/ChilNDrinkThumbnail.png",
                subheading: "Drinks für einen entspannten Abend",
                items: [
                    { name: "Hugo", price: "6.50", zutaten: "", zusatzstoffe: "16", inhalt: "0,25L", alk: "Alkoholisch" },
                    { name: "Aperol Spritz", price: "6.50", zutaten: "", zusatzstoffe: "", inhalt: "0,25L", alk: "Alkoholisch" },
                    { name: "Weißwein", price: "6.50", zutaten: "", zusatzstoffe: "2, 14, 18", inhalt: "0,25L", alk: "Alkoholisch" },
                    { name: "Süße Weißwein Schorle", price: "6.20", zutaten: "", zusatzstoffe: "", inhalt: "0,25L", alk: "Alkoholisch" },
                    { name: "Wildberry Elixir Martini", price: "6.50", zutaten: "", zusatzstoffe: "", inhalt: "0,25L", alk: "Alkoholisch" },
                ]
            },
            {
                name: "Shots",
                imgSrc: "/Images/ShotsThumbnail.png",
                subheading: "",
                items: [
                    { name: "Vodka", price: "3.00", zutaten: "", zusatzstoffe: "", inhalt: "2cl", alk: "Alkoholisch" },
                    { name: "Whiskey", price: "3.00", zutaten: "", zusatzstoffe: "", inhalt: "2cl", alk: "Alkoholisch" },
                    { name: "Jägermeister", price: "3.00", zutaten: "", zusatzstoffe: "", inhalt: "2cl", alk: "Alkoholisch" },
                    { name: "Tequila", price: "3.00", zutaten: "", zusatzstoffe: "", inhalt: "2cl", alk: "Alkoholisch" },
                    { name: "Ficken", price: "3.00", zutaten: "", zusatzstoffe: "", inhalt: "2cl", alk: "Alkoholisch" },
                    { name: "Bombay Gin", price: "3.00", zutaten: "", zusatzstoffe: "", inhalt: "2cl", alk: "Alkoholisch" },
                    { name: "Süßer Hausmix", price: "3.00", zutaten: "", zusatzstoffe: "Melonen Brandy, Vodka", inhalt: "2cl", alk: "Alkoholisch" },
                    { name: "Raki", price: "3.00", zutaten: "", zusatzstoffe: "", inhalt: "2cl", alk: "Alkoholisch" },
                ]
            },
            {
                name: "Flaschen",
                imgSrc: "/Images/FlaschenThumbnail.png",
                subheading: "",
                items: [
                    { name: "Unser Flaschenpaket", price: "100.00", zutaten: "", zusatzstoffe: "1 Belvedere, 1 Shisha und 1 Nachos", inhalt: "", alk: "" },
                    { name: "Smirnoff", price: "39.00", zutaten: "", zusatzstoffe: "", inhalt: "1,00L", alk: "Alkoholisch" },
                    { name: "Absolut Vodka", price: "49.00", zutaten: "", zusatzstoffe: "", inhalt: "0,75L", alk: "Alkoholisch" },
                    { name: "Belvedere", price: "99.00", zutaten: "", zusatzstoffe: "", inhalt: "0,75L", alk: "Alkoholisch" },
                    { name: "Jack Daniels", price: "79.00", zutaten: "", zusatzstoffe: "", inhalt: "0,75L", alk: "Alkoholisch" },
                    { name: "Chivas", price: "79.00", zutaten: "", zusatzstoffe: "", inhalt: "0,7L", alk: "Alkoholisch" },
                    { name: "Hennessy", price: "89.00", zutaten: "", zusatzstoffe: "", inhalt: "0,7L", alk: "Alkoholisch" },
                    { name: "Moët", price: "99.00", zutaten: "", zusatzstoffe: "", inhalt: "0,75L", alk: "Alkoholisch" },
                ]
            },
            {
                name: "Hotdrinks",
                imgSrc: "/Images/HotdrinksThumbnail.png",
                subheading: "Frischgemachte Heißgetränke",
                items: [
                    { name: "Espresso (einfach)", price: "2.50", zutaten: "", zusatzstoffe: "1", inhalt: "", alk: "" },
                    { name: "Espresso (doppelt)", price: "3.00", zutaten: "", zusatzstoffe: "1", inhalt: "", alk: "" },
                    { name: "Kaffee Crema", price: "3.90", zutaten: "", zusatzstoffe: "1", inhalt: "", alk: "" },
                    { name: "Latte Macchiato", price: "4.50", zutaten: "", zusatzstoffe: "1, 12, 17", inhalt: "", alk: "" },
                    { name: "Cappuccino", price: "4.20", zutaten: "", zusatzstoffe: "1, 12", inhalt: "", alk: "" },
                    { name: "Heiße Schokolade", price: "4.50", zutaten: "", zusatzstoffe: "12", inhalt: "", alk: "" },
                    { name: "Tee (verschiedene Sorten)", price: "3.90", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                    { name: "Frischer Minztee", price: "4.20", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                ]
            }
        ]
    },
    {
        id: 'food',
        label: 'Essen',
        subCategories: [
            {
                name: "Snacks/Food",
                imgSrc: "/Images/SnacksNFoodThumbnail.png",
                subheading: "",
                items: [
                    { name: "Pizza Sucuk", price: "9.50", zutaten: "", zusatzstoffe: "2, 9, 11, 12, 15", inhalt: "", alk: "" },
                    { name: "Pizza Margherita", price: "9.00", zutaten: "", zusatzstoffe: "2, 9, 11, 12, 15", inhalt: "", alk: "" },
                    { name: "Sucuk Baguette", price: "8.50", zutaten: "Sucuk, Gouda, Spezial Sauce", zusatzstoffe: "2, 9, 11, 12, 15", inhalt: "Mit Cocktailsoße-Dip", alk: "" },
                    { name: "Toast (Sucuk/Käse)", price: "5.50", zutaten: "", zusatzstoffe: "2, 9, 11, 12, 15", inhalt: "", alk: "" },
                    { name: "Nachos", price: "5.20", zutaten: "", zusatzstoffe: "2, 12", inhalt: "Mit Käse & Salsa Dip", alk: "" },
                    { name: "Nussmix", price: "4.50", zutaten: "", zusatzstoffe: "", inhalt: "", alk: "" },
                ]
            }
        ]
    }
];
