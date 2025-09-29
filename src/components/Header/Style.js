import styled from "styled-components"

const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`

const Logo = styled.div`
  a {
    display: inline-block;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  object-fit: contain;
`

const DownloadButton = styled.button`
  background-color: #f5b800;
  color: #1e3a6f;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e6a600;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`

export { HeaderContainer, Logo, LogoImage, DownloadButton }