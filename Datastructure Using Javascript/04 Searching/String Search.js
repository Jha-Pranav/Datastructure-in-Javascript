function stringSearch(str, search){
    let count = 0;
    for(var i=0; i<str.length; i++){
        if(str[i] === search[0]){
            
            let j = 1;
            i++;
            while(j<=search.length && str[i] === search[j]){
                i++;
                j++
                if (j === search.length) {
                    count += 1;  
                    }
            }
           
            i--;
            
        }
    } return count;
}

stringSearch('womomgoMzomgomomg'.toLowerCase(),'Om'.toLowerCase());