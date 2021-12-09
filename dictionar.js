    listOfWords = [];
    function addWord() {
      var word = $('#addText').val();
      $('#list').append(word + " , ");
      listOfWords.push(word);
    }
    function findWord() {
      var find = $('#find').val();
      var foundWord = 0;
      for (var i = 0; i < listOfWords.length; ++i) {
        if (find == listOfWords[i]) {
          foundWord = 1;
          i = listOfWords.length;
        }
      }
      if (foundWord == 1) {
        $('#isOrNot').html('The word exists');
      }else {
        $('#isOrNot').html('The word does not exist');
      }
      return false;
    }
