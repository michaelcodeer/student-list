var list_of_students_aray=[]
function submit(){
    var names_with_pefix_aray=[]
    for (var conter=1; conter<=4; conter=conter+1){
        var name=document.getElementById("name_of_the_student_"+conter).value 
        console.log(name)
        list_of_students_aray.push(name)
    }
    console.log(list_of_students_aray)
    var len=list_of_students_aray.length
    console.log(len)
    for (conter=0; conter<len; conter++){
        names_with_pefix_aray.push("<h4>NAME - "+list_of_students_aray[conter]+"</h4>");
        console.log(names_with_pefix_aray)
    }
document.getElementById("display_name_with_commas").innerHTML=names_with_pefix_aray
var array_with_no_camma=names_with_pefix_aray.join(" ")
console.log(array_with_no_camma)
document.getElementById("display_name_without_commas").innerHTML=array_with_no_camma
document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    list_of_students_aray.sort()
    console.log(list_of_students_aray)
    var names_with_pefix_aray=[]
    var len=list_of_students_aray.length
    console.log(len)
    for (conter=0; conter<len; conter++){
        names_with_pefix_aray.push("<h4>NAME - "+list_of_students_aray[conter]+"</h4>");
        console.log(names_with_pefix_aray)
    }
document.getElementById("display_name_with_commas").innerHTML=names_with_pefix_aray
var array_with_no_camma=names_with_pefix_aray.join(" ")
console.log(array_with_no_camma)
document.getElementById("display_name_without_commas").innerHTML=array_with_no_camma
}