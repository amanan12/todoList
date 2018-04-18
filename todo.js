$(".clearAll").hide();
$(".container").hide();

var list = [];

$(".clearAll").click(function(){
  list = [];
  updateList();
  $(".clearAll").hide();
});

function setName(){
  
  var getName = $(".red1").val();
  
  $(".name").hide();
  
  $(".setName").html(getName);
  
  $(".container").show();
  
}

$("input").keydown(function(e){
  if(e.which === 13){
    setName();
    getValue();
    if(list.length === 1){
      $(".clearAll").show();
    }
  }
});

function getValue(){
  
  $("ul").html("");
  
  var todo = $(".red").val(); 
  
  if(todo === ""){
    //alert("Type Something!!!");
  } else {
    list.push(todo);
  }
  
  console.log(list);
  
  updateList();
  
  $(".red").val(""); 
  
}

function updateUI(target, variable){
  $(target).html(variable);
}

function clickHTML(value){
  return  'onclick="' + "clearList('" + value + "')" + '"';
}

function updateList(){
  
  var str = "";
  
  list.forEach(function(values){
    str += "<div class='seperate'" + clickHTML( list[ list.indexOf(values) ] ) + "><li class='values'>" + values + "</li></div>";
  });
  
  updateUI(".ul", str);
  
}

function clearList(val){
  $(".title").val(val);
  $(".hide").val(val);
  $("#myModal").modal("toggle");
}

$("#btn1").click(function(){
  var a = $(".title").val();
  var b = list.indexOf(a);
  console.log(b);
  list.splice(b, 1);
  updateList();
  $(".clearAll").hide();
  $("#myModal").modal("toggle");
});

$(".edit").click(function(){
  var a = $(".hide").val();
  var b = $(".title").val();
  var c = list.indexOf(a);
  list[c] = b;
  updateList();
  $("#myModal").modal("toggle");
});