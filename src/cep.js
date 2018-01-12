// LIBRARIES: jQuery, Lodash, Underscore, React, Moment...
//FRAMEWORKS: Angular, Vue, BackBone...

$(document).ready(function() {
        var onlyNumbers = function(e) {
                //console.log(e.target.value);
                //console.log(this.value);
                //console.log($(e.target).val());
                //console.log($(this.value).val());

                e.target.value = e.target.value.replace(/\D/g,'');
        };
        var getAddressError = function() {
        console.error('erro!');
        };

        var getAddressSuccess = function(data) {
                //console.info('success!',data);
                $.each(data,function(key,value){
                        console.log(key,value);
                        $(`#${key}`).val(value);
                });

        };

        var getAddress = function(e) {
                var cep = this.value;
                if (cep.length !== 8) {
                        $(this).addClass('error').focus();
                }else{
                        $(this).removeClass('error');
                        $.ajax({
                                url:`https://viacep.com.br/ws/${cep}/json/`,
                                dataType: 'json',
                                error: getAddressError,
                                success: getAddressSuccess
                        });
                };
        };

//mapeandoEventos
$('#cep')
.on('input',onlyNumbers)
.on('focusout',getAddress);




})
