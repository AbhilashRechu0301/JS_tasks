var httpRequest = new XMLHttpRequest();
        
       
    // 1
    httpRequest.open("get", "https://fakestoreapi.com/products");

    // 2
    httpRequest.send();

    httpRequest.onreadystatechange = function () {
        console.log(httpRequest.readyState);
        if (httpRequest.readyState == 4) {
            var data = httpRequest.responseText;
            var obj = JSON.parse(data)
            
            
            
          

        }
        
    };

    /*function loadDoc() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
        document.getElementById("demo").innerHTML = this.responseText;
        }
        xhttp.open("GET", "https://fakestoreapi.com/products");
        xhttp.send();
        <div id="demo">
    <p>Let AJAX change this text.</p>
    <button type="button" onclick="loadDoc()">Change Content</button>
    </div>
    xhttp.onload = function() {
        document.getElementById("demo").innerHTML = this.responseText;
         }
        }*/
        