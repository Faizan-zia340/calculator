let result = document.getElementById('result')

function value(val) {
    
    const operator=['+','-','*','%','/','=','.'];
    
    if (result.value === ""&& operator.includes(val)) {
        return;
    }
    if (operator.includes(val) && operator.includes(result.value.slice(-1))) {
        return;}
        result.value += val;
    }

    function clearAll() {

        result.value = '';
    
    }
    
    
    function lastDel() {
    
        result.value = result.value.slice(0, -1)
    
    }
    
    
    function calculate() {
    
        if (result.value !== '') {
    
            result.value = eval(result.value)
    
        }
    
    }