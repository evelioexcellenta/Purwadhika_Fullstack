let s = "anagram"
let t = "nagaram"

//if t anagram s = true
function anagram (s,t){
    let temp = ""
    let result = false
    for (let i=0 ; i<s.length; i++){
        for (let j=0; j<s.length; j++){
            if (s[i] == t[j]){
                temp += (t[j])
                s[i] = ""
                t[j] = ""
                break
            }
        }
        
    }

    if (temp == s) {
        result = true
    }

    return result
}


// anagram (s,t)
console.log(anagram(s,t))