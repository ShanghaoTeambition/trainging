function calc()
{
    if(document.getElementById("beforetax").value<document.getElementById("celling").value)
    {
        document.getElementById("result").innerText=document.getElementById("beforetax").value*0.7;
    }
    else
    {
        document.getElementById("result").value=5;
        //555555
    }
}
