// validacao geral
function validar() {
  var senha = FrmLoginUser.txtSenha.value;
  var repSenha=FrmLoginUser.txtSenhaRep.value;

  if (senha != repSenha) {
    alert("senhas diferentes");
    FrmLoginUser.txtSenha.focus();
    FrmLoginUser.txtSenhaRep.focus();

    return false;
  }


}

// validacao campo nome senha
$("input[name='txtSenha']").on('blur', function(){
  var senha1 = FrmLoginUser.txtSenha.value;
  var senha2 = nomeUserVal.length;

  if (senha1 == "" || senha2 < 8) {
      $('#senha1').removeClass('colorGreen');
      $('#senha1').addClass('colorRed');

  }else {
      $('#senha1').removeClass('colorRed');
      $('#senha1').addClass('colorGreen');

  }

  });

  // validacao campo repetir senha
  $("input[name='txtSenhaRep']").on('blur', function(){
    var senhaRep1 = FrmLoginUser.txtSenhaRep.value;


    if (senhaRep1 == "") {
        $('#senhaRep1').removeClass('colorGreen');
        $('#senhaRep1').addClass('colorRed');

    }else {
        $('#senhaRep1').removeClass('colorRed');
        $('#senhaRep1').addClass('colorGreen');
        $('#btnLogar').removeClass('displayNone');
        $('#btnLogar').displayBlock('displayNone');

    }

    });

// validacao campo nome completo
$("input[name='txtNomeCompleto']").on('blur', function(){
  var nomeUserVal = FrmLoginUser.txtNomeCompleto.value;
  var total = nomeUserVal.length;
  //alert(total);
  if (nomeUserVal == "" || total < 10) {
      $('#nomeUserVal').removeClass('colorGreen');
      $('#nomeUserVal').addClass('colorRed');

  }else {
      $('#nomeUserVal').removeClass('colorRed');
      $('#nomeUserVal').addClass('colorGreen');

  }

  });




// validacao Cpf
$("input[name='txtCpf']").on('blur', function(){
  var CpfUser = $(this).val();
  var cpf = FrmLoginUser.txtCpf.value;
$.get('router.php?controller=User&modo=validarCpf&CpfUser='+CpfUser,function(data){
    //$('#resultado').html(data);
    //alert(data);


    if (data == 1||cpf=="" ) {
      $('#cpf').removeClass('colorGreen');
      $('#cpf').addClass('colorRed');

    }else {
      $('#cpf').removeClass('colorRed');
      $('#cpf').addClass('colorGreen');


    }

  });
  });

// validacao email
$("input[name='txtEmail']").on('blur', function(){
  var emailUser = $(this).val();
  var email = FrmLoginUser.txtEmail.value;
  $.get('router.php?controller=User&modo=validarEmail&emailUser='+emailUser,function(data){
    //$('#resultado').html(data);
    //alert(data);
    if (data == 1 || email=="") {
      $('#txtEmail').removeClass('colorGreen');
      $('#txtEmail').addClass('colorRed');

    }else {
      $('#txtEmail').removeClass('colorRed');
      $('#txtEmail').addClass('colorGreen');


    }

  });
  });

  // validacao user

  $("input[name='txtNomeUser']").on('blur', function(){
    var nomeUser = $(this).val();
    var user = FrmLoginUser.txtNomeUser.value;
    $.get('router.php?controller=User&modo=validarUser&nomeUser='+nomeUser,function(data){
      //$('#resultado').html(data);
      //alert(data);
      if (data == 1 || user=="") {
        $('#nomeUserTXT').removeClass('colorGreen');
        $('#nomeUserTXT').addClass('colorRed');

      }else {
        $('#nomeUserTXT').removeClass('colorRed');
        $('#nomeUserTXT').addClass('colorGreen');


      }

    });
    });
