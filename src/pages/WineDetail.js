import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/WineDetail.css';

const WineDetail = () => {
  const { id } = useParams();
  
  // Dados mockados - em uma aplicação real viriam de uma API
  const wine = {
    id: 1,
    name: "Terra Generation Primitivo di Manduria Riserva 2020",
    producer: "Casa Vinicola Botter",
    country: "Italy",
    region: "Aquila",
    type: "Dry",
    price: "€25.90",
    description: "This exceptional Primitivo comes from the sun-drenched region of Manduria in Puglia, Italy. The 'Riserva' designation indicates extended aging, resulting in a wine of remarkable complexity and depth. With intense aromas of ripe blackberries, dried figs, and subtle spice notes, this wine offers a full-bodied palate with velvety tannins and a long, satisfying finish.",
    taste: "On the palate, this wine reveals rich flavors of dark cherry, plum, and blackberry compote, complemented by notes of chocolate, tobacco, and vanilla from oak aging. The wine is well-structured with balanced acidity and firm yet refined tannins. The finish is persistent with a pleasant warmth and hints of sweet spice.",
    pairing: "Perfect with grilled meats, roasted lamb, aged cheeses, and hearty pasta dishes.",
    alcohol: "14.5%",
    image: "/images/wine1.jpg"
  };

  return (
    <div className="wine-detail">
      <Link to="/" className="back-button">← Back to Wines</Link>
      
      <div className="wine-detail-content">
        <div className="wine-image">
          <img src={wine.image} alt={wine.name} />
        </div>
        
        <div className="wine-info">
          <h1>{wine.name}</h1>
          <h2>{wine.producer}</h2>
          
          <div className="wine-meta">
            <p><strong>Country:</strong> {wine.country}</p>
            <p><strong>Region:</strong> {wine.region}</p>
            <p><strong>Type:</strong> {wine.type}</p>
            <p><strong>Alcohol:</strong> {wine.alcohol}</p>
            <p className="price">{wine.price}</p>
          </div>
          
          <div className="wine-description">
            <h3>What is special about this wine?</h3>
            <p>{wine.description}</p>
          </div>
          
          <div className="wine-tasting">
            <h3>How the wine tastes?</h3>
            <p>{wine.taste}</p>
          </div>
          
          <div className="wine-pairing">
            <h3>Food Pairing</h3>
            <p>{wine.pairing}</p>
          </div>
          
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default WineDetail;