// Comandos iniciais no terminal do VS Code:
// Execute os comandos abaixo na pasta desejada

// 1. Criar o projeto
// npx create-react-app my-app --template typescript

// 2. Entrar na pasta do projeto
// cd my-app

// 3. Instalar Bootstrap
// npm install bootstrap

// 4. Importar Bootstrap no projeto
// Em src/index.tsx, adicione a linha abaixo antes de tudo:
// import 'bootstrap/dist/css/bootstrap.min.css';

// Agora edite o App.tsx com o código abaixo:

import React, { useState, useEffect } from 'react';
import './App.css';
import InfoCard from './components/InfoCard';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    setCurrentDate(`Hoje é ${formattedDate}`);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? '' : 'bg-dark text-white';
  };

  return (
    <div className="container py-4">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
        <a className="navbar-brand" href="#">Game Circuitos</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#sobre">Sobre o Projeto</a></li>
            <li className="nav-item"><a className="nav-link" href="#funcionalidades">Funcionalidades</a></li>
            <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
          </ul>
        </div>
      </nav>

      {/* Data atual */}
      <div className="text-end mt-3">
        <small>{currentDate}</small>
      </div>

      {/* Apresentação */}
      <section id="sobre" className="mt-5 text-center">
        <h1>Game Sério para Ensino de Circuitos Elétricos</h1>
        <h3>Desenvolvido em Kotlin para dispositivos móveis</h3>
        <p className="mt-3">
          Este projeto visa transformar o ensino de circuitos elétricos com uma abordagem lúdica e interativa
          por meio de um game sério baseado em gamificação.
        </p>
        <img src="/projeto.jpg" alt="Imagem do Projeto" className="img-fluid mt-3 rounded" />
      </section>

      {/* Cards */}
      <section id="funcionalidades" className="mt-5">
  <div className="row">
    <div className="col-md-4 mb-4">
      <InfoCard 
        title="Funcionalidades" 
        description="Fases interativas, desafios práticos de circuitos, feedback em tempo real."
        icon="fa-gamepad"
        isHighlighted={true} // Exemplo de prop condicional
      />
    </div>
    <div className="col-md-4 mb-4">
      <InfoCard 
        title="Tecnologias" 
        description="Kotlin, Android Studio, Firebase, Bootstrap."
        icon="fa-code"
      />
    </div>
    <div className="col-md-4 mb-4">
      <InfoCard 
        title="Diferenciais" 
        description="Redução da evasão escolar, motivação dos alunos."
        icon="fa-star"
      />
    </div>
  </div>
</section>

      {/* Botão de alternância de tema */}
      <div className="text-center mb-4">
        <button className="btn btn-secondary" onClick={toggleTheme}>
          Alternar Tema Claro/Escuro
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3 w-100 mt-5 rounded" id="contato">
        <p>Marlon José do Carmo | Pós-Graduação Desenvolvimento Web e Mobile - 2025</p>
        <p>Email: marlon.ufjf@gmail.com | GitHub: github.com/marlonjcarmo</p>
      </footer>
    </div>
  );
};

export default App;

