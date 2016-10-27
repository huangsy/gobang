export default class WinCheck {
    constructor(row, col) {
        this.row = row - 1;
        this.col = col - 1;
    }

    check(matrix, i, j) {
        return this.checkHorizontal(matrix, i, j) ||
            this.checkVertical(matrix, i, j) ||
            this.checkSlant(matrix, i, j) || 
            this.checkBackSlant(matrix, i, j);
    }

    // 水平检查
    checkHorizontal(matrix, m, n) {
        let count = 0;
        for(let i = Math.max(0, n - 4); i <= Math.min(this.col, n + 4); i++) {
            if (matrix[m][i]) {
                count++;
            } else if (count < 5) {
                count = 0;
            }
        }
        return count >= 5;
    }

    // 垂直检查
    checkVertical(matrix, m, n) {
        let count = 0;
        for(let i = Math.max(0, m - 4); i <= Math.min(this.row, m + 4); i++) {
            if (matrix[i][n]) {
                count++;
            } else if (count < 5) {
                count = 0;
            }
        }
        return count >= 5;
    }

    // 斜线检查
    checkSlant(matrix, m, n) {
        let count = 0;
        for(let i = Math.min(this.row, m + 4), j = Math.max(0, n - 4);
            i >= Math.max(0, m - 4) && j <= Math.min(this.col, n + 4); i--, j++) {
            if (matrix[i][j]) {
                count++;
            } else if (count < 5) {
                count = 0;
            }
        }
        return count >= 5;
    }

    // 反斜线检查
    checkBackSlant(matrix, m, n) {
        let count = 0;
        for(let i = Math.max(0, m - 4), j = Math.max(0, n - 4);
            i <= Math.min(this.row, m + 4) && j <= Math.min(this.col, n + 4); i++, j++) {
            if (matrix[i][j]) {
                count++;
            } else if (count < 5) {
                count = 0;
            }
        }
        return count >= 5;
    }
}
