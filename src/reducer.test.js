import given from 'given2';

import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurantDetail,
  selectRegion,
  selectCategory,
  selectRestaurant,
} from './actions';

describe('reducer', () => {
  given('initialState', () => ({
    regions: given.regions,
    categories: given.categories,
    restaurants: given.restaurants,
    restaurantDetail: {},
    selectedRegion: null,
    selectedCategory: null,
    selectedRestaurant: null,
  }));

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      given('regions', () => []);
      given('categories', () => []);
      given('restaurants', () => []);

      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(given.initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      given('regions', () => []);
      given('categories', () => []);
      given('restaurants', () => []);

      const regions = [
        { id: 1, name: '서울' },
        { id: 2, name: '부산' },
      ];

      const state = reducer(given.initialState, setRegions(regions));

      expect(state.regions).toHaveLength(2);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      given('regions', () => []);
      given('categories', () => []);
      given('restaurants', () => []);

      const categories = [
        { id: 1, name: '한식' },
        { id: 2, name: '양식' },
      ];

      const state = reducer(given.initialState, setCategories(categories));

      expect(state.categories).toHaveLength(2);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      given('regions', () => []);
      given('categories', () => []);
      given('restaurants', () => []);

      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];

      const state = reducer(given.initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRestaurantDetail', () => {
    it('changes restaurantDetail', () => {
      given('regions', () => []);
      given('categories', () => []);
      given('restaurants', () => []);

      const restaurantDetail = {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구',
        menuItems: [
          {
            id: 1,
            retaurantId: 1,
            name: '탕수육',
          },
        ],
      };

      const state = reducer(given.initialState, setRestaurantDetail(restaurantDetail));

      expect(state.restaurantDetail.id).toBe(1);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      given('regions', () => [
        { id: 1, name: '서울' },
      ]);
      given('categories', () => []);
      given('restaurants', () => []);

      const state = reducer(given.initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      given('regions', () => []);
      given('categories', () => [
        { id: 1, name: '한식' },
      ]);
      given('restaurants', () => []);

      const state = reducer(given.initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });

  describe('selectRestaurant', () => {
    it('changes selected restaurant', () => {
      given('regions', () => []);
      given('categories', () => []);
      given('restaurants', () => [{
        id: 1,
        name: '양천주가',
      }]);

      const state = reducer(given.initialState, selectRestaurant(1));

      expect(state.selectedRestaurant).toEqual({
        id: 1,
        name: '양천주가',
      });
    });
  });
});
