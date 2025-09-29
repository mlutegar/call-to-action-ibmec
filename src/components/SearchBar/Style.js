import styled from 'styled-components';

const SearchContainer = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: center;

    form {
        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        max-width: 600px;
        width: 100%;
    }
`;

const SearchIcon = styled.div`
    padding: 1rem;
    color: #666666;
    font-size: 1.2rem;
`;

const SearchInput = styled.input`
    flex: 1;
    padding: 1rem 0;
    border: none;
    outline: none;
    font-size: 1rem;
    color: #333;

    &::placeholder {
        color: #999;
    }
`;

const SearchButton = styled.button`
    background-color: #f5b800;
    color: #1e3a6f;
    border: none;
    padding: 1rem 2rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    height: 100%;

    &:hover {
        background-color: #e6a600;
    }

    @media (max-width: 768px) {
        padding: 1rem 1.5rem;
        font-size: 0.9rem;
    }
`;

export {SearchContainer, SearchInput, SearchButton, SearchIcon};