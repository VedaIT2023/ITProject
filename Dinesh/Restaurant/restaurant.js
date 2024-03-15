// Sample restaurant data (replace with your actual data)
const restaurants = [
  {
    image: 'https://b.zmtcdn.com/data/pictures/6/18712126/80d0395c5341498edc2e9888ee1a12a6_featured_v2.jpg',
    name: 'Restaurant A',
    location: 'City A',
    rating: 4.5,
    address: 'Address A',
    costForTwo: '$$$',
    distance: '1 mile'
  },
  {
    image: 'https://b.zmtcdn.com/data/pictures/6/18712126/80d0395c5341498edc2e9888ee1a12a6_featured_v2.jpg',
    name: 'Restaurant B',
    location: 'City B',
    rating: 4.0,
    address: 'Address B',
    costForTwo: '$$',
    distance: '2 miles'
  },
  {
    image: 'https://b.zmtcdn.com/data/pictures/6/18712126/80d0395c5341498edc2e9888ee1a12a6_featured_v2.jpg',
    name: 'Restaurant B',
    location: 'City B',
    rating: 4.0,
    address: 'Address B',
    costForTwo: '$$',
    distance: '2 miles'
  },
  {
    image: 'https://b.zmtcdn.com/data/pictures/6/18712126/80d0395c5341498edc2e9888ee1a12a6_featured_v2.jpg',
    name: 'Restaurant B',
    location: 'City B',
    rating: 4.0,
    address: 'Address B',
    costForTwo: '$$',
    distance: '2 miles'
  },
  {
    image: 'https://b.zmtcdn.com/data/pictures/6/18712126/80d0395c5341498edc2e9888ee1a12a6_featured_v2.jpg',
    name: 'Restaurant B',
    location: 'City B',
    rating: 4.0,
    address: 'Address B',
    costForTwo: '$$',
    distance: '2 miles'
  },
  {
    image: 'https://b.zmtcdn.com/data/pictures/6/18712126/80d0395c5341498edc2e9888ee1a12a6_featured_v2.jpg',
    name: 'Restaurant B',
    location: 'City B',
    rating: 4.0,
    address: 'Address B',
    costForTwo: '$$',
    distance: '2 miles'
  },
  {
    image: 'https://b.zmtcdn.com/data/pictures/6/18712126/80d0395c5341498edc2e9888ee1a12a6_featured_v2.jpg',
    name: 'Restaurant B',
    location: 'City B',
    rating: 4.0,
    address: 'Address B',
    costForTwo: '$$',
    distance: '2 miles'
  },
  {
    image: 'https://b.zmtcdn.com/data/pictures/6/18712126/80d0395c5341498edc2e9888ee1a12a6_featured_v2.jpg',
    name: 'Restaurant B',
    location: 'City B',
    rating: 4.0,
    address: 'Address B',
    costForTwo: '$$',
    distance: '2 miles'
  },
  {
    image: 'https://b.zmtcdn.com/data/pictures/6/18712126/80d0395c5341498edc2e9888ee1a12a6_featured_v2.jpg',
    name: 'Restaurant B',
    location: 'City B',
    rating: 4.0,
    address: 'Address B',
    costForTwo: '$$',
    distance: '2 miles'
  },
  {
    image: 'https://b.zmtcdn.com/data/pictures/6/18712126/80d0395c5341498edc2e9888ee1a12a6_featured_v2.jpg',
    name: 'Restaurant B',
    location: 'City B',
    rating: 4.0,
    address: 'Address B',
    costForTwo: '$$',
    distance: '2 miles'
  },
  {
    image: 'https://b.zmtcdn.com/data/pictures/6/18712126/80d0395c5341498edc2e9888ee1a12a6_featured_v2.jpg',
    name: 'Restaurant B',
    location: 'City B',
    rating: 4.0,
    address: 'Address B',
    costForTwo: '$$',
    distance: '2 miles'
  },
  {
    image: 'https://b.zmtcdn.com/data/pictures/6/18712126/80d0395c5341498edc2e9888ee1a12a6_featured_v2.jpg',
    name: 'Restaurant B',
    location: 'City B',
    rating: 4.0,
    address: 'Address B',
    costForTwo: '$$',
    distance: '2 miles'
  },
  {
    image: 'https://b.zmtcdn.com/data/pictures/6/18712126/80d0395c5341498edc2e9888ee1a12a6_featured_v2.jpg',
    name: 'Restaurant B',
    location: 'City B',
    rating: 4.0,
    address: 'Address B',
    costForTwo: '$$',
    distance: '2 miles'
  },
  {
    image: 'https://b.zmtcdn.com/data/pictures/6/18712126/80d0395c5341498edc2e9888ee1a12a6_featured_v2.jpg',
    name: 'Restaurant B',
    location: 'City B',
    rating: 4.0,
    address: 'Address B',
    costForTwo: '$$',
    distance: '2 miles'
  }
  // Add more restaurant data as needed
];

// Function to create restaurant cards
function createRestaurantCard(restaurant) {
  const card = document.createElement('div');
  card.classList.add('restaurant-card');

  const img = document.createElement('img');
  img.src = restaurant.image;
  img.alt = restaurant.name;
  img.classList.add('restaurant-img');
  card.appendChild(img);

  const name = document.createElement('div');
  name.textContent = restaurant.name;
  name.classList.add('restaurant-name');
  card.appendChild(name);

  const location = document.createElement('div');
  location.textContent = restaurant.location;
  location.classList.add('restaurant-location');
  card.appendChild(location);

  const rating = document.createElement('div');
  rating.textContent = `Rating: ${restaurant.rating}`;
  rating.classList.add('restaurant-rating');
  card.appendChild(rating);

  const address = document.createElement('div');
  address.textContent = `Address: ${restaurant.address}`;
  address.classList.add('restaurant-address');
  card.appendChild(address);

  const cost = document.createElement('div');
  cost.textContent = `Cost for Two: ${restaurant.costForTwo}`;
  cost.classList.add('restaurant-cost');
  card.appendChild(cost);

  const distance = document.createElement('div');
  distance.textContent = `Distance: ${restaurant.distance}`;
  distance.classList.add('restaurant-distance');
  card.appendChild(distance);

  return card;
}

// Function to render restaurant cards
function renderRestaurants(restaurants) {
  const grid = document.getElementById('restaurant-grid');
  grid.innerHTML = ''; // Clear existing content

  restaurants.forEach(restaurant => {
    const card = createRestaurantCard(restaurant);
    grid.appendChild(card);
  });
}

// Render the restaurants when the page loads
window.onload = function() {
  renderRestaurants(restaurants);
};
