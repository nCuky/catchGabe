let btnItself = document.getElementById("punk");

// btnItself.addEventListener("mouseover", handleMouse())

function handleChase() {
    calculateNewPosition();
}

function handleCatch() {
    playerWon();
}

function calculateNewPosition() {
    let viewportWidth = document.documentElement.clientWidth,
        viewportHeight = document.documentElement.clientHeight,

        btnSingleMargin = parseInt(window.getComputedStyle(btnItself).margin),
        btnTotalMargin = btnSingleMargin * 2,

        btnBoundingWidth = btnItself.getBoundingClientRect().width + btnTotalMargin,
        btnBoundingHeight = btnItself.getBoundingClientRect().height + btnTotalMargin;

    let newLeftPos = btnSingleMargin + (Math.random() * (viewportWidth - btnBoundingWidth)),
        newTopPos = btnSingleMargin + (Math.random() * (viewportHeight - btnBoundingHeight));

    if (viewportWidth - newLeftPos < btnBoundingWidth) {
        newLeftPos = viewportWidth - btnBoundingWidth;
    }

    if (viewportHeight - newTopPos < btnBoundingHeight) {
        newTopPos = viewportHeight - btnBoundingHeight;
    }

    btnItself.style.left = (newLeftPos.toFixed(0) + "px");
    btnItself.style.top = (newTopPos.toFixed(0) + "px");
}

function playerWon() {
    btnItself.style.display = "none";
    document.body.style.backgroundImage = 'url("gabeAngry.jpg")';

    alert("YOU CAUGHT ME! :'(\n\n\n            Goodbye...");
}
