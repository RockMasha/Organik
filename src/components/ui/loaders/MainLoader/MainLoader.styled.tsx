import { StyledWrapper } from './MainLoader'

function MainLoader() {
  return (
    <StyledWrapper>
      <div className="spinnerContainer">
        <div className="spinner" />
        <div className="loader">
          <p>eat</p>
          <div className="words">
            <span className="word">healthy</span>
            <span className="word">natural</span>
            <span className="word">organic</span>
            <span className="word">fresher</span>
            <span className="word">healthy</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default MainLoader
