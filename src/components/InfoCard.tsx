import React from 'react';

// Definindo as props tipadas com TypeScript
interface InfoCardProps {
  title: string;
  description: string;
  icon?: string; // Opcional
  isHighlighted?: boolean; // Exemplo de prop condicional
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  title, 
  description, 
  icon, 
  isHighlighted 
}) => {
  return (
    <div className={`card h-100 ${isHighlighted ? 'border border-warning' : ''}`}>
      <div className="card-body">
        {icon && <i className={`fas ${icon} mb-3`}></i>}
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;