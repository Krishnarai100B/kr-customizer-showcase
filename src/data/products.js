// Each category uses the same ProductSection component.
// Add or remove products here; you do not need to rewrite the JSX.
const products = [
  {
    title: 'Jewelry Accessories',
    description: 'Remotely manage and organize your customized offerings without lengthy deployment cycles or constant code changes.',
    items: [
      { name: 'Earring 3D', image: '/images/earing-3d.png' },
      { name: 'Ring 3D', image: '/images/ring-3d.png' },
      { name: 'Necklace 3D', image: '/images/necklace-3d.png' },
      { name: 'Bangle 2D', image: '/images/bangle-2d.png' },
      { name: 'Ring 2D', image: '/images/ring-2d.png' },
      { name: 'Necklace 2D', image: '/images/necklace-2d.png' }
    ]
  },
  {
    title: 'Fashion & Apparel Products Customization',
    description: 'Easily manage and update your fashion products. Customers can change colors, add prints, and personalize text in seconds.',
    items: [
      { name: 'T-Shirt 3D', image: '/images/tshirt-3d.png' },
      { name: 'Shirt 3D', image: '/images/shirt-3d.png' },
      { name: 'Sport Jersey 2D', image: '/images/sport-jersey-2d.png' }
    ]
  },
  {
    title: 'Weapons Product',
    description: 'Explore product models and customize the details to match your requirements.',
    items: [
      { name: 'M416 3D', image: '/images/weapon-rifle.png' },
      { name: 'M416 3D', image: '/images/weapon-pistol.png' },
      { name: 'M416 3D', image: '/images/weapon-sniper.png' }
    ]
  },
  {
    title: 'Unique Print-on-Demand Collections',
    description: 'Create personalized products with attractive styles and unique designs that keep customers coming back.',
    items: [
      { name: 'Phone Case', image: '/images/phone-case.png' },
      { name: 'Tote Bag', image: '/images/tote-bag.png' },
      { name: 'Bottle', image: '/images/bottle.png' },
      { name: 'Hat', image: '/images/hat.png' },
      { name: 'Pillow', image: '/images/pillow-striped.png' },
      { name: 'Travel Bag', image: '/images/pillow-sleeve.png' }
    ]
  },
  {
    title: 'Automotive',
    description: 'Discover customizable automotive products and explore different styles in one place.',
    items: [
      { name: 'Bike 3D', image: '/images/bike-3d.png' },
      { name: 'Car 3D', image: '/images/car-3d.png' },
      { name: 'Truck 3D', image: '/images/truck-3d.png' }
    ]
  }
];

export default products;
