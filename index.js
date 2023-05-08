     // Define an object that contains letter-to-symbol correspondences
      var symbolMap = {
        'a': '@',
        'b': '#',
        'c': '%',
        'd': '&',
        'e': '*',
        'f': '^',
        'g': '$',
        'h': '!',
        'i': '(',
        'j': ')',
        'k': '+',
        'l': '=',
        'm': '{',
        'n': '}',
        'o': '[',
        'p': ']',
        'q': '/',
        'r': '?',
        's': '|',
        't': '~',
        'u': '`',
        'v': '_',
        'w': '.',
        'x': ',',
        'y': ';',
        'z': ':'
      };
      
      // Function to encode text using the symbolMap object
      function encode() {
        var textarea = document.getElementById('inputTextArea');
        var text = textarea.value.toLowerCase();
        for (var letter in symbolMap) {
          var symbol = symbolMap[letter];
          var regex = new RegExp(letter, 'g');
          text = text.replace(regex, symbol);
        }
        textarea.value = text;
      }
      
      // Function to decode text by reversing the encoding process
      function decode() {
        var textarea = document.getElementById('inputTextArea');
        var text = textarea.value.toLowerCase();
        for (var letter in symbolMap) {
          var symbol = symbolMap[letter];
          var regex = new RegExp('\\' + symbol, 'g');
          text = text.replace(regex, letter);
        }
        textarea.value = text;
      }