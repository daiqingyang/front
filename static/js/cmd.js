$(document).ready(function() {
      $(".submit").click(function(e) {
        e.preventDefault();
        var obj = $(this);
        var host = $(".host").val();
        var cmd = $(".cmd").val();
        $.ajax({
          url : "/task",
          type : "POST",
          data : {host:host,cmd:cmd},
          dataType : "text",
          success : function(result) {
              $(".result").text("ok")  
            }
          },
          error:function(msg){
            $(".notice").html('Error:'+msg);
          }
        })
      })
    });
  </script>
