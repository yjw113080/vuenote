function solution(s) {
    for (let i = 0; i < s.length; i++) {
        let cnt = 1;
        if (s[i]!==" ") {
            if (cnt=1) s[i] = s[i].toLowerCase;
            else s[i] = s[i].toUpperCase;
            } else {
                cnt = 0;
            }
    }
}