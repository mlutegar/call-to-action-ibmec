import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;

  /* Variant styles */
  ${props => props.variant === 'primary' && `
    background-color: #f5b800;
    color: #1e3a6f;

    &:hover {
      background-color: #e6a600;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  `}

  ${props => props.variant === 'secondary' && `
    background-color: #1e3a6f;
    color: white;

    &:hover {
      background-color: #152d56;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  `}

  ${props => props.variant === 'outline' && `
    background-color: transparent;
    color: #1e3a6f;
    border: 2px solid #1e3a6f;

    &:hover {
      background-color: #1e3a6f;
      color: white;
    }
  `}

  /* Size styles */
  ${props => props.size === 'small' && `
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  `}

  ${props => props.size === 'medium' && `
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  `}

  ${props => props.size === 'large' && `
    padding: 1rem 2rem;
    font-size: 1.125rem;
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
  }
`;

export { StyledButton };