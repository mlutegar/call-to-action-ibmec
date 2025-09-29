import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 250px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666666;

  span {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1e3a6f;
  margin: 0;
  line-height: 1.3;
`;

const CardYear = styled.div`
  background-color: #1e3a6f;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: bold;
  align-self: flex-start;
`;

const CardDescription = styled.p`
  color: #666666;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
  flex: 1;
`;

const CardPages = styled.p`
  color: #999999;
  font-size: 0.8rem;
  margin: 0;
  font-style: italic;
`;

export {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardYear,
  CardDescription,
  CardPages,
  ImagePlaceholder
};