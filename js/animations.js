const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumberAnimationStep(i, element, endNumber)   
{
  if (i <= endNumber) 
  {
    if (i === endNumber)
    {
      element.innerText = i + '+';
      //element.innerText = 4000;
    } else 
    {
      element.innerText = i;
    }
    i=i+100;
  
    setTimeout(() => increaseNumberAnimationStep(i, element, endNumber), INCREASE_NUMBER_ANIMATION_SPEED);
  }
}

function initIncreaseNumberAnimation() 
{
  let element_my=document.querySelector(".features__clients-count");
  increaseNumberAnimationStep(0, element_my, 5000);
}
/*initIncreaseNumberAnimation();*/
 
  //let element_my=document.querySelector(".features__clients-count");
  //element_my.innerText = 4000;
  //console.log(element_my.nodeName);









document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
      const formContainer = document.createElement('div');
      formContainer.classList.add('form__group');
      formContainer.classList.add('form__other-input'); // Задание 1
  
      const input = document.createElement('input');
      input.placeholder = "Введите ваш вариант";
      input.type = "text"; // Задание 2
        
      formContainer.appendChild(input);
      //document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit')); // Задание 3
      //document.querySelector('.form__containter').insertBefore(formContainer, document.querySelector('.form__submit'));
      document.querySelector('form').insertBefore(formContainer, document.querySelector('.form__submit')); // Задание 3
    }
  
    const otherInput = document.querySelector('.form__other-input');
      if (event.target.value !== 'other' && otherInput)
      { // Задание 5
        //document.querySelector('#form form').removeChild(otherInput); // Задание 4
        //document.querySelector('.form__containter').removeChild(otherInput); // Задание 4
        document.querySelector('form').removeChild(otherInput); // Задание 4
      }
});




let animationInited = false;

function updateScroll() {
  if (window.scrollY > 0) {
    document.querySelector('header').classList.add('header__scrolled');
  } else {
    document.querySelector('header').classList.remove('header__scrolled');
  }
  
  // Запуск анимации увеличения числа

  let windowBottomPosition = window.scrollY + window.innerHeight;
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
  if (windowBottomPosition >= countElementPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation();
  }
}
 
window.addEventListener('scroll', updateScroll);