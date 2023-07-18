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
                    name: "Traube Minze",
                    price: "€15.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Blaubeere Minze",
                    price: "€15.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Orange Minze",
                    price: "€15.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Doppel Apfel",
                    price: "€15.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Falim",
                    price: "€15.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Love 66",
                    price: "€15.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Beerenmix",
                    price: "€15.00",
                    zusatzstoffe: "Im Wechsel",
                },
                {
                    name: "Zitrone",
                    price: "€15.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Ice Kaktus",
                    price: "€15.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Ice Bonbon",
                    price: "€15.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Ananas Grapefruit",
                    price: "€15.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Wassermelone Zitrone",
                    price: "€15.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Okolum",
                    price: "€15.00",
                    zusatzstoffe: "",
                },

                {
                    name: "Haus Mix",
                    price: "€15.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Mocca Pistazie Vanille",
                    price: "€15.00",
                    zusatzstoffe: "Mit Milch und Kaffeebohnen",
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
                    zusatzstoffe: "Still",
                },
                {
                    name: "Wasser",
                    price: "€3.90",
                    zusatzstoffe: "Medium",
                },
                {
                    name: "Coca Cola",
                    price: "€3.90",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 14",
                },
                {
                    name: "Coca Cola Zero",
                    price: "€3.90",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 15",
                },
                {
                    name: "Fanta",
                    price: "€3.90",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 16",
                },
                {
                    name: "Sprite",
                    price: "€3.90",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 17",
                },
                {
                    name: "Spezi Energy",
                    price: "€3.90",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 18",
                },
                {
                    name: "Paulaner Spezi",
                    price: "€3.90",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 3, 7, 9, 10, 19",
                },
                {
                    name: "Red Bull Classic",
                    price: "€3.90",
                    zusatzstoffe: "Zusatzstoffe: 1, 4, 10",
                },
                {
                    name: "Red Bull Zero",
                    price: "€3.90",
                    zusatzstoffe: "Zusatzstoffe: 1, 4, 10",
                },
                {
                    name: "Red Bull White Cocos",
                    price: "€3.90",
                    zusatzstoffe: "Zusatzstoffe: 1, 4, 10",
                },
                {
                    name: "Eistee",
                    price: "€3.90",
                    zusatzstoffe: "Zusatzstoffe: 2, 7",
                },
                {
                    name: "Säfte",
                    price: "€3.90",
                    zusatzstoffe: "",
                },
                {
                    name: "Saftschorle",
                    price: "€4.20",
                    zusatzstoffe: "",
                },
                {
                    name: "Powerade Blue",
                    price: "€3.80",
                    zusatzstoffe: "",
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
                },
                {
                    name: "Cappuccino",
                    price: "€3.90",
                    zusatzstoffe: "Zusatzstoffe: 1, 12",
                },
                {
                    name: "Latte Macchiato",
                    price: "€4.20",
                    zusatzstoffe: "Zusatzstoffe: 1, 12",
                },
                {
                    name: "Tee",
                    price: "€3.50",
                    zusatzstoffe: "",
                },
            ],
        },
        // Bier
        {
            name: "Bier",
            imgSrc: "Images/BierThumbnail.png",
            subheading: "Bier.......",
            items: [
                {
                    name: "Augustiner Helles",
                    price: "€3.90",
                    zusatzstoffe: "",
                },
                {
                    name: "Desperados",
                    price: "€4.20",
                    zusatzstoffe: "Zusatzstoffe: 8",
                },
                {
                    name: "Franziskaner Weizen",
                    price: "€3.90",
                    zusatzstoffe: "",
                },
                {
                    name: "Cola Weizen",
                    price: "€4.20",
                    zusatzstoffe: "Zusatzstoffe: 1, 2, 7, 9, 10, 14",
                },
                {
                    name: "Radler",
                    price: "€3.90",
                    zusatzstoffe: "Zusatzstoffe: 7",
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
                },
                {
                    name: "Vodka Saft",
                    price: "€7.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Jack Cola",
                    price: "€7.00",
                    zusatzstoffe: "1, 2, 9, 14",
                },
                {
                    name: "Jäger Bull",
                    price: "€7.00",
                    zusatzstoffe: "1, 4, 10",
                },
                {
                    name: "Gin Tonic",
                    price: "€7.00",
                    zusatzstoffe: "1, 4, 10",
                },
                {
                    name: "Raki",
                    price: "€7.00",
                    zusatzstoffe: "",
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
                    price: "€7.90",
                    zusatzstoffe: "Alkoholisch",
                },
                {
                    name: "Sex on the Beach",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholisch",
                },
                {
                    name: "Mojito",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholisch",
                },
                {
                    name: "Cuba Libre",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholisch",
                },
                {
                    name: "Pina Colada",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholisch",
                },
                {
                    name: "Long Island Ice Tea",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholisch",
                },
                {
                    name: "Long Island Red Bull",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholisch",
                },
                {
                    name: "Long Island Cola",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholisch",
                },
                {
                    name: "Swimming Pool",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholisch",
                },
                {
                    name: "Sweet Bitch",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholisch",
                },
                {
                    name: "Caipirinha",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholisch",
                },
                {
                    name: "Coconut Kiss",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholfrei",
                },
                {
                    name: "Kiba",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholfrei",
                },
                {
                    name: "Summer",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholfrei",
                },
                {
                    name: "Holunder Twist Virgin",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholfrei",
                },
                {
                    name: "Erdbeer Tropic",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholfrei",
                },
                {
                    name: "Virgin Mojito",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholfrei",
                },
                {
                    name: "Red Fly Orange",
                    price: "€7.90",
                    zusatzstoffe: "Alkoholfrei",
                },
            ],
        },
        // Chill & Drink
        {
            name: "Chill & Drink",
            imgSrc: "Images/ChilNDrinkThumbnail.png",
            subheading: "Cocktails mit und ohne Alkohol",
            items: [
                {
                    name: "Hugo",
                    price: "€4.50",
                    zusatzstoffe: "Zusatzstoffe: 16",
                },
                {
                    name: "Aperol Spritz",
                    price: "€4.50",
                    zusatzstoffe: "",
                },
                {
                    name: "Rotwein",
                    price: "€4.50",
                    zusatzstoffe: "Zusatzstoffe: 2, 14, 18",
                },
                {
                    name: "Weißwein",
                    price: "€4.50",
                    zusatzstoffe: "Zusatzstoffe: 2, 14, 18",
                },
                {
                    name: "Süße Weiswein Schorle",
                    price: "€4.50",
                    zusatzstoffe: "",
                },
                {
                    name: "Wildberry Elixir Martini",
                    price: "€4.50",
                    zusatzstoffe: "",
                },
            ],
        },
        // Shots
        {
            name: "Shots",
            imgSrc: "Images/ShotsThumbnail.png",
            subheading: "Shots",
            items: [
                {
                    name: "Vodka",
                    price: "€3.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Whiskey",
                    price: "€3.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Jägermeister",
                    price: "€3.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Tequila",
                    price: "€3.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Ficken",
                    price: "€3.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Bombay Gin",
                    price: "€3.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Cachaca",
                    price: "€3.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Süßer Hausmix",
                    price: "€3.00",
                    zusatzstoffe: "Melonen Brandy, Vodka",
                },
            ],
        },
        // Flaschen
        {
            name: "Flaschen",
            imgSrc: "Images/FlaschenThumbnail.png",
            subheading: "Flaschen",
            items: [
                {
                    name: "Smirnoff",
                    price: "€39.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Absolut Vodka",
                    price: "49.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Belvedere",
                    price: "€99.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Jack Daniels",
                    price: "€79.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Chivas",
                    price: "€79.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Hennessy",
                    price: "€89.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Moët",
                    price: "€99.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Remi Martin",
                    price: "€99.00",
                    zusatzstoffe: "",
                },
            ],
        },
        // Sweet Shakes
        {
            name: "Sweet Shakes",
            imgSrc: "Images/SweetShakesThumbnail.png",
            subheading: "Shots",
            items: [
                {
                    name: "Snickers",
                    price: "€5.50",
                    zusatzstoffe: "Zusatzstoffe: 12",
                },

                {
                    name: "Oreo",
                    price: "€5.50",
                    zusatzstoffe: "Zusatzstoffe: 12",
                },
            ],
        },
        // Snacks/Food
        {
            name: "Snacks/Food",
            imgSrc: "Images/SnacksNFoodThumbnail.png",
            subheading: "Essen",
            items: [
                {
                    name: "Toast (Sucuk/Käse)",
                    price: "€5.50",
                    zusatzstoffe: "Zusatzstoffe: 12",
                },

                {
                    name: "Nachos",
                    price: "€4.50",
                    zusatzstoffe: "Zusatzstoffe: 12",
                },
                {
                    name: "Nussmix",
                    price: "€4.00",
                    zusatzstoffe: "",
                },
                {
                    name: "Popcorn",
                    price: "€4.00",
                    zusatzstoffe: "",
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
                },
                {
                    name: "2",
                    price: "",
                    zusatzstoffe: "Mit Farbstoff",
                },
                {
                    name: "3",
                    price: "",
                    zusatzstoffe: "Chininhaltig",
                },
                {
                    name: "4",
                    price: "",
                    zusatzstoffe: "Mit Taurin",
                },
                {
                    name: "5",
                    price: "",
                    zusatzstoffe: "Mit Schwärzungsmitteln",
                },
                {
                    name: "6",
                    price: "",
                    zusatzstoffe: "Mit Phosphat",
                },
                {
                    name: "7",
                    price: "",
                    zusatzstoffe: "Mit Süßungsmitteln",
                },
                {
                    name: "8",
                    price: "",
                    zusatzstoffe: "Mit Antioxidationsmitteln",
                },
                {
                    name: "9",
                    price: "",
                    zusatzstoffe: "Mit Konservierungsstoffen",
                },
                {
                    name: "10",
                    price: "",
                    zusatzstoffe: "Enthält eine Phenylalaninquelle",
                },
                {
                    name: "11",
                    price: "",
                    zusatzstoffe: "Mit Geschmacksverstärkern",
                },
                {
                    name: "12",
                    price: "",
                    zusatzstoffe: "Mit Milcheiweiß",
                },
                {
                    name: "13",
                    price: "",
                    zusatzstoffe: "Gewachst",
                },
                {
                    name: "14",
                    price: "",
                    zusatzstoffe: "Mit Säurungsmitteln",
                },
                {
                    name: "15",
                    price: "",
                    zusatzstoffe: "Mit Stabilisatoren",
                },
                {
                    name: "16",
                    price: "",
                    zusatzstoffe: "Geschwefelt",
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
