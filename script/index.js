var people = [];


function showPersonInfo(personName, id){
   
   
    const person = people.filter(p => p.name == personName);
    document.getElementById("personName").innerHTML = person[0].name;
    document.getElementById("personGender").innerHTML = person[0].gender;
    document.getElementById("personHeight").innerHTML = person[0].height;
    document.getElementById("myModal").classList.remove("toggleStar");
    document.getElementById("charImg").innerHTML = `<img src="img/starWar${id}.jpeg">`;
   
}
function main() {

    let baseUrl = 'https://swapi.dev/api/people';
    fetch(baseUrl)
        .then(response => {
            if(!response.ok){
                throw Error('ERROR')
            }
            return response.json()
        })
        .then(data => { 
            console.log(data.results)
            people = data.results;
            let html = people.map((people,index) => {
                return `
                
                <div class="buttonWrapper">
                    <button type="button" onclick="showPersonInfo('${people.name}',${index++})">${people.name}</button>                       
                </div>
                    `
            }).join('')
            html += `<div id="myModal" class="shiftRight toggleStar">
            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close" id="close">&times;</span>
                    <h3>Star War Character</h3>
                </div>
                <div class="modal-body">
                    <p>Name: <span id="personName"></span></p>
                    <p>Gender: <span id="personGender"></span></p>
                    <p>Height: <span id="personHeight"></span></p>
                </div>
            </div>
            <div id="charImg"></div>
            </div>

            `
            document
            .querySelector("#app")
            .insertAdjacentHTML("afterbegin", html);
            document.getElementById("close").addEventListener('click', () => {
                console.log("close");
                document.getElementById("myModal").classList.add("toggleStar");
            })
            console.log(imageId);
    
        }).catch(error => {
            console.log(error)
        })            
}

main();
module.exports = { main }