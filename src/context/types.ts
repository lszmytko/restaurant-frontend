import { dishes } from "../data/data";

export interface globalContextInterface {
  isAddedModalOpen: boolean;
  setIsAddedModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addToBasket: (data: basketData) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterDishes;
  filterCriteria;
  setFilterCriteria;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  dishesDisplayed;
  setDishesDisplayed;
  isBasketOpen: boolean;
  setIsBasketOpen: React.Dispatch<React.SetStateAction<boolean>>;
  card: cardData | [];
  setCard: (value: any) => void;
  removeFromBasket: (e: React.SyntheticEvent<HTMLElement>) => void;
  orderedCard: cardData | [];
  setOrderedCard: (value: any) => void;
  userInfo: userInfoType;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoType>>;
}

export interface LogRegContextType {
  showLoginModal: boolean;
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  logRegOption: {
    choice: string;
  };
  setLogRegOption: React.Dispatch<
    React.SetStateAction<{
      choice: string;
    }>
  >;
  handleBackToChoice: (e: any) => void;
}

export type basketData = {
  image: string;
  price: number;
  name: string;
  quantity: number;
  isFried?: boolean;
  cuisine?: string;
};

export type cardData = basketData[];

export type filterCriteriaType = {
  price: number;
  isFried: boolean | "all";
  cuisine: string[];
};

export type userInfoType = {
  userId: string;
  isLogged: boolean;
  name: string;
  lastName?: string;
  email: string;
  password?: string;
  flatNumber: string;
  street?: string;
  phone: string;
  accessToken?: { maxAge: number; token: string };
};

export type dishesType = typeof dishes;
