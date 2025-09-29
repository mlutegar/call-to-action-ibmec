import styled from 'styled-components';

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  background-color: white;
  border-radius: 12px;
  margin: 2rem 0;
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.6;
`;

const EmptyTitle = styled.h3`
  font-size: 1.5rem;
  color: #1e3a6f;
  margin: 0 0 0.5rem 0;
  font-weight: bold;
`;

const EmptyDescription = styled.p`
  color: #666666;
  font-size: 1rem;
  margin: 0;
  max-width: 400px;
  line-height: 1.5;
`;

export { EmptyContainer, EmptyIcon, EmptyTitle, EmptyDescription };