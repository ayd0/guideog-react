const handleBackgroundScroll = () => {
    const mainOverlay = document.querySelector(".main-overlay");
    let alpha = (85 / window.scrollY) * 2.0;
    if (alpha >= 0) {
        mainOverlay.style.background = `rgba(18,35,43,${alpha})`;
    }
};

export default handleBackgroundScroll;