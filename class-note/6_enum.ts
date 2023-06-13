
//초기화 안하면 0부터 시작해서 아래로 1씩 증가
enum numbershoes {
    Nkie,
    Adidas
}

var myshoes = numbershoes.Nkie;
console.log(myshoes)


enum stringshoes {
    Nkie="나이키",
    Adidas="아디다스"
}

var myshoesstring = stringshoes.Nkie;
console.log(myshoes)

enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQ(answer: Answer) {
    if (answer == Answer.Yes) {
        console.log('정답')
    }
    if (answer == Answer.No) {
        console.log('정답')
    }
}

// askQ('예스')
// askQ('YES')
askQ(Answer.Yes);