        var box1=document.getElementById("num1")
        var box2=document.getElementById("num2")
        var add=document.getElementById("result")

        

        function a(){
            var box1value= Number(box1.value)
        var box2value= Number(box2.value)
        var total=box1value+box2value
            result.textContent=total
        }
        function b(){
            var box1value= Number(box1.value)
        var box2value= Number(box2.value)
        var total=box1value-box2value
            result.textContent=total
        }
        function c(){
            var box1value= Number(box1.value)
        var box2value= Number(box2.value)
        var total=box1value/box2value
           
            if(box1value==0){
                result.textContent="Not possible"
        }
        else{
            result.textContent=total
        }
            
        }
        function d(){
            var box1value= Number(box1.value)
        var box2value= Number(box2.value)
        var total=box1value*box2value
            result.textContent=total
        }