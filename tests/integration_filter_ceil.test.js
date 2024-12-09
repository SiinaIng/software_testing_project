import ceil from '../src/ceil.js';
import filter from '../src/filter.js';

describe('Integration tests for ceil and filter functions', () => {
  
    // Test case 1: Filter out products with invalid prices (negative or zero) and round up the remaining prices
    test('should filter out products with invalid prices and ceil the remaining prices', () => {
      const products = [
        { name: 'Product 1', price: -3.4 },
        { name: 'Product 2', price: 4.1 },
        { name: 'Product 3', price: -1.2 },
        { name: 'Product 4', price: 6.5 },
        { name: 'Product 5', price: -7.8 }
      ];

      const filteredProducts = filter(products, product => product.price >= 0);
      const ceiledPrices = filteredProducts.map(product => ({
        ...product,
        price: ceil(product.price)
      }));

      expect(ceiledPrices).toEqual([
        { name: 'Product 2', price: 5 },
        { name: 'Product 4', price: 7 }
      ]);
    });
  
    // Test case 2: Filter out non-numeric values (e.g., invalid price formats) and round up the remaining prices
    test('should filter out products with non-numeric prices and ceil the valid prices', () => {
        const products = [
            { name: 'Product 1', price: 2.3 },
            { name: 'Product 2', price: 'hello' },  
            { name: 'Product 3', price: 3.6 },
            { name: 'Product 4', price: null },    
            { name: 'Product 5', price: 5.1 },
            { name: 'Product 6', price: undefined }, 
            { name: 'Product 7', price: 7.7 },
            { name: 'Product 8', price: NaN },      
            { name: 'Product 9', price: true }      
        ];

        const filteredProducts = filter(products, product => typeof product.price === 'number' && !isNaN(product.price));
        const ceiledPrices = filteredProducts.map(product => ({
            ...product,
            price: ceil(product.price)
        }));

        expect(filteredProducts).toEqual([
            { name: 'Product 1', price: 2.3 },
            { name: 'Product 3', price: 3.6 },
            { name: 'Product 5', price: 5.1 },
            { name: 'Product 7', price: 7.7 }
        ]);
        expect(ceiledPrices).toEqual([
            { name: 'Product 1', price: 3 },
            { name: 'Product 3', price: 4 },
            { name: 'Product 5', price: 6 },
            { name: 'Product 7', price: 8 }
        ]);
    });
});
