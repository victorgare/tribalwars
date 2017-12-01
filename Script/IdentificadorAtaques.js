
(function () {

    var intarvalo = randomIntFromInterval(10000, 60000);

    console.log(intarvalo);

    setInterval(function () {
        try {
            var inputs = document.getElementsByTagName("input"),
                i,
                len,
                value = "Etiqueta",
                achou = false;


            for (i = 0; i < inputs.length; i++) {
                if (inputs[i].type == 'checkbox')
                    inputs[i].checked = true;
            }
            for (i = 0, len = inputs.length; i < len; i++) {
                if (inputs[i].value === value) {
                    inputs[i].click();
                    achou = true;
                    break;
                }
            }

            if (!achou)
                location.reload();
        } catch (error) {
            location.reload();
        }
    }, intarvalo);

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
})();