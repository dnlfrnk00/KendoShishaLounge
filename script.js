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
            subheading: "Eisschlauch gibt's für nur 2.00€ extra",
            items: [
                {
                    name: "Doppel Apfel",
                    price: "€15.00",
                    zusatzstoffe: "",
                    inhalt: "",
                },
                {
                    name: "Traube Minze",
                    price: "€15.00",
                    zusatzstoffe: "",
                    inhalt: "",
                },
                {
                    name: "Blaubeere Minze",
                    price: "€15.00",
                    zusatzstoffe: "",
                    inhalt: "",
                },
                {
                    name: "Orange Minze",
                    price: "€15.00",
                    zusatzstoffe: "",
                    inhalt: "",
                },
                {
                    name: "Falim",
                    price: "€15.00",
                    zusatzstoffe: "",
                    inhalt: "",
                },
                {
                    name: "Love 66",
                    price: "€15.00",
                    zusatzstoffe: "",
                    inhalt: "",
                },
                {
                    name: "Beerenmix",
                    price: "€15.00",
                    zusatzstoffe: "Im Wechsel",
                    inhalt: "",
                },
                {
                    name: "Wassermelone",
                    price: "€15.00",
                    zusatzstoffe: "",
                    inhalt: "",
                },
                {
                    name: "Zitrone",
                    price: "€15.00",
                    zusatzstoffe: "",
                    inhalt: "",
                },
                {
                    name: "Ice Kaktus",
                    price: "€15.00",
                    zusatzstoffe: "",
                    inhalt: "",
                },
                {
                    name: "Ice Bonbon",
                    price: "€15.00",
                    zusatzstoffe: "",
                    inhalt: "",
                },
                {
                    name: "Ananas Grapefruit",
                    price: "€15.00",
                    zusatzstoffe: "",
                    inhalt: "",
                },
                {
                    name: "Okolum",
                    price: "€15.00",
                    zusatzstoffe: "",
                    inhalt: "",
                },

                {
                    name: "Haus Mix",
                    price: "€16.00",
                    zusatzstoffe: "",
                    inhalt: "",
                },
                {
                    name: "Mocca Pistazie Vanille",
                    price: "€16.00",
                    zusatzstoffe: "Mit Milch und Kaffeebohnen",
                    inhalt: "",
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
                    price: "€4.20",
                    zusatzstoffe: "Still, Medium",
                    inhalt: "Inhalt: 0,33L",
                },
                {
                    name: "Coca Cola",
                    price: "€4.20",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 14",
                    inhalt: "Inhalt: 0,33L",
                },
                {
                    name: "Coca Cola Zero",
                    price: "€4.20",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 15",
                    inhalt: "Inhalt: 0,33L",
                },
                {
                    name: "Fanta",
                    price: "€4.20",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 16",
                    inhalt: "Inhalt: 0,33L",
                },
                {
                    name: "Sprite",
                    price: "€4.20",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 17",
                    inhalt: "Inhalt: 0,33L",
                },
                {
                    name: "Spezi Energy",
                    price: "€4.20",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 18",
                    inhalt: "Inhalt: 0,33L",
                },
                {
                    name: "Paulaner Spezi",
                    price: "€4.20",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 19",
                    inhalt: "Inhalt: 0,5L",
                },
                {
                    name: "Red Bull Classic",
                    price: "€4.20",
                    zusatzstoffe: "Zusatzstoffe: 1, 4, 10",
                    inhalt: "Inhalt: 0,25L",
                },
                {
                    name: "Red Bull Zero",
                    price: "€4.20",
                    zusatzstoffe: "Zusatzstoffe: 1, 4, 10",
                    inhalt: "Inhalt: 0,25L",
                },
                {
                    name: "Red Bull White Cocos",
                    price: "€4.20",
                    zusatzstoffe: "Zusatzstoffe: 1, 4, 10",
                    inhalt: "Inhalt: 0,25L",
                },
                {
                    name: "Eistee",
                    price: "€4.20",
                    zusatzstoffe: "Zusatzstoffe: 2, 7",
                    inhalt: "Inhalt: 0,33L",
                },
                {
                    name: "Säfte",
                    price: "€4.20",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,33L",
                },
                {
                    name: "Saftschorle",
                    price: "€4.20",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,33L",
                },
                {
                    name: "Aloe Vera Drink",
                    price: "€4.20",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,5L",
                },
                {
                    name: "Powerade Blue",
                    price: "€4.20",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,5L",
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
                    name: "Kaffee",
                    price: "€3.50",
                    zusatzstoffe: "Zusatzstoffe: 1",
                    inhalt: "",
                },
                {
                    name: "Cappuccino",
                    price: "€3.90",
                    zusatzstoffe: "Zusatzstoffe: 1, 12",
                    inhalt: "",
                },
                {
                    name: "Latte Macchiato",
                    price: "€4.20",
                    zusatzstoffe: "Zusatzstoffe: 1, 12",
                    inhalt: "",
                },
                {
                    name: "Tee",
                    price: "€3.50",
                    zusatzstoffe: "",
                    inhalt: "",
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
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,5L",
                },
                {
                    name: "Desperados",
                    price: "€4.50",
                    zusatzstoffe: "Zusatzstoffe: 8",
                    inhalt: "Inhalt: 0,33L",
                },
                {
                    name: "Franziskaner Weizen",
                    price: "€4.20",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,5L",
                },
                {
                    name: "Cola Weizen",
                    price: "€4.50",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 7, 9, 10, 14",
                    inhalt: "Inhalt: 0,5L",
                },
                {
                    name: "Radler",
                    price: "€4.50",
                    zusatzstoffe: "Zusatzstoffe: 7",
                    inhalt: "Inhalt: 0,5L",
                },
            ],
        },
        {
            name: "Longdrinks",
            imgSrc: "Images/LongdrinksThumbnail.png",
            subheading: "Hausgemixte Longdrinks",
            items: [
                {
                    name: "Vodka Bull",
                    price: "€7.00",
                    zusatzstoffe: "1, 4, 10",
                    inhalt: "Inhalt: 4cl",
                },
                {
                    name: "Vodka Saft",
                    price: "€7.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 4cl",
                },
                {
                    name: "Jack Cola",
                    price: "€7.00",
                    zusatzstoffe: "1, 2, 9, 14",
                    inhalt: "Inhalt: 4cl",
                },
                {
                    name: "Jäger Bull",
                    price: "€7.00",
                    zusatzstoffe: "1, 4, 10",
                    inhalt: "Inhalt: 4cl",
                },
                {
                    name: "Gin Tonic",
                    price: "€7.00",
                    zusatzstoffe: "1, 4, 10",
                    inhalt: "Inhalt: 4cl",
                },
                {
                    name: "Raki",
                    price: "€7.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 4cl",
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
                    zusatzstoffe: "Alkoholisch",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Sex on the Beach",
                    price: "€8.50",
                    zusatzstoffe: "Alkoholisch",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Mojito",
                    price: "€8.50",
                    zusatzstoffe: "Alkoholisch",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Cuba Libre",
                    price: "€8.50",
                    zusatzstoffe: "Alkoholisch",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Pina Colada",
                    price: "€8.50",
                    zusatzstoffe: "Alkoholisch",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Long Island Ice Tea",
                    price: "€8.50",
                    zusatzstoffe: "Alkoholisch",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Long Island Red Bull",
                    price: "€8.50",
                    zusatzstoffe: "Alkoholisch",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Long Island Cola",
                    price: "€8.50",
                    zusatzstoffe: "Alkoholisch",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Swimming Pool",
                    price: "€8.50",
                    zusatzstoffe: "Alkoholisch",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Sweet Bitch",
                    price: "€8.50",
                    zusatzstoffe: "Alkoholisch",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Caipirinha",
                    price: "€8.50",
                    zusatzstoffe: "Alkoholisch",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Coconut Kiss",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholfrei",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Kiba",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholfrei",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Summer",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholfrei",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Holunder Twist Virgin",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholfrei",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Erdbeer Tropic",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholfrei",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Virgin Mojito",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholfrei",
                    inhalt: "Inhalt: 0,4L",
                },
                {
                    name: "Red Fly Orange",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholfrei",
                    inhalt: "Inhalt: 0,4L",
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
                    zusatzstoffe: "Zusatzstoffe: 16",
                    inhalt: "Inhalt: 0,25L",
                },
                {
                    name: "Aperol Spritz",
                    price: "€4.50",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,25L",
                },
                {
                    name: "Rotwein",
                    price: "€4.50",
                    zusatzstoffe: "Zusatzstoffe: 2, 14, 18",
                    inhalt: "Inhalt: 0,25L",
                },
                {
                    name: "Weißwein",
                    price: "€4.50",
                    zusatzstoffe: "Zusatzstoffe: 2, 14, 18",
                    inhalt: "Inhalt: 0,25L",
                },
                {
                    name: "Süße Weiswein Schorle",
                    price: "€4.50",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,25L",
                },
                {
                    name: "Wildberry Elixir Martini",
                    price: "€4.50",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,25L",
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
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 2cl",
                },
                {
                    name: "Whiskey",
                    price: "€3.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 2cl",
                },
                {
                    name: "Jägermeister",
                    price: "€3.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 2cl",
                },
                {
                    name: "Tequila",
                    price: "€3.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 2cl",
                },
                {
                    name: "Ficken",
                    price: "€3.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 2cl",
                },
                {
                    name: "Bombay Gin",
                    price: "€3.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 2cl",
                },
                {
                    name: "Cachaca",
                    price: "€3.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 2cl",
                },
                {
                    name: "Süßer Hausmix",
                    price: "€3.00",
                    zusatzstoffe: "Melonen Brandy, Vodka",
                    inhalt: "Inhalt: 2cl",
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
                    zusatzstoffe: "1 Belvedere, 1 Shisha und 1 Nachos",
                    inhalt: "",
                },
                {
                    name: "Smirnoff",
                    price: "€39.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 1,00L",
                },
                {
                    name: "Absolut Vodka",
                    price: "49.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,75L",
                },
                {
                    name: "Belvedere",
                    price: "€99.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,75L",
                },
                {
                    name: "Jack Daniels",
                    price: "€79.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,75L",
                },
                {
                    name: "Chivas",
                    price: "€79.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,7L",
                },
                {
                    name: "Hennessy",
                    price: "€89.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,7L",
                },
                {
                    name: "Moët",
                    price: "€99.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,75L",
                },
                {
                    name: "Remi Martin",
                    price: "€99.00",
                    zusatzstoffe: "",
                    inhalt: "Inhalt: 0,7L",
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
                    zusatzstoffe: "Zusatzstoffe: 12",
                    inhalt: "Inhalt: 0,25L",
                },

                {
                    name: "Oreo",
                    price: "€5.50",
                    zusatzstoffe: "Zusatzstoffe: 12",
                    inhalt: "Inhalt: 0,25L",
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
                    zusatzstoffe: "Zusatzstoffe: 12",
                    inhalt: "",
                },

                {
                    name: "Nachos",
                    price: "€4.50",
                    zusatzstoffe: "Zusatzstoffe: 12",
                    inhalt: "",
                },
                {
                    name: "Nussmix",
                    price: "€4.00",
                    zusatzstoffe: "",
                    inhalt: "",
                },
                {
                    name: "Popcorn",
                    price: "€4.00",
                    zusatzstoffe: "",
                    inhalt: "",
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
                    zusatzstoffe: "Koffeinhaltig",
                    inhalt: "",
                },
                {
                    name: "2",
                    price: "",
                    zusatzstoffe: "Mit Farbstoff",
                    inhalt: "",
                },
                {
                    name: "3",
                    price: "",
                    zusatzstoffe: "Chininhaltig",
                    inhalt: "",
                },
                {
                    name: "4",
                    price: "",
                    zusatzstoffe: "Mit Taurin",
                    inhalt: "",
                },
                {
                    name: "5",
                    price: "",
                    zusatzstoffe: "Mit Schwärzungsmitteln",
                    inhalt: "",
                },
                {
                    name: "6",
                    price: "",
                    zusatzstoffe: "Mit Phosphat",
                    inhalt: "",
                },
                {
                    name: "7",
                    price: "",
                    zusatzstoffe: "Mit Süßungsmitteln",
                    inhalt: "",
                },
                {
                    name: "8",
                    price: "",
                    zusatzstoffe: "Mit Antioxidationsmitteln",
                    inhalt: "",
                },
                {
                    name: "9",
                    price: "",
                    zusatzstoffe: "Mit Konservierungsstoffen",
                    inhalt: "",
                },
                {
                    name: "10",
                    price: "",
                    zusatzstoffe: "Enthält eine Phenylalaninquelle",
                    inhalt: "",
                },
                {
                    name: "11",
                    price: "",
                    zusatzstoffe: "Mit Geschmacksverstärkern",
                    inhalt: "",
                },
                {
                    name: "12",
                    price: "",
                    zusatzstoffe: "Mit Milcheiweiß",
                    inhalt: "",
                },
                {
                    name: "13",
                    price: "",
                    zusatzstoffe: "Gewachst",
                    inhalt: "",
                },
                {
                    name: "14",
                    price: "",
                    zusatzstoffe: "Mit Säurungsmitteln",
                    inhalt: "",
                },
                {
                    name: "15",
                    price: "",
                    zusatzstoffe: "Mit Stabilisatoren",
                    inhalt: "",
                },
                {
                    name: "16",
                    price: "",
                    zusatzstoffe: "Geschwefelt",
                    inhalt: "",
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

            // Generate category heading
            const categoryHeadingElement = document.createElement("h2");
            categoryHeadingElement.classList.add(
                "category-items-heading",
                "larger-heading"
            );
            categoryHeadingElement.textContent = category.name;
            categoryItemsContainer.appendChild(categoryHeadingElement);

            // Generate category subheading
            const subheadingElement = document.createElement("p");
            subheadingElement.classList.add("category-items-subheading");
            subheadingElement.textContent = category.subheading;
            categoryItemsContainer.appendChild(subheadingElement);

            // Generate item elements
            category.items.forEach((item) => {
                const itemElement = document.createElement("div");
                itemElement.classList.add("category-item");
                itemElement.innerHTML = `
            <div class="item-container">
              <h3 class="category-item-name">${item.name}</h3>
              <p class="category-item-price">${item.price}</p>
            </div>
            <p class="zusatzstoffe">${item.zusatzstoffe}</p>
            <p class="inhalt">${item.inhalt}</p> <!-- Display the "Inhalt: 0,33L" here -->
            </div>
          `;

                categoryItemsContainer.appendChild(itemElement);
            });
        }
    }

    generateCategories();
});

// const menuToggle = document.querySelector(".menu-toggle");
// const menuModal = document.querySelector(".menu-modal");
// const closeModal = document.querySelector(".close-modal");
// const modalBackdrop = document.querySelector(".modal-backdrop");

// menuToggle.addEventListener("click", () => {
//     menuModal.classList.add("open");
//     modalBackdrop.style.opacity = "1";
//     modalBackdrop.style.pointerEvents = "auto";
//     document.body.style.overflow = "hidden"; // Disable scrolling
// });

// closeModal.addEventListener("click", () => {
//     menuModal.classList.remove("open");
//     modalBackdrop.style.opacity = "0";
//     modalBackdrop.style.pointerEvents = "none";
//     document.body.style.overflow = ""; // Enable scrolling
// });

// modalBackdrop.addEventListener("click", () => {
//     menuModal.classList.remove("open");
//     modalBackdrop.style.opacity = "0";
//     modalBackdrop.style.pointerEvents = "none";
//     document.body.style.overflow = ""; // Enable scrolling
// });

// ... Your existing code ...

const menuToggle = document.querySelector(".menu-toggle");
const menuModal = document.querySelector(".menu-modal");
const closeModal = document.querySelector(".close-modal");
const modalBackdrop = document.querySelector(".modal-backdrop");

menuToggle.addEventListener("click", () => {
    menuModal.classList.add("open");
    modalBackdrop.style.opacity = "1";
    modalBackdrop.style.pointerEvents = "auto";
    document.body.style.overflow = "hidden"; // Disable scrolling on desktop
    document.addEventListener("touchmove", preventScroll); // Disable scrolling on mobile
});

closeModal.addEventListener("click", () => {
    menuModal.classList.remove("open");
    modalBackdrop.style.opacity = "0";
    modalBackdrop.style.pointerEvents = "none";
    document.body.style.overflow = ""; // Enable scrolling on desktop
    document.removeEventListener("touchmove", preventScroll); // Enable scrolling on mobile
});

modalBackdrop.addEventListener("click", () => {
    menuModal.classList.remove("open");
    modalBackdrop.style.opacity = "0";
    modalBackdrop.style.pointerEvents = "none";
    document.body.style.overflow = ""; // Enable scrolling on desktop
    document.removeEventListener("touchmove", preventScroll); // Enable scrolling on mobile
});

function preventScroll(event) {
    event.preventDefault();
}
