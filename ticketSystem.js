/*<li class="ticket">
        <p class="id">Ticket ID:</p>
        <p class="name">Ticket Name:</p>
        <input type="number" class="number" min="0"> 
        <input type="text" class="centerInput" >
        <p class="besch">Beschreibung:</p>
        <textarea name="" id="" cols="50" rows="4" class="beschreibung" maxlength="160"></textarea>
        <input type="submit" value="Speichern" onclick="alert('Gespeichert')" class="saveBtn">
        
    
    </li>
    <br>*/



    function addNew(){
        document.getElementById("add_new").innerHTML += '<li class="ticket"> <p class="id">Ticket ID:</p><p class="name">Ticket Name:</p><input type="number" class="number" min="0" id=""> <input type="text" class="centerInput" ><p class="besch">Beschreibung:</p><textarea name="" id="" cols="50" rows="4" class="beschreibung" maxlength="160"></textarea><input type="button" value="Speichern" onclick="alert("Gespeichert")" class="saveBtn"></li><br>';
    
    };