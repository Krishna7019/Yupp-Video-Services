function spiralMatrix(matrix)
{
    let res = []
    top = 0
    bottom = matrix.length-1
    right = matrix[0].length-1
    left = 0 

    while (top <= bottom && left <=  right)
    {
        for (let i=left; i<=right; i++)
        {
            res.push(matrix[top][i])
        }
        top++;

        for(let i = top; i<= bottom; i++)
        {
            res.push(matrix[i][right])
        }
        right--;

        if(top <= bottom)
        {
            for(let i=right; i>=left; i--)
            {
                res.push(matrix[bottom][i])
            }
            bottom--;
        }

        if(left <= right)
        {
            for(let i = bottom; i>=top; i--)
            {
                res.push(matrix[i][left])
            }
            left++;
        }
        
    }
    return res
}

matrix1 = [[1,2,3],[4,5,6],[7,8,9]]

console.log(spiralMatrix(matrix1)) // [1, 2, 3, 6, 9, 8, 7, 4, 5]

matrix2 =  [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

console.log(spiralMatrix(matrix2)) // [1,  2,  3, 4, 8, 12, 11, 10, 9, 5, 6,  7]