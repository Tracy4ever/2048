/*游戏主逻辑文件*/
var board = [];
var score = 0;
var hasConflicted = [];
$(function() {
    newgame();
});

function newgame() {
    //初始化棋盘格和数字格
    init();
    //生成两个随机位置的数字
    generateOneNumber();
    generateOneNumber();

}

function restartgame() {
    $("#gameover").remove();
    updateScore(0);
    newgame();
    
}

function init() {
    //初始化棋盘格
    for (var i = 0; i < 4; i++) {
        board[i] = [];
        hasConflicted[i] = [];
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
            hasConflicted[i][j]=false;
            var gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css("top", getPosTop(i, j));
            gridCell.css("left", getPosLeft(i, j));
        }

    }
    updateBoardView();
    score=0;
    $('#score').text(score);
}
/*初始化数字格*/
function updateBoardView() {
    $(".number-cell").remove();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $("#grid-container").append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>");
            var numberCell = $("#number-cell-" + i + "-" + j)
            if (board[i][j] == 0) {
                numberCell.css("width", "0px");
                numberCell.css("height", "0px");
                numberCell.css("top", getPosTop(i, j) + 50);
                numberCell.css("left", getPosLeft(i, j) + 50);
            } else {
                numberCell.css("width", "100px");
                numberCell.css("height", "100px");
                numberCell.css("top", getPosTop(i, j));
                numberCell.css("left", getPosLeft(i, j));
                numberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
                numberCell.css("color", getNumberColor(board[i][j]));
                numberCell.css("font-size",getNumberFontSize(board[i][j]));
                numberCell.text(board[i][j])
            }
            hasConflicted[i][j]=false;
        }
    }
}

function generateOneNumber() {
    // 生成一个随机位置
    var randx = parseInt(Math.floor(Math.random() * 4));
    var randy = parseInt(Math.floor(Math.random() * 4));
    while (true) {
        if (board[randx][randy] === 0) {
            break;
        }
        randx = parseInt(Math.floor(Math.random() * 4));
        randy = parseInt(Math.floor(Math.random() * 4));
    }
    //生成一个随机数字
    var randNumber = Math.random()<0.5?2:4;
    //把随机数字放到随机位置上
    board[randx][randy]=randNumber;
    showNumberWithAnimation(randx,randy,randNumber);
}


