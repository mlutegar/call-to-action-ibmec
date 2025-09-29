import styled from 'styled-components';

const HeroContainer = styled.section`
  background-color: #1e3a6f;
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  animation: fadeIn 1s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin: 0;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

export { HeroContainer, HeroTitle, HeroSubtitle };