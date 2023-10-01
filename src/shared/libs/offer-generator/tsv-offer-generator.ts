import {OfferGenerator} from './offer-generator.interface.js';
import {MockServerData} from '../../types/index.js';
import {getRandomItem, getRandomItems, generateRandomValue} from '../../helpers/index.js';

const AMOUNT_OF_PLACE_IMAGES = 6;

enum OfferRatings {
  Min = 1,
  Max = 5,
}

enum AvailablePlaceRooms {
  Min = 1,
  Max = 8,
}

enum PlaceGuestsAmount {
  Min = 1,
  Max = 10,
}

enum PlaceRentPrices {
  Min = 100,
  Max = 100000,
}

export class TSVOfferGenerator implements OfferGenerator {
  constructor(
    private readonly mockData: MockServerData,
  ) {}

  public generate(): string {
    const title = getRandomItem(this.mockData.titles);
    const description = getRandomItem(this.mockData.descriptions);
    const date = new Date().toISOString();
    const city = getRandomItem(this.mockData.cities);
    const previewImage = getRandomItem(this.mockData.previewImages);
    const placeImages = getRandomItems(this.mockData.placeImages).join(';');
    const isPremium = Boolean(generateRandomValue(0, 1));
    const isFavorite = Boolean(generateRandomValue(0, 1));
    const rating = generateRandomValue(OfferRatings.Min, OfferRatings.Max);
    const houseType = getRandomItem(this.mockData.housesTypes);
    const roomsAmount = generateRandomValue(AvailablePlaceRooms.Min, AvailablePlaceRooms.Max);
    const guestsAmount = generateRandomValue(PlaceGuestsAmount.Min, PlaceGuestsAmount.Max);
    const price = generateRandomValue(PlaceRentPrices.Min, PlaceRentPrices.Max);
    const conveniences = getRandomItems(this.mockData.conveniences).join(';');
    const username = getRandomItem(this.mockData.usernames);
    const email = getRandomItem(this.mockData.emails);
    const avatar = getRandomItem(this.mockData.avatars);
    const password = getRandomItem(this.mockData.passwords);
    const userType = getRandomItem(this.mockData.userTypes);
    const latitude = getRandomItem(this.mockData.coordinates);
    const longitude = getRandomItem(this.mockData.coordinates);

    return [
      title, description, date, city,
      previewImage, placeImages, isPremium,
      isFavorite, rating, houseType,
      roomsAmount, guestsAmount, price,
      conveniences, username, email,
      avatar, password, userType, latitude,
      longitude
    ].join('\t');
  }
}
