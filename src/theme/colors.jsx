const colors = {
    grey: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
    blue: (opacity = 1) => `rgba(53, 88, 225, ${opacity})`,
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
    darkModeBlue: (opacity = 1) => `rgba(146, 156, 241, ${opacity})`,
    beige: (opacity = 1) => `rgba(241, 224, 197, ${opacity})`,
    brown: (opacity = 1) => `rgba(201, 183, 156, ${opacity})`,
    green: (opacity = 1) => `rgba(113, 129, 109, ${opacity})`,

    darkGreen: (opacity = 1) => `rgba(106, 141, 115, ${opacity})`,
    lightGreen: (opacity = 1) => `rgba(244, 253, 217, ${opacity})`,

}
export default colors;