function pairElement(str) {
    let fullArr = []
     for ( let i = 0; i < str.length; i++ ) {
       let arr = str.split("")
       if( arr[i] === "G") {
         fullArr.push(arr[i].concat("C").split(""))
       }
       if( arr[i] === "C") {
         fullArr.push(arr[i].concat("G").split(""))
       }
       if( arr[i] === "A") {
         fullArr.push(arr[i].concat("T").split(""))
       }
       if( arr[i] === "T") {
          fullArr.push(arr[i].concat("A").split(""))
       }
     }
      return fullArr;
    }
    
    pairElement("GCG");
    

    function pairElement(str) {
        //create object for pair lookup
        var pairs = {
          A: "T",
          T: "A",
          C: "G",
          G: "C"
        };
        //split string into array of characters
        var arr = str.split("");
        //map character to array of character and matching pair
        return arr.map(x => [x, pairs[x]]);
      }
      
      //test here
      pairElement("GCG");