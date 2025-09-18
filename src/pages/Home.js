// pages/Home.js
import React, { useState } from 'react';
import WineCard from '../components/WineCard';
import Filter from '../components/Filter';
import '../styles/Home.css';

const Home = () => {
  const [wines] = useState([
    {
      id: 1,
      name: "Terra Generation Primitivo di Manduria Riserva 2020",
      producer: "Casa Vinicola Botter",
      country: "Italy",
      region: "Aquila",
      type: "Dry",
      price: "€25.90",
      image: "/images/wine1.jpg"
    },
    {
      id: 2,
      name: "Andrés Alonso Garnacha Syrah 2023",
      producer: "Bodegas Alonso",
      country: "Spain",
      region: "Toro",
      type: "Medium-bodied",
      price: "€15.50",
      image: "/images/wine2.jpg"
    },
    {
      id: 3,
      name: "Oma Trude Winzerglühwein rot",
      producer: "Weingut Oma Trude",
      country: "Germany",
      region: "Rheinhessen",
      type: "Mulled Wine",
      price: "€12.90",
      image: "/images/wine3.jpg"
    },
    {
      id: 4,
      name: "Guarda Rios Tinto 2022",
      producer: "Quinta do Guarda",
      country: "Portugal",
      region: "Alentejo",
      type: "Full-bodied",
      price: "€18.75",
      image: "/images/wine4.jpg"
    },
    {
      id: 5,
      name: "Miluna Primitivo Salento 2022",
      producer: "Cantina Miluna",
      country: "Italy",
      region: "Puglia",
      type: "Dry",
      price: "€16.40",
      image: "/images/wine5.jpg"
    },
    {
      id: 6,
      name: "Origin 2022",
      producer: "Domaine Origin",
      country: "France",
      region: "Bordeaux",
      type: "Bold",
      price: "€29.99",
      image: "/images/wine6.jpg"
    },
    {
      id: 7,
      name: "Moulin Saint-Jean La Reserve 2023",
      producer: "Château Moulin",
      country: "France",
      region: "Rhône",
      type: "Elegant",
      price: "€22.50",
      image: "/images/wine7.jpg"
    },
    {
      id: 8,
      name: "Taboadella Villae 2022",
      producer: "Quinta da Taboadella",
      country: "Portugal",
      region: "Dão",
      type: "Complex",
      price: "€31.20",
      image: "/images/wine8.jpg"
    }
  ]);

  const [filteredWines, setFilteredWines] = useState(wines);
  const [filters, setFilters] = useState({
    country: 'all',
    sort: 'name'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    
    let filtered = [...wines];
    
    // Filter by country
    if (newFilters.country !== 'all') {
      filtered = filtered.filter(wine => wine.country === newFilters.country);
    }
    
    // Sort wines
    if (newFilters.sort === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (newFilters.sort === 'price') {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('€', '').replace(',', '.'));
        const priceB = parseFloat(b.price.replace('€', '').replace(',', '.'));
        return priceA - priceB;
      });
    }
    
    setFilteredWines(filtered);
  };

  return (
    <div className="home">
      <div className="home-header">
        <h2>Rotwein kaufen</h2>
        <p>Rotwein (red wine) is an alcoholic drink made by fermenting the juice of dark-skinned grapes. 
          Its specialty is that antioxidants in red wine called polyphenols may help protect the lining of blood vessels in the heart.</p>
      </div>
      
      <Filter onFilterChange={handleFilterChange} wines={wines} />
      
      <div className="wine-grid">
        {filteredWines.map(wine => (
          <WineCard key={wine.id} wine={wine} />
        ))}
      </div>
    </div>
  );
};

export default Home;