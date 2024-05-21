function getCombinations(chars) {
    var result = [];
    var f = function (prefix, chars) {
        for (var i = 0; i < chars.length; i++) {
            result.push(prefix + chars[i]);
            f(prefix + chars[i], chars.slice(i + 1));
        }
    }
    f('', chars);
    return result;
}

function permute(word) { 
    let arrperm = []
    if (word.length < 2) {
        arrperm.push(word);
    }
    for (let i = 0; i < word.length; i++) {
        let char = word[i]

        let remainingChars = word.slice(0, i) + word.slice(i + 1, word.length)

        for (let permutation of permute(remainingChars)) {
            arrperm.push(char + permutation)
        }
    }
    return arrperm
}

function generateperm(word) {
    var ch = word.toUpperCase().split("");
    var subring = getCombinations(ch);
    var permar = [];
    for (var x = 0; x < subring.length; x++) {
        var par = permute(subring[x]);
        for(var y = 0; y < par.length; y++){
            permar.push(par[y]);
        }
    }
    return permar;
}

function chkdiction(word) {
    perms = generateperm(word);
    var fnllst = [];
    for (var f = 0; f < perms.length; f++) {
        var wd = perms[f];
        var fit = Search(wd);
        if (fit == 1) {
            fnllst.push(wd);
        }
    }
    return fnllst;
}

function word_starts(word, start) {
    var ln = start.length;
    var ct = 0;
    var res = false;
    for (var x = 0; x < ln; x++) {
        if (word[x] == start[x]) {
            ct++;
        }
    }
    if (ct == ln) {
        res = true;
    }
    return res;
}

function word_ends(word, end) {
    var lne = end.length;
    var ln = word.length;
    var ct = 0;
    var res = false;
    for (var x = ln - 1; x > ln - lne - 1; x--) {
        if (word[x] == end[x - ln + lne]) {
            ct++;
        }
    }
    if (ct == lne) {
        res = true;
    }
    return res;
}

function word_length(word, ln, minln) {
    var res = false;
    if (ln == 0 && minln == 0) {
        res = true;
    }
    if (word.length == ln) {
        res = true;
    }
    if (word.length >= minln && minln != 0) {
        res = true;
    }
    return res;
}

function word_contains(word, cw) {
    var ln = word.length;
    var res = false;
    if (cw.length != 0) {
        for (var x = 0; x < ln; x++) {
            if (word[x] == cw[0] || cw[0] == "_" || cw[0] == "?") {
                var a = x;
                var ct = 0;
                var mn = Math.min(x + cw.length, ln);
                for (var z = x; z < mn; z++) {
                    if (word[z] == cw[z - a]) {
                        ct++;
                    }
                    else if (cw[z - a] == "_" || cw[z - a] == "?") {
                        ct++;
                    }
                }
                if (ct == cw.length) {
                    res = true;
                }
            }
        }
    }
    else {
        res = true;
    }
    return res;
}


function constrains(word, ln, minln, start, end, cw) {
    var arr = chkdiction(word);
    var res = [];
    for (var w = 0; w < arr.length; w++) {
        var cst = word_starts(arr[w], start);
        var cen = word_ends(arr[w], end);
        var cln = word_length(arr[w], ln, minln);
        var cwc = word_contains(arr[w], cw);
        if (cst == true && cen == true && cln == true && cwc == true) {
            res.push(arr[w]);
        }
    }
    var rset = new Set(res);
    var result = Array.from(rset);
    return result;
}
function show(){
    var word = document.getElementById("word").value;
    var ln = Number(document.getElementById("word_len").value);
    var minln = Number(document.getElementById("word_mlen").value);
    var start = document.getElementById("word_start").value;
    var end = document.getElementById("word_end").value;
    var cw = document.getElementById("word_cont").value;
    var res = constrains(word,ln,minln,start,end,cw);
    document.getElementById("two-letter").innerHTML = "";
    if(res.length == 0){
        document.getElementById("two-letter").innerHTML = '<div class="word_out">No word found</div>';
    }
    else{
        for(var x=0; x < res.length; x++){
            document.getElementById("two-letter").innerHTML += '<div class="word_out">' + res[x] + '</div>';
        }
    }
}