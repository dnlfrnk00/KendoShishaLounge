export interface MenuItem {
    name: string;
    price: string;
    zutaten: string;
    zusatzstoffe: string;
    inhalt: string;
    alk: string;
}

export interface MenuExtra {
    label: string;
    price: string;
    oldPrice?: string;
}

export interface SubCategory {
    name: string;
    imgSrc: string;
    subheading: string;
    lowerSubheading?: string;
    extras?: MenuExtra[];
    items: MenuItem[];
}

export interface MainCategory {
    id: string;
    label: string;
    subCategories: SubCategory[];
}
