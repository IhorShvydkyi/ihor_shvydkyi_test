export const theme = Object.freeze({
  colors: {
    mainBackground: '#E5E5E5',
    finishBackground: '#D0D0D8',
    mainBlack: '#1C1C21',
    btnInactive: '#FF8B37',
    btnPressed: '#E87928',
    btnHower: '#FFAC70',
    answerCorrect: '#E6FAEA',
    answerSelected: '#FFF3EB',
    answerWrong: '#FDEEED',
    borderPassedAnswer: '#D0D0D8',
  },
  transition: {
    timing: '250ms',
    timingFunction: `cubic-bezier(0.075, 0.82, 0.165, 1)`,
  },
  fonts: {
    mainFont: 'Inter',
  },
  fontSizing: {
    mobileAnswers: '14px',
    desktopAnswers: '20px',
    mobileQuestions: '18px',
    desktopQuestions: '32px',
  },
  media: {
    mobile: '320px',
    // tablet: '768px',
    desktop: '1280px',
  },
});
