
  
  var pronoun = ['the','our'];
  var adj = ['great', 'big' ];
  var noun = ['jogger','racoon'];
  var ext = ['.com', '.net', '.us', '.io','.cl'];

  
function domgenerator (pronoun, adj, noun, ext){

      for (let i = 0; i < pronoun.length; i++){
          for( let j = 0; j < adj.length; j++){
              for(let k=0; k < noun.length; k++){
                  for (let x = 0; x < ext.length; x++){
                    console.log(pronoun[i]+adj[j]+noun[k]+ ext[x]);
                  }
                }
              }
          }
      }
  
      domgenerator(pronoun, adj, noun, ext)