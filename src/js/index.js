const firstAnimNode = document.querySelector('.firstAnim');
const buttonFirstAnimNode = document.querySelector('.buttonFirstAnim');

startAnim(buttonFirstAnimNode, firstAnimNode, 'firstAnimStart');


const secondAnimNode = document.querySelector('.secondAnim');
const buttonSecondAnimNode = document.querySelector('.buttonSecondAnim');

startAnim(buttonSecondAnimNode, secondAnimNode, 'secondAnimStart');


function startAnim(buttonNode, elemNode, startClass) {
    buttonNode.addEventListener('click', () => {
        if(elemNode.classList.contains(startClass)) {
            elemNode.classList.remove(startClass);
            buttonNode.innerText = 'Запустить анимацию';
        } else {
            elemNode.classList.add(startClass);
            buttonNode.innerText = 'Остановить анимацию';
        }
    });
}

(function () {
    const thirdAnimNode = document.querySelector('.thirdAnim');
    const buttonThirdAnimNode = document.querySelector('.buttonThirdAnim');

    let posX = 0;
    let posXStep = 2;
    let interval;

    buttonThirdAnimNode.addEventListener('click', () => {
        if(thirdAnimNode.isStarted) {
            thirdAnimNode.isStarted = false;
            buttonThirdAnimNode.innerText = 'Запустить анимацию';
            posX = 0;
            thirdAnimNode.style.marginLeft = `${posX}px`;
            clearTimeout(interval);
        } else {
            thirdAnimNode.isStarted = true;
            buttonThirdAnimNode.innerText = 'Остановить анимацию';

            interval = setInterval(() => {
                posX += posXStep;
                thirdAnimNode.style.marginLeft = `${posX}px`;
            }, 10);
        }
    });
} ());

(function () {
    const forthAnimNode = document.querySelector('.forthAnim');
    const buttonForthAnimNode = document.querySelector('.buttonForthAnim');

    let posX = 0;
    let posXStep = 4;
    let animId;

    buttonForthAnimNode.addEventListener('click', () => {
        if(forthAnimNode.isStarted) {
            forthAnimNode.isStarted = false;
            buttonForthAnimNode.innerText = 'Запустить анимацию';
            posX = 0;
            forthAnimNode.style.marginLeft = `${posX}px`;
            cancelAnimationFrame(animId);
        } else {
            forthAnimNode.isStarted = true;
            buttonForthAnimNode.innerText = 'Остановить анимацию';

            startAnim();
        }
    });

    function startAnim() {
        posX += posXStep;
        forthAnimNode.style.marginLeft = `${posX}px`;
        animId = requestAnimationFrame(startAnim);
    }
} ());   