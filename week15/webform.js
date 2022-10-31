function checkAnswers() {
    document.getElementById('errorMessage').innerHTML = '';
    let name = document.getElementById('userName');
    
    let age = document.getElementById('userAge');
    
    let mothertongue = document.getElementById('firstLang');
    
    let newlanguage = document.getElementById('newLang');
    
    let timespent = document.getElementById('timeStudy');
     
      if (name.value === '') {
        document.getElementById('errorMessage').innerHTML+= 'Представься, пожалуйста!<br>';      
      } 
      if (age.value < 3 || age.value > 99) {
        document.getElementById('errorMessage').innerHTML+= 'Укажи число от 3 до 99!<br>';      
      }
      if (mothertongue.value.length<=4) {
        document.getElementById('errorMessage').innerHTML+= 'Слишком короткий ответ!<br>';      
      }
      if (newlanguage.value == mothertongue.value) {
        document.getElementById('errorMessage').innerHTML+= 'Нужно указать новый язык!<br>';
      }
      else if (newlanguage.value === '') {
        document.getElementById('errorMessage').innerHTML+= 'Укажи, какой язык хочешь учить!<br>'; 
    }
      
      if (timespent.value == isNaN) {
        document.getElementById('errorMessage').innerHTML+= 'Нужно указать число!<br>';      
      }

}