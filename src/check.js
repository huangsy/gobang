// 水平检查
function checkHorizontal(matrix, m, n) {
    var count = 0;
    for(let i = n - 4; i <= n + 4; i++) {
        if (matrix[m][i]) {
            count++;
        } else if (count < 5) {
            count = 0;
        }
    }
    return count >= 5;
}

// 垂直检查
function checkVertical(matrix, m, n) {
    var count = 0;
    for(let i = m - 4; i <= m + 4; i++) {
        if (matrix[i] && matrix[i][n]) {
            count++;
        } else if (count < 5) {
            count = 0;
        }
    }
    return count >= 5;
}

// 斜线检查
function checkSlant(matrix, m, n) {
    var count = 0;
    for(let i = m + 4, j = n - 4; i >= m - 4; i--, j++) {
        if (matrix[i] && matrix[i][j]) {
            count++;
        } else if (count < 5) {
            count = 0;
        }
    }
    return count >= 5;
}

// 反斜线检查
function checkBackSlant(matrix, m, n) {
    var count = 0;
    for(let i = m - 4, j = n - 4; i <= m + 4; i++, j++) {
        if (matrix[i] && matrix[i][j]) {
            count++;
        } else if (count < 5) {
            count = 0;
        }
    }
    return count >= 5;
}

export default function check(matrix, i, j) {
    return checkHorizontal(matrix, i, j) ||
        checkVertical(matrix, i, j) ||
        checkSlant(matrix, i, j) || 
        checkBackSlant(matrix, i, j);
}
