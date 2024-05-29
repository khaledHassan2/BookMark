var bookMarkName = document.getElementById('name');
var bookMarkUrl = document.getElementById('url');
var windowalert = document.getElementById('window');


var bookMarkList;
if (localStorage.getItem('bookMark')== null)
{
    bookMarkList = [];
}
else
{
    bookMarkList = JSON.parse(localStorage.getItem('bookMark'));
    displayBookMark()
}

function bookMark()
{
    var bookMarkitem = {
        name:bookMarkName.value,
        url:bookMarkUrl.value
    }
    if(bookMarkName.classList.contains('is-valid')&& bookMarkUrl.classList.contains('is-valid') )
    {
    bookMarkList.push(bookMarkitem);
    clearBookMark()
    localStorage.setItem('bookMark',JSON.stringify(bookMarkList));
    displayBookMark()}
    else
    {
        windowalert.classList.remove('d-none')
    }
}; 
function deletBookMark(index){
    bookMarkList.splice(index,1)
    localStorage.setItem('bookMark',JSON.stringify(bookMarkList));
    displayBookMark()

}
function displayBookMark(){
    var cartona=``;
    for(var i=0;i<bookMarkList.length;i++){
        console.log('khkajsjj')
        cartona += `<tr>
        <td>${i}</td>
        <td>${bookMarkList[i].name}</td>
        <td><a target="_blank" href="${bookMarkList[i].url}"><button class="btn btn-outline-success"><i class="fa-regular fa-eye pe-1"></i>Visit</button></a></td>
        <td><button onclick="deletBookMark(${i})" class="btn btn-outline-danger"><i class="fa-regular fa-trash-can pe-1"></i>Delete</button></td>
    </tr>`;
    }
    document.getElementById('tbody').innerHTML=cartona;
}
function clearBookMark(){
      var bookMarkite = {
        name:bookMarkName.value = null,
        url:bookMarkUrl.value = null
    }
    bookMarkName.classList.remove('is-valid')
    bookMarkUrl.classList.remove('is-valid')
}
function validation(element){
    var regex={
        name : /^\w{2,150}$/,
        url : /^(http:\/\/|https:\/\/|www\.).{1,200}?$/
    };
    if(regex[element.id].test(element.value) ){
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
    }
    else
    {
        element.classList.add('is-invalid')
        element.classList.remove('is-valid')

    }
}
function closeWindow(){
    windowalert.classList.add('d-none')
}