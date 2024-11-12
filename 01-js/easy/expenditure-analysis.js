/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotal={};
  transactions.forEach(transaction => {
    const {category,price}=transaction;
    if(!categoryTotal[category]){
      categoryTotal[category]=0;
    }
    categoryTotal[category]+=price;
    
  });
  const result= Object.keys(categoryTotal).map(category=>({
    category:category,
    totalspent:categoryTotal[category]
  }))
  return result;
}

export default calculateTotalSpentByCategory;
//example
const transactions=[
  {
  id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',

},
{
  id:2,
  timestamp:15645356678856,
  price:40,
  category:'bill',
  itemName:'electricity'
},
{
  id: 3,
		timestamp: 1667678076800000,
		price: 70,
		category: 'hehe',
		itemName: 'blkhj',

},
]

let c= calculateTotalSpentByCategory(transactions);
console.log(c)