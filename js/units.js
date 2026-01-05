// Коэффициенты перевода для длины
const lengthUnits = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000
};

// Коэффициенты перевода для площади
const areaUnits = {
    sqm: 1,
    sqkm: 1000000,
    ha: 10000
};

// Коэффициенты перевода для объёма
const volumeUnits = {
    l: 1,
    ml: 0.001,
    cubicm: 1000
};

// Функция конвертации длины
function convertLength() {
    const value = parseFloat(document.getElementById('length-input').value);
    const fromUnit = document.getElementById('length-from').value;
    const toUnit = document.getElementById('length-to').value;

    if (isNaN(value)) {
        document.getElementById('length-result').textContent = 'Введите число!';
        return;
    }

    const result = value * (lengthUnits[fromUnit] / lengthUnits[toUnit]);
    document.getElementById('length-result').textContent = 
        `${value} ${fromUnit} = ${result.toFixed(6)} ${toUnit}`;
}

// Функция конвертации площади
function convertArea() {
    const value = parseFloat(document.getElementById('area-input').value);
    const fromUnit = document.getElementById('area-from').value;
    const toUnit = document.getElementById('area-to').value;

    if (isNaN(value)) {
        document.getElementById('area-result').textContent = 'Введите число!';
        return;
    }

    const result = value * (areaUnits[fromUnit] / areaUnits[toUnit]);
    document.getElementById('area-result
