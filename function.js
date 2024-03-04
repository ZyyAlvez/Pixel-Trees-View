document.querySelector("#view").onclick = () => view(document.querySelector("#input").value);
document.querySelector("#random").onclick = () => random();
document.querySelector("#delete_all").onclick = () => {
    document.querySelector("#main").innerHTML = "";
    frame_count = 0
}


function random(){
    view((Math.floor(Math.random() * 5000)) + 1);
}

let frame_count = 0
function view(landNumber){
    if (landNumber != "" && Number(landNumber) >= 1 && Number(landNumber) <= 5000){
        frame_count++;
        const firstPart = document.createElement("div");
        firstPart.id = "land_frame" + String(frame_count);
        firstPart.className = "land_frame";
        document.getElementById("main").append(firstPart);
        console.log("done")


            const secondPart_1 = document.createElement("iframe");
            secondPart_1.id = "land" + String(frame_count);
            secondPart_1.className = "land";
            secondPart_1.src = "https://play.pixels.xyz/pixels/share/" + landNumber;
            document.getElementById(firstPart.id).append(secondPart_1);

            icon_x = document.createElement("i");
            icon_x.className = "fa-solid fa-xmark fa-2x";
            icon_x.id = "icon" + String(frame_count);
            document.getElementById(firstPart.id).append(icon_x);

            icon_x.addEventListener("click", () => {
                document.getElementById("main").removeChild(firstPart)
                console.log(firstPart)
            })
            

            const secondPart_2 = document.createElement("div");
            secondPart_2.id = "bottom_options" + String(frame_count);
            secondPart_2.className = "bottom_options";
            document.getElementById(firstPart.id).append(secondPart_2);
            
                const thirdPart_1 = document.createElement("div");
                thirdPart_1.id = "land_name" + String(frame_count);
                thirdPart_1.className = "land_name";
                thirdPart_1.textContent = "Land Number: " + landNumber;
                document.getElementById(secondPart_2.id).append(thirdPart_1);

                const thirdPart_2 = document.createElement("button");
                thirdPart_2.id = "previous" + String(frame_count);
                thirdPart_2.className = "previous";
                thirdPart_2.textContent = "Previous";
                thirdPart_2.onclick = function(){
                    view(String(Number(landNumber) - 1))
                }
                document.getElementById(secondPart_2.id).append(thirdPart_2);

                const thirdPart_3 = document.createElement("button");
                thirdPart_3.id = "next" + String(frame_count);
                thirdPart_3.className = "next";
                thirdPart_3.textContent = "Next";
                thirdPart_3.onclick = function(){
                    view(String(Number(landNumber) + 1))
                }
                document.getElementById(secondPart_2.id).append(thirdPart_3);
    }
}





