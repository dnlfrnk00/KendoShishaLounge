document.addEventListener("DOMContentLoaded", function () {
    const moreInfoCard = document.querySelector(".more-info");
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".close-btn");

    moreInfoCard.addEventListener("click", function () {
        modal.style.display = "flex";
        setTimeout(function () {
            modal.classList.add("modal-open");
        }, 10);
    });

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove("modal-open");
        setTimeout(function () {
            modal.style.display = "none";
        }, 300);
    }
});

// GENERATING "Geöffnet/Geschlossen" DYNAMICALLY
document.addEventListener("DOMContentLoaded", function () {
    const openingStatus = document.getElementById("opening-status");
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    // Set the opening and closing times
    const openingHour = 18; // 6 PM
    const openingMinute = 30;
    const closingHour = 1; // 1 AM (next day)
    const closingMinute = 0;

    // Convert the current time to minutes for easier comparison
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    // Convert the opening and closing times to minutes for comparison
    const openingTimeInMinutes = openingHour * 60 + openingMinute;
    const closingTimeInMinutes = closingHour * 60 + closingMinute;

    // Check if the current time falls within the opening time range
    if (
        (currentTimeInMinutes >= openingTimeInMinutes &&
            currentTimeInMinutes < closingTimeInMinutes) ||
        (closingTimeInMinutes < openingTimeInMinutes &&
            (currentTimeInMinutes >= openingTimeInMinutes ||
                currentTimeInMinutes < closingTimeInMinutes))
    ) {
        openingStatus.textContent = "Geöffnet";
        openingStatus.classList.add("open");
    } else {
        openingStatus.textContent = "Geschlossen";
    }
});

// DATA OBJECTS
document.addEventListener("DOMContentLoaded", function () {
    const categoriesData = [
        // Shishas
        {
            name: "Shishas",
            imgSrc: "Images/ShishasThumbnail.png",
            subheading: "Eisschlauch gibt's für 2.00€ extra",
            lowerSubheading: "Topfwechsel nur 7.50€",
            // NICHT MEHR BENÖTIGT. EIN EXTRA SUBHEADING BEI SHISHAS
            // exceptSubheading:
            //     "* eingerauchte Shishas ½ Preis - Aromawechsel zum ganzen Preis",
            items: [
                {
                    name: "Doppel Apfel",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Traube Minze",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Blaubeere Minze",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Orange Minze",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Kaugummi Zimt",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Love 66",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Beerenmix",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "Im Wechsel",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Wassermelone",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Orange",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Erdbeere",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Banane",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Zitrone",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Kiwi",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Himbeere",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Ice Kaktus",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Ice Bonbon",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Okolum",
                    price: "€15.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },

                {
                    name: "Haus Mix",
                    price: "€16.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Mocca Pistazie Vanille",
                    price: "€16.00",
                    zutaten: "",
                    zusatzstoffe: "Mit Milch und Kaffeebohnen",
                    inhalt: "",
                    alk: "",
                },
            ],
        },
        // Softdrinks
        {
            name: "Softdrinks",
            imgSrc: "Images/SoftdrinksThumbnail.png",
            subheading: "Eisgekühlte Erfrischungsgetränke",
            items: [
                {
                    name: "Wasser",
                    price: "€3.90",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "0,33L",
                    alk: "Still, Medium",
                },
                {
                    name: "Coca Cola",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 14",
                    inhalt: "0,33L",
                    alk: "",
                },
                {
                    name: "Coca Cola Zero",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 15",
                    inhalt: "0,33L",
                    alk: "",
                },
                {
                    name: "Fanta",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 16",
                    inhalt: "0,33L",
                    alk: "",
                },
                {
                    name: "Sprite",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 17",
                    inhalt: "0,33L",
                    alk: "",
                },
                {
                    name: "Spezi Energy",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 18",
                    inhalt: "0,33L",
                    alk: "",
                },
                {
                    name: "Paulaner Spezi",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 19",
                    inhalt: "0,5L",
                    alk: "",
                },
                {
                    name: "Red Bull Classic",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 4, 10",
                    inhalt: "0,25L",
                    alk: "",
                },
                {
                    name: "Red Bull Zero",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 4, 10",
                    inhalt: "0,25L",
                    alk: "",
                },
                {
                    name: "Red Bull White Cocos",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 4, 10",
                    inhalt: "0,25L",
                    alk: "",
                },
                {
                    name: "Elephant Bay ICE Tea verschiedene Sorten",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 2, 7",
                    inhalt: "0,33L",
                    alk: "",
                },
                {
                    name: "Säfte",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 2, 7, 9",
                    inhalt: "0,33L",
                    alk: "",
                },
                {
                    name: "Saftschorle",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 2, 7, 9",
                    inhalt: "0,33L",
                    alk: "",
                },
                {
                    name: "Powerade Blue",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 2, 7, 10, 14, 15",
                    inhalt: "0,5L",
                    alk: "",
                },
            ],
        },
        // Hotdrinks
        {
            name: "Hotdrinks",
            imgSrc: "Images/HotdrinksThumbnail.png",
            subheading: "Frischgemachte Heißgetränke",
            items: [
                {
                    name: "Mocca (einfach)",
                    price: "€3.50",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Mocca (doppelt)",
                    price: "€3.90",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Mocca mit Milchschaum",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 12",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Tee",
                    price: "€3.50",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
            ],
        },
        // Bier
        {
            name: "Bier",
            imgSrc: "Images/BierThumbnail.png",
            subheading: "",
            items: [
                {
                    name: "Augustiner Helles",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "0,5L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Desperados",
                    price: "€4.50",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 8",
                    inhalt: "0,33L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Franziskaner Weizen",
                    price: "€4.20",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "0,5L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Cola Weizen",
                    price: "€4.50",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 7, 9, 10, 14",
                    inhalt: "0,5L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Radler",
                    price: "€4.50",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 7",
                    inhalt: "0,5L",
                    alk: "Alkoholisch",
                },
            ],
        },
        // Longdrinks
        {
            name: "Longdrinks",
            imgSrc: "Images/LongdrinksThumbnail.png",
            subheading: "Hausgemixte Longdrinks",
            items: [
                {
                    name: "Vodka Bull",
                    price: "€7.00",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 4, 10",
                    inhalt: "4cl",
                    alk: "Alkoholisch",
                },
                {
                    name: "Vodka Saft",
                    price: "€7.00",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 2, 7, 9",
                    inhalt: "4cl",
                    alk: "Alkoholisch",
                },
                {
                    name: "Jack Cola",
                    price: "€7.00",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 9, 14",
                    inhalt: "4cl",
                    alk: "Alkoholisch",
                },
                {
                    name: "Jäger Bull",
                    price: "€7.00",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 4, 10",
                    inhalt: "4cl",
                    alk: "Alkoholisch",
                },
                {
                    name: "Cuba Libre",
                    price: "€8.50",
                    zutaten: "Rum | Cola",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 9, 14",
                    inhalt: "0,4L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Gin Tonic",
                    price: "€7.00",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 1, 4, 10",
                    inhalt: "4cl",
                    alk: "Alkoholisch",
                },
                {
                    name: "Raki",
                    price: "€7.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "4cl",
                    alk: "Alkoholisch",
                },
            ],
        },
        // Cocktails
        {
            name: "Cocktails",
            imgSrc: "Images/CocktailsThumbnail.png",
            subheading: "Cocktails mit und ohne Alkohol",
            items: [
                {
                    name: "Touchdown",
                    price: "€8.50",
                    zutaten:
                        "Apricot Brandy | Vodka | Maracujasaft | Grenadine",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Sex on the Beach",
                    price: "€8.50",
                    zutaten:
                        "Vodka | Ananassaft | Orangensaft | Grenadine | Apricot Brandy |",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Mojito",
                    price: "€8.50",
                    zutaten: "Rum | Rohrzucker | Soda | Minze | Limette",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Pina Colada",
                    price: "€8.50",
                    zutaten: "Rum | Kokoslikör | Ananassaft",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Long Island Ice Tea",
                    price: "€8.50",
                    zutaten: "Vodka | Tequila | Rum | Gin | Ice Tea Pfirsich",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Long Island Red Bull",
                    price: "€8.50",
                    zutaten: "Vodka | Tequila | Rum | Gin | Red Bull",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Long Island Cola",
                    price: "€8.50",
                    zutaten: "Vodka | Tequila | Rum | Gin | Coca Cola",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Swimming Pool",
                    price: "€8.50",
                    zutaten: "Vodka | Kokossirup | Blue Curacao | Ananassaft",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Sweet Bitch",
                    price: "€8.50",
                    zutaten: "Tequila | Orangensaft | Grenadine",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Caipirinha",
                    price: "€8.50",
                    zutaten: "Cachaca | Limette | Rohrzucker",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Coconut Kiss",
                    price: "€7.90",
                    zutaten:
                        "Kokossirup | Ananassaft | Orangensaft | Kirschsaft",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholfrei",
                },
                {
                    name: "Kiba",
                    price: "€7.90",
                    zutaten: "Kirschsaft | Bananensaft",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholfrei",
                },
                {
                    name: "Summer",
                    price: "€7.90",
                    zutaten:
                        "Bitter Lemon | Maracujasaft | Kirschsaft | Ananassaft",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholfrei",
                },
                {
                    name: "Erdbeer Tropic",
                    price: "€7.90",
                    zutaten:
                        "Erdbeersirup | Erdbeersaft | Orangensaft | Ananassaft",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholfrei",
                },
                {
                    name: "Virgin Mojito",
                    price: "€7.90",
                    zutaten: "Limettensaft | Rohrzucker | Ginger Ale",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholfrei",
                },
                {
                    name: "Red Fly Orange",
                    price: "€7.90",
                    zutaten: "Orangensaft | Grenadine | Red Bull",
                    zusatzstoffe: "",
                    inhalt: "0,4L",
                    alk: "Alkoholfrei",
                },
            ],
        },
        // Chill & Drink
        {
            name: "Chill & Drink",
            imgSrc: "Images/ChilNDrinkThumbnail.png",
            subheading: "Drinks für einen entspannten Abend",
            items: [
                {
                    name: "Hugo",
                    price: "€4.50",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 16",
                    inhalt: "0,25L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Aperol Spritz",
                    price: "€4.50",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "0,25L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Weißwein",
                    price: "€4.50",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 2, 14, 18",
                    inhalt: "0,25L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Süße Weißwein Schorle",
                    price: "€4.50",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "0,25L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Wildberry Elixir Martini",
                    price: "€4.50",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "0,25L",
                    alk: "Alkoholisch",
                },
            ],
        },
        // Shots
        {
            name: "Shots",
            imgSrc: "Images/ShotsThumbnail.png",
            subheading: "",
            items: [
                {
                    name: "Vodka",
                    price: "€3.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "2cl",
                    alk: "Alkoholisch",
                },
                {
                    name: "Whiskey",
                    price: "€3.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "2cl",
                    alk: "Alkoholisch",
                },
                {
                    name: "Jägermeister",
                    price: "€3.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "2cl",
                    alk: "Alkoholisch",
                },
                {
                    name: "Tequila",
                    price: "€3.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "2cl",
                    alk: "Alkoholisch",
                },
                {
                    name: "Ficken",
                    price: "€3.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "2cl",
                    alk: "Alkoholisch",
                },
                {
                    name: "Bombay Gin",
                    price: "€3.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "2cl",
                    alk: "Alkoholisch",
                },
                {
                    name: "Süßer Hausmix",
                    price: "€3.00",
                    zutaten: "",
                    zusatzstoffe: "Melonen Brandy, Vodka",
                    inhalt: "2cl",
                    alk: "Alkoholisch",
                },
            ],
        },
        // Flaschen
        {
            name: "Flaschen",
            imgSrc: "Images/FlaschenThumbnail.png",
            subheading: "",
            items: [
                {
                    name: "Unser Flaschenpaket",
                    price: "€100.00",
                    zutaten: "",
                    zusatzstoffe: "1 Belvedere, 1 Shisha und 1 Nachos",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Smirnoff",
                    price: "€39.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "1,00L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Absolut Vodka",
                    price: "€49.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "0,75L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Belvedere",
                    price: "€99.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "0,75L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Jack Daniels",
                    price: "€79.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "0,75L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Chivas",
                    price: "€79.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "0,7L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Hennessy",
                    price: "€89.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "0,7L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Moët",
                    price: "€99.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "0,75L",
                    alk: "Alkoholisch",
                },
                {
                    name: "Remi Martin",
                    price: "€99.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "0,7L",
                    alk: "Alkoholisch",
                },
            ],
        },
        // Sweet Shakes
        {
            name: "Sweet Shakes",
            imgSrc: "Images/SweetShakesThumbnail.png",
            subheading: "Süße Milkshakes",
            items: [
                {
                    name: "Snickers",
                    price: "€5.50",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 12",
                    inhalt: "0,25L",
                    alk: "",
                },

                {
                    name: "Oreo",
                    price: "€5.50",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 12",
                    inhalt: "0,25L",
                    alk: "",
                },
            ],
        },
        // Snacks/Food
        {
            name: "Snacks/Food",
            imgSrc: "Images/SnacksNFoodThumbnail.png",
            subheading: "",
            items: [
                {
                    name: "Toast (Sucuk/Käse)",
                    price: "€5.50",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 2, 9, 11, 12, 15",
                    inhalt: "",
                    alk: "",
                },

                {
                    name: "Nachos",
                    price: "€4.50",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 2, 12",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Nussmix",
                    price: "€4.00",
                    zutaten: "",
                    zusatzstoffe: "",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Popcorn",
                    price: "€4.00",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 7, 11, 15",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Pizza Margherita",
                    price: "€7.50",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 2, 9, 11, 12, 15",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "Pizza Sucuk",
                    price: "€8.50",
                    zutaten: "",
                    zusatzstoffe: "Zusatzstoffe: 2, 9, 11, 12, 15",
                    inhalt: "",
                    alk: "",
                },
            ],
        },
        // Zusatzstoffe
        {
            name: "Zusatzstoffe",
            imgSrc: "Images/ZusatzstoffeThumbnail.png",
            subheading: "Enthaltene Zusatzstoffe",
            items: [
                {
                    name: "1",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Koffeinhaltig",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "2",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Mit Farbstoff",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "3",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Chininhaltig",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "4",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Mit Taurin",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "5",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Mit Schwärzungsmitteln",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "6",
                    price: "",
                    zusatzstoffe: "Mit Phosphat",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "7",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Mit Süßungsmitteln",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "8",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Mit Antioxidationsmitteln",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "9",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Mit Konservierungsstoffen",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "10",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Enthält eine Phenylalaninquelle",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "11",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Mit Geschmacksverstärkern",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "12",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Mit Milcheiweiß",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "13",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Gewachst",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "14",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Mit Säurungsmitteln",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "15",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Mit Stabilisatoren",
                    inhalt: "",
                    alk: "",
                },
                {
                    name: "16",
                    price: "",
                    zutaten: "",
                    zusatzstoffe: "Geschwefelt",
                    inhalt: "",
                    alk: "",
                },
            ],
        },
        // Add more category objects here
    ];

    // GENERATING MENU CATEGORIES AND ITEMS
    function generateCategories() {
        const categoriesContainer = document.querySelector(".categories");
        const categoryItemsContainer =
            document.querySelector(".category-items");
        let activeCategoryIndex = 0; // Keep track of the active category index

        // Generate category elements
        categoriesData.forEach((category, index) => {
            const categoryElement = document.createElement("div");
            categoryElement.classList.add("category");
            categoryElement.innerHTML = `
          <img src="${category.imgSrc}" alt="" class="category-img" />
          <p class="category-items-heading">${category.name}</p>
        `;

            categoryElement.addEventListener("click", () => {
                // If the clicked category is the active one, do nothing
                if (activeCategoryIndex === index) return;

                // Remove active class from the previous active category
                const activeCategory =
                    categoriesContainer.children[activeCategoryIndex];
                activeCategory.classList.remove("active");

                // Add active class to the clicked category
                categoryElement.classList.add("active");
                activeCategoryIndex = index; // Update the active category index

                // Generate and display the items for the clicked category
                generateCategoryItems(category);
            });

            // Add the category element to the container
            categoriesContainer.appendChild(categoryElement);

            // Automatically select the first category
            if (index === activeCategoryIndex) {
                categoryElement.classList.add("active");
                generateCategoryItems(category);
            }
        });

        function generateCategoryItems(category) {
            // Clear previous items
            categoryItemsContainer.innerHTML = "";

            const categoryHeadingContainer = document.createElement("div");
            categoryHeadingContainer.classList.add(
                "category-items-heading-container"
            );
            categoryItemsContainer.appendChild(categoryHeadingContainer);

            // Generate category heading
            const categoryHeadingElement = document.createElement("h2");
            categoryHeadingElement.classList.add(
                "category-items-heading",
                "larger-heading"
            );
            categoryHeadingElement.textContent = category.name;
            categoryHeadingContainer.appendChild(categoryHeadingElement);

            // Generate category subheading
            const subheadingElement = document.createElement("p");
            subheadingElement.classList.add("category-items-subheading");
            subheadingElement.textContent = category.subheading;
            categoryHeadingContainer.appendChild(subheadingElement);

            const lowerSubheadingElement = document.createElement("p");
            lowerSubheadingElement.classList.add("category-items-subheading");
            lowerSubheadingElement.textContent = category.lowerSubheading;
            categoryHeadingContainer.appendChild(lowerSubheadingElement);

            // const exceptSubheadingElement = document.createElement("p");
            // exceptSubheadingElement.classList.add(
            //     "category-items-subheading",
            //     "lower-subheading"
            // );
            // exceptSubheadingElement.textContent = category.exceptSubheading;
            // categoryItemsContainer.appendChild(exceptSubheadingElement);

            // Generate item elements
            category.items.forEach((item) => {
                const itemElement = document.createElement("div");
                itemElement.classList.add("category-item");
                itemElement.innerHTML = `
            <div class="item-container">
              <h3 class="category-item-name">${item.name}</h3>
              <p class="category-item-price">${item.price}</p>
            </div>
            <div class="info-container">
            <p class="inhalt">${item.inhalt} </p> <!-- Display the "Inhalt: 0,33L" here -->
            <p class="alk">${item.alk} </p>
            </div>
            <p class="zutaten">${item.zutaten}</p>
            <p class="zusatzstoffe">${item.zusatzstoffe} </p>
          `;

                categoryItemsContainer.appendChild(itemElement);
            });
        }
    }

    generateCategories();
});

// BURGER MENU ON MENU SITE
const menuToggle = document.querySelector(".menu-toggle");
const menuModal = document.querySelector(".menu-modal");
const closeModal = document.querySelector(".close-modal");
const modalBackdrop = document.querySelector(".modal-backdrop");

function openMenu() {
    menuModal.classList.add("open");
    modalBackdrop.style.opacity = "1";
    modalBackdrop.style.pointerEvents = "auto";
    document.body.style.overflow = "hidden";

    document.addEventListener("touchmove", preventScroll);
}

function closeMenu() {
    menuModal.classList.remove("open");
    modalBackdrop.style.opacity = "0";
    modalBackdrop.style.pointerEvents = "none";
    document.body.style.overflow = "";
    document.removeEventListener("touchmove", preventScroll);
}

function preventScroll(event) {
    event.preventDefault();
}

menuToggle.addEventListener("click", openMenu);
closeModal.addEventListener("click", closeMenu);
modalBackdrop.addEventListener("click", closeMenu);
