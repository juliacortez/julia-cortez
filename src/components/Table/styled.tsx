import styled from 'styled-components'

export const TableContainer = styled.div`

    heigth: 100vh;
    padding-bottom: 20px;
    padding-top: 20px;

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    
    td{
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    th{
        border: 1px solid #dddddd;
        padding: 20px;
        text-align: center;
    }
    
    tr:nth-child(even) {
        background-color: lightgray;
    }
`