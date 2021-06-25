var inc=document.getElementsByClassName('cart-qty-plus');
var inp= document.getElementsByClassName('qty form-control');
var x=document.getElementsByClassName('cart-qty-minus');
var y=document.getElementsByClassName('price form-control');
var z=document.getElementsByClassName('amount');
var rem=document.getElementsByClassName('Remove button');


var sum = parseInt(document.getElementById('total').innerText,10);  
sum = 0;
//adjusting minus button
for (let i=0;i<x.length;i++)
{
    
    x[i].addEventListener("click", function()
    {
        inp[i].value--;
        z[i].innerHTML = inp[i].value * y[i].value;
        if (inp[i].value==0){
            x[i].setAttribute('disabled','disabled');
        }
    sum -= parseInt(y[i].value,10);

    document.getElementById('total').innerText=sum;
    })
    
}

//adjust plus button
for (let i=0;i<inc.length;i++)
{
    
    inc[i].addEventListener('click', function(){
        inp[i].value++;
        z[i].innerHTML = inp[i].value * y[i].value;
        
        if(inp[i].value>0){x[i].removeAttribute('disabled')}
    
    sum += parseInt(y[i].value,10);

    document.getElementById('total').innerText=sum;
    });
    
}


//Like button
var like = document.getElementsByClassName('fa fa-heart');

for (let i of like){
    i.addEventListener('click',function(){
    i.classList.toggle('mystyle');
})}

//Remove Button
for (let i=0;i<rem.length;i++) {
    rem[i].addEventListener('click', function(){
        var r = confirm("Are you sure?");
        if (r === true) {
            const parent = rem[i].closest(".item");
            while (parent.firstChild) {
                parent.firstChild.remove();
            }
            
        }
    })
}


