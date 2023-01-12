/** 
function main() {}

    let baseUrl = 'https://swapi.dev/api/people';
    //let localImg = '/Users/decagon/Downloads/week-1-node-sq012-peak2-main/img';

    // fetch(localImg)
    //     .then(response => {
    //         if(!response.ok){
    //             throw Error('ERROR')
    //         }
    //         return response.json()
    //     })
    //     .then(data => { 
    //         console.log(data.results)
    //         const html = data.results.map(people => {
    //             return `
    //             <div class="people">
    //                 <div id="divImg">
    //                     <img src="/img/${people.name}">
    //                 </div>
    //                 <p>Name: ${people.name}</p>
    //                 <p>Gender: ${people.gender}</p>
    //                 <p>Height: ${people.height}</p>
    //             </div>
    //                 `
    //         }).join('')
    //         console.log(html)

    //         document
    //         .querySelector("#app")
    //         .insertAdjacentHTML("afterbegin", html)


    //         //document.querySelector("#app").innerHTML = data.results[3]['name']
    //     })





    fetch(baseUrl)
        .then(response => {
            if(!response.ok){
                throw Error('ERROR')
            }
            return response.json()
        })
        .then(data => { 
            console.log(data.results)
            const html = data.results.map(people => {
                return `
                <div class="people">
                    <div class="divImg">
                        <img src="/img/${people.name}">
                    </div>
                    <div class="divText">
                        <p>Name: ${people.name}</p>
                        <p>Gender: ${people.gender}</p>
                        <p>Height: ${people.height}</p>
                    </div>
                </div>
                    `
            }).join('')
            console.log(html)

            document
            .querySelector("#app")
            .insertAdjacentHTML("afterbegin", html)


            //document.querySelector("#app").innerHTML = data.results[3]['name']
        }).catch(error => {
        console.log(error)
        })
    
module.exports = { main }



//function postData() {}

//     let baseUrl = 'https://swapi.dev/api/people';
//     //let person = document.getElementById("app").innerHTML;
//     fetch(baseUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: {

//         }
//     })
//         .then(response => {
//             if(!response.ok){
//                 throw Error('ERROR')
//             }
//             return response.json()
//         })
//         .then(data => {
//             console.log(data)
//         }) 
//         .catch(error => {
//         console.log(error)
//         })
    
// module.exports = { postData }


 
<div class="">
                    <div class="buttonWrapper">
                        <button type="button" id="myBtn">${people.name}</button>
                       
                        <div id="myModal" class="modal">
                        <!-- Modal content -->
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="close">&times;</span>
                                    <h2>Star War Information</h2>
                                </div>
                                <div class="modal-body divText">
                                    <p>Name: ${people.name}</p>
                                    <p>Gender: ${people.gender}</p>
                                    <p>Height: ${people.height}</p>
                                </div>
                                <div class="modal-footer">
                                    <h3>Modal Footer</h3>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>



                 
                       
                   
                    





<button id="myBtn">Open Modal</button>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>Modal Header</h2>
    </div>
    <div class="modal-body divText">
    <p>Name: ${people.name}</p>
    <p>Gender: ${people.gender}</p>
    <p>Height: ${people.height}</p>
    </div>
    <div class="modal-footer">
      <h3>Modal Footer</h3>
    </div>
  </div>

</div>








<button type="button" id="myBtn">${people.name}</button>
                       
                       <div id="myModal" class="modal">
                           <!-- Modal content -->
                           <div class="modal-content">
                                           <div class="modal-header">
                                               <span class="close">&times;</span>
                                               <h2>Star War Information</h2>
                                           </div>
                                           <div class="modal-body divText">
                                               <p>Name: ${people.name}</p>
                                               <p>Gender: ${people.gender}</p>
                                               <p>Height: ${people.height}</p>
                                           </div>
                                           <div class="modal-footer">
                                               <h3>Modal Footer</h3>
                                           </div>
                           </div>

                       </div>












*/