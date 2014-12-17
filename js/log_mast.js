
//-------------------------Login---------------------------------------
$(document).ready(function(){
  $('#lbtn').on('click',function(e){
    e.preventDefault();
    e.stopPropagation();

   var user_name = $('#user_name').val();
   var user_pass = $('#user_pass').val();
   var user_category = $('#user_category').val();


   $.ajax({
      url: 'php/log_mast.php',
      type: 'post',
      data: { 'user_name': user_name, 'user_pass':user_pass, 'user_category':user_category },
      success: function(data) {
        
        if(data === "Login Successful")
        {
          if(user_category === "Administrator"){


          sweetAlert("Message",data+"  Page is Under Construction","success");
          //window.location.replace('');
        }
        else if (user_category === "Doctor") {
          sweetAlert("Message",data+"  Page is Under Construction","success","success");
          //window.location.replace(''); 
        }

      }
       
        else
        {
          sweetAlert("Message",data,"error");
          $('#uname').val('');
          $('#upass').val('');
        }
      
      },
      cache: false
    }); // end ajax call
   
   });
});