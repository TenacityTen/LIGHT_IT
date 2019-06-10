
    // ---START---
    	document.write(createPerson());

    // func write
    function createPerson(){
        var ren = ``;
        for(let i = 0;i<10;i++)
            ren+=`
        <!-- ____________________BLOCK____________________ -->
        <div class="BLOCK" id="${i}">
            
            <img class="img" id="img${i}">

            <table class="tabl1" >
                <tr>
                    <td id="Artist${i}" style="width: 120px;">Artist</td>
                    <td id="Track${i}" style="width: 120px;">Track</td>
                    <td id="Collection${i}" style="width: 120px;">Collection</td>
                    <td id="Genre${i}" style="width: 120px;">Genre</td>
                </tr>
            </table>

            <a href="#box" onclick="openbox('box${i}',${i}); return false;">
            	<img src="img/plus.png" class="button" id="Button${i}">
            </a>

            <!-- ____________________BOX____________________ -->
            <div id="box${i}" class="BOX">

            <table  class="NameTrack">
                <tr>
                    <td><b id="boxFirst${i}"></b></td>
                    <td><img src="img/music-note.png" class="boxImgGender" height="30" width="30"></td>
                </tr>
            </table>
            

                <table class="tabl2">
                    <tr>
                        <td id="boxCollection${i}"></td>
                        <td id="boxTrack_duration${i}"></td>

                    </tr>
                    <tr>
                        <td id="boxTrack_Count${i}"></td>
                        <td id="boxTrack_Price${i}"></td>
                        
                    </tr>
                    <tr>
                        <td id="boxPrice${i}"></td>
                    </tr>
                </table>

            </div>
            <!-- ____________________END_BOX____________________ -->

        </div>
        <!-- ____________________END_BLOCK____________________ -->`;

        return ren;
    }