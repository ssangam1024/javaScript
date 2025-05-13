let calculation = localStorage.getItem('calculation')|| '';

            document.querySelector('.js-calculation')
            .innerHTML =` ${calculation}`

            function updateCalculation (value){
                calculation += value ;
                document.querySelector('.js-calculation')
                .innerHTML =` ${calculation}`
                localStorage.setItem('calculation',calculation);                                
            } 
            function calculateResult() {
                try {
                    calculation = eval(calculation).toString();
                    document.querySelector('.js-calculation').innerHTML = ` ${calculation}`;
                    localStorage.setItem('calculation', calculation);
                } catch {
                    alert('Invalid calculation');
                }
            }
            function clearCalculation() {
                calculation = '';
                document.querySelector('.js-calculation').innerHTML = ` `;
                localStorage.setItem('calculation', calculation);
            }            